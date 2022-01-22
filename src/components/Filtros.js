import "../styles/_Filtros.scss"
const Filtros = () =>{
    return (
        
        <div className = "contenedor-filtros">
            <h3>FILTER BY</h3>
            <label>Collection
                <select>
                    <option></option>
                </select>
            </label>
            
            <label>Color
                <select>
                    <option></option>
                </select>
            </label> 
            
            <label> Category
                <select>
                    <option></option>
                </select>
            </label>
            <label>Price Range
                <input type="range"></input>
            </label>
            <div className="contenedor-rangos"><span>$0</span><span>$10,000+</span></div>
        </div>
    )
} 

export default Filtros;