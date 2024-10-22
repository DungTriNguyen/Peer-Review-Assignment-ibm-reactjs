import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import Product from "../components/Product";

const plants = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: 25,
    category: "Large Plants",
    thumbnail: "https://pixabay.com/images/download/business-20031_640.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    category: "Medium Plants",
    thumbnail: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 10,
    category: "Small Plants",
    thumbnail:
      "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 20,
    category: "Medium Plants",
    thumbnail: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
  },
  {
    id: 5,
    name: "Aloe Vera",
    price: 12,
    category: "Small Plants",
    thumbnail: "https://pixabay.com/images/download/signpost-235079_640.jpg",
  },
  {
    id: 6,
    name: "Monstera",
    price: 30,
    category: "Large Plants",
    thumbnail: "https://pixabay.com/images/download/signpost-235079_640.jpg",
  },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing-page p-4">
      <h2 className="text-2xl font-bold mb-4">Our Houseplants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.map((plant) => (
          <Product
            key={plant.id}
            product={plant}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
