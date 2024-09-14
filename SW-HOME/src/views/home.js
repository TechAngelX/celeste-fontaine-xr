import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = ({ data = {} }) => {
    const { banner = [], iconProducts = [] } = data;

    return (
        <div>
            <header>
                {/* Include your header here */}
            </header>

            <main>
                <div className="container-fluid bg mb-3">
                    <div className="row g-3">
                        <div className="col-md-9">
                            <div id="carouselHomeBanner" className="carousel slide">
                                <Carousel>
                                    {banner.map((item, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                src={item.img}
                                                className="d-block w-100"
                                                alt={item.alt || 'Banner Image'}
                                            />
                                            {index === 0 && <Carousel.Caption><h3>Banner</h3></Carousel.Caption>}
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div id="iconProductsCarousel" className="carousel slide mt-3">
                                <Carousel>
                                    {iconProducts.map((row, rowIndex) => (
                                        <Carousel.Item key={rowIndex}>
                                            <div className="row g-3">
                                                {row.map((product, index) => (
                                                    <div className="col-md-3" key={index}>
                                                        <div className="card">
                                                            <img
                                                                src={`/images/icons/${product.img}.svg`}
                                                                className="card-img-top"
                                                                alt={product.title || 'Product Icon'}
                                                            />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{product.title || 'Product Title'}</h5>
                                                                <p className="card-text">{product.text || 'Product Description'}</p>
                                                                <a href={product.to || '#'} className="btn btn-primary">
                                                                    {product.tips || 'Learn More'}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mb-3">
                                {/* Card Login Content Here */}
                            </div>
                            <div className="card">
                                <img
                                    src="/images/banner/Watches.webp"
                                    className="card-img-top"
                                    alt="Watches"
                                />
                                <a href="promo" className="btn btn-primary">Promo</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-info bg-gradient p-3 text-center mb-3">
                        <h4 className="m-0">Explore Fashion Collection</h4>
                    </div>
                    <div className="container">
                        <div className="row">
                            {[
                                { src: '/images/category/male.webp', alt: "Men's Clothing", text: "Men's Clothing" },
                                { src: '/images/category/female.webp', alt: "Women's Clothing", text: "Women's Clothing" },
                                { src: '/images/category/smartwatch.webp', alt: "Smartwatch", text: "Smartwatch" },
                                { src: '/images/category/footwear.webp', alt: "Footwear", text: "Footwear" },
                            ].map((item, index) => (
                                <div className="col-md-3" key={index}>
                                    <a href="/" className="text-decoration-none">
                                        <img
                                            src={item.src}
                                            className="img-fluid rounded-circle"
                                            alt={item.alt}
                                        />
                                        <div className="text-center h6">{item.text}</div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                {/* Include your footer here */}
            </footer>
        </div>
    );
};

export default Home;
