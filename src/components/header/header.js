import classes from "./header.module.scss";
import headerLogo from "./../../img/logo-white.png";

const Header = () => {
    return (
        <div>
            <div className={classes.navigation}>
                <input type="checkbox" className={classes.navigation__checkbox} id="navi-toggle"/>

                <label htmlFor="navi-toggle" className={classes.navigation__button}>
                    <span className={classes.navigation__icon}>&nbsp;</span>
                </label>

                <div className={classes.navigation__background}>&nbsp;</div>

                <nav className={classes.navigation__nav}>
                    <ul className={classes.navigation__list}>
                        <li className={classes.navigation__item}><a href="#" className={classes.navigation__link}><span>01</span>About
                            Natous</a></li>
                        <li className={classes.navigation__item}><a href="#" className={classes.navigation__link}><span>02</span>Your
                            benfits</a></li>
                        <li className={classes.navigation__item}><a href="#" className={classes.navigation__link}><span>03</span>Popular
                            tours</a></li>
                        <li className={classes.navigation__item}><a href="#" className={classes.navigation__link}><span>04</span>Stories</a>
                        </li>
                        <li className={classes.navigation__item}><a href="#" className={classes.navigation__link}><span>05</span>Book
                            now</a></li>
                    </ul>
                </nav>
            </div>

            <header className={classes.header}>
                <div className={classes.header__logo_box}>
                    <img src={headerLogo} alt="Logo" className={classes.header__logo}/>
                </div>

                <div className={classes.header__text_box}>
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Outdoors</span>
                        <span className="heading-primary--sub">is where life happens</span>
                    </h1>

                    <a href="#section-tours" className="btn btn--white btn--animated">Discover our tours</a>
                </div>
            </header>

        </div>
    );
};

export default Header;
