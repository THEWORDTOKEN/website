import React, { useLayoutEffect } from 'react'
import styles from './Merch.module.scss'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'
import Connect from '../Home/Connect/Connect'
import cloth_1 from '../../assets/twd_cloth_1.png'
import cloth_2 from '../../assets/twd_cloth_2.png'
import cloth_3 from '../../assets/twd_cloth_3.png'
import cloth_4 from '../../assets/twd_cloth_4.jpeg'
import cloth_5 from '../../assets/twd_cloth_5.jpeg'
import cloth_6 from '../../assets/twd_cloth_6.jpeg'
import cloth_7 from '../../assets/twd_cloth_7.jpeg'
import { useLocation } from 'react-router-dom'

const Merch = () => {

    const location = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [ location.pathname ]);

  return (
    <section>
        <div>
            <Navbar/>
            <div className="max-wrapper">
                <div className="max-wrapper__content">
                    <h1 className={styles.merch__title}>$TWD MERCH</h1>
                    <div className={styles.merch__cloths}>
                        <img src={cloth_1} alt="The Word Token Merch cloth"/>
                        <img src={cloth_2} alt="The Word Token Merch cloth"/>
                        <img src={cloth_3} alt="The Word Token Merch cloth"/>
                        <img src={cloth_4} alt="The Word Token Merch cloth"/>
                        <img src={cloth_5} alt="The Word Token Merch cloth"/>
                        <img src={cloth_6} alt="The Word Token Merch cloth"/>
                        <img src={cloth_7} alt="The Word Token Merch cloth"/>
                    </div>
                    <a target="_blank" href="https://instagram.com/mzconglomerate?igshid=YmMyMTA2M2Y=" className={styles.merch__btnWrap}><button className={styles.merch__btn}>Buy Now</button></a>
                    
                </div>
            </div>
            <Connect/>
        </div>
        <div>
            <Footer/>
        </div>
    </section>
  )
}

export default Merch