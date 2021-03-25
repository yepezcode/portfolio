import React from "react";


const STYLES = ["btn--primary", "btn--outline","btn--outline-center"];

const SIZES = ["btn--medium", "btn--large"];



export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    href,
    target
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
            <a
                className={`btn ${checkButtonStyle} ${checkButtonSize} `}
                onClick={onClick}
                type={type}
                href={href}
                target={target}
            >
                {children}
            </a>
    );
};
