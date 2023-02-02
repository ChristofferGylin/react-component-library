import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

const Modal = (props) => {
  const { show, onClose, size, children } = props;

  let sizeAtt = `w-3/4 h-3/4 text-sm px-8 py-6`;

  if (size === "medium") {
    sizeAtt = `text-base px-3 py-5`;
  }

  return (
    <div
      className={`${show} fixed z-888 top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur`}
      id="blackout"
      onClick={(e) => {
        closeBlackout(e, onClose);
      }}
    >
      <div
        className={`${sizeAtt} overflow-hidden rounded-lg z-999 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 border border-slate-300 text-slate-200 shadow-lg shadow-black/80`}
      >
        {children}
        <AiOutlineClose
          className="absolute top-3 right-3 hover:bg-black/30 rounded text-lg"
          id="close"
          onClick={() => {
            onClose("hidden");
          }}
        />
      </div>
    </div>
  );
};

const Header = (props) => {
  const { size, title } = props;

  let sizeAtt = `text-2xl mb-6`;
  return (
    <div className={`${sizeAtt} text-center w-full`}>
      <h3>{title}</h3>
    </div>
  );
};

const Body = (props) => {
  const { size, text } = props;

  let sizeAtt = `text-lg`;
  return (
    <div className="w-full h-4/5 overflow-hidden mb-8 scroll-auto">
      <p className={`${sizeAtt} w-full h-full`}>{text}</p>
    </div>
  );
};

const Footer = (props) => {
  const { size } = props;

  let sizeAtt = `text-lg`;
  return (
    <div className="flex justify-center gap-4 w-full absolute bottom-0 left-0 bg-slate-900/60 py-2">
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
    </div>
  );
};

const closeBlackout = (e, onClose) => {
  console.log(e.target.id);
  if (e.target.id === "blackout") {
    onClose("hidden");
  }
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
export default Modal;
