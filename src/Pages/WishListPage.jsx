import React from "react";
import Navbar from "../Components/NavBar";
import WishList from "../Components/Wishlist";
import Footer from "../Components/Footer";

const WishListPage = () => {
  return (
    <div className="bg-blue-100">
      <Navbar />
      <WishList />
      <Footer />
    </div>
  );
};

export default WishListPage;