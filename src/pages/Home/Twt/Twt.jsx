import React from 'react'
import './Twt.scss'
import rocket from '../../../assets/rocket.png'
import secure from '../../../assets/secure.png'
import community from '../../../assets/community.png'
import percentage from '../../../assets/percentage.png'
const Twt = () => {
  return (
    <section className="max-wrapper margin-top" id="about-token">
        <div className="max-wrapper__content twt">
            <div className="twt__main">
                <h1 className="twt__main--title">The Word Token ($TWD)</h1>
                <div className="twt__main--contract"><span>Contract Address:</span> <a href="https://bscscan.com/address/0xf00cd9366a13e725ab6764ee6fc8bd21da22786e" target="blank">0xf00cD9366A13e725AB6764EE6FC8Bd21dA22786e</a></div>
                <p className="twt__main--subtitle">
                THE WORD ($TWD) is the first digital asset created by a Community of Christians for the Body of Christ globally, with a dynamic utility never seen on the crypto scene before. Total Supply of 100B (With the intention of making this token really valuable) 30% of the total supply has been locked 🔒 for the Body of Christ for 7years. 30% Burnt before fair launch. Leaving only 40% of total supply in circulation. 100% Liquidity locked forever.
                </p>
            </div>
            <div className="twt__cards">
                <div className="twt__cards--card">
                    <div>
                        <img src={rocket} alt="Launch"/>
                    <h2>Fair Launch</h2>
                    </div>
                    <p>We have launched The Word Token fairly for everyone, no presale and/or private sale. We have decided that everyone should have a fair chance at getting into the market to purchase ou token. The Word Token is available for everyone on PancakeSwap V2 using the correct contract address.</p>
                </div>
                <div className="twt__cards--card">
                    <div>
                    <img src={secure} alt="Launch"/>
                    <h2>Liquidity</h2>
                    </div>
                    <p>The liquidity pool of The Word Token is currently locked (100%) forever. Ownership of this token has been renounced. BSC Scan Stats</p>
                </div>
                <div className="twt__cards--card">
                    <div>
                    <img src={community} alt="Launch"/>
                    <h2>Community Driven</h2>
                    </div>
                    <p>The Word Token is a community-driven token, backed up strongly by Christians all over the world. It is no gainsaying that the christain community is one of the strongest communities globally.</p>
                </div>
                <div className="twt__cards--card">
                    <div>
                    <img src={percentage} alt="Launch"/>
                    <h2>7% Slippage</h2>
                    </div>
                    <p>Currently, the slippage rate for The Word Token is only 7%. 1% goes back to liquidity pool, 1% is shared to all holders, 4% to Dev Wallet (for marketing, community and partnership).</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Twt