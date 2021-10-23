import classes from "./footer.module.scss";
import footerLogo2 from './../../img/logo-green-2x.png'
import footerLogo1 from './../../img/logo-green-1x.png'
import smallFooterLogo2 from './../../img/logo-green-small-2x.png'
import smallFooterLogo1 from './../../img/logo-green-small-1x.png'

const FooterLink = ({title, link}) => <li className={classes.footer__item}>
    <a href={link} className={classes.footer__link}>{title}</a>
</li>;

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__logo_box}>
                <picture className={classes.footer__logo}>
                    <source srcSet={`${smallFooterLogo1} 1x, ${smallFooterLogo2} 2x`}
                            media="(max-width: 37.5em)"/>
                    <img srcSet={`${footerLogo1} 1x, ${footerLogo2} 2x`}
                         alt="Full logo"
                         src={footerLogo1}/>
                </picture>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className={classes.footer__navigation}>
                        <ul className={classes.footer__list}>
                            <FooterLink title={'Company'} link={'#'}/>
                            <FooterLink title={'Contact'} link={'#'}/>
                            <FooterLink title={'Careers'} link={'#'}/>
                            <FooterLink title={'Privacy policy'} link={'#'}/>
                            <FooterLink title={'Terms'} link={'#'}/>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className={classes.footer__copyright}>
                        Design: Jonas Schmedtmann<br/>
                        React version: Michael Zdolski<br/>
                        <small>You are 100% allowed to use this webpage for both personal and commercial use, but
                            NOT to claim it as your own design.
                        </small>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
