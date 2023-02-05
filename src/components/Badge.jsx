import selectColorNoHover from "./selectColorNoHover";

const Badge = (props) => {

    let { color = 'slate', Icon, title, round, size } = props;

    let commonAtt = `flex items-center w-fit justify-self-center`;
    let sizeAtt = 'p-3 gap-2 text-base';

    let colorAtt = selectColorNoHover(color);


    if (round) {

        commonAtt += ` rounded-full`

    } else {

        commonAtt += ` rounded-xl`;

    }

    if (size === 'large') {

        sizeAtt = 'p-4 gap-3 text-lg';

    } else if (size === 'xlarge') {

        sizeAtt = 'p-6 gap-4 text-2xl';

    } else if (size === 'small') {

        sizeAtt = 'p-2 gap-1 text-sm';

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