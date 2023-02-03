import { useState } from "react";
import Button from "../components/Button";
import Alert from "../components/Alert";
import { FiAlertOctagon } from "react-icons/fi";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { cardText } from "./cardText";

const onDismiss = () => {
    alert("You closed the alert.");
};

export default function Home() {

    const [showModal, setShowModal] = useState("hidden");

    return (

        <div className="">
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl">Button</h2>

                <div>
                    <p>Button with no attribute props and default values:</p>
                    <Button
                        callback={() => {
                            alert("Heyoo");
                        }}
                        title="Default Button"
                        color="fuchsia-normal"
                    />
                </div>

            </div>

            <div className="flex flex-col gap-4 my-4">
                <h2 className="text-3xl">Alert</h2>
                <div>
                    <div>
                        <p>Alert with an icon and color attribute blue:</p>
                        <Alert Icon={FiAlertOctagon} color="blue" onDismiss={onDismiss}>
                            You did something wrong and you should feel bad.
                        </Alert>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 my-4">
                <h2 className="text-3xl">Badge</h2>

                <div>
                    <p>Badge with an icon, large and color attribute yellow:</p>
                    <Badge
                        Icon={FiAlertOctagon}
                        color="yellow"
                        title="Large Icon Badge"
                        size="large"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4 my-4">
                <h2 className="text-3xl">Card</h2>
                <div>
                    <p>Card with no image:</p>
                    <Card title="This is a card" text={cardText} href="#" />
                </div>

                <div>
                    <p>Card with image:</p>
                    <Card
                        title="This is a card"
                        text={cardText}
                        imgSrc="./officespace.jpg"
                        imgAlt="Laptops on a desk in an office"
                        href="#"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4 my-4">
                <h2 className="text-3xl">Modal</h2>
                <div>
                    <p>Modal without size attribute</p>
                    <Button
                        title="Show Modal"
                        callback={() => {
                            setShowModal("flex");
                        }}
                    />
                    <Modal show={showModal} onClose={setShowModal}>
                        <Modal.Header title="Tea or Cake or Death?" />
                        <Modal.Body text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora soluta sit molestias accusantium. Nesciunt labore ducimus a deleniti ipsam ratione asperiores dolore voluptates adipisci, iure dignissimos pariatur sequi ipsa distinctio illo molestiae? Consequatur qui sit aliquid magnam aliquam delectus vero facilis ex nulla libero laborum fuga commodi voluptatem, corrupti amet omnis perferendis consectetur debitis inventore non labore molestiae numquam. Accusantium dolore repellendus possimus obcaecati eos? Ad enim quis repellat cupiditate neque quos est, nam nemo, quibusdam rerum, fuga quaerat consectetur necessitatibus voluptatum illo assumenda maiores itaque quasi accusamus dolor? Voluptatem, accusantium molestiae! Tempora maxime, explicabo nemo ad placeat obcaecati?" />
                        <Modal.Footer>
                            <Button size="small"
                                color="slate"
                                callback={() => {
                                    alert("You chose tea");
                                }}
                                title="Tea"
                            />
                            <Button size="small"
                                color="slate"
                                callback={() => {
                                    alert("You chose tea");
                                }}
                                title="Cake"
                            />
                            <Button size="small"
                                color="slate"
                                callback={() => {
                                    alert("You chose tea");
                                }}
                                title="Death"
                            />
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>

    )

}