import "../styles/_Modal.scss"
import {BsFillFileExcelFill as Cruz } from "react-icons/bs";
import setMostrarCarrito from "../components/Card";
import { useState } from "react";

const Modal = ({titulo,precio}) =>{
    
    const handleClickCerrar = () =>{
        setMostrarCarrito(false)
      }
    return (
        <div className="contenedor-modal">
            <div className="modal">
                <Cruz onclick={handleClickCerrar}/>
                <h3>Productos agregados</h3>
                <p>{titulo}</p>
                <p>${precio}</p>
            </div>
        </div>
)
}

export default Modal;