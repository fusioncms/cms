import Errors from './Errors'
import store from '../store'

/**
 * [Event]
 * Checks for updates to form.
 * 
 */
let onUpdate = _.debounce((obj) => {
	const hasChanges = ! _.isEqual(obj.orig, obj.data())

	if (obj.preventNav && obj.hasChanges != hasChanges)
		store.commit('form/setPreventNavigation', hasChanges)

	obj.hasChanges = hasChanges
}, 500)

export default class Form {
	constructor(data, preventNav = false) {
		this.errors     = new Errors()
		this.hasChanges = false
		this.preventNav = preventNav
		this.orig       = Object.assign({}, data)
		
		_.each(data, (v, k) => this[k] = _.cloneDeep(v))

		let form    = this
		let handler = {
			get(obj, key, rcvr) {
				const descr = Reflect.getOwnPropertyDescriptor(obj, key)
				const value = Reflect.get(obj, key, rcvr)

				if (descr && !descr.writable && !descr.configurable)
					return value

				try {
					return new Proxy(obj[key], handler)
				} catch (err) {
					return value
				}
			},

			set(obj, key, val, rcvr) {
				Reflect.set(obj, key, val, rcvr);
				
				onUpdate(form)

				return true
			}
		}

		return new Proxy(this, handler)
	}

	data() {
		let data = {}
		
		_.each(this.orig, (v, k) => data[k] = this[k])
		
		return data
	}

	formdata(additional = {}) {
        let data = new FormData()
        let json = {}

		_.each(this.data(), (v, k) => {
			if (this[k] instanceof FileList)
				_.each(this[k], (val) => data.append(`${k}[]`, val))
			else if (this[k] instanceof File)
                data.append(k, v)
            else
                json[k] = this[k]
		})

		// non-file data will be decoded on back-end..
        if (! _.isEmpty(json))
            data.append('_json', JSON.stringify(json))

        // add additional data..
        _.each(additional, (v, k) => data.append(k, v))

        return data
    }

	reset() {
		_.each(this.orig, (v, k) => this[k] = _.cloneDeep(v))
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
    	this.hasChanges = false
    	this.orig       = Object.assign({}, this.data())
    	this.errors.clear()

		if (this.preventNav)
			store.commit('form/setPreventNavigation', false)
    }

    onFailure(errors) {
        this.errors.record(errors)
    }

    onFirstChange() {
    	// DEPRECATED
        // if (this.preventNav)
        //     store.commit('form/setPreventNavigation', true)
    }

    resetChangeListener() {
    	// DEPRECATED
        // if (this.preventNav)
        //     store.commit('form/setPreventNavigation', false)
    }
}
