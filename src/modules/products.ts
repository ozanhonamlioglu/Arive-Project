import { request } from '.'
import { PRODUCT_LIST } from '../utils/endpoints'
import IProductList from '../models/productlist'

export default class ProductList {

    getList = async (): Promise<IProductList[]> => {
        const response = await request.get<IProductList[]>(PRODUCT_LIST)
        return response
    }

}