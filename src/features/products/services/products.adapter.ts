import type {IProductFilters} from "@/features/products/models/product-filters.model";
import {httpService} from "@/shared/services/http.service";
import type {IProductsApiResponse} from "@/features/products/models/products-api-response.model";


export class ProductsAdapter {
    protected endpoint = 'products'

    get(filters: IProductFilters, fields: string[]): Promise<IProductsApiResponse> {
        return httpService.get(this.endpoint)
    }


}