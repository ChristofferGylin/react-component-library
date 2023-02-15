import { useCallback, useEffect, useRef, useState } from "react";
import { colorsProgress } from "./colors";
import selectColorNoHover from "./selectColorNoHover";

const ProgressBar = (props) => {

    const { keyProp, progress = 0, size = 'normal', colorBar = 'slate-normal', colorBackground = 'slate-dark', text = false, demo } = props

    const [percent, setPercent] = useState(progress);


    let demoAtt = ``;

    if (demo) {

        switch (progress) {

            case 75:
                demoAtt = 'animate-progress75';
                break;

            case 50:
                demoAtt = 'animate-progress50';
                break;

            case 25:
                demoAtt = 'animate-progress25';
                break;

            default:
                demoAtt = 'animate-progress';

        }

    }

    const colorBackgroundAtt = selectColorNoHover(colorBackground, colorsProgress)
    const colorBarAtt = selectColorNoHover(colorBar, colorsProgress)

    let sizeAtt = ``

    switch (size) {

        case 'small':
            sizeAtt = `h-1`;
            break;
        case 'normal':
            sizeAtt = `h-2`;
            break;
        case 'large':
            sizeAtt = `h-3`;
            break;
        case 'xlarge':
            sizeAtt = `h-4`;
            break;
        default:
            sizeAtt = `h-2`;

    }

    return (
        <div key={keyProp} className="w-full flex flex-col items-center">
            {text && `${percent} %`}
            <div className={`rounded-full w-full ${sizeAtt} ${colorBackgroundAtt} overflow-hidden`}>
                <div style={{ 'width': `${percent}%` }} className={` h-full  ${colorBarAtt} ${demoAtt}`}></div>
            </div>
        </div >
    )

}

export default ProgressBar;