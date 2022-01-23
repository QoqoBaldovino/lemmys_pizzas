import Image from 'next/image';
import styles from "../styles/Navbar.module.css";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image className = "telephone" src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>DELIVERY!</div>
          <div className={styles.text}>1133829585</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <div className={styles.logoContainer} onClick = {() => router.push('/')}>
            <Image  className = "logo" src="/img/logo.png" alt="" width="160px" height="69px" />
          </div>
          <div className={styles.itemsContainer}>

          <li className={styles.listItem} onClick = {() => router.push('/')}>Inicio</li>
           
          <li className={styles.listItem} onClick = {() => router.push('/#pizzas')} >Menu</li>
          
          <Link href= "#footer" passHref>
          <li className={styles.listItem}>Contacto</li>
          </Link>
          
          </div>
        </ul>
      </div>
      <Link href = "/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
      
    </div>
  )
}

export default Navbar
