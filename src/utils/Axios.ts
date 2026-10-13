import Axios, { AxiosInstance } from 'axios';

type GenericFnArgs = {
    path: string,
    callback?: (status: number, data: any) => void,
    handleError?: (error: unknown) => void
}


export class AxiosServiceClass {

    private service: AxiosInstance;
    private options: Record<string, unknown> = {};

    constructor(_initialHeaders = {}, createcriteria = {}) {
        this.service = Axios.create({
            ...createcriteria,
            headers: {
                ..._initialHeaders,
            }
        });
    }

    getService = () => this.service;

    /**Request Methods */
    getRequest = async<T extends unknown>({ path, callback, handleError }: GenericFnArgs):Promise<T | undefined> => {
        try {
            const response = await this.service.get(path);
            callback && callback(response.status, response.data);
            return response.data;
        } catch (error) {
            console.error(error)
            handleError && handleError(error);
        return undefined;
    }

    // delete = (path, payload = {}, callback) => {
    //     return this.service({
    //         method: 'DELETE',
    //         url: path,
    //         data: payload,
    //     }, this.options)
    //         .then((response) =>
    //             callback(response.status, response.response)
    //         )
    //         .catch(({ response }) => {
    //             try {
    //                 callback(response.status, response)
    //             } catch (error) {
    //                 return this.handleError(error, path, callback)
    //             }
    //         })
    // }
    // post = (path, payload = {}, callback) => {
    //     return this.service({
    //         method: 'POST',
    //         url: path,
    //         data: payload,
    //     }, this.options)
    //         .then((response) => {
    //             callback(response.status, response)
    //         })
    //         .catch(({ response }) => {
    //             try {
    //                 callback(response.status, response)
    //             } catch (error) {
    //                 return this.handleError(error, path, callback)
    //             }
    //         })
    // }

    // put(path, payload = {}, callback) {
    //     return this.service.request({
    //         method: 'PUT',
    //         url: path,
    //         responseType: 'json',
    //         data: payload
    //     }).then((response) => {
    //         return callback(response.status, response.data)
    //     }).catch(({ response }) => {
    //         try {
    //             callback(response.status, response)
    //         } catch (error) {
    //             return this.handleError(error, path, callback)
    //         }
    //     });
    // }

    // static setCommonHeaders = (obj) => {
    //     return Axios.defaults.headers.common = {
    //         ...Axios.defaults.headers.common,
    //         ...obj,

    //     }
    // }
    // static setHeaders = (obj) => {
    //     return Axios.defaults.headers = {
    //         ...Axios.defaults.headers,
    //         ...obj,
    //     }
    // }
    }

}