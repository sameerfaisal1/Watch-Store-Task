import React from "react";
import styles from "@/Components/Collectionbox.module.css";
import Image from "next/image";

const Collectionbox = ({ imgsrc, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Image
          src={imgsrc}
          height={56}
          width={56}
          alt="image"
          className={styles.img}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Collectionbox;
