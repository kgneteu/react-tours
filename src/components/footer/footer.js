import classes from "./footer.module.scss";
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer__logo-box">

                    <picture className="footer__logo">
                        <source srcSet="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                                media="(max-width: 37.5em)"/>
                        <img srcSet="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo"
                             src="img/logo-green-2x.png"/>
                    </picture>


                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className={classes.footer__navigation}>
                            <ul className="footer__list">
                                <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Company</a></li>
                                <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Contact us</a></li>
                                <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Carrers</a></li>
                                <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Privacy policy</a>
                                </li>
                                <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            Built by <a href="#" className={classes.footer__link}>Jonas Schmedtmann</a> for his online course <a
                            href="#" className={classes.footer__link}>Advanced CSS and Sass</a>.
                            Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both
                            personal
                            and commercial use, but NOT to claim it as your own design. A credit to the original
                            author, Jonas
                            Schmedtmann, is of course highly appreciated!
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
