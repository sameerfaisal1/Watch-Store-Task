import Collectionbox from "@/Components/collectionbox";
import Footer from "@/Components/Footer";
import AllCollections from "@/Pages/AllCollections";
import CreateCollection from "@/Pages/CreateCollection";
import HeroSection from "@/Pages/HeroSection";

import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AllCollections />
      <CreateCollection />
      <Footer />
    </div>
  );
};

export default page;
