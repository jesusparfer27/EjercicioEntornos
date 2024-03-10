import { useEffect, useState } from "react"
import './Reply.css'

function Reply() {


    return (
        <>
            <div className="reply-container">
                <div className="header-reply">
                    <button className="button-cancel-header">
                        <p className="cancel">Cancel</p>
                    </button>
                    <strong className="reply">Reply</strong>
                    <div className="icon-header">
                        <button className="button-icon-header">
                            <span className="material-symbols-outlined">
                                send
                            </span>
                        </button>
                    </div>
                </div>
                <hr />
                <div className="destination-email">
                    <div className="destination-group">
                        <div className="icon-destination">
                            <span className="material-symbols-outlined">
                                reply
                            </span>
                        </div>
                        <div className="name-destination">
                            <p className="destination-adress">Kaul Bryan</p>
                        </div>
                    </div>
                    <div className="recently-adresses">
                        <button className="choose-adress">
                            <span className="material-symbols-outlined">
                                expand_more
                            </span>
                        </button>
                    </div>
                </div>
                <hr />
                <div className="remitent-container">
                    <div className="remitent">
                        <p className="remitent-p">RE: </p>
                    </div>
                    <div className="remitent-option">
                        <p className="remitent-option-p">Introduction</p>
                    </div>
                </div>
                <hr />
                <div className="message-input">
                    <label htmlFor=""></label>
                    <textarea  className="message-text-area" name="" id="" cols="30" rows="10" placeholder="Write Here..."></textarea>
                </div>
            </div>
        </>
    )
}

export default Reply