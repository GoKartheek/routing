import React from 'react';
import './style.css';
import Layout from '../Layout';
import { Link } from 'react-router-dom';

const TShirts = () => {
    let tshirts = [
        {
            id: 1,
            name: 'US-Polo',
            SKU: 'USP-1'
        },
        {
            id: 2,
            name: 'Levis',
            SKU: 'Lev-2'
        },
        {
            id: 3,
            name: 'Pepe',
            SKU: 'Pep-3'
        },
        {
            id: 4,
            name: 'Celio',
            SKU: 'Cel-4'
        }
    ];
    return (
        <Layout>
            <h1>TShirts</h1>
            <div>
                <ul>
                    {
                        tshirts.map(shirt => {
                            return (
                                <li key={shirt.id}>
                                    <Link to={`/t-shirts/${shirt.name}`}>{shirt.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            
        </Layout>
    );
    
}

export default TShirts;