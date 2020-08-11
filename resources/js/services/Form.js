import Errors from './Errors'
import store from '../store'

/**
 * [Event]
 * Checks for updates to form.
 * 
 */
let onUpdate = _.debounce((obj) => {
	const hasChanges = ! _.isEqual(obj.orig, obj.data())

	if (obj.blockNav && obj.hasChanges != hasChanges)
		store.commit('form/setPreventNavigation', hasChanges)

	obj.hasChanges = hasChanges
}, 250)

/**
 * Form object.
 * 
 */
export default class Form {
	constructor(data, blockNav = false) {
		this.blockNav = blockNav
		this.orig     = data
        this.errors   = new Errors()
        this.hasChanges = false

        // --
        let form = this
        let handler = {
            set(obj, key, val, rcvr) {
                Reflect.set(...arguments)
                onUpdate(form)
                return true
            }
        }

        _.each(data, (v, k) =>
            this[k] = this.proxify(v, handler))


		return new Proxy(this, handler)
	}

    proxify(data, handler = {}) {
        if (_.isArray(data))
            return _.map(data, (v, k) => this.proxify(v, handler))
        
        else if (_.isObject(data))
            return new Proxy(_.mapValues(data, (v, k) => {
                return this.proxify(v, handler)
            }), handler)
            
        return data
    }

	data() {
		return _.mapValues(this.orig, (v, k) => this[k])
	}

	formdata(additional = {}) {
        let data = new FormData()
        let json = {}

		_.each(this.data(), (v, k) => {
			if (v instanceof FileList)
				_.each(v, (val) => data.append(`${k}[]`, val))
			else if (v instanceof File)
                data.append(k, v)
            else
                json[k] = v
		})

		// non-file data will be decoded on back-end..
        if (! _.isEmpty(json))
            data.append('_json', JSON.stringify(json))

        // add additional data..
        _.each(additional, (v, k) => data.append(k, v))

        return data
    }

	post(url) {
        return this.submit('post', url, this.formdata())
    }

    patch(url) {
        return this.submit('post', url, this.formdata({'_method': 'PATCH'}))
    }

    put(url) {
        return this.submit('post', url, this.formdata({'_method': 'PUT'}))
    }

    delete(url) {
        return this.submit('post', url, this.formdata({'_method': 'DELETE'}))
    }

    submit(rType, url, data) {
        return new Promise((resolve, reject) => {
            axios[rType](url, data)
                .then(response => {
                    this.onSuccess(response.data)
                    
                    resolve(response.data)
                })
                .catch(errors => {
                    this.onFailure(errors.response.data)

                    reject(errors.response.data)
                })
        })
    }

    onSuccess(data) {
    	this.orig = _.cloneDeep(this.data())
    	this.hasChanges = false
    	this.errors.clear()

		if (this.blockNav)
			store.commit('form/setPreventNavigation', false)
    }

    onFailure(errors) {
        this.errors.record(errors)
    }

    onFirstChange() {
    	// DEPRECATED
        // if (this.blockNav)
        //     store.commit('form/setPreventNavigation', true)
    }

    resetChangeListener() {
    	// DEPRECATED
        // if (this.blockNav)
        //     store.commit('form/setPreventNavigation', false)
    }
}
