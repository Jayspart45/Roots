import { product } from 'prelude-ls';
import React from 'react';
import { useEffect } from 'react';
import prod from '../product1.json';
export default function Layout() {
    let id = localStorage.getItem('id');
    let idstorage = id.split(',');

    useEffect(() => {
        let cart = localStorage.getItem('cart');

        console.log(cart);
        console.log(cart.split(','));
        let cartStorage = cart.split(',');
        console.log(idstorage);
        const exportfunc = () => {
            const product = prod.product;

            console.log(product);
        };
        exportfunc();
        // const [cartindex, setcartindex] = useState([]);
    }, []);

    const Calculate = () => {
        let lena = document.getElementById('length').value;
        let btha = document.getElementById('width').value;
        let rowa = document.getElementById('row').value;
        let cola = document.getElementById('col').value;
        var unit = document.getElementById('unit').value;
        var spaceo = document.getElementById('spaceo').value;
        var spaceb = document.getElementById('spaceb').value;

        localStorage.setItem('len', lena);
        localStorage.setItem('bth', btha);
        localStorage.setItem('rowa', rowa);
        localStorage.setItem('cola', cola);
        localStorage.setItem('unit', unit);
        localStorage.setItem('spaceo', spaceo);
        localStorage.setItem('spaceb', spaceb);

        var length = localStorage.getItem('len');
        var breath = localStorage.getItem('bth');
        var Row = localStorage.getItem('rowa');
        var columnv = localStorage.getItem('cola');

        var unit = localStorage.getItem('unit');
        var spaceo = localStorage.getItem('spaceo');
        var spaceb = localStorage.getItem('spaceb');

        console.log(unit);

        let spaceO = Number(spaceo);
        let spaceB = Number(spaceb);
        console.log(spaceO);
        console.log(spaceB);

        var ft = 152;
        var mil = 0.49856; // 1mm(0.003652) *152
        var centi = 4.92; // 1cm(0.03652)*152
        var meter = 498.68768; //1m(3.652)*152

        if (unit == 'Mm') {
            var len = length * mil + 'px';
            var bth = breath * mil + 'px';
            var row = Row * mil + 'px';
            var col = columnv * mil + 'px';
            var space = spaceO * mil;
            var spaceA = spaceB * mil;
            console.log(space);
        } else if (unit == 'feet') {
            var len = length * ft + 'px';
            var bth = breath * ft + 'px';
            var row = Row * ft + 'px';
            var col = columnv * ft + 'px';
            var space = spaceO * ft;
            var spaceA = spaceB * ft;

            console.log(space);
        } else if (unit == 'Cm') {
            var len = length * centi + 'px';
            var bth = breath * centi + 'px';
            var row = Row * centi + 'px';
            var col = columnv * centi + 'px';
            var space = spaceO * centi;
            var spaceA = spaceB * centi;

            console.log(space);
            console.log(spaceA);
            console.log(row);
            console.log(col);
        } else if (unit == 'M') {
            var len = length * meter + 'px';
            var bth = breath * meter + 'px';
            var row = Row * meter + 'px';
            var col = columnv * meter + 'px';
            var space = spaceO * meter;
            var spaceA = spaceB * meter;

            console.log(space);
        }

        let spaceX = space + 'px';
        let spaceY = spaceA + 'px';
        console.log(spaceX);

        document.getElementById('layout').style.gap = spaceX;
        document.getElementById('layout').style.padding = spaceY;
        document.getElementById('layout').style.height = col;
        document.getElementById('layout').style.width = row;
        document.getElementById('area').style.height = len;
        document.getElementById('area').style.width = bth;

        if (unit == 'feet') {
            var newQuan =
                // Math.trunc((Row * ft - spaceA * 2) / (widthp + space)) *
                // Math.trunc((columnv * ft - spaceA * 2) / (heightp + space));
                console.log(newQuan);

            localStorage.setItem('Quant1', newQuan);
        }
        
    };

    return (
        <div>
            <section>
                <div className="container" id="input">
                    <div>
                        <label>
                            Length:
                            <input type="number" id="length" />
                        </label>
                        <label>
                            Width:
                            <input type="number" id="width" />
                        </label>
                        <label>
                            Row :
                            <input type="number" id="row" />
                        </label>
                        <label>
                            Col:
                            <input type="number" id="col" />
                        </label>
                        <label>
                            Border Spacing
                            <input type="number" id="spaceb" />
                        </label>
                        <label>
                            Object Spacing
                            <input type="number" id="spaceo" />
                        </label>
                        <label>
                            Unit
                            <select id="unit">
                                <option value="feet">Feet</option>
                                <option value="M">Meter</option>
                                <option value="Cm">Centimeter</option>
                                <option value="Mm">Milimeter</option>
                            </select>{' '}
                        </label>
                        <button className="btn " onClick={Calculate}>
                            Show Layout
                        </button>
                    </div>

                    <div>
                        <label>
                            Quantity:
                            <input type="number" id="quantA" />
                        </label>
                        <a href="#layout" className="btn" type="submit">
                            Change Quantity
                        </a>
                    </div>
                </div>
            </section>
            <div className="container" id="sidebarcont">
                <section className="menu">
                    <a className="btn" type="button" href="#layout">
                        Print
                    </a>
                    <a className="btn" type="button" href="#layout">
                        Row
                    </a>
                    <a className="btn" type="button" href="#layout">
                        Row-Reverse
                    </a>
                    <a className="btn" type="button" href="#layout">
                        Column
                    </a>
                    <a className="btn" type="button" href="#layout">
                        Column-Reverse
                    </a>
                    <a className="btn" type="button" href="#layout">
                        flex-start(V)
                    </a>
                    <a className="btn" type="button" href="#layout">
                        center(V)
                    </a>
                    <a className="btn" type="button" href="#layout">
                        flex-end(V)
                    </a>
                    <a className="btn" type="button" href="#layout">
                        flex-start(H)
                    </a>
                    <a className="btn" type="button" href="#layout">
                        center(H)
                    </a>
                    <a className="btn" type="button" href="#layout">
                        flex-end(H)
                    </a>
                    <a className="btn" type="button" href="#layout">
                        Rotate90
                    </a>

                    <a href="#layout" className="btn" type="button">
                        Remove Quantity
                    </a>
                </section>

                <section className="content">
                    <div className="container m-0 p-0 " id="container_3">
                        <div className="area " id="area">
                            <div id="layout">
                                {idstorage.map((id, index) => (
                                    <div className="p" key={index} id={`${id}`}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
