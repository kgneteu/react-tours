import classes from './tour-card.module.scss'

const TourCard = ({cid, title, price, children}) => {
    return (

        <div className={classes.card}>
            <div className={`${classes.card__side} ${classes.card__side__front}`}>
                <div className={`${classes.card__picture} ${classes[`card__picture__${cid}`]}`}>
                    &nbsp;
                </div>
                <h4 className={classes.card__heading}>
                    <span
                        className={`${classes.card__heading_span} ${classes[`card__heading_span__${cid}`]}`}>{title}
                    </span>
                </h4>
                <div className={classes.card__details}>
                    {children}
                </div>
            </div>
            <div className={`${classes.card__side} ${classes.card__side__back} ${classes[`card__side__back_${cid}`]}`}>
                <div className={classes.card__cta}>
                    <div className={classes.card__price_box}>
                        <p className={classes.card__price_only}>Only</p>
                        <p className={classes.card__price_value}>{price}</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
