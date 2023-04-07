import "./aboutus.scss"
import Navbar from "../navbar/Navbar";

export default function AboutUsHero({ setPopUp }){
    const handleClick = () =>{
        setPopUp(true)
    }
    return(
        <>
          <div className="a-hero">
              <div className="a-hero-wrapper">
                  <Navbar/>
                  <div className="head">ABOUT US</div>
                  <div className="about-text">
                      At DIGINOMAD we strive to give you the best information
                       you will need to make the decision on where to move next.
                      Being a digital nomad can be very exciting if you are well equipped to the right resources and networks.
                  </div>
                  <div className="email">
                      <div className="email-item" onClick={handleClick}>Connect With Us</div>
                  </div>
              </div>
          </div>

        </>
    )
}