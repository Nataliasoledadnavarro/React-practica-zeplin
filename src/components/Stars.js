import { BsHeartFill as CorazonOscuro, BsHeart as CorazonClaro} from "react-icons/bs";


const Stars = ({rating}) =>{
    const estrellas = []

    for (let i = 0; i < rating; i++) {
        estrellas.push(<div className="icono"><CorazonOscuro /></div>)
    }
    for (let i = 0; i < 5-rating; i++) {
        estrellas.push(<div className="icono"><CorazonClaro/></div>)
        
    }
    return (
        estrellas
)
}

export default Stars;