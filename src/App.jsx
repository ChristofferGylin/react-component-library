import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { FiAlertOctagon } from "react-icons/fi";
import Badge from "./components/Badge";
import Card from "./components/Card";
import Modal from "./components/Modal";

const cardText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                voluptatibus nisi quibusdam cum debitis aspernatur repellendus
                rem sed quae maxime, eos quia doloribus veritatis ipsa deserunt
                labore similique pariatur exercitationem ducimus! Nostrum nam
                eaque deserunt, esse deleniti voluptatibus accusantium fugiat
                quam at, hic ipsa repellat culpa, rerum debitis nesciunt
                recusandae.`;

const onDismiss = () => {
  alert("You closed the alert.");
};

function App() {
  const [showModal, setShowModal] = useState("hidden");
  return (
    <div className="text-slate-200">
      <h1 className="text-5xl text-center">React Component Library</h1>

      <div className="flex flex-col gap-4 my-8 px-12 py-6 rounded-xl w-3/4 bg-slate-600 mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl">Button</h2>


          <div>
            <p>Button with no attribute props and default values:</p>
            <Button
              callback={() => {
                alert("Heyoo");
              }}
              title="Default Button"
              color="fuchsia-light"
            />
          </div>

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

          <div>
            <p>Button with no attribute props and default values:</p>
            <Button
              callback={() => {
                alert("Heyoo");
              }}
              title="Default Button"
              color="fuchsia-dark"
            />
          </div>

          <div>
            <p>Button with no attribute props and default values:</p>
            <Button
              callback={() => {
                alert("Heyoo");
              }}
              title="Default Button"
              color="fuchsia-dark"
              disabled
            />
          </div>


        </div>

        <div className="flex flex-col gap-4 my-4">
          <h2 className="text-3xl">Alert</h2>
          <div>
            <p>Alert with no attribute props and default values:</p>
            <Alert onDismiss={onDismiss}>
              You did something wrong and you should feel bad.
            </Alert>
          </div>

          <div>
            <p>Alert with an icon, but no style attribute props:</p>
            <Alert Icon={FiAlertOctagon} onDismiss={onDismiss}>
              You did something wrong and you should feel bad.
            </Alert>
          </div>

          <div>
            <p>Alert with an icon and color attribute blue:</p>
            <Alert Icon={FiAlertOctagon} color="blue" onDismiss={onDismiss}>
              You did something wrong and you should feel bad.
            </Alert>
          </div>
        </div>

        <div className="flex flex-col gap-4 my-4">
          <h2 className="text-3xl">Badge</h2>
          <div>
            <p>Badge with no attribute props and default values:</p>
            <Badge title="Default Badge" />
          </div>

          <div>
            <p>Badge with an icon, but no style attribute props:</p>
            <Badge Icon={FiAlertOctagon} title="Default Icon Badge" />
          </div>

          <div>
            <p>Badge with an icon and color attribute purple:</p>
            <Badge Icon={FiAlertOctagon} color="purple" title="Purple Badge" />
          </div>

          <div>
            <p>Badge with color red and round attribute:</p>
            <Badge color="red" title="Round Badge" round />
          </div>

          <div>
            <p>Badge with large attribute:</p>
            <Badge title="Large Badge" size="large" />
          </div>

          <div>
            <p>Badge with an icon, large and color attribute yellow:</p>
            <Badge
              Icon={FiAlertOctagon}
              color="yellow"
              title="Large Icon Badge"
              size="large"
            />
          </div>

          <div>
            <p>Badge with xlarge attribute:</p>
            <Badge title="Extra Large Badge" size="xlarge" />
          </div>

          <div>
            <p>Badge with an icon, xlarge and color attribute yellow:</p>
            <Badge
              Icon={FiAlertOctagon}
              color="yellow"
              title="Extra Large Icon Badge"
              size="xlarge"
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

        {/* <div className="flex flex-col gap-4 my-4">
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
