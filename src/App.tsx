import React, {useState} from 'react';
import './App.scss';
import {getCategories, getManufacturers, getPicture, getProducts} from "./services/httpCalls";
import {IProduct, product} from "./interfaces/interfaces";
import {Product} from "./components/Product";
import {State} from "./services/StateService";

function App() {
  // let [useStore, setStore] = useState([] as IProduct[])
  // function svavsProduqts() {
  //   console.log(State.store.products);
  //   setStore(State.store.products);
  //   console.log(useStore);
  // }


  return (
    <div className="App">
      {/*<Product product={useStore} funqcia={svavsProduqts}/>*/}
    </div>
  );
}

export default App;
