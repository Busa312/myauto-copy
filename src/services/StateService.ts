import {IStore} from "../interfaces/interfaces";
import {Period} from "../interfaces/types";

export class State {
    static store: IStore = {
        products: [],
        search: {
            sorter: null,
            forRent: null,
            manufacturer: null,
            category: null,
            priceFloor: null,
            priceCeiling: null,
            period: null
        }
    }


}