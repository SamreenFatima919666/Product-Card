function productCard({ productName, category, price, stock, setCount }) {
    return (
        <div className="productCart">
            <h2>Product Name: {productName}</h2>

            <p>Category: {category}</p>

            <p>Price: {price}</p>

            <p>Stock Status: {stock}</p>

            <button onClick={() => {
                if (stock === 0) {
                    alert("This product is Out of Stock");
                } else {
                    setCount(count => count + 1)
                }
            }}

            >Add to Cart</button>
            <button onClick={() =>setCount(count => count-1)}>Remove</button>


        </div>
    )
}
export default productCard;


