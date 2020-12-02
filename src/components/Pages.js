import React, { Component } from 'react'
import Products from './pages/Products'
import Details from './pages/Details'
import { Route } from "react-router-dom"
import Cart from './pages/Cart'

export class Section extends Component {
    render() {
        return (
            <section>
                {/* Routes to each page */}
                <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} exact />
                <Route path="/cart" component={Cart} exact />
            </section>
        )
    }
}

export default Section
