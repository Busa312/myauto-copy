import {getPicture} from "../services/httpCalls";
import {IProduct, productMock} from "../interfaces/interfaces";
import React from "react";
import {State} from "../services/StateService";
import '../style/product.scss';
import {findAllByDisplayValue} from "@testing-library/react";
import { get } from "http";
import '../style/idk.scss'

export function Product() {

    const { car_id, car_model, price, comfort_features, photo, photo_ver, prod_year, customs_passed} = productMock;

    function customs() {
        if(customs_passed === true){
            return (
                <div className="customs">
                    <img src="done-path.svg" alt="rame"/><p>განბაჟებული</p>
                </div>
            )
        }
        return (
            <div className="customs">
                <p>განბაჟება</p>
            </div>
        )
    }
    function manual(){
        
    }
    return (
        <div className="single-product">
            <div className="photo-box">
                <img src='https://static.my.ge/myauto/photos/3/5/2/9/7/large/92792538_1.jpg?v=0' alt="Car" className="photo"/>
            </div>
            <p>{car_model}</p>
            <div className="year">
                <p>{prod_year}წ</p>
            </div>
            <div>{customs()}</div>
        </div>
    );
}