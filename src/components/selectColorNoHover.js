import { colors } from "./colors";

export default function (color) {

    if (color === undefined) {

        color = `slate`;

    }

    const colorSplit = color.split('-');
    let colorAtt;


    if (colorSplit.length > 1) {

        if (colorSplit[1] === 'light') {

            colorAtt = `${colors.light[colorSplit[0]]}`;

        } else if (colorSplit[1] === 'dark') {

            colorAtt = `${colors.dark[colorSplit[0]]}`;

        } else {

            colorAtt = `${colors.normal[colorSplit[0]]}`;

        }

    } else {

        colorAtt = `${colors.normal[colorSplit[0]]}`;

    }

    return colorAtt;
}