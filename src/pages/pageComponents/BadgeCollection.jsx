import Badge from "../../components/Badge";

export default function (props) {


    let { colors, size = 'normal', round = false, title, maxCols = 6, rows = 4, names = ['Badge', 'Bodge', 'Budge'] } = props;

    let nameCounter = 0;
    let colorCounter = 0;
    let toneCounter = 0;

    let cols;

    if (size === 'xlarge') {

        cols = 'grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-6';

    } else if (size === 'large') {

        cols = 'grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6';

    }

    else if (size === 'normal') {

        cols = 'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6';

    } else if (size === 'small') {


        cols = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6';

    }

    const populateCollection = () => {

        const tones = ['light', 'normal', 'dark'];

        let content = [];



        for (let i = 0; i < rows; i++) {

            for (let j = 0; j < maxCols; j++) {
                const key = `badge-${i}-${j}-${size}-${colors[colorCounter]}-${tones[toneCounter]}`

                content.push(<Badge key={key} size={size} color={`${colors[colorCounter]}-${tones[toneCounter]}`} title={names[nameCounter]} round={round} />);
                nameCounter++
                if (nameCounter === names.length) nameCounter = 0;
                toneCounter++
                if (toneCounter === tones.length) {
                    toneCounter = 0;
                    colorCounter++
                    if (colorCounter === colors.length) colorCounter = 0;
                }
            }

        }



        return content;

    }

    let content = populateCollection();
    let badges = <div className={`${cols} gap-4 justify-center items-center`} key={`${name}Container${size}`}>{content}</div>;

    // if (size === 'large') {

    //     badges = <div className={`grid grid-cols-1 sm:grid-cols-3 ${cols} gap-4`}>{content}</div>;


    // } else {

    //     badges = <div className={`${cols} gap-4 justify-center items-center`} key={`${name}Container${size}`}>{content}</div>

    // }

    return (

        <div className="bg-slate-700 w-full rounded-lg px-8  pt-2 pb-8 my-6">
            <h3 className="uppercase my-2 text-xl">{title}</h3>
            <div className="grid gap-4">
                {badges}
            </div>
        </div>
    )
}