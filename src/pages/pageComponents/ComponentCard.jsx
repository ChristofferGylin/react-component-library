import { Link } from "react-router-dom";

const ComponentCard = (props) => {
    const { title, text, link, linkTitle = 'CLICK FOR MORE', onMouseEnter, onMouseLeave, children } = props;
    return (

        <div className="transition-bolor ease-in-out duration-300 bg-slate-700 w-full rounded-lg px-8  pt-2 pb-4 my-10 border-2 border-transparent hover:border-slate-400 overflow-hidden" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <h3 className="uppercase my-2 text-xl">{title}</h3>
            <div className="grid grid-cols-2 justify-center items-center border-t border-slate-400 ">

                <div className="flex flex-col justify-around w-full h-full py-6 px-4">
                    <div>
                        {text}

                    </div>
                    <div>
                        <Link className='hover:underline underline-offset-4' to={link}>{linkTitle}</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full h-full py-6 px-4">
                    {children}
                </div>
            </div>
        </div>

    )

}

export default ComponentCard;