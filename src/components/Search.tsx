import { useState } from "react";
import '../style/search.scss'
import { ReactComponent as Car } from '.../public/car.svg';


interface Item {
    id: number;
    name: string;
    cost: number;
    category: string;
    manufacturer: string;
    forSale: boolean;
  }
  
  const items: Item[] = [
    { id: 1, name: 'Item 1', cost: 10, category: 'Category A', manufacturer: 'Manufacturer X', forSale: true },
    { id: 2, name: 'Item 2', cost: 5, category: 'Category B', manufacturer: 'Manufacturer Y', forSale: false },
    { id: 3, name: 'Item 3', cost: 15, category: 'Category A', manufacturer: 'Manufacturer Z', forSale: true },
    { id: 4, name: 'Item 4', cost: 8, category: 'Category C', manufacturer: 'Manufacturer X', forSale: false },
    { id: 5, name: 'Item 5', cost: 20, category: 'Category B', manufacturer: 'Manufacturer Z', forSale: true },
  ];

export function Search(){
    const [minPrice, setMinPrice] = useState<number | ''>('');
    const [maxPrice, setMaxPrice] = useState<number | ''>('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);
    const [availability, setAvailability] = useState<boolean | ''>('');
    const [filteredItems, setFilteredItems] = useState<Item[]>(items); // Initialize with all items
  
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOptions = Array.from(event.target.selectedOptions).map((option) => option.value);
      setSelectedCategories(selectedOptions);
    };
  
    const handleManufacturerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOptions = Array.from(event.target.selectedOptions).map((option) => option.value);
      setSelectedManufacturers(selectedOptions);
    };
  
    const filterItems = () => {
      const filteredItems = items.filter(
        (item) =>
          (minPrice === '' || item.cost >= +minPrice) &&
          (maxPrice === '' || item.cost <= +maxPrice) &&
          (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
          (selectedManufacturers.length === 0 || selectedManufacturers.includes(item.manufacturer)) &&
          (availability === '' || item.forSale === availability)
      );
  
      setFilteredItems(filteredItems);
    };
  
    return (
      <div className="Container">
        <div className="icons">
            <img src="car.svg" className="mankana"></img>
              <div className="line3"></div>
            <div className="gray">
              <img src="tractor.svg" className="traqtori"></img>
                <div className="line4"></div>
              <img src="moto.svg" className="moto"></img>
            </div>
        </div>
        <div className="xazebi">
        <div className="line9"></div>
        <div className="line8"></div>
        </div>
        <div className="box">
          <label htmlFor="availability">გარიგების ტიპი</label>
          <select
            id="availability"
            value={availability.toString()}
            onChange={(e) => setAvailability(e.target.value === '' ? '' : e.target.value === 'true')}
          >
            <option value="">გარიგების ტიპი</option>
            <option value="true">იყიდება</option>
            <option value="false">ქირავდება</option>
          </select>
        </div>
        <div className="box">
          <label>მწარმოებელი</label>
          <select
            value={selectedManufacturers}
            onChange={handleManufacturerChange}
          >
            <option value="">ყველა მწარმოებელი</option>
            <option value="Manufacturer X">Manufacturer X</option>
            <option value="Manufacturer Y">Manufacturer Y</option>
            <option value="Manufacturer Z">Manufacturer Z</option>
          </select>
        </div>
        <div className="box">
          <label>კატეგორია</label>
          <select
            value={selectedCategories}
            onChange={handleCategoryChange}
          >
            <option value="">ყველა კატეგორია</option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>
          <div className="line0"></div>
        <div className="price">
                <span>ფასი</span>
              <div className="check">
                <button className="fasi">
                    <img src="gel.svg"></img>
                </button>
                <button className="fasi">
                    <img src="usd.svg"></img>
                </button>
              </div>
        </div>
        <div className="price-fields">
          <div>
            <input
              placeholder="დან"
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(parseFloat(e.target.value))}
            />
          </div>
            <div className="price-line"></div>
          <div>
            <input
              placeholder="მდე"
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="button-div">
          <button onClick={filterItems} className="filter">
            ძებნა {items.length}
          </button>
        </div>
  
        {/* <h2>Filtered Items</h2>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Cost: {item.cost}</p>
              <p>Category: {item.category}</p>
              <p>Manufacturer: {item.manufacturer}</p>
              <p>Availability: {item.forSale ? 'For Sale' : 'For Rent'}</p>
            </li>
          ))}
        </ul> */}
      </div>
    );
}