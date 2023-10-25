import { useState } from "react";
import UpdateModal from "./UpdateModal";


const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="html-header section-container">
            <div className="html-content">
                <div className="html-logo">
                    <img src="./assets/html-logo.svg" alt="" />
                </div>
                <div className="html-desc">
                    <h2>Hypertext Markup Language</h2>
                    <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                </div>
            </div>
            <div id="update" onClick={() => setShowModal(true)}>
                Update
            </div>
            {showModal && (
                <UpdateModal onClose={() => setShowModal(false)} />
            )}
        </div>
    )
}

export default Hero