import "./App.css";
import {
  requestProducts,
  setInputField,
  filterProductsByCategory,
  setAllProducts,
  setProductsByOrder,
} from "./Actions";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import OfficeHeader from "./Components/OfficeHeader";
import { useEffect, useState } from "react";
import OrderDropDown from "./Components/OrderDropDown";
import SearchBox from "./Components/SearchBox";
import ToggleStock from "./Components/ToggleStock";
import CategoryDropdown from "./Components/CategoryDropdown";
import ResetAllButton from "./Components/ResetAllButton";
import OfficeFooter from "./Components/OfficeFooter";
import Checkout from "./Containers/Checkout/Checkout";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Containers/Navbar";

const mapStateToProps = (state) => {
  return {
    inputField: state.searchProductsByName.inputField,
    products: state.getProducts.products,
    allProducts: state.getProducts.products,
    isPending: state.getProducts.isPending,
    error: state.getProducts.error,
    category: state.getProductsByCategory.category,
    field: state.getOrderedProducts.field,
  };
};

const selectProductsByName = (state, input) =>
  state.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch(setInputField(event.target.value)),
    onRequestProducts: () => dispatch(requestProducts()),
    handleCategory: (e, { value }) => dispatch(filterProductsByCategory(value)),
    restoreProducts: () => dispatch(setAllProducts()),
    handleOrder: (e, { value }) => dispatch(setProductsByOrder(value)),
  };
};

function App(props) {
  const {
    onRequestProducts,
    onInputChange,
    products,
    inputField,
    handleCategory,
    restoreProducts,
    handleOrder,
  } = props;

  const [checkout, setCheckout] = useState([]);
  // const [isUnchecked, setIsUnchecked] = useState(false);

  //Filter products by name in input
  let productsByName = selectProductsByName(products, inputField);

  //Show only products in stock

  // const onStock = (e) => {
  //   setIsUnchecked(!isUnchecked);
  //   return isUnchecked
  //     ? setProducts(initial)
  //     : setProducts(filteredProducts.filter((item) => item.stock));
  // };

  //Order products by name, category, price or stock

  // const handleChange = (e, { value }) => {
  //   setProducts(
  //     filteredProducts.sort((a, b) => {
  //       if (a[value] < b[value]) return -1;
  //       if (a[value] > b[value]) return 1;
  //       return a[value] - b[value];
  //     })
  //   );
  // };

  //Set and store product quantities

  // const addItem = (e) => {
  //   setProducts(
  //     filteredProducts.map((item, i) => {
  //       if (
  //         i === parseInt(e.target.id) &&
  //         item.quantity >= 0 &&
  //         item.quantity < item.stock
  //       ) {
  //         return Object.assign({}, item, { quantity: item.quantity + 1 });
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const removeItem = (e) => {
  //   setProducts(
  //     filteredProducts.map((item, i) => {
  //       if (i === parseInt(e.target.id) && item.quantity > 0) {
  //         return Object.assign({}, item, { quantity: item.quantity - 1 });
  //       }
  //       return item;
  //     })
  //   );
  // };

  // Set quantity with checkbox

  // const onCheckboxCheck = (e) => {
  //   setProducts(
  //     filteredProducts.map((item, i) => {
  //       if (i === parseInt(e.target.id) ) {
  //         if (item.ischecked) {
  //           return Object.assign({}, item, { quantity: 1, ischecked: false });
  //         } else {
  //           return Object.assign({}, item, { quantity: 0, ischecked: true });
  //         }
  //       }
  //       return item;
  //     })
  //   );
  // };

  // Set products to checkout
  const onSubmit = () => {
    setCheckout(productsByName.filter((item) => item.quantity));
  };

  //Get products data from given resource
  useEffect(() => {
    onRequestProducts();
  }, [onRequestProducts]);

  return (
    <div className="App">
      <Navbar />
      <OfficeHeader />
      <div className="OverTable">
        <ToggleStock
        //  onStock={onStock}
        // isUnchecked={isUnchecked}
        />
        <SearchBox onInputChange={onInputChange} inputField={inputField} />
        <OrderDropDown handleOrder={handleOrder} />
        <CategoryDropdown
          handleCategory={handleCategory}
          restoreProducts={restoreProducts}
        />
        <ResetAllButton restoreProducts={restoreProducts} />
      </div>
      <Cart
        products={productsByName}
        onSubmit={onSubmit}
        // addItem={addItem}
        // removeItem={removeItem}
        // onCheckboxCheck={onCheckboxCheck}
      />
      <Checkout products={checkout} />
      <OfficeFooter />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);