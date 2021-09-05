import "./App.css";
import "semantic-ui-css/semantic.min.css";
import OfficeHeader from "./Components/OfficeHeader";
import { useEffect, useState } from "react";
import OrderDropDown from "./Components/OrderDropDown";
import SearchBox from "./Components/SearchBox";
import ToggleStock from "./Components/ToggleStock";
import FilterCategory from "./Components/FilterCategory";
import ShowAllButton from "./Components/ShowAllButton";
import OfficeFooter from "./Components/OfficeFooter";
import Checkout from "./Containers/Checkout";
import Cart from "./Components/Cart";
import ThatsAllFolks from "./Components/ThatsAllFolks";
import Navbar from "./Containers/Navbar";


function App () {
  const [products, setProducts] = useState([]);
  const [initial, setInitial] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [inputField, setInputField] = useState("");  
  

  //Filter products by name in input
  let filteredProducts = products.filter(item => {
    return item.name.toLowerCase().includes(inputField.toLowerCase());
      });
  
 const onInputChange = (e) => {       
    setInputField(e.target.value);      
  }; 
  
  //Show only products in stock
  const onStock = (e) => {
      setProducts(filteredProducts.filter(item => item.stock))       
    }

  //Filter products by category
  const handleCategory = (e, {value}) => {               
    setProducts(filteredProducts.filter( item => item.category === value)) 
    }
 
  //Order products by name, category, price or stock
  const handleChange = (e, {value}) => {              
     setProducts(filteredProducts.sort((a, b) => {
      if (a[value] < b[value])
        return -1;
      if (a[value] > b[value])
        return 1;
      return a[value] - b[value];
     }) )    
    }
    
  //Show all products
  const restoreInitial = () => { 
    setInputField('');       
    setProducts(initial);    
  }

  //Set and store product quantities
  const addItem = (e) => {  
    setProducts(filteredProducts.map( (item, i) => {           
      if(i == e.target.id && item.quantity >=0 && item.quantity < item.stock ) {               
        return Object.assign({}, item, {quantity: item.quantity + 1});
      } 
      return item;
    }))     
  }

  const removeItem = (e) => {    
    setProducts(filteredProducts.map( (item, i) => {           
      if(i == e.target.id && item.quantity > 0 ) {           
        return Object.assign({}, item, {quantity: item.quantity - 1});
      } 
      return item;
    }))     
  }

  // Set quantity with checkbox
  const onCheckboxCheck = (e) => { 
    setProducts(filteredProducts.map( (item, i) => {       
       console.log(item.ischecked)       
      if(i == e.target.id) {        
        if(item.ischecked) {
          return Object.assign({}, item, {quantity: 1, ischecked: false});
        } else {
          return Object.assign({}, item, {quantity: 0, ischecked: true});
        }
      } 
      return item;
    }))    
  }   
  
  const onSubmit = () => {
   setCheckout(filteredProducts.filter( item => item.quantity));    
  }

  useEffect(() => {
    fetch(
      "https://us-central1-fir-projects-3ee1f.cloudfunctions.net/demopayload"
        )
        .then((response) => response.json()
        .then((data) => {
          const productFeatureAdded = data.data.products.map((item, i) => {
            return Object.assign({}, item, {quantity: 0, ischecked: true})
           }) 
            setProducts(productFeatureAdded.sort((a, b) => a.id - b.id));
            setInitial(productFeatureAdded);                      
            console.log(productFeatureAdded);
          })
        );
    
  }, []);        
         
          
      return (
      <div className="App"> 
        <Navbar/>       
        <OfficeHeader/>
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
                
        <Cart     
        products={filteredProducts}               
        onSubmit={onSubmit}
        addItem={addItem}
        removeItem={removeItem}        
        onCheckboxCheck={onCheckboxCheck}        
        
          />
        <Checkout products={checkout}/>                        
        <OfficeFooter/>
      </div>
    ); 
}

export default App;
