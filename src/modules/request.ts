import { serviceApi } from '../utils/service'

// We can handle all of custom error handling from one file and we can create any middleware quickly to whole requests.
export default class Request {

    get = async <T>(endpoint: string): Promise<T> => {
        let request = await serviceApi.get<T>(endpoint);
        return request.data
    }

    /* Currently we don't need those features
    
    post = <T>(): Promise<T> => {

    }

    delete = <T>(): Promise<T> => {

    }

    update = <T>(): Promise<T> => {

    }
    */
}