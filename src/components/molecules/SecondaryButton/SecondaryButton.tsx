import React from "react";
import "./SecondaryButton.css";

interface SecondaryButtonProps {
    functionProp?: any;
    text: string;
}

const SecondaryButton:React.FC<SecondaryButtonProps> = ( {text, functionProp}  ) => {
    return(
        <div className="container">
            <button className="secondary-button" type="button" onClick={functionProp}>
                <span>{text}</span>
            </button>
        </div>
    )
}

export default SecondaryButton;