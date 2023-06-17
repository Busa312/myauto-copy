import React from 'react';
import '../style/Filter.scss'
import {IProduct} from "../interfaces/interfaces";

export function Filter({products} : {products: IProduct[]}) {
    return(
        <div>
            <div className='desktop filter-container'>
                <p>{products.length} განცხადება</p>
                <div className="filter-wrap">
                    <select>
                        <option>ბოლო 1 საათი</option>
                        <option>ბოლო 3 საათი</option>
                        <option>ბოლო 6 საათი</option>
                        <option>ბოლო 1 დღე</option>
                        <option>ბოლო 1 კვირა</option>
                        <option>ბოლო 1 თვე</option>
                    </select>
                    <select>
                        <option>თარიღი კლებადი</option>
                        <option>თარიღი ზრდადი</option>
                        <option>ფასი კლებადი</option>
                        <option>ფასი ზრდადი</option>
                        <option>გარბენი კლებადი</option>
                        <option>გარბენი ზრდადი</option>
                    </select>
                </div>
            </div>
            <div className='mob filter-container'>
                <div className="filter-wrap">
                    <select>
                        <option>ბოლო 1 საათი</option>
                        <option>ბოლო 3 საათი</option>
                        <option>ბოლო 6 საათი</option>
                        <option>ბოლო 1 დღე</option>
                        <option>ბოლო 1 კვირა</option>
                        <option>ბოლო 1 თვე</option>
                    </select>
                    <select>
                        <option>თარიღი კლებადი</option>
                        <option>თარიღი ზრდადი</option>
                        <option>ფასი კლებადი</option>
                        <option>ფასი ზრდადი</option>
                        <option>გარბენი კლებადი</option>
                        <option>გარბენი ზრდადი</option>
                    </select>
                </div>
            </div>
        </div>
    )
}