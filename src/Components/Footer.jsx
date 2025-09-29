import React from "react";
import styles from "@/Components/Footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.FooterContent}>

        {/* Social Icons */}
        <div className={styles.ImagesSection}>
          <Image src="/social-icon.png" width={37} height={37} alt="Social 1" />
          <Image src="/social-icon.png" width={37} height={37} alt="Social 2" />
          <Image src="/social-icon.png" width={37} height={37} alt="Social 3" />
        </div>

        {/* Powered By */}
        <div className={styles.powerdBy}>
          <h3 >POWERED BY</h3>
          <Image src="/logo.png" width={78} height={55} alt="Logo" />
        </div>

        {/* Clocksmith Logo */}
        <div className={styles.clock}>
          <Image src="/clocksmith.png" width={170} height={55} alt="Clocksmith" />
        </div>
      </div>

      {/* Line & Copyright */}
      <hr className={styles.marginline} />
      <h4 className={styles.copyright}>
        © 2025. All rights reserved.
      </h4>
    </div>
  );
};

export default Footer;
