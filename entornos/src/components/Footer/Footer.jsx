import { useEffect, useState } from "react"
import './Footer.css'

function Footer() {



    return (
        <>
            <div className="icons-line">
                <div className="icon-saved">
                    <div className="icon-saved-logo">
                        <button className="button-saved-logo">
                            <div className="span-material-saved">
                                <span className="material-symbols-outlined">
                                    bookmark
                                </span>
                            </div>
                        </button>

                    </div>
                </div>
                <div className="email-count">
                    <p className="email-count-text">
                        17 remaining
                    </p>
                </div>
                <div className="icon-unread">
                    <div className="icon-unread-logo">
                        <button className="button-unread-logo">
                            <div className="span-material-unread">
                                <span className="material-symbols-outlined">
                                    markunread_mailbox
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer