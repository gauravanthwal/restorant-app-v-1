import FeaturedItem from "@/components/FeaturedItem";
import Offers from "@/components/Offers";
import Slider from "@/components/Slider";
import PrivateRoute from "@/components/auth/PrivateRoute";
import React from "react";

const Home = () => {
  return (
    <PrivateRoute>
      <main>
        <Slider />
        <FeaturedItem />
        <Offers />
      </main>
    </PrivateRoute>
  );
};

export default Home;
