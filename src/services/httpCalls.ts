const manufacturersURL = 'https://static.my.ge/myauto/js/mans.json';
const modelsURL = 'https://api2.myauto.ge/ka/getManModels?man_id=';
const catURL = 'https://api2.myauto.ge/ka/cats/get';
const productsURL = 'https://api2.myauto.ge/ka/products/'

export function getManufacturers() {
    return fetch(manufacturersURL)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
}

export function getModels(man_id: number) {
    return fetch(modelsURL)
        .then(res => res.json())
        .then(data => data);
}

export function getCategories() {
    return fetch(catURL)
        .then(res => res.json())
        .then(data => data);
}

export function getProducts() {
    return fetch(productsURL)
        .then(res => res.json())
        .then(data => data)
}