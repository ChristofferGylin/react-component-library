import { colors, colorsHover } from "./colors";
import selectColorAtt from "./selectColorAtt";

const Button = (props) => {

    let { size, color, disabled, title, callback } = props;

    let sizeAtt = `py-2 px-4 text-base`;

    if (size === 'large') {

        sizeAtt = `py-4 px-6 text-lg`;

    } else if (size === 'xlarge') {

        sizeAtt = `py-6 px-8 text-xl`;

    } else if (size === 'small') {

        sizeAtt = `py-1 px-4 text-sm rounded-lg h-8 min-w-min`;

    }

    const attributes = selectColorAtt(color, disabled);

    return (

        <button onClick={callback} className={`border rounded-xl ${sizeAtt} ${attributes.colorAtt} capitalize`} disabled={attributes.disabledAtt}>{title}</button>

    )

}

export default Button