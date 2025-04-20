import React from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
    functionProp?: any;
    text: string;
}

const PrimaryButton:React.FC<PrimaryButtonProps> = ( {text}  ) => {
    return(
        <div className="container">
            <button className="primary-button" type="button">
                <span>{text}</span>
            </button>
        </div>
    )
}

export default PrimaryButton;