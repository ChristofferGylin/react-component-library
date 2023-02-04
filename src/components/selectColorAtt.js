import { colors, colorsHover } from "./colors";

export default function (color, disabled) {

    if (color === undefined) {

        color = `slate`;

    }

    const colorSplit = color.split('-');
    let colorAtt;


    if (colorSplit.length > 1) {

        if (colorSplit[1] === 'light') {

            colorAtt = `${colors.light[colorSplit[0]]} ${colorsHover.light[colorSplit[0]]}`;

        } else if (colorSplit[1] === 'dark') {

            colorAtt = `${colors.dark[colorSplit[0]]} ${colorsHover.dark[colorSplit[0]]}`;

        } else {

            colorAtt = `${colors.normal[colorSplit[0]]} ${colorsHover.normal[colorSplit[0]]}`;

        }

    } else {

        colorAtt = `${colors.normal[colorSplit[0]]} ${colorsHover.normal[colorSplit[0]]}`;

    }

    let disabledAtt = false;

    if (disabled) {

        disabledAtt = true;
        colorAtt = colors.disabled[colorSplit[0]]

    }

    return { colorAtt, disabledAtt }
}