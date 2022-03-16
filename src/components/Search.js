import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import $ from 'jquery';

const myProducts = [
    {
        id: 'p_8',
        name: 'Venus pride',
        length: '596mm',
        width: '612mm',
        image: '../images/img-8.jpg',
    },
    {
        id: 'p_9',
        name: 'Venus Prime',
        length: '596mm',
        width: '612mm',

        image: '../images/img_9.jpg',
    },
    {
        id: 'p_10',
        name: 'Venus WP1',
        length: '754mm',
        width: '600mm',
        image: '../images/img_10.jpg',
    },
    {
        id: 'p_11',
        name: 'Venus WP2',
        length: '765mm',
        width: '636mm',
        image: '../images/img_11.jpg',
    },
    {
        id: 'p_6',
        name: 'Venus Excel',
        length: '562mm',
        width: '612mm',
        image: '../images/img_6.jpg',
    },
    {
        id: 'p_3',
        name: 'Pluto',
        length: '497mm',
        width: '540mm',
        image: '../images/img_3.JPG',
    },

    {
        id: 'p_7',
        name: ' Venus Gang Chair 2 seater',
        length: '1890mm',
        width: '610mm',
        image: '../images/img-7.jpg',
    },
    {
        id: 'p_2',
        name: 'Jupiter Gang Chair 2 seater',
        length: '1242mm',
        width: '623mm',
        image: '../images/img_2.png',
    },
    {
        id: 'p_4',
        name: 'Jupiter Gang Chair 3 seater',
        length: '1830mm',
        width: '623mm',
        image: '../images/img_4.jpg',
    },

    {
        id: 'p_1',
        name: 'Junior Jupiter Gang Chair 2 side table',
        length: '1455mm',
        width: '610mm',
        image: '../images/img_1 .jpg',
    },
    {
        id: 'p_5',
        name: 'Table Square / Rectangular',
        length: '900mm',
        width: '900mm',
        image: '../images/img_5.jpg',
    },
];

let myFunction = () => {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
};
export default function Search() {
    const [cart, setCart] = useState([]);

    const addToCart = (el) => setCart(cart.concat(el));
    console.log(cart.length);
    const removeCart = () => {
        setCart([]);
    };
    const passData = () => {
        console.log(cart);
        localStorage.setItem('cart', cart);
    };
    const Quantity = () => {
        for (let i = 0; i < cart.length; i++) {
            let Quant = document.getElementById('quantity_' + [i]).value;
            localStorage.setItem('quant_' + [i], Quant);
            console.log(Quant);
        }
    };

    return (
        <div className="container" id="container_1" style={{ marginTop: '100px' }}>
            <input
                type="text"
                id="myInput"
                onKeyUp={myFunction}
                placeholder="Search for names.."
            ></input>
            <h1 className="display-1 ">List of Products</h1>
            <ul id="myUL">
                {myProducts.map((elem) => (
                    <li key={elem.id}>
                        <a>
                            <h4>{elem.name}</h4>
                            <img src={elem.image} alt={elem.name} />
                            <h5 className="my-2">
                                Length:
                                <span>{elem.length}</span>
                            </h5>

                            <h5 className="my-2">
                                Width:
                                <span>{elem.width}</span>
                            </h5>

                            <button
                                type="submit"
                                className="btn"
                                type="submit"
                                onClick={() => addToCart(elem.name)}
                            >
                                Add to cart
                            </button>
                        </a>
                    </li>
                ))}
            </ul>
            <hr></hr>
            <div className="container cart-page" id="container_2">
                <div className="container" id="quantity">
                    <h1 className="text-center text-light">
                        <i className="fas fa-tasks"></i>Quantity Specification
                    </h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                            </tr>
                            {cart.map((elem, index) => (
                                <tr key={index}>
                                    <td>{elem}</td>
                                    <td>
                                        <input
                                            type="number"
                                            onChange={Quantity}
                                            id={`quantity_${index}`}
                                        ></input>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="btndiv">
                        <a className="btn btn-dark mx-2 shadow" onClick={removeCart} type="button">
                            Remove
                        </a>
                        <Link
                            className="btn btn-dark mx-2 shadow"
                            onClick={passData}
                            to="/Layout"
                            type="button"
                        >
                            Let's Go
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
