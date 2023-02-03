import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Alert = (props) => {
  const [display, setDisplay] = useState("flex");
  const { color, Icon, children, onDismiss } = props;

  const commonAtt = `w-full px-4 py-6 rounded-xl relative`;
  let colorAtt = `bg-red-400`;

  if (color === "blue") {
    colorAtt = `bg-blue-400`;
  }

  if (Icon) {
    return (
      <div className={`${display} items-center gap-2 ${commonAtt} ${colorAtt}`}>
        <Icon className="text-2xl" /> {children}{" "}
        <AiOutlineClose
          className="absolute top-2 right-2 hover:bg-black/10 rounded"
          onClick={() => {
            closeAlert(onDismiss, setDisplay);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className={`${display} ${commonAtt} ${colorAtt}`}>
        {children}
        <AiOutlineClose
          className="absolute top-2 right-2 hover:bg-black/10 rounded"
          onClick={() => {
            closeAlert(onDismiss, setDisplay);
          }}
        />
      </div>
    );
  }
};

const closeAlert = (onDismiss, setDisplay) => {
  setDisplay("hidden");
  onDismiss();
};

export default Alert;
