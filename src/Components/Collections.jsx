// import React from "react";
// import styles from "@/Pages/AllCollections.module.css";
// import Image from "next/image";

// const Collections = () => {
//   return (
    
//       <div className={styles.CollectionCard}>
//         <div className={styles.productWrapper}>
//           <Image
//             src="/watch-bg.png"
//             fill
//             alt="Product background"
//             className={styles.productBg}
//           />
//           <Image
//             src="/watch.png"
//             width={280}
//             height={280}
//             alt="Watch"
//             className={styles.productImage}
//           />
//         </div>

//         <div className={styles.cardText}>
//           <p>Lorem Ipsum</p>
//           <p>1.20 WETH</p>
//         </div>
//         <hr className={styles.marginline} />
//         <div className={styles.Available}>
//           <p>Available 100/200</p>
//           <button>View</button>
//         </div>
//       </div>
   
//   );
// };

// export default Collections;


import React from "react";
import styles from "./Collections.module.css";
import Image from "next/image";

const Collections = ({ bgSrc, imgSrc, title, price, available }) => {
  return (
    <div className={styles.CollectionCard}>
      <div className={styles.productWrapper}>
        <Image
          src={bgSrc}
          fill
          alt="Product background"
          className={styles.productBg}
        />
        <Image
          src={imgSrc}
          width={280}
          height={280}
          alt={title}
          className={styles.productImage}
        />
      </div>

      <div className={styles.cardText}>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <hr className={styles.marginline} />
      <div className={styles.Available}>
        <p>Available {available}</p>
        <button>View</button>
      </div>
    </div>
  );
};

export default Collections;
