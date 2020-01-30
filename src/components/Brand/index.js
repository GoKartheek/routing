import React from 'react';
import './style.css';
import Layout from '../Layout';

const Brand = (props) => {
    let brand = props.match.params.brand;
    return (
        <Layout>
            <h1>{brand}</h1>
        </Layout>
    )
}

export default Brand;