import classes from "./about.module.scss";
import smallImg1 from './../../img/nat-1.jpg'
import largeImg1 from './../../img/nat-1-large.jpg';
import smallImg2 from './../../img/nat-2.jpg'
import largeImg2 from './../../img/nat-2-large.jpg';
import smallImg3 from './../../img/nat-3.jpg'
import largeImg3 from './../../img/nat-3-large.jpg';


const About = () => {
    return (
            <section className={classes.sectionAbout}>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with
                            nature</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                            aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have
                            before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt
                            voluptatum nam.
                        </p>

                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">

                            <img srcSet={`${smallImg1} 300w, ${largeImg1} 1000w`}
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 1"
                                 className="composition__photo composition__photo__p1"
                                 src={`${largeImg1}`}/>

                            <img srcSet={`${smallImg2} 300w, ${largeImg2} 1000w`}
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 2"
                                 className="composition__photo composition__photo__p2"
                                 src={`${largeImg2}`}/>

                            <img srcSet={`${smallImg3} 300w, ${largeImg3} 1000w`}
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 3"
                                 className="composition__photo composition__photo__p3"
                                 src={`${largeImg3}`}/>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default About;
