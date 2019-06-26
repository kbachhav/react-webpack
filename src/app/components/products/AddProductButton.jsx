import React from 'react';

import { withRouter } from "react-router-dom";

const AddProductButton = withRouter(({ history }) => {
    // console.log("ADD - ", args);
    return (
        <button className="btn btn-primary" onClick={() => {
            history.push("/product");
        }}>
            Add Product
        </button>
    );
});

export default AddProductButton;