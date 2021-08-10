import { request } from '.'
import { CATEGORY_DETAIL } from '../utils/endpoints'
import ICategoryDetail from '../models/categorydetail'

export default class Categories {

    getDetail = async (): Promise<ICategoryDetail> => {
        const response = await request.get<ICategoryDetail>(CATEGORY_DETAIL)
        return response
    }

}