import { useEffect, useState } from "react"
import './Messages.css'

function Messages() {


    return (
        <>
            <div className="content-messages">
                <div className="message-block">
                    <h2 className="tittle-message-container">Introductions</h2>
                    <div className="icon-message-container">
                        <div className="initial-name-icon">
                            <div className="circle-icon-name">
                                <span className="initial-name-icon-span">K</span>
                            </div>
                            <h3 className="name-person-tittle">Karl Braun</h3>
                        </div>
                        <div className="sent-data-block">
                            <p className="data-text">Just now</p>
                        </div>
                    </div>
                    <div className="block-message">
                            <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quo alias aliquid similique nostrum unde nisi eligendi cum sapiente placeat ad numquam ab? Obcaecati vitae rem cum corrupti voluptatibus ea!
                            <br />
                            <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est corrupti eveniet laboriosam blanditiis eum minima ut nisi exercitationem nesciunt voluptates inventore magni distinctio, placeat numquam ea sit, totam reiciendis quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ducimus libero dolore minima natus? Ratione omnis, distinctio porro provident cumque repellat, laudantium nobis repellendus velit incidunt quam ipsa, labore asperiores.

                            </p>
                        </div>
                    <div className="buttons-message">
                        <button className="button-message">
                            <span className="span-save-button"></span>
                        </button>
                        <button className="button-message">
                            <span className="span-read-button"></span>
                        </button>
                        <button className="button-message">
                            <span className="span-expand-button">
                                <link rel="stylesheet"
                                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages