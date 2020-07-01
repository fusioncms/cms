import Errors from './Errors'
import store from '../store'

export default class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data, preventNavigation = false) {
        this.errors = new Errors
        this.originalData = data
        this.hasChanges = false
        this.preventNavigation = preventNavigation

        let form = this

        this.__data = {};

        for (let field in data) {
            this[field] = data[field]

            form.__data[field] = form[field];
            (function(field_name) {
                Object.defineProperty (form, field_name, {
                    get: function () {
                        return form.__data[field_name];
                    },
                    set: function (new_value) {
                        form.__data[field_name] = new_value;

                        if (!form.hasChanges) {
                            form.onFirstChange()
                        }
                    }
                });
            })(field);
        }

    }

    set(field, value) {
        this.data[field] = value
    }

    get(field) {
        return this.data[field]
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = this.originalData[field]
        }

        this.errors.clear()
    }

    data() {
        let data = {}

        for (let property in this.originalData)
            data[property] = this[property]

        return data
    }

    formdata(additional = {}) {
        let data = new FormData()
        let json = {}

        // add form data..
        for (let key in this.originalData)
            if (this[key] instanceof FileList)
                _.each(this[key], (val) => data.append(`${key}[]`, val))
            else if (this[key] instanceof File)
                data.append(key, val)
            else
                json[key] = this[key]

        // non-file data will be decoded on back-end..
        if (! _.isEmpty(json))
            data.append('_json', JSON.stringify(json))

        // add additional data..
        _.each(additional, (v, k) => data.append(k, v))

        return data
    }

    /**
    * Submit a POST request.
    *
    * @param {string} url
    */
    post(url) {
        return this.submit('post', url, this.formdata())
    }

    /**
     * Submit a PATCH request.
     *
     * @param {string} url
     */
    patch(url) {
        return this.submit('post', url, this.formdata({'_method': 'PATCH'}))
    }

    /**
     * Submit a PUT request.
     *
     * @param {string} url
     */
    put(url) {
        return this.submit('post', url, this.formdata({'_method': 'PUT'}))
    }

    /**
     * Submit a DELETE request.
     *
     * @param {string} url
     */
    delete(url) {
        return this.submit('post', url, this.formdata({'_method': 'DELETE'}))
    }

    /**
     * Submit the form by the given request type and url.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url, data) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, data)
                .then(response => {
                    this.onSuccess(response.data)
                    store.commit('form/setPreventNavigation', false)
                    resolve(response.data)
                })
                .catch(errors => {
                    this.onFailure(errors.response.data)

                    reject(errors.response.data)
                })
        })
    }

    /**
     * Handle the on success promise event.
     *
     * @param {object} data
     */
    onSuccess(data) {
        // We'll leave it up to the implementation on
        // if they want the form reset afterwards.
        //
        // this.reset()
    }

    /**
     * Handle the on failure promise event.
     *
     * @param {object} errors
     */
    onFailure(errors) {
        this.errors.record(errors)
    }

    /**
     * Handle the first input event. Prevents navigating
     * away from the form if the preventNavigation
     * setting has been enabled.
     *
     * @param {object} data
     */
    onFirstChange(data) {
        this.hasChanges = true
        if (this.preventNavigation) {
            store.commit('form/setPreventNavigation', true)
        }
    }

     /**
     * Helper method to reset the form to appear as if
     * it had no changes.
     *
     * @param {object} data
     */
    resetChangeListener(data) {
        this.hasChanges = false
        if (this.preventNavigation) {
            store.commit('form/setPreventNavigation', false)
        }
    }
}