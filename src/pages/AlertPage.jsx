import Alert from "../components/Alert";
import { colorNames } from "./colorNames";
import { FiAlertOctagon } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { useEffect, useState } from "react";

const observerCallback = (e) => {

    e.forEach(element => {


        if (element.isIntersecting) {

            element.target.children[0].classList.remove('translate-x-[120%]');

        } else {

            element.target.children[0].classList.add('translate-x-[120%]');

        }
    });

}

const options = {
    root: document.querySelector('#alertMainContainer'),
    rootMargin: '150px',
    threshold: 1
}

const onDismiss = (element) => {

    element.current.classList.add('translate-x-[120%]');

};


export default function AlertPage() {

    const [observer, setObserver] = useState(new IntersectionObserver(observerCallback, options))

    useEffect(() => {

        const alertContainers = document.querySelectorAll('.alertItemContainer');

        alertContainers.forEach((container) => {

            observer.observe(container);

        })

    }, []);

    return (

        <div id="alertMainContainer">
            <h2 className="text-3xl">Alert</h2>

            <div className="grid grid-cols-1 gap-8 bg-slate-700 w-full rounded-lg px-8  pt-8 pb-8 my-6 overflow-hidden">

                {colorNames.all.map((name, index) => {

                    return (

                        <div className="grid grid-cols-1 gap-8" key={`alertContainer${index}`}>

                            <div id={`alertItemContainer-light-${index}`}>
                                <Alert onDismiss={onDismiss} color={`${name}-light`} key={`alertLight${index}`}>
                                    You did something wrong and you should feel bad.
                                </Alert>
                            </div>

                            <div id={`alertItemContainer-normal-${index}`}>
                                <Alert Icon={FiAlertOctagon} color={`${name}-normal`} onDismiss={onDismiss} key={`alertNormal${index}`}>
                                    You did something wrong and you should feel bad.
                                </Alert>
                            </div>

                            <div id={`alertItemContainer-dark-${index}`}>
                                <Alert Icon={FiShield} color={`${name}-dark`} onDismiss={onDismiss} key={`alertDark${index}`}>
                                    You did something wrong and you should feel bad.
                                </Alert>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

