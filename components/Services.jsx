import styles from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";
import data from "../data";
const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>What We Can Do?</h1>
        <h1 className={styles.subtitle}>Services we can help you with</h1>
      </div>
      <div className={styles.services}></div>
    </div>
  );
};

export default Services;
