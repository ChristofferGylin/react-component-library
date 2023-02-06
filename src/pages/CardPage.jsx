import Card from "../components/Card"
import { cardText } from "./cardText";

export default function CardPage() {

    return (
        <div>
            <h2 className="text-3xl">Card</h2>

            <div className="bg-slate-700 w-full rounded-lg px-8  pt-2 pb-8 my-6">
                <h3 className="uppercase my-2 text-xl">Card with no image</h3>
                <div className="">

                    <div className={`flex`} key='cardContainer1'>
                        <Card title="This is a card" text={cardText} href="#" />
                    </div>

                </div>
            </div>

            <div className="bg-slate-700 w-full rounded-lg px-8  pt-2 pb-8 my-6">
                <h3 className="uppercase my-2 text-xl">Card with image</h3>
                <div className="">

                    <div className={`flex`} key='cardContainer1'>
                        <Card
                            title="This is a card"
                            text={cardText}
                            imgSrc="./officespace.jpg"
                            imgAlt="Laptops on a desk in an office"
                            href="#"
                        />
                    </div>

                </div>
            </div>

        </div>
    )

}