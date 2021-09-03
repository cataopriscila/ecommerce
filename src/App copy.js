import "./App.css";
import "semantic-ui-css/semantic.min.css";
import OfficeHeader from "./Components/OfficeHeader";
import { Component } from "react";
import TableContent from "./Components/TableContent";
import OrderDropDown from "./Components/OrderDropDown";
import SearchBox from "./Components/SearchBox";
import ToggleStock from "./Components/ToggleStock";
import FilterCategory from "./Components/FilterCategory";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      inputField: ""
    }
  }
  
  
  onInputChange = (e) => {       
    this.setState({inputField: e.target.value });      
  }; 
  
  onStock = (e) => {


      this.setState({products: filteredProducts.filter(item => {
        if(!item.stock){
           return item.stock;
          } 
          return item;
                          
      }) }) 
    }
      
    handleCategory = (e, {value}) => { 
      console.log(value);         
      this.setState({products: filteredProducts.filter( item => {
        return item[value]
      })})     
     }
 
  handleChange = (e, {value}) => {
              
     this.setState({products:filteredProducts.sort((a, b) => {
      if (a[value] < b[value])
        return -1;
      if (a[value] > b[value])
        return 1;
      return a[value] - b[value];
     }) })     
    }       
   
  
      componentDidMount () {

        fetch(
      "https://us-central1-fir-projects-3ee1f.cloudfunctions.net/demopayload"
        )
        .then((response) => response.json()
        .then((data) => {       
            this.setState({products:data.data.products.sort((a, b) => a.id - b.id) });
            console.log(data.data.products);
          })
        );
    }
    
    
    render() {
        
          const {onStock, handleChange, handleCategory, onInputChange, products, inputField} = this.state;
          const filteredProducts = products.filter(item => {
            return item.name.toLowerCase().includes(inputField.toLowerCase());
              });
    
        return (
      <div className="App">
        <h1>Hello, World!!</h1>
        <OfficeHeader />
        <div className="OverTable">
        <ToggleStock
        onStock={onStock}            
        />

        <OrderDropDown 
        handleChange={handleChange}
        />
        <FilterCategory
          handleCategory={handleCategory}
        />
        <SearchBox 
        onInputChange={onInputChange}
        /></div>
        
        <TableContent      
        products={filteredProducts}
          />
      </div>
    );
  }
  
}

export default App;
