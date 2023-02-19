import React, { useEffect } from 'react'
import './Faqs.scss'

const Faqs = () => {



    useEffect(() => {
        const footerTitle = document.querySelectorAll(".faqs__content--accordion-title")
        footerTitle.forEach(title => {

            let footerLinks = title.nextElementSibling
            const pointer = title.children.item(0)

            title.onclick = () => {
                if (!footerLinks.classList.contains("effect")) {
                    pointer.textContent = "remove"
                    pointer.classList.add("active")
                    footerLinks.classList.add("effect")
                    footerLinks.style.height = "auto"

                    let footerLinksHeight = footerLinks.clientHeight + 'px'
                    footerLinks.style.height = '0px'
                    setTimeout(() => {
                        footerLinks.style.height = footerLinksHeight
                    }, 0)


                } else {
                    pointer.textContent = "add"
                    pointer.classList.remove("active")
                    footerLinks.style.height = '0px'
                    footerLinks.addEventListener("transitionend", () => {
                        footerLinks.classList.remove("effect")
                    }, { once: true })

                }
            }
        })
    }, [])

    return (
        <div className="max-wrapper margin-top" id="audit">
            <div className="max-wrapper__content faqs margin-top">
                <div className="faqs__title">
                    <h1>FAQS</h1>
                    <p>The most common questions about $TWD we could find. Still have a few more? Reach out to our team via email.</p>
                </div>
                <div className='faqs__content'>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">What is The Word Token?  <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                            <p>It is the first Christocentric digital currency built by believers of the Christian faith for Believers of the Christian faith. Created as God's strategy for the end-time wealth transfer and security - Securing the seven years Joseph Strategy for the coming famine.</p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">How can I Buy The Word Token?  <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                            <p>The word token can be purchased on Pancake Swap <a href="https://thewordtoken.com/#how-to-buy">https://thewordtoken.com/#how-to-buy</a></p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">What is the use case of The Word Token?<span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                            <p>•	Rewarding readers monthly on the Read2Earn platform with BNB, according to their position on the leadership board.</p>
                            <p>•	Rewarding book writers with $TWD when their books are bought/rented on the e-library.</p>
                            <p>•	Medium of exchange on the largest Christian social ecosystem.</p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">Has ownership been renounced?  <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                            <p>YES</p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">What is the market cap prediction by the end of 2024?  <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                            <p>$1 Billion</p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">How can I stake my $TWD Tokens?  <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                            <p>Coming soon</p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">When will the read to earn application be launched?  <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                            <p>May 2024</p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">How can I access the project's white paper?  <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                            <p>GoTo <a href="https://thewordtoken.com/">https://thewordtoken.com/</a></p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">How can I Partner or volunteer to join the team?  <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                            <p><a href="admin@thewordtoken.com">admin@thewordtoken.com</a></p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">How do I join the community?  <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                        <p>GoTo <a href="https://twitter.com/twdtoken">https://twitter.com/twdtoken</a></p>
                        <p>GoTo <a href="https://t.me/thewordtoken">https://t.me/thewordtoken</a></p>
                        </div>
                    </div>
                    <div class="faqs__content--accordion">
                        <h3 class="faqs__content--accordion-title">Still need some more answers? <span class="material-icons accordion-indicator">add</span></h3>
                        <div class="faqs__content--accordion-content">
                        <p>GoTo <a href="https://thewordtoken.com/">https://thewordtoken.com/</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs