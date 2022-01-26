
const Stars = ({rating}) =>{
    const estrellas = []

    for (let i = 0; i < rating; i++) {
        estrellas.push("🌟")
    }
    for (let i = 0; i < 5-rating; i++) {
        estrellas.push("⭐")
        
    }
    return (
        <p>{estrellas}</p>
)
}

export default Stars;