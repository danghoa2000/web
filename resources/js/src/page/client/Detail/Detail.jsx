import React from 'react';
import SliderProduct from './SliderProduct';
import "./detail.scss"
import "../../../../components/client/MainPage/home.css"
import Sdata from '../../../../components/client/MainPage/Sdata'
import { BASE_URL } from '../../../../constants/constants';

const Detail = ({ qty, setQty }) => {

    const customPaging = (i) => {
        return (
            <a key={i}>
                <img src={BASE_URL + Sdata[i].cover} />
            </a>
        );
    }
    return (
        <section className='detail py-5'>
            <div className="container">
                <div className="detail__product">
                    <div className="detail__product__slide" style={{ width: "50%" }}>
                        <SliderProduct
                            slideClass={"homeSlide"}
                            dots={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            autoplay={true}
                            data={Sdata}
                            customPaging={customPaging}
                            dotsClass={"custom-dot m-auto"}
                        />
                    </div>
                    <div className="detail__product__info" style={{ width: "50%" }}>
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
                                value={qty}
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