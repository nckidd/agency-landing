import btnArrowIcon from "/assets/images/btn-arrow.svg";
import { Link } from "react-router-dom";

const HeroV1 = () => {
    return (
        <>
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">

                        {/* Video Section */}
                        <div className="hero-video">
                            <video loop muted autoPlay>
                                <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="hero-top"> 

                            {/* Hero Description */}
                            <div className="hero-top-desc">
                                <p>"Search Engine Optimization is no longer about stuffing keywords and attempting to trick Google into ranking your website. It's about creating a user experience that is data driven. We know what customers are searching for and we know how to get them to a page. It's a combination of science and art to successfully rank a website."</p>
                                {/* <p>Whether it’s developing a brand identity, creating a user-friendly website, or executing a dynamic marketing campaign, we approach every project with the same level of dedication and enthusiasm. “</p> */}
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>Leland Dieno</h4>
                                <span>Founder, Dieno Digital</span>
                            </div>
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>Imagination</h2>
                                <h2>Meets Innovation</h2>
                            </div>

                            {/* Button Section */}
                            <Link to="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <img src={btnArrowIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;