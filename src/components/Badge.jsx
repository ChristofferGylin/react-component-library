const Badge = (props) => {

    const { color, Icon, title, round, size } = props;

    let commonAtt = `flex items-center w-fit`;
    let colorAtt = `bg-blue-400`;
    let sizeAtt = 'p-3 gap-2 text-base';

    if (round) {

        commonAtt += ` rounded-full`

    } else {

        commonAtt += ` rounded-xl`;

    }

    if (color === 'red') {

        colorAtt = `bg-red-400`;

    } else if (color === 'yellow') {

        colorAtt = `bg-yellow-400 text-gray-700`;

    } else if (color === 'purple') {

        colorAtt = `bg-purple-400`;

    } else if (color === 'pink') {

        colorAtt = `bg-pink-400`;

    }

    if (size === 'large') {

        sizeAtt = 'p-4 gap-3 text-lg';

    } else if (size === 'xlarge') {

        sizeAtt = 'p-6 gap-4 text-2xl';

    }

    if (Icon) {

        return (
            <span className={`${commonAtt} ${colorAtt} ${sizeAtt}`}><span><Icon /></span> <span>{title}</span></span>
        )

    } else {

        return (
            <span className={`${commonAtt} ${colorAtt} ${sizeAtt}`}>{title}</span>
        )

    }

}

export default Badge;