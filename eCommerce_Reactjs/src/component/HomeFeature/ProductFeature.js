import React, { useEffect, useState } from 'react';
import ItemProduct from '../Product/ItemProduct';
import HeaderContent from '../Content/HeaderContent';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductFeature.scss';
import { getProductFeatureService } from '../../services/userService';
function ProductFeature(props) {
    let settings = {
        dots: false,
        Infinity: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

    return (

        // <section className="feature_product_area section_gap_bottom_custom">
        //     <div className="container">
        //         <HeaderContent mainContent={props.title}
        //             infoContent="Bạn sẽ không thất vọng khi lựa chọn"> </HeaderContent>
        //
        //         <div className="row box-productFeature">
        //             <Slider {...settings}>
        //                 {props.data && props.data.length > 3 &&
        //                     props.data.map((item, index) => {
        //                         return (
        //                             <ItemProduct id={item.id} key={index} width={350} height={419} type="col-lg-4 col-md-6" name={item.name} img={item.productDetail[0].productImage[0].image}
        //                                 price={item.productDetail[0].originalPrice} discountPrice={item.productDetail[0].discountPrice}>
        //                             </ItemProduct>
        //                         )
        //                     })
        //                 }
        //
        //
        //             </Slider>
        //         </div>
        //
        //
        //
        //     </div>
        // </section>

        <section className="feature_product_area section_gap_bottom_custom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <h2><span>Featured product</span></h2>
                            <p>Bring called seed first of third give itself now ment</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                            <div className="product-img">
                                <img className="img-fluid w-100" src="img/product/feature-product/f-p-1.jpg" alt=""/>
                                <div className="p_icon">
                                    <a href="#">
                                        <i className="ti-eye"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-heart"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-shopping-cart"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-btm">
                                <a href="#" className="d-block">
                                    <h4>Latest men’s sneaker</h4>
                                </a>
                                <div className="mt-3">
                                    <span className="mr-4">$25.00</span>
                                    <del>$35.00</del>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                            <div className="product-img">
                                <img className="img-fluid w-100" src="img/product/feature-product/f-p-2.jpg" alt=""/>
                                <div className="p_icon">
                                    <a href="#">
                                        <i className="ti-eye"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-heart"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-shopping-cart"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-btm">
                                <a href="#" className="d-block">
                                    <h4>Red women purses</h4>
                                </a>
                                <div className="mt-3">
                                    <span className="mr-4">$25.00</span>
                                    <del>$35.00</del>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                            <div className="product-img">
                                <img className="img-fluid w-100" src="img/product/feature-product/f-p-3.jpg" alt=""/>
                                <div className="p_icon">
                                    <a href="#">
                                        <i className="ti-eye"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-heart"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-shopping-cart"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-btm">
                                <a href="#" className="d-block">
                                    <h4>Men stylist Smart Watch</h4>
                                </a>
                                <div className="mt-3">
                                    <span className="mr-4">$25.00</span>
                                    <del>$35.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ProductFeature;