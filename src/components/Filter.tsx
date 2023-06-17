import React, {ReactEventHandler} from 'react';
import '../style/Filter.scss'
import {IProduct} from "../interfaces/interfaces";
import {State} from "../services/StateService";
import {Period} from "../interfaces/types";
import {sortBy} from "../services/sorting";
import {searchByPeriod} from "../services/searching";

export function Filter({products, func} : {products: IProduct[], func: Function}) {

    return(
        <div>
            <div className='desktop filter-container'>
                <p>{products.length} განცხადება</p>
                <div className="filter-wrap">
                    <select onChange={(e) => {State.store.search.period = e.target.value as Period;
                        State.store.products = searchByPeriod(State.store.products, State.store.search.period, State.store.search.sorter);
                        func()}}>
                        <option value={'1h'}>ბოლო 1 საათი</option>
                        <option value={'2h'}>ბოლო 2 საათი</option>
                        <option value={'3h'}>ბოლო 3 საათი</option>
                        <option value={'1d'}>ბოლო 1 დღე</option>
                        <option value={'2d'}>ბოლო 2 დღე</option>
                        <option value={'3d'}>ბოლო 3 დღე</option>
                        <option value={'1w'}>ბოლო 1 კვირა</option>
                        <option value={'2w'}>ბოლო 2 კვირა</option>
                        <option value={'3w'}>ბოლო 3 კვირა</option>
                    </select>
                    <select onChange={(e) => {State.store.search.sorter = parseInt(e.target.value);
                        State.store.products = sortBy(products, State.store.search.sorter);
                        func()}}>
                        <option value={1}>თარიღი კლებადი</option>
                        <option value={2}>თარიღი ზრდადი</option>
                        <option value={3}>ფასი კლებადი</option>
                        <option value={4}>ფასი ზრდადი</option>
                        <option value={5}>გარბენი კლებადი</option>
                        <option value={6}>გარბენი ზრდადი</option>
                    </select>
                </div>
            </div>
            <div className='mob filter-container'>
                <div className="filter-wrap">
                    <select onChange={(e) => {State.store.search.period = e.target.value as Period;
                        State.store.products = searchByPeriod(State.store.products, State.store.search.period, State.store.search.sorter);
                        func()}}>
                        <option value={'1h'}>ბოლო 1 საათი</option>
                        <option value={'2h'}>ბოლო 2 საათი</option>
                        <option value={'3h'}>ბოლო 3 საათი</option>
                        <option value={'1d'}>ბოლო 1 დღე</option>
                        <option value={'2d'}>ბოლო 2 დღე</option>
                        <option value={'3d'}>ბოლო 3 დღე</option>
                        <option value={'1w'}>ბოლო 1 კვირა</option>
                        <option value={'2w'}>ბოლო 2 კვირა</option>
                        <option value={'3w'}>ბოლო 3 კვირა</option>
                    </select>
                    <select onChange={(e) => {State.store.search.sorter = parseInt(e.target.value);
                        State.store.products = sortBy(products, State.store.search.sorter);
                        func()}}>
                        <option value={1}>თარიღი კლებადი</option>
                        <option value={2}>თარიღი ზრდადი</option>
                        <option value={3}>ფასი კლებადი</option>
                        <option value={4}>ფასი ზრდადი</option>
                        <option value={5}>გარბენი კლებადი</option>
                        <option value={6}>გარბენი ზრდადი</option>
                    </select>
                </div>
            </div>
        </div>
    )
}