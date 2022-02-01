import "../styles/_Modal.scss"
import {BsFillFileExcelFill as Cruz } from "react-icons/bs";
import setMostrarCarrito from "../components/Card";
import { useState } from "react";

const Modal = ({titulo,precio,onClick}) =>{
    
   
    return (
        <div className="contenedor-modal">
            <div className="modal">
                <Cruz onClick={onClick}/>
                <h3>Productos agregados</h3>
                <p>{titulo}</p>
                <p>${precio}</p>
            </div>
        </div>
)
}

export default Modal;