import Button from "../../components/Button";

export default function (props) {

    const { names, size, maxCols } = props;

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
            <h3 className="uppercase my-2 text-xl">{size}</h3>
            <div className="grid gap-4">
                {names.map((name) => {

                    if (size === 'large') {

                        return (
                            <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-4`} key={`${name}Container${size}`}>
                                <Button key={`${name}LightButton${size}`} size={size} color={`${name}-light`} title={`${name} light`} />
                                <Button key={`${name}NormalButton${size}`} size={size} color={`${name}-normal`} title={`${name} normal`} />
                                <Button key={`${name}DarkButton${size}`} size={size} color={`${name}-dark`} title={`${name} dark`} />
                            </div>
                        )

                    } else {

                        return (
                            <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-4`} key={`${name}Container${size}`}>
                                <Button key={`${name}LightButton${size}`} size={size} color={`${name}-light`} title={`${name} light`} />
                                <Button key={`${name}NormalButton${size}`} size={size} color={`${name}-normal`} title={`${name} normal`} />
                                <Button key={`${name}DarkButton${size}`} size={size} color={`${name}-dark`} title={`${name} dark`} />
                                <Button key={`${name}DisabledButton${size}`} size={size} color={`${name}-dark`} title={`${name} disabled`} disabled />
                            </div>
                        )

                    }


                })}
            </div>
        </div>
    )
}