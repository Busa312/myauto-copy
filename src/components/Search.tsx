import {useEffect, useState} from "react";
import '../style/search.scss';
import '../style/CurrencyToggle.scss';
import {getCategories, getManufacturers, getProducts} from "../services/httpCalls";
import {ICategory, IManufacturer} from "../interfaces/interfaces";
import {State} from "../services/StateService";
import {
    searchByCategory,
    searchByManufacturer, searchByPeriod,
    searchByPriceFrom, searchByPriceTo,
    searchByRent,
} from "../services/searching";
import {Multiselect} from "multiselect-react-dropdown";


let items: IManufacturer[] = [];
let categories: ICategory[] = [];

export function Search({func, changeCurrency}: {func: Function, changeCurrency: Function}) {
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState<IManufacturer[]>([]);
  const [availability, setAvailability] = useState<{value: boolean, title: string}[]>([]);
  const [isToggled, onToggle] = useState(false);
    useEffect(() => {
        getManufacturers().then((val) => {
            items = val;
        })

        getCategories().then(val => {
            categories = val;
        })
    }, []);
    useEffect(() => {
        State.store.search.manufacturer = selectedManufacturers.map(val => val.man_id);
        State.store.search.category = selectedCategories.map(val => val.category_id);
        State.store.search.forRent = availability.map(val => val.value);
        State.store.search.priceFloor = minPrice? parseFloat(minPrice) : 0;
        State.store.search.priceCeiling = maxPrice? parseFloat(maxPrice) : Infinity;
    }, [selectedManufacturers, selectedCategories, availability, minPrice, maxPrice])

    useEffect(() => {
        State.store.isUsd = isToggled;
        changeCurrency();
    }, [isToggled])

    const onSearch = () => {
        getProducts().then((data) => {
            State.store.products = searchByManufacturer(data, State.store.search.manufacturer, State.store.search.sorter);
            State.store.products = searchByCategory(State.store.products, State.store.search.category, State.store.search.sorter);
            State.store.products = searchByRent(State.store.products, State.store.search.forRent, State.store.search.sorter)
            State.store.products = searchByPriceFrom(State.store.products, State.store.search.priceFloor? State.store.search.priceFloor : 0, State.store.search.sorter);
            State.store.products = searchByPriceTo(State.store.products, State.store.search.priceCeiling? State.store.search.priceCeiling : Infinity, State.store.search.sorter);
            State.store.products = searchByPeriod(State.store.products, State.store.search.period || '3w', State.store.search.sorter)
            func();
        })
    }
    const handleCategoryChange = (arr: ICategory[], value: ICategory) => {
        setSelectedCategories([...arr])
    }

    const handleCategoryRemove = (arr: ICategory[], value: ICategory) => {
        setSelectedCategories(arr.filter(val => val.category_id !== value.category_id));
    }

  const handleManufacturerChange = (arr: IManufacturer[], value: IManufacturer) => {
    setSelectedManufacturers([...arr]);
  };

    const handleManufacturerRemove = (arr: IManufacturer[], value: IManufacturer) => {
        setSelectedManufacturers(arr.filter(val => val.man_id !== value.man_id));
    }

    const handleAvailabilityChange = (arr: boolean[], value: {value: boolean, title: string}) => {
        setAvailability([value]);
    }
    const handleAvailabilityRemove = (arr: boolean[], value: {value: boolean, title: string}) => {
        setAvailability([]);
    }

    // @ts-ignore
    const ToggleSwitch = () => {
        return (
            <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={() => {onToggle(!isToggled)}} />
                <span className={isToggled? 'switch dollar': 'switch'}  />
            </label>
        );
    };


  return (
    <div className="Container">
      <div className="icons">
        <img src="car.svg" className="mankana" alt="car" />
        <div className="line3"></div>
        <div className="gray">
          <img src="tractor.svg" className="traqtori" alt="tractor" />
          <div className="line4"></div>
          <img src="moto.svg" className="moto" alt="motorcycle" />
        </div>
      </div>
      <div className="xazebi">
        <div className="line9"></div>
        <div className="line8"></div>
      </div>
      <div className="box1">
        <label htmlFor="availability">გარიგების ტიპი</label>
          <Multiselect customArrow={true} showCheckbox={true} displayValue={'title'} onRemove={handleAvailabilityRemove} options={[{value: true, title: 'ქირავდება'}, {value: false, title: 'იყიდება'}]}
                       closeOnSelect={true} selectedValues={availability} onSelect={handleAvailabilityChange} placeholder={availability.length > 0? '' : 'ნებისმიერი'} showArrow={true}/>
      </div>
      <div className="box1">
        <label>მწარმოებელი</label>
          <Multiselect customArrow={true} showCheckbox={true} onRemove={handleManufacturerRemove} onSelect={handleManufacturerChange} showArrow={true}
                       placeholder={selectedManufacturers.length > 0? '' : 'ყველა მწარმოებელი'}selectedValues={selectedManufacturers} options={items} displayValue={'man_name'} hideSelectedList={false}/>
      </div>
      <div className="box1">
        <label>კატეგორია</label>
          <Multiselect customArrow={true} options={categories} selectedValues={selectedCategories} displayValue={'title'}
          onSelect={handleCategoryChange} placeholder={selectedCategories.length > 0? '' : 'ყველა კატეგორია'} onRemove={handleCategoryRemove} showCheckbox={true} className={'multiselect'} showArrow={true} isObject={true} hideSelectedList={false} />
      </div>
      <div className="line0"></div>
      <div className="price1">
        <span>ფასი</span>
        <div className="check">
          <ToggleSwitch/>
        </div>
      </div>
      <div className="price-fields">
        <div>
          <input
            placeholder="დან"
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="price-line"></div>
        <div>
          <input
            placeholder="მდე"
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="button-div">
        <button  className="filter" onClick={onSearch}>
          ძებნა
        </button>
      </div>
    </div>
  );
}
