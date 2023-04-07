import "./footer.scss"

export default function Footer(){
    return(

        <>
            <div className="footer">
                <div className="footerWrapper">
                    <div className="head-text">
                        <div className="digi-text">DIGI<span className="change">NOMAD</span></div>
                        <div className="small-text">Follow us on social media</div>
                    </div>
                    <div className="soc-icons">
                        <div className="center">
                            <a href="https://twitter.com/TravelLeisure"><img src="assets/twitr.png" alt="Logo" className="icons"/></a>
                        <a href="https://www.linkedin.com/in/david-gondo/"><img src="assets/link2.png" alt="Logo" className="icons"/></a>
                            <a href="https://www.facebook.com/Meta"><img src="assets/face.png" alt="Logo" className="icons"/></a>
                            <a href="www.instagram.com"><img src="assets/i1.png" alt="Logo" className="icons"/></a>
                        </div>
                    </div>
                    <div className="copyright">
                        <span className="copy">&copy;Copyright DIGINOMAD.All Rights Reserved 2023</span>
                    </div>
                </div>
            </div>

        </>
    )
}