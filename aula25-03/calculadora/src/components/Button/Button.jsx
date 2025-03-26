import React from "react";

function Button({text, onCLick}){
    return (
        <>
        <button onClick={onCLick}>
            {text}
        </button>
        </>
    );
}
export default Button;