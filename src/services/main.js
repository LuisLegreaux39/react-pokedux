import AxiosWrapper from "../utils/Axios";

export const getService = () => {

    const { REACT_APP_BACKEND_API_URL } = process.env;

    let mainService = new AxiosWrapper({}, {
        baseURL: REACT_APP_BACKEND_API_URL || "https://pokeapi.co/api/v2/"
    });
    // API Request interceptor
    mainService.service.interceptors.request.use(config => {

        // if (!jwtToken && !config.headers[PUBLIC_REQUEST_KEY]) {
        //     history.push(ENTRY_ROUTE)
        //     window.location.reload();
        // }

        return config
    }, error => {
        // Do something with request error here
        // notification.error({
        //     message: 'Error'
        // })
        Promise.reject(error)
    })

    return mainService.pure();
}

const service = getService()

export default service;