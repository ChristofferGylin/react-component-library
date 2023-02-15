import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";



export default function (props) {

    const [demoProgress, setDemoProgress] = useState(false)

    let { names, size = 'normal', title } = props;

    let cols;

    let colDivider;

    if (size === 'xlarge') {

        cols = 'grid-cols-1 2xl:grid-cols-2';
        colDivider = 2;

    } else if (size === 'large') {

        cols = 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4';
        colDivider = 2;

    } else if (size === 'small') {

        cols = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
        colDivider = 4;

    }

    else {

        cols = 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-3';
        colDivider = 3;

    }

    const progressTables = {
        small: [0, 25, 50, 75],
        normal: [0, 25, 50],
        large: [0, 50],
        xlarge: [0, 25, 50, 75],

    };

    const progressTable = progressTables[size];


    let progressCounter = -1;

    const increaseProgress = () => {

        progressCounter++;

        if (progressCounter >= progressTable.length) {

            progressCounter = 0;

        }

    }

    return (

        <div className={`transition-bolor ease-in-out duration-300 bg-slate-700 w-full rounded-lg px-8  pt-2 pb-8 my-6 border-2 border-transparent hover:border-slate-400 overflow-hidden`} onMouseEnter={() => {

            setDemoProgress(true);

        }}
            onMouseLeave={() => {

                setDemoProgress(false);

            }}>
            <h3 className="uppercase my-2 text-xl">{title}</h3>
            <div className={`grid ${cols} gap-4`}>
                {names.map((name, index) => {

                    const key = `progressBar${index}`

                    increaseProgress();

                    return (
                        <div key={key}>

                            <ProgressBar key={`${name}ProgressBar${index}`} progress={progressTable[progressCounter]} demo={demoProgress} colorBackground={`${name}-dark`} size={size} colorBar={`${name}-normal`} />

                        </div>
                    )

                })}
            </div>
        </div>
    )
}