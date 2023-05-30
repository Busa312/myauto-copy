import {ICategory, IManufacturer, IModel, IProduct} from "../interfaces/interfaces";

const manufacturersURL = 'https://static.my.ge/myauto/js/mans.json';
const modelsURL = 'https://api2.myauto.ge/ka/getManModels?man_id=';
const catURL = 'https://api2.myauto.ge/ka/cats/get';
const productsURL = 'https://api2.myauto.ge/ka/products/'

// fetches data from api and returns array of manufacturers
export function getManufacturers(): Promise<IManufacturer[]> {
    return fetch(manufacturersURL)
        .then((res) => res.json())
        .then((data) => {
            return data as IManufacturer[]
        })
}

// fetches data from api and returns array of models from manufacturer
// @Param man_id manufacturer id
export function getModels(man_id: number): Promise<IModel[]> {
    return fetch(modelsURL)
        .then(res => res.json())
        .then(data => data.data as IModel[]);
}

// fetches data from api and returns array of categories
export function getCategories() : Promise<ICategory[]> {
    return fetch(catURL)
        .then(res => res.json())
        .then(data => data.data as ICategory[]);
}

// fetches data from api and returns array of products
export function getProducts(): Promise<IProduct[]> {
    return fetch(productsURL)
        .then(res => res.json())
        .then(data => data.data.items as IProduct[])
}

export function getPicture(product: IProduct) {
    return `https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`;
}