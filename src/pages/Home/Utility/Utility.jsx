import React from 'react'
import './Utility.scss'
import line1 from '../../../assets/line1.png'
import line2 from '../../../assets/line2.png'
import line3 from '../../../assets/line3.png'
const Utility = () => {
    return (
        <div className='margin-top max-wrapper utility-wrapper'>
            <img src={line1} className='utility-line'/>
                <img src={line2} className='utility-line utility-line-2'/>
                <img src={line3} className='utility-line utility-line-3'/>
            <div className="max-wrapper__content utility">
                <div className="utility__card">
                    <div className="utility__card--title">
                        <h1> 📖 Utility ✨</h1>
                    </div>
                    <div className="utility__card--content">
                        <p>We are introducing the first ever Web3 read-to-earn platform developed and streamlined to serve the global Christian community and the world at large. Users can read the Bible and other censored literatures and materials to earn cryptocurrency, which will in turn promote the overall reading culture of users across the globe.</p>
                        <p>Thereafter we hope to build a social ecosystem for the global church and the world at large where meetings and conferences can be held virtually without any restrictions or hindrance, connecting people even faster and with ease.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utility