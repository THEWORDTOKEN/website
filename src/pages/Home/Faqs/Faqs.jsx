import React, { useEffect } from 'react'
import './Faqs.scss'
import { accordion } from '../../../utils/accordion'

const Faqs = () => {



    useEffect(() => {
        accordion(".faqs__content--accordion-title")
    }, [])

    return (
        <div className="max-wrapper margin-top" id="audit">
            <div className="max-wrapper__content faqs margin-top">
                <div className="faqs__title">
                    <h1>FAQS</h1>
                    <p>The most common questions about $TWD we could find. Still have a few more? Reach out to our team via email.</p>
                </div>
                <div className='faqs__content'>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">What is The Word Token?  <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                            <p>It is the first Christocentric digital currency built by believers of the Christian faith for Believers of the Christian faith. Created as God's strategy for the end-time wealth transfer and security - Securing the seven years Joseph Strategy for the coming famine.</p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">How can I Buy The Word Token?  <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                            <p>The word token can be purchased on Pancake Swap <a href="https://thewordtoken.com/#how-to-buy">https://thewordtoken.com/#how-to-buy</a></p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">What is the use case of The Word Token? <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                            <p>•	Rewarding readers monthly on the Read2Earn platform with BNB, according to their position on the leadership board.</p>
                            <p>•	Rewarding book writers with $TWD when their books are bought/rented on the e-library.</p>
                            <p>•	Medium of exchange on the largest Christian social ecosystem.</p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">Has ownership been renounced?  <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                            <p>YES</p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">What is the market cap prediction by the end of 2024?  <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                            <p>$1 Billion</p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">How can I stake my $TWD Tokens?  <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                            <p>Coming soon</p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">When will the read to earn application be launched?  <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                            <p>May 2024</p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">How can I access the project's white paper?  <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                            <p>GoTo <a href="https://thewordtoken.com/">https://thewordtoken.com/</a></p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">How can I Partner or volunteer to join the team?  <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                            <p><a href="admin@thewordtoken.com">admin@thewordtoken.com</a></p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">How do I join the community?  <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                        <p>GoTo <a href="https://twitter.com/newTWDtoken">https://twitter.com/newTWDtoken</a></p>
                        <p>GoTo <a href="https://t.me/thewordtoken">https://t.me/thewordtoken</a></p>
                        </div>
                    </div>
                    <div className="faqs__content--accordion">
                        <h3 className="faqs__content--accordion-title">Still need some more answers? <span><span className="material-icons faqs-accordion-indicator">add</span></span></h3>
                        <div className="faqs__content--accordion-content">
                        <p>GoTo <a href="https://thewordtoken.com/">https://thewordtoken.com/</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
