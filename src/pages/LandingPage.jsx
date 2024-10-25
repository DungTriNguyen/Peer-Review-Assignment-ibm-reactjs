import { Link } from "react-router-dom";
import section from "../assets/section.jpg";

const LandingPage = () => {
  return (
    <div
      className="landing-page flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${section})` }} // Use imported image
    >
      <h1 className="text-4xl font-bold text-white mb-4">Nguyen Tri Dung</h1>
      <p className="text-lg text-white mb-8 text-center max-w-md">
        Welcome to our houseplant store. We offer a variety of beautiful
        houseplants to brighten up your home.
      </p>
      <Link to="/shop">
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
