import { BsFillStarFill as EstrellaOscura} from "react-icons/bs";
import { IoMdStarOutline as EstrellaClara } from "react-icons/io";


const Stars = ({rating}) =>{
    const estrellas = []

    for (let i = 0; i < rating; i++) {
        estrellas.push(<div className="icono"><EstrellaOscura /></div>)
    }
    for (let i = 0; i < 5-rating; i++) {
        estrellas.push(<div className="icono"><EstrellaClara/></div>)
        
    }
    return (
        estrellas
)
}

export default Stars;