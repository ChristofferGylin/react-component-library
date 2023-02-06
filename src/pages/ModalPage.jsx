import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function ModalPage() {

    const [showModal, setShowModal] = useState("hidden");

    return (
        <div>
            <h2 className="text-3xl">Modal</h2>

            <div className="bg-slate-700 w-full rounded-lg px-8  pt-2 pb-8 my-6">
                <h3 className="uppercase my-2 text-xl">Modal Type 1</h3>
                <div className="grid grid-cols-2 justify-center items-center border-t border-slate-400 p-8">

                    <div className="flex justify-center">
                        <Button
                            title="Show Modal"
                            callback={() => {
                                setShowModal("flex");
                            }}
                        />
                        <Modal show={showModal} onClose={setShowModal}>
                            <Modal.Header title="Tea and Cake or Death?" />
                            <Modal.Body text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora soluta sit molestias accusantium. Nesciunt labore ducimus a deleniti ipsam ratione asperiores dolore voluptates adipisci, iure dignissimos pariatur sequi ipsa distinctio illo molestiae? Consequatur qui sit aliquid magnam aliquam delectus vero facilis ex nulla libero laborum fuga commodi voluptatem, corrupti amet omnis perferendis consectetur debitis inventore non labore molestiae numquam. Accusantium dolore repellendus possimus obcaecati eos? Ad enim quis repellat cupiditate neque quos est, nam nemo, quibusdam rerum, fuga quaerat consectetur necessitatibus voluptatum illo assumenda maiores itaque quasi accusamus dolor? Voluptatem, accusantium molestiae! Tempora maxime, explicabo nemo ad placeat obcaecati?" />
                            <Modal.Footer>
                                <Button size="small"
                                    color="slate"
                                    callback={() => {
                                        alert("Allright then, here´s your tea and cake.");
                                    }}
                                    title="Tea and Cake"
                                />
                                <Button size="small"
                                    color="slate"
                                    callback={() => {
                                        alert("You chose death!");
                                    }}
                                    title="Death"
                                />
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div>
                        <img src="./modal.png" alt="Screenshot of modal pop-up" className="border border-slate-300 rounded" />
                    </div>



                </div>
            </div>

        </div>
    )

}