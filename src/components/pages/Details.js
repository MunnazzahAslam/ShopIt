import React, { Component } from 'react'
import {DataContext} from '../reduxreactindex'
import {Link} from 'react-router-dom'
import '../css/Details.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item.id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }

    render() {
        const {product} = this.state;
        const {price,addCart} = this.context;
        return (
            <>
                {
                    product.map(item =>(
                        <div className="details" key={item.id}>
                            <img src={item.url} alt=""/>
                            <div className="box">
                                <div className="row">
                                   <h3><span>Price: ${price}</span></h3>
                                </div>
                                <Link to="/cart" className="cart" onClick={() => addCart(item.id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details
