import React from "react";
import styles from "@/Pages/CreateColl.module.css";
import Collectionbox from "@/Components/Collectionbox";

const CreateCollection = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Create Your Collection</h2>
        <p className={styles.descrp}>
          We are professional watch makers aiming to bring the watch luxury to
          the crypto space
        </p>

        <div className={styles.boxes}>
          <Collectionbox imgsrc="/shield-check-24.png" text="Book a call" />
          <Collectionbox imgsrc="/archive-24.png" text="Create a collection" />
          <Collectionbox
            imgsrc="/file-media-24.png"
            text="Finalize the design"
          />
          <Collectionbox imgsrc="/rocket-24.png" text="Distribution" />
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
