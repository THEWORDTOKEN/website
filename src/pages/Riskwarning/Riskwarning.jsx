import React from 'react'
import styles from './Riskwarning.module.scss'
import Footer from '../../layout/Footer/Footer'
import Navbar from '../../layout/Navbar/Navbar'
import Connect from '../Home/Connect/Connect'
import riskImg from '../../assets/riskwarning.svg'


const Riskwarning = () => {
    return (
        <section className={styles.riskwarning_scaffold}>
            <div>
                <Navbar />
                <div className="max-wrapper">
                    <div className="max-wrapper__content">
                        <h1 className={styles.riskwarning__title}>Risk Warning</h1>
                        <div className={styles.riskwarning__content}>
                            <div className={styles.riskwarning_img}>
                                <img src={riskImg} alt="Risk Warning"/>
                            </div>
                            <div className={styles.riskwarning_list}>
                                <div className={styles.riskwarning_listwrap}>
                                <div>
                                    <span>1.</span><span>No member of our team is a financial advisor.</span>
                                </div>
                                <div>
                                    <span>2.</span><span>Do the due diligence of carrying out your personal research on any cryptocurrency project.</span>
                                </div>
                                <div>
                                    <span>3.</span><span>While we can guarantee that we will not rug this project (liquidity locked forever); we can not influence the impact of market volatility on price action.</span>
                                </div>
                                <div>
                                    <span>4.</span><span>Cryptocurrency trading is risky, therefore invest what you can afford to lose.</span>
                                </div>
                                <div>
                                    <span>5.</span><span>This token does not belong to any church, but is backed up by a global community of believers across various nations, tribes and tongue.</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Connect />
            </div>
            <div className={styles.riskwarning__footer}>
                <Footer />
            </div>
        </section>
    )
}

export default Riskwarning