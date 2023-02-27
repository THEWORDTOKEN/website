import React from 'react'
import './Roadmap.scss'
import telegram from '../../../assets/telegram.png'


const Roadmap = () => {
    return (
        <div className="max-wrapper" id="roadmap">
            <div className="max-wrapper__content roadmap">
                <div className="roadmap__intro">
                    <div>
                    <h2>To buy on P2P $TWD Marketplace </h2>
                    <span><svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5834 19.25L13.4251 17.0146L18.898 11.5417H0.166748V8.45833H18.898L13.4251 2.98542L15.5834 0.75L24.8334 10L15.5834 19.25Z" fill="#484848" />
                    </svg>
                        <a href="https://t.me/TWDP2P" target="_blank"><img height="50" src={telegram} alt="$TWD P2P" /></a>
                    </span>
                    </div>
                </div>
                <div className="roadmap__title">
                    <h1>Roadmap</h1>
                    <p>Phase I (February - June 2023)</p>
                </div>
                <ul className="roadmap__content">
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-1"></div>
                        <div className="roadmap__content--timeline__content display-left">
                            <p>$TWD Fair Launch</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-2"></div>
                        <div className="roadmap__content--timeline__content display-right">
                            <p>3,000 Wallet Holders</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-3"></div>
                        <div className="roadmap__content--timeline__content display-left">
                            <p>9,000 Wallet Transactions</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-4"></div>
                        <div className="roadmap__content--timeline__content display-right">
                            <p>Website Launch</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-1"></div>
                        <div className="roadmap__content--timeline__content display-left">
                            <p>5,000 Telegram Subscribers & Community Members and 10,000 twitter & facebook followers</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-2"></div>
                        <div className="roadmap__content--timeline__content display-right">
                            <p>White Paper Release</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-3"></div>
                        <div className="roadmap__content--timeline__content display-left">
                            <p>RoadMap Launch</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-4"></div>
                        <div className="roadmap__content--timeline__content display-right">
                            <p>Host 10 AMAs</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-1"></div>
                        <div className="roadmap__content--timeline__content display-left">
                            <p>Renouncing Ownership</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-2"></div>
                        <div className="roadmap__content--timeline__content display-right">
                            <p>Smart Contract Audit</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-3"></div>
                        <div className="roadmap__content--timeline__content display-left">
                            <p>BscScan Smart Contract Audit</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-4"></div>
                        <div className="roadmap__content--timeline__content display-right">
                            <p>CMC Listing</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-1"></div>
                        <div className="roadmap__content--timeline__content display-left">
                            <p>Coin Gecko Listing</p>
                        </div>
                    </li>

                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-2"></div>
                        <div className="roadmap__content--timeline__content display-right">
                            <p>Global Marketing</p>
                        </div>
                    </li>
                    <li className="roadmap__content--timeline">
                        <div className="roadmap__content--timeline__track roadmap__color-3"></div>
                        <div className="roadmap__content--timeline__content display-left">
                            <p>1M Market Cap</p>
                        </div>
                    </li>
                </ul>
                <div className="roadmap__subtitle">
                    <p>Phase II Coming Soon... </p>
                </div>
            </div>
        </div>
    )
}

export default Roadmap