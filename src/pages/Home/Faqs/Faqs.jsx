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
                            <p>The Word Token $TWD is a community-driven BSC project 
providing unique read to earn opportunities for users, by utilizing Web 3 e-library and publishing platforms, staking opportunities for rewards, and social ecosystem for networking among community members.</p>
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
                            <p>YES - <a href="https://bscscan.com/tx/0x1c2b1beb5fbb757af1f79b999429a8cff4c9e20b0b7ff740ee1128df69f2edbb" target='_blank'>Renounce Ownership</a></p>
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
                            <p>Coming soon - <a href="https://app.thewordtoken.com">https://app.thewordtoken.com</a></p>
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
