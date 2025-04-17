import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import IconCaeds from "../Components/IconCaeds";
import Card from "../Components/Card";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <IconCaeds />
      <div className="mx-auto px-16 font-bold text-2xl">
        <h1>New Products</h1>
      </div>
      <div className="flex flex-wrap gap-6 px-24 mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Banner/>
      <div className="mx-auto px-16 font-bold text-2xl">
        <h1>New Products</h1>
      </div>
      <div className="flex flex-wrap gap-6 px-24 mt-4">

        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Banner/>
      <IconCaeds/>
      <Footer/>
    </div>
   
  );
};

export default HomePage;
