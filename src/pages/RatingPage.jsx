import BadgeCollection from "./pageComponents/BadgeCollection";
import RatingSystem from "../components/RatingSystem";
import { colorNames } from "./colorNames";
import { colorNamesBadge } from "./colorNamesBadge";
import { GiBananaPeeled } from "react-icons/gi";

export default function BadgePage() {

    return (

        <div>
            <h2 className="text-3xl">Rating</h2>

            <div>
                <RatingSystem rating='7/10' colorRated='pink' colorUnrated="pink-light" size="small" />
                <RatingSystem rating='7/10' colorRated='pink' colorUnrated="pink-light" size="small" />
                <RatingSystem rating='3/5' colorRated='yellow' colorUnrated="yellow-light" size="small" />
                <RatingSystem rating='3/5' icon='1' size="small" />
                <RatingSystem rating='3/5' icon='2' size="xlarge" />
                <RatingSystem rating='3/5' icon='3' size="xlarge" />
                <RatingSystem rating='4/5' icon='4' size="large" />
                <RatingSystem rating='4/5' icon='5' size="small" />
                <RatingSystem rating='4/5' icon='6' size="small" />
                <RatingSystem rating='4.7/5' icon={GiBananaPeeled} size="small" />
            </div>

        </div>

    )

}