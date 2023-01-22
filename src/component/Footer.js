import React from "react";
import './footer.css';

const Footer = () => {
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
                <p className="copy-right text-white fs-6 d-flex align-items-end">© 2023 Copyright by Rankshow </p>
          </div>
        </>
    )
}
export default Footer;