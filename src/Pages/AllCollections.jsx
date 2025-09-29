import React from "react";
import styles from "@/Pages/AllCollections.module.css";
import Collections from "@/Components/Collections";

const AllCollections = () => {
  return (
    <div className={styles.allCollectionContainer}>
      <h1 className={styles.heading}>All Collections</h1>

      <div className={styles.CollectionItems}>
        <Collections
          bgSrc="/watch-bg.png"
          imgSrc="/watch.png"
          title="Lorem Ipsum"
          price="1.20 WETH"
          available="100/200"
        />
        <Collections
          bgSrc="/watch-bg.png"
          imgSrc="/watch.png"
          title="Lorem Ipsum"
          price="1.20 WETH"
          available="50/200"
        />
        <Collections
          bgSrc="/watch-bg.png"
          imgSrc="/watch.png"
          title="Lorem Ipsum"
          price="1.20 WETH"
          available="120/200"
        />
        <Collections
          bgSrc="/watch-bg.png"
          imgSrc="/watch.png"
          title="Lorem Ipsum"
          price="1.20 WETH"
          available="75/200"
        />
      </div>
    </div>
  );
};

export default AllCollections;
