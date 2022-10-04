import React from 'react';

import "./detail.scss"

const Detail = ({ qty, setQty }) => {
    return (
        <section className='detail'>
            <div className="container">
                <div className="detail__product">
                    <div className="detail__product__slide">

                    </div>
                    <div className="detail__product__info">
                        <h3 className='detail__product__info-name'>Mi Note 11 Pro</h3>
                        <div className='detail__product__info-brand'>
                            Brand: <span>Ziaomi</span>
                        </div>
                        <div className='detail__product__info-rate'>
                            Rated: <span>Ziaomi</span> (50)
                        </div>
                        <p className='detail__product__info-price'>$1135.00</p>
                        <p className='detail__product__info-status'>Stock Available</p>
                        <hr style={{ color: "#2b2b2b", width: "100%", height: "2px" }} />
                        <div className='d-flex align-items-center mb-2'>
                            <label htmlFor="" className='mr-2'>Qty:</label>
                            <input type="number" className='product__qty'
                                min={1}
                                value={qty}
                                pattern='[0-9]{0,5}'
                                onInput={(e) => setQty(e.currentTarget.value)}
                                onChange={(e) => {
                                    let result = e.target.value.replace(/\D/g, '');
                                    if (!result) result = 1
                                    setQty(result);
                                }}
                                onPaste={(e) => e.preventDefault()}
                            />
                            <button type='button' className='btn-add-product ml-2'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;