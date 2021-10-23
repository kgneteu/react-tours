import classes from "./features.module.scss"

const FeatureBox = ({title, children, icon}) => (
    <div className={classes["feature_box"]}>
        <i className={`${classes.feature_box__icon} ${icon}`}/>
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p className="feature-box__text">
            {children}
        </p>
    </div>);

const Features = () => {
    return (
        <section className={classes['section-features']}>

            <div className="row">
                <div className="col-1-of-4">
                    <FeatureBox title={'Explore the world'} icon={'icon-basic-world'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                        aspernatur.
                    </FeatureBox>
                </div>

                <div className="col-1-of-4">
                    <FeatureBox title={'Meet nature'} icon={'icon-basic-compass'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                        aspernatur.
                    </FeatureBox>
                </div>

                <div className="col-1-of-4">
                    <FeatureBox title={'Find your way'} icon={'icon-basic-map'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                        aspernatur.
                    </FeatureBox>
                </div>

                <div className="col-1-of-4">
                    <FeatureBox title={'Live a healthier life'} icon={'icon-basic-heart'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                        aspernatur.
                    </FeatureBox>
                </div>

            </div>
        </section>
    );
};

export default Features;
