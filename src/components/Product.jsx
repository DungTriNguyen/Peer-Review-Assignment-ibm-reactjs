// import  from "../pages/ProductListingPage";
const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card border p-4 rounded shadow">
      <img
        // key={product.id}
        src={product.thumbnail}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-lg mb-2">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};
export default Product;
