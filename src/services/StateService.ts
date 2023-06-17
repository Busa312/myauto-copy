import {IStore} from "../interfaces/interfaces";
import {Period} from "../interfaces/types";

export class State {
    static store: IStore = {
        products: [],
        search: {
            sorter: -1,
            forRent: [],
            manufacturer: [],
            category: [],
            priceFloor: 0,
            priceCeiling: Infinity,
            period: null
        }
    }


}