import BadgeCollection from "./pageComponents/BadgeCollection";

import { colorNames } from "./colorNames";
import { colorNamesBadge } from "./colorNamesBadge";

export default function BadgePage() {

    return (

        <div>
            <h2 className="text-3xl">Badge</h2>

            <BadgeCollection colors={colorNames.colorNames1} size="small" title="Small Round" names={['-20%', '-25%', '-50%']} round />
            <BadgeCollection colors={colorNames.colorNames2} size="small" title="Small" names={['SALE!']} />
            <BadgeCollection colors={colorNames.colorNames3} size="normal" title="Normal" names={['TOP PIC']} rows="3" />
            <BadgeCollection colors={colorNames.colorNames4} size="large" title="Large" names={['20% OFF!', '30% OFF!', '40% OFF!', '50% OFF!', '60% OFF!', '80% OFF!']} rows="3" />
            <BadgeCollection colors={colorNames.colorNames5} size="xlarge" title="X-Large" names={['SAVE BIG!']} rows="3" />

        </div>

    )

}