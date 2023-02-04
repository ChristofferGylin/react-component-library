import ButtonCollection from "./pageComponents/ButtonCollection";
import { colorNames } from "./colorNames";

export default function ButtonPage() {

    return (

        <div>
            <h2 className="text-3xl">Button</h2>

            <ButtonCollection names={colorNames.colorNames1} size="small" />
            <ButtonCollection names={colorNames.colorNames2} size="small" />
            <ButtonCollection names={colorNames.colorNames3} size="normal" />
            <ButtonCollection names={colorNames.colorNames4} size="large" />
            <ButtonCollection names={colorNames.colorNames5} size="xlarge" />

        </div>

    )

}