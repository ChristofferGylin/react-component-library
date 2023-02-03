import Button from "../components/Button";
import ButtonCollection from "./pageComponents/ButtonCollection";
import { colorNames } from "./colorNames";

const colorNamesAll = [
    'transparent',
    'slate',
    'gray',
    'zinc',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
];

const colorNames1 = [
    'transparent',
    'slate',
    'gray',
    'zinc',
    'stone',
]

const colorNames2 = [

    'red',
    'orange',
    'amber',
    'yellow',
    'lime',

]

const colorNames3 = [


    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',

]

const colorNames4 = [

    'blue',
    'indigo',
    'violet',

]

const colorNames5 = [

    'purple',
    'fuchsia',
    'pink',
    'rose',

]



export default function ButtonPage() {

    return (

        <div>
            <h2>Button</h2>

            <ButtonCollection names={colorNames.colorNames1} size="small" />
            <ButtonCollection names={colorNames.colorNames2} size="small" />
            <ButtonCollection names={colorNames.colorNames3} size="normal" />
            <ButtonCollection names={colorNames.colorNames4} size="large" />
            <ButtonCollection names={colorNames.colorNames5} size="xlarge" />

        </div>

    )

}