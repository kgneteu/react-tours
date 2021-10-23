import classes from "./tours.module.scss";
import TourCards from "./tour-cards/tour-cards";

const Tours = () => {
    return (
        <section className={classes.section_tours} id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most popular tours
                </h2>
            </div>
            <TourCards/>

            <div className="u-center-text u-margin-top-huge">
                <a href="/#" className="btn btn--green">Discover all tours</a>
            </div>
        </section>
    );
};

export default Tours;
