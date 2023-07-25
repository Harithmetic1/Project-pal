import React, { MouseEventHandler } from 'react'

interface ActionButtonPropTypes {
    buttonText: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const ActionButton: React.FC<ActionButtonPropTypes> = ({ buttonText, onClick }) => {
    return (
        <button className="rounded-lg bg-red-secondary p-[14px] w-[100%]" onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default ActionButton