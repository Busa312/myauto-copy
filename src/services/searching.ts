import {IProduct} from "../interfaces/interfaces";
import {Period} from "../interfaces/types";
import {periods} from "../interfaces/enums";

export function searchByRent(productList: IProduct[], forRent: boolean) {
    return productList.filter(val => val.for_rent === forRent);
}

export function searchByManufacturer(productList: IProduct[], manIdList: number[]) {
    return productList.filter(val => manIdList.includes(val.man_id));
}

export function searchByCategory(productList: IProduct[], categoryIdList: number[]) {
    return productList.filter(val => categoryIdList.includes(val.category_id));
}

export function searchByPriceFrom(productList: IProduct[], priceFrom: number) {
    return productList.filter(val => val.price >= priceFrom);
}

export function searchBytPriceTo(productList: IProduct[], priceTo: number) {
    return productList.filter(val => val.price <= priceTo);
}

export function searchByPeriod(productsList: IProduct[], period: Period){
    return productsList.filter(val => (Date.now() - Date.parse(val.order_date)) < periods[period] )
}
