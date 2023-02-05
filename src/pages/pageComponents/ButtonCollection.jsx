import Button from "../../components/Button";

export default function (props) {

    let { names, size, round = false, title } = props;

    let cols;

    if (size === 'xlarge') {

        cols = 'lg:grid-cols-2';

    } else if (size === 'large') {

        cols = 'lg:grid-cols-3';

    }

    else {

        cols = 'lg:grid-cols-4';

    }

    return (

        <div className="bg-slate-700 w-full rounded-lg px-8  pt-2 pb-8 my-6">
            <h3 className="uppercase my-2 text-xl">{title}</h3>
            <div className="grid gap-4">
                {names.map((name) => {

                    if (size === 'large') {

                        return (
                            <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-4`} key={`${name}Container${size}`}>
                                <Button hidden key={`${name}LightButton${size}`} size={size} color={`${name}-light`} title={`${name} light`} round={round} />
                                <Button key={`${name}NormalButton${size}`} size={size} color={`${name}-normal`} title={`${name} normal`} round={round} />
                                <Button key={`${name}DarkButton${size}`} size={size} color={`${name}-dark`} title={`${name} dark`} round={round} />
                            </div>
                        )

                    } else {

                        return (
                            <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-4`} key={`${name}Container${size}`}>
                                <Button key={`${name}LightButton${size}`} size={size} color={`${name}-light`} title={`${name} light`} round={round} />
                                <Button key={`${name}NormalButton${size}`} size={size} color={`${name}-normal`} title={`${name} normal`} round={round} />
                                <Button key={`${name}DarkButton${size}`} size={size} color={`${name}-dark`} title={`${name} dark`} round={round} />
                                <Button key={`${name}DisabledButton${size}`} size={size} color={`${name}-dark`} title={`${name} disabled`} round={round} disabled />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}