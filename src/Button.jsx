const Button = (props) => {

    const { size, color, disabled, title, callback } = props;

    let sizeAtt = `py-2 px-4 text-base`;

    if (size === 'large') {

        sizeAtt = `py-4 px-6 text-lg`;

    } else if (size === 'xlarge') {

        sizeAtt = `py-6 px-8 text-xl`;

    }

    let colorAtt = `bg-blue-500 hover:bg-blue-600 border-blue-100 text-white`;

    if (disabled) {

        colorAtt = `bg-blue-400 border-blue-100 text-white`;

    }

    if (color === 'purple') {

        if (disabled) {

            colorAtt = `bg-purple-300 border-purple-100 text-white`;

        } else {

            colorAtt = `bg-purple-500 hover:bg-purple-400 border-purple-100 text-white`;

        }



    } else if (color === 'gray') {

        colorAtt = `bg-gray-500 hover:bg-gray-400 border-gray-100 text-white`;

    }

    let disabledAtt = false;

    if (disabled) {

        disabledAtt = true;

    }



    return (

        <button onClick={callback} className={`border rounded-xl ${sizeAtt} ${colorAtt}`} disabled={disabledAtt}>{title}</button>

    )

}

export default Button