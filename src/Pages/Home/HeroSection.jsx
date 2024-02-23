export default function HeroSection(){
    return (
    <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey, I am Sirisha</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Full Stack</span>
                    <br />
                    Developer
                </h1>
                <p className="hero--section--description">
                    I am a motivated and versatile individual, always eager to take on new challenges.
                    <br />
                    With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
            <img src="./img/siri_pic.png" alt="HeroSection" />
        </div>
    </section>
        );
}