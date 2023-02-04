import Alert from "../components/Alert";
import { colorNames } from "./colorNames";
import { FiAlertOctagon } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
//import { FaBomb } from "react-icons/fa";

const observerCallback = (e) => {

    e.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.remove('translate-x-[100%]');

        } else {

            element.target.classList.add('translate-x-[100%]');

        }
    });

}

const options = {
    root: document.querySelector('body'),
    rootMargin: '0px',
    threshold: 0.01
}

const observer = new IntersectionObserver(observerCallback, options);

const alerts = document.querySelectorAll('.alertItem');

alerts.forEach((alertItem) => {


    observer.observe(alertItem);

})



const onDismiss = () => {
    alert("You closed the alert.");
};


export default function AlertPage() {

    return (

        <div>
            <h2 className="text-3xl">Alert</h2>

            <div className="grid grid-cols-1 gap-8 bg-slate-700 w-full rounded-lg px-8  pt-8 pb-8 my-6 overflow-hidden">

                {colorNames.all.map((name, index) => {

                    if (index === 0) {

                        <Alert onDismiss={onDismiss} color={name}>
                            You did something wrong and you should feel bad.
                        </Alert>

                    } else if (index % 3 === 0) {

                        <Alert Icon={FiAlertOctagon} color={name} onDismiss={onDismiss}>
                            You did something wrong and you should feel bad.
                        </Alert>

                    } else if (index % 2 === 0) {

                        <Alert Icon={FiShield} color={name} onDismiss={onDismiss}>
                            You did something wrong and you should feel bad.
                        </Alert>

                    }

                    return (

                        <div className="grid grid-cols-1 gap-8" key={`alertContainer${index}`}>

                            <Alert onDismiss={onDismiss} color={`${name}-light`} key={`alertLight${index}`}>
                                You did something wrong and you should feel bad.
                            </Alert>

                            <Alert Icon={FiAlertOctagon} color={`${name}-normal`} onDismiss={onDismiss} key={`alertNormal${index}`}>
                                You did something wrong and you should feel bad.
                            </Alert>

                            <Alert Icon={FiShield} color={`${name}-dark`} onDismiss={onDismiss} key={`alertDark${index}`}>
                                You did something wrong and you should feel bad.
                            </Alert>
                        </div>

                    )

                })}
            </div>
        </div>
    )
}

