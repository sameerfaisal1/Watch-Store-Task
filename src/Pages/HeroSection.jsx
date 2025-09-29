import React from "react";
import styles from "@/Pages/HeroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.mainContainer}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.logoSection}>
          <Image src="/logo.png" width={141} height={99} alt="Nalikes logo" />
          <span className={styles.logoX}>×</span>
          <Image
            src="/clocksmith.png"
            width={246}
            height={56}
            alt="Clocksmith logo"
          />
        </div>

        <h1 className={styles.heading}>NALIKES FOUNDER COLLECTION</h1>

        <p className={styles.description}>
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>

        <div className={styles.buttons}>
          <button className={styles.mintBtn}>MINT NOW</button>
          <button className={styles.viewBtn}>VIEW COLLECTION</button>
        </div>
      </div>

      {/* Right Section (Card) */}
      <div className={styles.rightSection}>
        <div className={styles.card}>
          {/* Product Image with Background */}
          <div className={styles.productWrapper}>
            <Image
              src="/watch-bg.png"
              width={300}
              height={320}
              alt="Product background"
              className={styles.productBg}
            />
            <Image
              src="/watch.png"
              width={280}
              height={280}
              alt="Watch"
              className={styles.productImage}
            />
          </div>

          {/* Card Footer */}
          <div className={styles.cardFooter}>
            <div className={styles.cardInfo}>
             
              <div className={styles.pricetitle}>
                <p className={styles.cardTitle}>Blue Ice</p>
                <p className={styles.cardPrice}>0.21 Weth</p>
              </div>
            </div>

            <div className={styles.cardMeta}>
              <p>NALIKES COLLECTION</p>
              <span>299</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
