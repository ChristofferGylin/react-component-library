import { colors, colorsHover } from "./colors";

const Button = (props) => {

    let { size, color, disabled, title, callback } = props;

    let sizeAtt = `py-2 px-4 text-base`;

    if (size === 'large') {

        sizeAtt = `py-4 px-6 text-lg`;

    } else if (size === 'xlarge') {

        sizeAtt = `py-6 px-8 text-xl`;

    } else if (size === 'small') {

        sizeAtt = `py-1 px-4 text-sm rounded-lg h-8`;

    }

    if (color === undefined) {

        color = `slate`;

    }

    const colorSplit = color.split('-');
    let colorAtt;


    if (colorSplit.length > 1) {

        console.log('length +1')

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


    return (

        <button onClick={callback} className={`border rounded-xl ${sizeAtt} ${colorAtt}`} disabled={disabledAtt}>{title}</button>

    )

}

export default Button