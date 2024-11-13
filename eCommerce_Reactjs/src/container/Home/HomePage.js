import React, { useState, useEffect } from "react";
import HomeBanner from "../../component/HomeFeature/HomeBanner";
import MainFeature from "../../component/HomeFeature/MainFeature";
import ProductFeature from "../../component/HomeFeature/ProductFeature";
import NewProductFeature from "../../component/HomeFeature/NewProductFeature";
import HomeBlog from "../../component/HomeFeature/HomeBlog";
import {
  getAllBanner,
  getProductFeatureService,
  getProductNewService,
  getNewBlog,
  getProductRecommendService,
} from "../../services/userService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomePage(props) {
  const [dataProductFeature, setDataProductFeature] = useState([]);
  const [dataNewProductFeature, setNewProductFeature] = useState([]);
  const [dataNewBlog, setdataNewBlog] = useState([]);
  const [dataBanner, setdataBanner] = useState([]);
  const [dataProductRecommend, setdataProductRecommend] = useState([]);
  let settings = {
    dots: false,
    Infinity: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "linear",
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      fetchProductRecommend(userData.id);
    }
    fetchBlogFeature();
    fetchDataBrand();
    fetchProductFeature();
    fetchProductNew();

    window.scrollTo(0, 0);
  }, []);
  let fetchBlogFeature = async () => {
    let res = await getNewBlog(3);
    if (res && res.errCode === 0) {
      setdataNewBlog(res.data);
    }
  };
  let fetchProductFeature = async () => {
    let res = await getProductFeatureService(6);
    if (res && res.errCode === 0) {
      setDataProductFeature(res.data);
    }
  };
  let fetchProductRecommend = async (userId) => {
    let res = await getProductRecommendService({
      limit: 20,
      userId: userId,
    });
    if (res && res.errCode === 0) {
      setdataProductRecommend(res.data);
    }
  };
  let fetchDataBrand = async () => {
    let res = await getAllBanner({
      limit: 6,
      offset: 0,
      keyword: "",
    });
    if (res && res.errCode === 0) {
      setdataBanner(res.data);
    }
  };
  let fetchProductNew = async () => {
    let res = await getProductNewService(8);
    if (res && res.errCode === 0) {
      setNewProductFeature(res.data);
    }
  };
  return (
    <div>
      <Slider {...settings}>
        {dataBanner &&
          dataBanner.length > 0 &&
          dataBanner.map((item, index) => {
            return (
              <HomeBanner image={item.image} name={item.name}></HomeBanner>
            );
          })}
      </Slider>

      <MainFeature></MainFeature>
      {/* <ProductFeature
        title={"Gợi ý sản phẩm"}
        data={dataProductRecommend}
      ></ProductFeature>
      */}
      <ProductFeature
        title={"Sản phẩm đặc trưng"}
        data={dataProductFeature}
      ></ProductFeature>
       <section class=" section_gap_bottom_custom">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="main_title">
                <h2>
                  <span>new products</span>
                </h2>
                <p>Bring called seed first of third give itself now ment</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="new_product">
                <h5 class="text-uppercase">collection of 2019</h5>
                <h3 class="text-uppercase">Men’s summer t-shirt</h3>
                <div class="product-img">
                  <img
                    class="img-fluid"
                    src="http://localhost:5000/resources/img/product/new-product/new-product1.png"
                    alt=""
                  />
                </div>
                <h4>$120.70</h4>
                <a href="#" class="main_btn">
                  Add to cart
                </a>
              </div>
            </div>

            <div class="col-lg-6 mt-5 mt-lg-0">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="single-product">
                    <div class="product-img">
                      <img
                        class="img-fluid w-100"
                        src="http://localhost:5000/resources/img/product/new-product/n4.jpg"
                        alt=""
                      />
                      <div class="p_icon">
                        <a href="#">
                          <i class="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i class="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i class="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-btm">
                      <a href="#" class="d-block">
                        <h4>Nike latest sneaker</h4>
                      </a>
                      <div class="mt-3">
                        <span class="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="single-product">
                    <div class="product-img">
                      <img
                        class="img-fluid w-100"
                        src="http://localhost:5000/resources/img/product/new-product/n2.jpg"
                        alt=""
                      />
                      <div class="p_icon">
                        <a href="#">
                          <i class="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i class="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i class="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-btm">
                      <a href="#" class="d-block">
                        <h4>Men’s denim jeans</h4>
                      </a>
                      <div class="mt-3">
                        <span class="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="single-product">
                    <div class="product-img">
                      <img
                        class="img-fluid w-100"
                        src="http://localhost:5000/resources/img/product/new-product/n3.jpg"
                        alt=""
                      />
                      <div class="p_icon">
                        <a href="#">
                          <i class="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i class="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i class="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-btm">
                      <a href="#" class="d-block">
                        <h4>quartz hand watch</h4>
                      </a>
                      <div class="mt-3">
                        <span class="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="single-product">
                    <div class="product-img">
                      <img
                        class="img-fluid w-100"
                        src="http://localhost:5000/resources/img/product/new-product/n4.jpg"
                        alt=""
                      />
                      <div class="p_icon">
                        <a href="#">
                          <i class="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i class="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i class="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-btm">
                      <a href="#" class="d-block">
                        <h4>adidas sport shoe</h4>
                      </a>
                      <div class="mt-3">
                        <span class="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewProductFeature
        title="Inspired products"
        description="Bring called seed first of third give itself now ment"
        data={dataNewProductFeature}
      ></NewProductFeature>
      <HomeBlog data={dataNewBlog} />
    </div>
  );
}

export default HomePage;
