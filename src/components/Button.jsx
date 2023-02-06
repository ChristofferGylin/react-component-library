import selectColorAtt from "./selectColorAtt";

const Button = (props) => {

    let { size, color = 'slate', disabled, title, callback, round, hidden } = props;

    let sizeAtt = `py-2 px-4 text-base`;

    if (size === 'large') {

        sizeAtt = `py-4 px-6 text-lg`;

    } else if (size === 'xlarge') {

        sizeAtt = `py-6 px-8 text-xl`;

    } else if (size === 'small') {

        sizeAtt = `py-1 px-4 text-sm h-8 min-w-min`;

    }

    let hiddenAtt = ``;

    if (hidden) {

        hiddenAtt = "sm:hidden lg:block"

    }

    let rounded;

    if (round) {

        rounded = `rounded-full`;

    } else {

        if (size === 'small') {

            rounded = `rounded-lg`;

        } else {

            rounded = `rounded-xl`;

        }



    }

    const attributes = selectColorAtt(color, disabled);

    return (

        <button onClick={callback} className={`overflow-hidden ${hiddenAtt} border ${rounded} ${sizeAtt} ${attributes.colorAtt} capitalize`} disabled={attributes.disabledAtt}>{title}</button>

    )

}

export default Button