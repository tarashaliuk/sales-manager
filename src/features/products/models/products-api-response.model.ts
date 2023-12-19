import type {IListApiResponse} from "@/shared/api/models/list-api-response.model";
import type {IProduct} from "@/features/products/models/product.model";

export interface IProductsApiResponse extends IListApiResponse {
    products: IProduct[]
}