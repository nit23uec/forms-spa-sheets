import { useState } from "react";

export default function Modal(props)  {

    let {children, title} = props

    return (
        <>
        {props.show &&
        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{title}</h4>
                    <button class="button" onClick={props?.onClose}>X</button>
                </div>
                <div class="modal-body">
                   {children}
                </div>
            </div>
        </div> }
        </>
    );
}