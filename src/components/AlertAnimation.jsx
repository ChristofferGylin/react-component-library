import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import selectColorNoHover from "./selectColorNoHover";
import { colors } from "./colors";

const AlertAnimation = (props) => {

  const { color, Icon, children, onDismiss, translate } = props;
  const elementRef = useRef(null);
  const commonAtt = `w-full px-4 py-6 rounded-xl relative`;
  const colorAtt = selectColorNoHover(color, colors);
  const transitionAtt = `transition-transform ease-in-out delay-100 duration-700 ${translate}`
  const shadowAtt = `shadow-md shadow-slate-900/30`;

  if (Icon) {
    return (
      <div className="w-full alertItemContainer">
        <div ref={elementRef} className={`flex items-center gap-2 ${commonAtt} ${colorAtt} ${transitionAtt} ${shadowAtt}`}>
          <Icon className="text-2xl" /> {children}{" "}
          <AiOutlineClose
            className="absolute top-2 right-2 hover:bg-black/10 rounded"
            onClick={() => {
              onDismiss(elementRef);
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full alertItemContainer">
        <div ref={elementRef} className={`flex ${commonAtt} ${colorAtt} ${transitionAtt} ${shadowAtt}`}>
          {children}
          <AiOutlineClose
            className="absolute top-2 right-2 hover:bg-black/10 rounded"
            onClick={() => {
              onDismiss(elementRef);
            }}
          />
        </div>
      </div>

    );
  }
};

export default AlertAnimation;
