import {IProduct} from "../interfaces/interfaces";
import {Period} from "../interfaces/types";
import {periods} from "../interfaces/enums";
import {sortBy} from "./sorting";

export function searchByRent(productList: IProduct[], forRent: boolean, sorter: number) {
    return sortBy(productList.filter(val => val.for_rent === forRent), sorter);
}

export function searchByManufacturer(productList: IProduct[], manIdList: number[], sorter: number) {
    return sortBy(productList.filter(val => manIdList.includes(val.man_id)), sorter);
}

export function searchByCategory(productList: IProduct[], categoryIdList: number[], sorter: number) {
    return sortBy(productList.filter(val => categoryIdList.includes(val.category_id)), sorter);
}

export function searchByPriceFrom(productList: IProduct[], priceFrom: number, sorter: number) {
    return sortBy(productList.filter(val => val.price >= priceFrom), sorter);
}

export function searchBytPriceTo(productList: IProduct[], priceTo: number, sorter: number) {
    return sortBy(productList.filter(val => val.price <= priceTo), sorter);
}

export function searchByPeriod(productsList: IProduct[], period: Period, sorter: number){
    return sortBy(productsList.filter(val => (Date.now() - Date.parse(val.order_date)) < periods[period]), sorter);
}
