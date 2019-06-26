import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListComponent from '../../components/products/ProductListComponent';

import * as productActions from '../../actions/productActions';
import AddProductButton from '../../components/products/AddProductButton';

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(p, e) {
        e.preventDefault();
        this.props.deleteProduct(p);
    }

    render() {
        return (
            <div>
                <AddProductButton />
                <ProductListComponent products={this.props.products}
                    onDelete={this.deleteProduct} />
            </div>
        );
    }

    componentDidMount() {
        this.props.loadProducts();
    }
}

function mapStateToProps(state) {
    return {
        products: state.productReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: () => dispatch(productActions.loadProducts()),
        deleteProduct: (product) => dispatch(productActions.deleteProduct(product))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);