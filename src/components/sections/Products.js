import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'

export class Products extends Component {

    static contextType = DataContext;
    state = {
        showBox: false
    };

    handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });

    render() {
        const { products, price, addCart } = this.context;
        return (
            <div id="product">
                {
                    products.map(product => (
                        <div className="card" key={product.id} onMouseEnter={this.handleBoxToggle}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.url} alt="" />
                            </Link>
                            <div className="content">
                                <span>${price}</span>
                                <button onClick={() => addCart(product.id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products
