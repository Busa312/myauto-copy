import {getPicture} from "../services/httpCalls";
import {IProduct, product} from "../interfaces/interfaces";
import React from "react";
import {State} from "../services/StateService";

export function Product({prod, funqcia}: any) {
    function chasvav() {
        State.store.products = [product];
        funqcia();
    }

    if(prod) {
        return (
            <div className="product">
                <img src={getPicture(prod[0])}/>
                <h3>{prod[0].car_model}<span>{prod[0].prod_year}</span></h3>
            </div>
        )
    }
    return (
        <div>
            <h1>netuuu</h1>
            <button onClick={chasvav}>daaklike jigoo</button>
        </div>

    );
}