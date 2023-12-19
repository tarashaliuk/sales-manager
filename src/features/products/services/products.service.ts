import {ProductsAdapter} from "@/features/products/services/products.adapter";
import type {IProductFilters} from "@/features/products/models/product-filters.model";
import type {IProductsApiResponse} from "@/features/products/models/products-api-response.model";


export class ProductsService {
    async getProductsList(filters: IProductFilters): Promise<Partial<IProductsApiResponse>> {
        const fields: string[] = [
            'title',
            'id',
            'brand',
            'category'
        ];

        const adapter = new ProductsAdapter()
        const {products} = await adapter.get(filters, fields)

        return {products}
    }

    // getProduct(id: string): Promise<IProduct> {
    //
    // }
}