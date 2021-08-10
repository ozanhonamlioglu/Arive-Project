export default interface ICategoryDetail {
    name: string
    subCategories: ISubCategory[]
}

export interface ISubCategory {
    name: string
    id: string
    productIds: number[]
}