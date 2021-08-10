/**
 * 
 * Initialize all created modules in here for once.
 * 
 */

import ProductList from './products'
import CategoryDetail from './categories'
import Request from './request'

const products = new ProductList()
const categories = new CategoryDetail()
const request = new Request()

export {
    products,
    categories,
    request
}