import {IProduct} from "../interfaces/interfaces";

export function sortBy(productList: IProduct[], sorter: number) {
    switch (sorter) {
        case 1:
        case 2:
            return byDate(productList, sorter);
        case 3:
        case 4:
            return byPrice(productList, sorter);
        case 5:
        case 6:
            return byMilage(productList, sorter);
        default:
            return productList;
    }
}

function byDate(productList: IProduct[], sorter: number) {
    let sorted = productList.sort((a, b) =>
        Date.parse(a.order_date) - Date.parse(b.order_date)
    )
    return sorter === 1? sorted.reverse(): sorted;
}

function byPrice(productList: IProduct[], sorter: number) {
    let sorted = productList.sort((a, b) => a.price - b.price);
    return sorter === 3? sorted.reverse(): sorted;
}

function byMilage(productList: IProduct[], sorter: number) {
    let sorted = productList.sort((a, b) => a.car_run - b.car_run);
    return sorter === 5? sorted.reverse(): sorted;
}