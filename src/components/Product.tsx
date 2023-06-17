import {getPicture} from "../services/httpCalls";
import {IProduct} from "../interfaces/interfaces";
import React from "react";
import '../style/product.scss';

export function Product({product, isUsd}: {product: IProduct, isUsd: boolean}) {

    const { car_id, car_model, price, comfort_features, photo, photo_ver, prod_year, views, customs_passed, right_wheel, car_run, price_value} = product;

    function customs() {
        if(customs_passed === true){
            return (
                <div className="customs">
                    <img src="done-path.svg" alt="rame"/><p className="mwvane">განბაჟებული</p>
                </div>
            )
        }
        return (
            <div className="customs">
                <p className="witeli">განბაჟება</p>
            </div>
        )
    }
    function sache() {
        if(right_wheel === true){
            return (
                <div className="single-att marjvena">
                   <img src="sache.svg" alt="sache"/>
                   <p>მარჯვენა</p>
                </div>
            )
        } else {
            return (
                <div className="single-att marjvena">
                   <img src="sache.svg" alt="sache"/>
                   <p>მარცხენა</p>
                </div>
            )
        }

    }
    return (
        <div className="single-product">
            <div className="saxeli mob">
                <p className="model-name">{car_model}</p>
                <div className="year">
                    <p className="weli">{prod_year}წ</p>
                </div>
            </div>
            <div className="mob price-custom">
                <div className="price">
                    <p>{isUsd? product.price_usd:price_value}</p>
                    <div className="lari">
                        <img src={isUsd? 'usd.svg':'lari.svg'}alt="lari" className="lari-icon"/>
                    </div>
                </div>
                <div className="customs">
                    <p>{customs()}</p>
                </div>
            </div>
            <div className="photo-box">
                <img src={getPicture(product)} alt="Car" className="photo"/>
            </div>
            <div className="container-1">
            <div className="headline">
                <div className="saxeli desktop">
                    <p className="model-name">{car_model}</p>
                <div className="year">
                    <p className="weli">{prod_year}წ</p>
                </div>
                </div>
                <div className="custom-location">
                    <div className="customs desktop">
                        <p>{customs()}</p>
                    </div>
                    <div className="flex">
                        <img src="flaggeo.svg" alt="flaggeo" className="flaggeo"/>
                        <p className="location">თბილის</p>
                    </div>
                </div>
            </div>
            <div className="box">
                <div>
                    <div className="atts">
                        <div className="single-att">
                        <img src="motor.svg" alt="matori"/>
                        <p>1.8 დატ. ჰიბრიდი</p>
                        </div>
                        <div className="single-att marjvena">
                        <img src="speed.svg" alt="speed"/>
                        <p> {car_run} კმ</p>
                        </div>
                    </div>
                    <div className="atts">
                        <div className="single-att">
                        <img src="avtomatic.svg" alt="avtomatika"/>
                        <p>ავტომატიკა</p>
                        </div>
                        <div>
                            {sache()}
                        </div>
                    </div>
                </div>
                <div className="price desktop">
                        <p>{isUsd? product.price_usd : price_value }</p>
                    <div className="lari">
                        <img src={isUsd? 'usd.svg':'lari.svg'} className="lari-icon"/>
                    </div>
                </div>
            </div>
                <div className="views-icons">
                    <p>{views} ნახვა • 2 დღის წინ</p>
                    <div className="icons">
                        <img src="note.svg" alt="shedareba" />
                        <img src="shedareba.svg" alt="shedareba" />
                        <img src="favorite.svg" alt="shedareba" />
                    </div>
                </div>
            </div>
        </div>
    );
}