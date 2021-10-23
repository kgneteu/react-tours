import classes from "./stories.module.scss";
import video1 from '../../assets/img/video.mp4'
import video2 from '../../assets/img/video.webm'

const Story = ({title, person, children, img}) => {
    const imgURL=require(`../../assets/img/${img}`).default;
    return (
        <div className={classes.story}>
            <figure className={classes.story__shape}>
                <img src={imgURL}
                     alt={`${person} - on a tour`}
                     className={classes.story__img}/>
                <figcaption className={classes.story__caption}>{person}</figcaption>
            </figure>
            <div className={classes.story__text}>
                <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
                <p>
                    {children}
                </p>
            </div>
        </div>)
};

const Stories = () => {
    return (
        <section className={classes.section_stories}>
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={video1} type="video/mp4"/>
                    <source src={video2} type="video/webm"/>
                    Your browser is not supported!
                </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>

            <div className="row">
                <Story title={'I had the best week ever with my family'}
                       person={'Mary Smith'}
                       img={'nat-8.jpg'}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                    aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
                    aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                </Story>
            </div>

            <div className="row">
                <Story title={'WOW! My life is completely different now'}
                       person={'Jack Wilson'}
                       img={'nat-9.jpg'}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                    aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
                    aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                </Story>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="/#" className="btn-text">Read all stories &rarr;</a>
            </div>
        </section>
    );
};

export default Stories;
