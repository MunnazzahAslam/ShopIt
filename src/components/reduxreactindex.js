import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [],
        cart: [],
        total: 0,
        price: 5.99
    };

    //Function to add product in cart w.r.t its id

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item.id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("The product has been added to cart.")
        }
    };

    //Function to remove product from cart after confirmation from the user w.r.t its id

    removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart });
            this.getTotal();
        }
    };

    //Function to get total price of products in cart 

    getTotal = () => {
        const { cart, price } = this.state;
        const res = cart.reduce((prev) => {
            return prev + (price);
        }, 0)
        this.setState({ total: res })
    };

    //To update values based on user input
    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
        localStorage.setItem('dataPrice', JSON.stringify(this.state.price))
    };

    //Fetching data from API and updating cart values according to the user selection
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then((response) => response.json())
            .then(productsList => {
                this.setState({ products: productsList });
            });
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart !== null) {
            this.setState({ cart: dataCart });
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if (dataTotal !== null) {
            this.setState({ total: dataTotal });
        }
        const dataPrice = JSON.parse(localStorage.getItem('dataPrice'));
        if (dataPrice !== null) {
            this.setState({ price: dataPrice });
        }
    }


    render() {
        const { products, price, cart, total } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal } = this;
        return (

            //Passing values as props to the consuming components
            <DataContext.Provider
                value={{ products, price, cart, addCart, reduction, increase, removeProduct, total, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


