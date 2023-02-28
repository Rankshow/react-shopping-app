import React, { useState }from "react";
import './footer.css';

const Footer = () => {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    // async function
    async function handleSubmit(e) {
        e.preventDefault(e);
        setIsSending(true);
        await sendMessage(text);
        setIsSending(false);
        setIsSent(true);
    }

    // The feedback to get after sending the messsage
    if (isSent) {
        return <p className="resultFeedback">Thanks for the feedback we will get back to you soon</p>
    }

    return(
        <>
          <div className="container-head bg-dark justify-content-center text-white d-flex gap-5">
            <div className="location">
                <h1 className="footer-head">Location</h1>
                 <p className="list text-center text-warning">ikeja</p>
                 <p className="list text-center text-warning">Lekki</p>
                 <p className="list text-center text-warning">Victorial island</p>
                 <p className="list text-center text-warning">Liverpool</p>
            </div>
                <div className="kitchen">
                    <h1 className="footer-head">Kitchen</h1>
                    <p className="list text-center text-warning">Marvin dish</p>
                    <p className="list text-center text-warning">Maresa dish</p>
                    <p className="list text-center text-warning">Astro kits</p>
                    <p className="list text-center text-warning">starver Notch</p>
                </div>
                <div className="ReachOut">
                    <h1 className="footer-head">Reach out </h1>
                     <p className="list text-center text-warning">LinkeIn</p>
                     <p className="list text-center text-warning">Facebook</p>
                     <p className="list text-center text-warning">Whatsapp</p>
                     <p className="list text-center text-warning">Twitter</p>
                </div>
                <div className="ReachOut">
                    <h1 className="footer-head">Feedback</h1>
                     <form onSubmit={handleSubmit}>
                        <h1 className="quest">Give us your feedback</h1>
                        <textarea
                            disabled={isSending}
                            value={text}
                            onChange={ (e) => setText(e.target.value)}
                            />
                        <br />
                        <button className="btnSubmit"
                            disabled={isSending}
                            type="submit"
                            >
                            Send Request
                        </button>
                        <div className="Response">{isSending && <p>Sending.......</p>}</div>
                     </form>
                </div>
                <p className="copy-right text-white fs-6 d-flex align-items-end">© 2023 Copyright by Rankshow </p>
          </div>
        </>
    )
}
// pretending sending message
const sendMessage = (text) => {
 return new Promise( resolve => {
    setTimeout(resolve, 2000)
 })
}

export default Footer;