import {getPicture} from "../services/httpCalls";
import {IProduct, productMock} from "../interfaces/interfaces";
import React from "react";
import {State} from "../services/StateService";
import '../style/product.scss';
import {findAllByDisplayValue} from "@testing-library/react";

export function Product() {
    return (
        <div>
            <img src={getPicture(productMock)} alt=""/>
        </div>
    );
}