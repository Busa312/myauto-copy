import React, {useEffect, useState} from 'react';
import './App.scss';
import {getCategories, getManufacturers, getPicture, getProducts} from "./services/httpCalls";
import {IProduct} from "./interfaces/interfaces";
import {Product} from "./components/Product";
import {Search} from "./components/Search";
import {Filter} from "./components/Filter";
import {State} from "./services/StateService";
import {Header} from './components/Header';

function App() {
  let [useStore, setStore] = useState([] as IProduct[])
    useEffect(() => {
        getProducts().then((val) => {
            setStore(val);
        })
    }, [])

    useEffect(() => {
        State.store.products = [...useStore];
    }, [useStore])

   function setProducts() {
      setStore(State.store.products);
   }


  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <Search func={setProducts}/>
        <div className='sub-wrap'>
        <Filter products={useStore}/>
          <div className={'products'}>  
              {useStore.map((val) => <Product key={val.car_id} product={val}/>)}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
