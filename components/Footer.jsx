import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div id = "footer" className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            NY STYLE, DAILY FRESH.
            HUNGRY SINCE 2017.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LOCALES</h1>
          <p className={styles.text}>
            <b>Urquiza 1574</b> 
            <br /> Tel: 297-4001
          </p>
          <p className={styles.text}>
            <b>Av. de la Libertad 94</b>
            <br /> Tel: 341 665-3406
          </p>
          <p className={styles.text}>
            <b>Catamarca 2899 (Funes)</b>
            <br /> Tel: 341-2619536
          </p>
          <p className={styles.text}>
            <b>Cafferata 729</b>
            <br /> Tel: 341-7460492
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORARIOS</h1>
          <p className={styles.text}>
            <b>LUNES A VIERNES</b>
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            <b>SABADOS Y DOMINGOS</b>
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
