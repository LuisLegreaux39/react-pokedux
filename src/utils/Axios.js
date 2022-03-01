import Axios from 'axios';

export default class AXIOS_SERVICE_CLASS {
    constructor(_initialHeaders = {},createcriteria = {}) {
        this.service = Axios.create({
            ...createcriteria,
            headers: {
                ..._initialHeaders,
            }
        });
        this.options = {
            headers: {
            }
        };

    }
    /**
     * Raw axios options wrapper in case
     * we need to use it in a async | await context
     */
    pure = ()=>({
        get:(url)=>{
            return this.service.get(url, this.options);
        }
    })

    setOptions = (obj) => {
        return this.options.headers = {
            ...this.options.headers,
            ...obj
        }
    }
    /**METHODS */

    /**Error Handling */
    handleError = (Error, ...rest) => {
        console.error(` On the ${this.constructor.name} ==> ${Error} ==> `)
        console.error(rest)
    }

    /**Request Methods */
    get = (path, callback) => {
        try {
            let url = String(path);
            return this.service.get(url, this.options)
                .then(response => callback(response.status, response.data))
                .catch(({ response }) => {
                    try {
                        callback(response.status, response)
                    } catch (error) {
                        return this.handleError(error, path, callback)
                    }
                })
        } catch (error) {
            console.warn(` On the ${this.constructor.name} ==> ${error}  `)
        }

    }

    delete = (path, payload = {}, callback) => {
        return this.service({
            method: 'DELETE',
            url: path,
            data: payload,
        }, this.options)
            .then((response) =>
                callback(response.status, response.response)
            )
            .catch(({ response }) => {
                try {
                    callback(response.status, response)
                } catch (error) {
                    return this.handleError(error, path, callback)
                }
            })
    }
    post = (path, payload = {}, callback) => {
        return this.service({
            method: 'POST',
            url: path,
            data: payload,
        }, this.options)
            .then((response) =>{
                callback(response.status, response)
            })
            .catch(({ response }) => {
                try {
                    callback(response.status, response)
                } catch (error) {
                    return this.handleError(error, path, callback)
                }
            })
    }

    put(path, payload = {}, callback) {
        return this.service.request({
            method: 'PUT',
            url: path,
            responseType: 'json',
            data: payload
        }).then((response) => {
            return callback(response.status, response.data)
        }).catch(({ response }) => {
            try {
                callback(response.status, response)
            } catch (error) {
                return this.handleError(error, path, callback)
            }
        });
    }

    static setCommonHeaders = (obj) => {
        return Axios.defaults.headers.common = {
            ...Axios.defaults.headers.common,
            ...obj,
        
        }
    }
    static setHeaders = (obj) => {
        return Axios.defaults.headers = {
            ...Axios.defaults.headers,
            ...obj,
        }
    }


}