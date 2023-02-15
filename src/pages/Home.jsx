import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Alert from "../components/Alert";
import { FiAlertOctagon } from "react-icons/fi";
import Badge from "../components/Badge";
import ComponentCard from "./pageComponents/ComponentCard";
import { colorNames } from "./colorNames";
import RatingSystem from "../components/RatingSystem";
import ProgressBar from '../components/ProgressBar';

const onDismiss = () => {
    alert("You closed the alert.");
};

export default function Home() {

    const [alertColor, setAlertColor] = useState('purple-normal');
    const [alertTranslate, setAlertTranslate] = useState('translate-x-[120%]')
    const [buttonColor, setButtonColor] = useState('blue');
    const [badgeColor, setBadgeColor] = useState('pink');
    const [demoProgress, setDemoProgress] = useState(false)
    const [demoAlert, setDemoAlert] = useState(false)

    return (

        <div className="">
            <ComponentCard title="Alert" text="Alerts to let your users know." link='/alert' linkTitle="CLICK FOR MORE ALERTS"
                onMouseEnter={() => {

                    setDemoAlert(true);

                }}
                onMouseLeave={() => {

                    setDemoAlert(false);

                }}>
                <div className="grid grid-cols-1 gap-8">

                    <div>
                        <Alert onDismiss={onDismiss} color={alertColor} translate={alertTranslate} demo={demoAlert}>
                            You did something wrong and you should feel bad.
                        </Alert>
                    </div>


                </div>
            </ComponentCard>

            <ComponentCard title="Button" text="Buttons for all your clicking needs." link='/button' linkTitle="CLICK FOR MORE BUTTONS">
                <Button
                    callback={() => {
                        alert("Heyoo");
                    }}
                    title="A Button"
                    color={buttonColor}
                />
            </ComponentCard>

            <ComponentCard title="Badge" text="Badges in all the colors of the rainbow." link='/badge' linkTitle="CLICK FOR MORE BADGES">
                <Badge
                    Icon={FiAlertOctagon}
                    color={badgeColor}
                    title="A Badge"
                    size="normal"
                    round
                />
            </ComponentCard>

            <ComponentCard title="Card" text="Card in all shapes and forms. Well, just two forms really." link='/card' linkTitle="CLICK FOR MORE CARDS">
                <img src="./card-screenshot.png" alt="Screenshot of card" className="relative left-2 -top-1" />
            </ComponentCard>

            <ComponentCard title="Modal" text="Modal pop-ups for every occasion." link='/modal' linkTitle="CLICK FOR MORE MODALS">
                <img src="./modal.png" alt="Screenshot of modal pop-up" className="border border-slate-300 rounded" />
            </ComponentCard>

            <ComponentCard title="Rating" text="Rating system for when you need to keep the score." link='/rating' linkTitle="CLICK FOR MORE RATING SYSTEMS">
                <div>

                    <RatingSystem rating='3/5' size="normal" />
                    <RatingSystem rating='2/5' colorRated='pink' colorUnrated="pink-light" size="normal" />
                    <RatingSystem rating='3/5' icon='1' size="normal" />
                    <RatingSystem rating='4.5/5' icon='3' size="normal" />
                    <RatingSystem rating='4/5' icon='5' size="normal" />

                </div>
            </ComponentCard>

            <ComponentCard title="Progress Bar" text="When you need to know if things are done." link='/progress' linkTitle="CLICK FOR MORE PROGRESS BARS" onMouseEnter={() => {

                setDemoProgress(true);


            }} onMouseLeave={() => { setDemoProgress(false); }}>
                <div className="flex flex-col justify-around w-full h-full ">

                    <ProgressBar progress={0} demo={demoProgress} />
                    <ProgressBar progress={25} demo={demoProgress} colorBackground='blue-dark' colorBar='blue-normal' />
                    <ProgressBar progress={50} demo={demoProgress} colorBackground='sky-dark' colorBar='sky-normal' />
                    <ProgressBar progress={75} demo={demoProgress} colorBackground='purple-dark' colorBar='purple-normal' />

                </div>
            </ComponentCard>
        </div>
    )
}