import * as actionTypes from './actionTypes';
import productAPIClient from '../services/productAPIClient';

function loadProductsSuccess(products) {
    return { type: actionTypes.LOAD_PRODUCTS_SUCCESS, payload: products };
}

function insertProductSuccess(product) {
    return { type: actionTypes.INSERT_PRODUCT_SUCCESS, payload: product };
}

function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

function deleteProductSuccess(product) {
    return { type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: product };
}

export function loadProducts() {
    return function (dispatch) {
        productAPIClient.getAllProducts().then((products) => {
            dispatch(loadProductsSuccess(products));
        }, (eMsg) => {
            throw Error(eMsg);
        })
    }
}

export function insertProduct(product) {
    return function (dispatch) {
        productAPIClient.insertProduct(product).then((product) => {
            dispatch(insertProductSuccess(product));
        }, (eMsg) => {
            throw Error(eMsg);
        })
    }
}

export function updateProduct(product) {
    return function (dispatch) {
        productAPIClient.updateProduct(product).then((product) => {
            dispatch(updateProductSuccess(product));
        }, (eMsg) => {
            throw Error(eMsg);
        })
    }
}

export function deleteProduct(product) {
    return function (dispatch) {
        productAPIClient.deleteProduct(product).then(() => {
            dispatch(deleteProductSuccess(product));
        }, (eMsg) => {
            throw Error(eMsg);
        })
    }
}
