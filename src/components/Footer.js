import React from 'react'
import { Button } from './Button'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Call Beauty by Brittany to receive our best cosmetic deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>Subscibe</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer
