import 'bootstrap';
import React, { useState, useEffect } from "react";
import styles from "../Cart/Cart.module.css";
import { connect } from "react-redux";


const Checkout = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
  
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
      });
  
      setTotalItems(items);
      setTotalPrice(price);
      
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    function successPayment(params) {
        alert("Your transaction was failed, check, that you have enough money!")
    }


    return (
        <div className="container">
        
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <form className="container">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
                </div>
                <div className="form-group col-md-6">
                <label for="inputAddress">Surname</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Ivanov"></input>
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Name</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Ivan"></input>
            </div>
            <div className="form-group">
                <label for="inputAddress2">Address</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"></input>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"></input>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={successPayment}>Sent</button>
        </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  export default connect(mapStateToProps) (Checkout);