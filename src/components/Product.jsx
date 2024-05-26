function Product ( {image, label, name, price}) {
    return (
        <article>
        <span>{label}</span>
        <img src={image} alt="bag image"/>
        <p>{name}</p>
        <h4>{price}</h4>
        </article>
    )
}

export default Product;