import "./App.css";
import "semantic-ui-css/semantic.min.css";
import OfficeHeader from "./Components/OfficeHeader";
import { useEffect, useState } from "react";
import TableContent from "./Components/TableContent";
import OrderDropDown from "./Components/OrderDropDown";
import SearchBox from "./Components/SearchBox";
import ToggleStock from "./Components/ToggleStock";
import FilterCategory from "./Components/FilterCategory";
import ShowAllButton from "./Components/ShowAllButton";


function App () {
  const [products, setProducts] = useState([]);
  const [initial, setInitial] = useState([]);
  const [inputField, setInputField] = useState("");

  let filteredProducts = products.filter(item => {
    return item.name.toLowerCase().includes(inputField.toLowerCase());
      });
  
 const onInputChange = (e) => {       
    setInputField(e.target.value);      
  }; 
  
  const onStock = (e) => {
      setProducts(filteredProducts.filter(item => item.stock))     
      
    }

  const handleCategory = (e, {value}) => {               
    setProducts(filteredProducts.filter( item => item.category === value)) 
    }
 
  const handleChange = (e, {value}) => {              
     setProducts(filteredProducts.sort((a, b) => {
      if (a[value] < b[value])
        return -1;
      if (a[value] > b[value])
        return 1;
      return a[value] - b[value];
     }) )    
    }
    
  const restoreInitial = () => {
    console.log('click');    
    setProducts(initial);

  }
   
  useEffect(() => {
    fetch(
      "https://us-central1-fir-projects-3ee1f.cloudfunctions.net/demopayload"
        )
        .then((response) => response.json()
        .then((data) => {                  
            setProducts(data.data.products.sort((a, b) => a.id - b.id));
            setInitial(data.data.products) 
            console.log(data.data.products);
          })
        );
    
  }, []);        
          
          
      return (
      <div className="App">
        <h1>Hello, World!!</h1>
        <OfficeHeader />
        <div className="OverTable">
        <ToggleStock
        onStock={onStock}
        restoreInitial={restoreInitial}            
        />
        <SearchBox 
        onInputChange={onInputChange}
        />
        <OrderDropDown 
        handleChange={handleChange}
        />
        <FilterCategory
        handleCategory={handleCategory}
        restoreInitial={restoreInitial}
        />        
        
        <ShowAllButton
        restoreInitial={restoreInitial}
        />
        </div>
        
        <TableContent      
        products={filteredProducts}
          />
      </div>
    ); 
}

export default App;
