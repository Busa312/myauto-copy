import {IProduct} from "../interfaces/interfaces";
import {Period} from "../interfaces/types";
import {periods} from "../interfaces/enums";
import {sortBy} from "./sorting";
import {State} from "./StateService";

export function searchByRent(productList: IProduct[], forRent: boolean[], sorter: number = -1) {
    return sortBy(forRent.length> 0?productList.filter(val => val.for_rent === forRent[0]): productList, sorter);
}

export function searchByManufacturer(productList: IProduct[], manIdList: string[], sorter: number = -1) {
    return sortBy(manIdList.length> 0? productList.filter(val => manIdList.includes(val.man_id.toString())) : productList, sorter);
}

export function searchByCategory(productList: IProduct[], categoryIdList: number[], sorter: number = -1) {
    return sortBy(categoryIdList.length> 0? productList.filter(val => categoryIdList.includes(val.category_id)) : productList, sorter);
}

export function searchByPriceFrom(productList: IProduct[], priceFrom: number, sorter: number = -1) {
    return sortBy(productList.filter(val =>State.store.isUsd? val.price >= priceFrom: val.price_usd >= priceFrom), sorter);
}

export function searchByPriceTo(productList: IProduct[], priceTo: number, sorter: number = -1) {
    return sortBy(productList.filter(val => State.store.isUsd? val.price <= priceTo: val.price_usd <= priceTo), sorter);
}

export function searchByPeriod(productsList: IProduct[], period: Period, sorter: number = -1){
    return sortBy(productsList.filter(val => (Date.now() - Date.parse(val.order_date)) < periods[period]), sorter);
}
