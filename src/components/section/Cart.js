import React, { Component } from 'react'
import { DataContext } from '../Context'
import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;
    state = {
        text: "Order Received"
    }

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const { cart, price, removeProduct, total } = this.context;

        const changeText = (text) => {
            this.setState({ text });
        }
    
        if (cart.length === 0) {
            return <h2 style={{ textAlign: "center", color: "#264d59" }}>Please add something in the cart first</h2>
        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <div className="details cart" key={item.id}>
                                <img src={item.url} alt="" style={{height:'200px',width:'200px'}}/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${price}</span>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                            </div>
                        ))
                        }
                    <div className="total">
                        <button onClick={changeText}>Order Now</button>
                        <h3>Total: ${total}</h3>
                    </div>
                    
                </>
            )
        }
    }
}

export default Cart
