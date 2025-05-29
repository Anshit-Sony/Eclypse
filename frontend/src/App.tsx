import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Review from "./components/Review";
import { ContextState } from "./context/Provider";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  priceWithTax: number;
}

const url="https://eclypse-backend-aund.onrender.com"

function App() {
  const { cartSelect } = ContextState();
  
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>(
        url
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  console.log(products);
  return (
    <>
      {cartSelect ? (
        <div>
          <Navbar/>
          <Cart />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="md:mx-10 bg-[#070707]">
            <HeroSection />
            <Gallery />
            <Product />
            <Review />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
