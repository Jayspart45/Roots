import React from 'react';
import { useEffect } from 'react';
export default function Layout() {
    useEffect(() => {
        let cart = localStorage.getItem('cart');
        console.log(cart);
        console.log(cart.split(','));
        let cartStorage = cart.split(',');
    }, []);
    const Calculate = () => {
        let lena = document.getElementById('length').value;
        let btha = document.getElementById('width').value;
        let rowa = document.getElementById('row').value;
        let cola = document.getElementById('col').value;
        let unit = document.getElementById('unit').value;
        localStorage.setItem('len', lena);
        localStorage.setItem('bth', btha);
        localStorage.setItem('rowa', rowa);
        localStorage.setItem('cola', cola);
        localStorage.setItem('unit', unit);
        var len = localStorage.getItem('len');
        var bth = localStorage.getItem('bth');
        var rowb = localStorage.getItem('rowa');
        var colb = localStorage.getItem('cola');
        // var feet = 152;
        // var ft = 152;
        // var mil = 0.49856; // 1mm(0.003652) *152
        // var centi = 4.92; // 1cm(0.03652)*152
        // var meter = 498.68768; //1m(3.652)*152

        // if (unit == 'Mm') {
        //     var len = length * mil + 'px';
        //     var bth = breath * mil + 'px';
        //     var row = Row * mil + 'px';
        //     var col = columnv * mil + 'px';
        //     var space = spaceO * mil;
        //     var spaceA = spaceB * mil;
        //     console.log(space);
        // } else if (unit == 'feet') {
        //     var len = length * ft + 'px';
        //     var bth = breath * ft + 'px';
        //     var row = Row * ft + 'px';
        //     var col = columnv * ft + 'px';
        //     var space = spaceO * ft;
        //     var spaceA = spaceB * ft;

        //     console.log(space);
        // } else if (unit == 'Cm') {
        //     var len = length * centi + 'px';
        //     var bth = breath * centi + 'px';
        //     var row = Row * centi + 'px';
        //     var col = columnv * centi + 'px';
        //     var space = spaceO * centi;
        //     var spaceA = spaceB * centi;

        //     console.log(space);
        //     console.log(spaceA);
        //     console.log(row);
        //     console.log(col);
        // } else if (unit == 'M') {
        //     var len = length * meter + 'px';
        //     var bth = breath * meter + 'px';
        //     var row = Row * meter + 'px';
        //     var col = columnv * meter + 'px';
        //     var space = spaceO * meter;
        //     var spaceA = spaceB * meter;

        //     console.log(space);
        // }
        // let spaceX = space + 'px';
        // let spaceY = spaceA + 'px';
        // let spaceZ = spaceA + 'px';
        // console.log(spaceX);
        // if (unit == 'feet') {
        //     var newQuan =
        //         Math.trunc((Row * feet - spaceA * 2) / (widthp + space)) *
        //         Math.trunc((columnv * feet - spaceA * 2) / (heightp + space));
        //     localStorage.setItem('Quant1', newQuan);
        // }

        // if (unit == 'M') {
        //     var newQuan =
        //         Math.trunc((Row * meter - spaceA * 2) / (widthp + space)) *
        //         Math.trunc((columnv * meter - spaceA * 2) / (heightp + space));
        //     localStorage.setItem('Quant1', newQuan);
        // }
        // if (unit == 'Cm') {
        //     var newQuan =
        //         Math.trunc((Row * centi - spaceA * 2) / (widthp + space)) *
        //         Math.trunc((columnv * centi - spaceA * 2) / (heightp + space));
        //     localStorage.setItem('Quant1', newQuan);
        // }
        // if (unit == 'Mm') {
        //     var newQuan =
        //         Math.trunc((Row * mil - spaceA * 2) / (widthp + space)) *
        //         Math.trunc((columnv * mil - spaceA * 2) / (heightp + space));
        //     localStorage.setItem('Quant1', newQuan);
        // }

        // if (parseInt(quant) <= newQuan) {
        //     buildLayout();
        // } else {
        //     console.log(Math.round(newQuan));
        //     reduceQuantity(Math.round(newQuan));
        // }

        // document.getElementById('layout').style.gap = spaceX;
        // document.getElementById('layout').style.padding = spaceY;
        document.getElementById('layout').style.height = colb;
        document.getElementById('layout').style.width = rowb;
        document.getElementById('area').style.height = len;
        document.getElementById('area').style.width = bth;
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
                                <div id="p_1" className="p"></div>
                                <div id="p_2" className="p"></div>
                                <div id="p_3" className="p"></div>
                                <div id="p_4" className="p"></div>
                                <div id="p_5" className="p"></div>
                                <div id="p_6" className="p"></div>
                                <div id="p_7" className="p"></div>
                                <div id="p_8" className="p"></div>
                                <div id="p_9" className="p"></div>
                                <div id="p_10" className="p"></div>
                                <div id="p_11" className="p"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
