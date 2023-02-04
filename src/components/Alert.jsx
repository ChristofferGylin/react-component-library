import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import selectColorNoHover from "./selectColorNoHover";

const Alert = (props) => {
  const [display, setDisplay] = useState("flex");
  const [translate, setTranslate] = useState("translate-x-[100%]");
  const { color, Icon, children, onDismiss } = props;

  const commonAtt = `w-full px-4 py-6 rounded-xl relative`;
  const colorAtt = selectColorNoHover(color);
  const transitionAtt = `transition-transform ease-in-out duration-700 ${translate}`


  if (Icon) {
    return (
      <div className={`${display} items-center gap-2 ${commonAtt} ${colorAtt} ${transitionAtt} alertItem`}>
        <Icon className="text-2xl" /> {children}{" "}
        <AiOutlineClose
          className="absolute top-2 right-2 hover:bg-black/10 rounded"
          onClick={() => {
            closeAlert(onDismiss, setDisplay, setTranslate);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className={`${display} ${commonAtt} ${colorAtt} ${transitionAtt} alertItem`}>
        {children}
        <AiOutlineClose
          className="absolute top-2 right-2 hover:bg-black/10 rounded"
          onClick={() => {
            closeAlert(onDismiss, setDisplay, setTranslate);
          }}
        />
      </div>
    );
  }
};

const closeAlert = (onDismiss, setDisplay, setTranslate) => {

  setTranslate('translate-x-[120%]');
  console.log('blip')
  //setDisplay("hidden");
  //onDismiss();
};

export default Alert;
