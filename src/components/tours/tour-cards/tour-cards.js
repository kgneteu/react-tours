import TourCard from "../tour-card/tour-card";

const TourCards = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-1-of-3">
                    <TourCard title={"The Sea Explorer"} price={"$299"} cid={1}>
                        <ul>
                            <li>3 day tours</li>
                            <li>Up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>Sleep in cozy hotels</li>
                            <li>Difficulty: easy</li>
                        </ul>
                    </TourCard>
                </div>
                <div className="col-1-of-3">
                    <TourCard title={"The Forest Hiker"} price={"$499"} cid={2}>
                        <ul>
                            <li>7 day tours</li>
                            <li>Up to 40 people</li>
                            <li>6 tour guides</li>
                            <li>Sleep in provided tents</li>
                            <li>Difficulty: medium</li>
                        </ul>
                    </TourCard>
                </div>
                <div className="col-1-of-3">
                    <TourCard title={"The Snow Adventurer"} price={"$899"} cid={3}>
                        <ul>
                            <li>5 day tours</li>
                            <li>Up to 15 people</li>
                            <li>3 tour guides</li>
                            <li>Sleep in provided tents</li>
                            <li>Difficulty: hard</li>
                        </ul>
                    </TourCard>
                </div>
            </div>
        </div>
    );
};

export default TourCards;
