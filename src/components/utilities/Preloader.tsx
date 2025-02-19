//import aixorBigLogo from "/assets/images/codeblack-big-logo.svg"

const Preloader = () => {
    return (
        <>
            <div className="preloader-wrap">
            <video 
                loop 
                muted 
                autoPlay
                playsInline
                preload="auto"
                webkit-playsinline="true"
            >
                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                </video>
                {/* <img src={aixorBigLogo} alt="Logo" /> */}
            </div>
        </>
    );
};

export default Preloader;