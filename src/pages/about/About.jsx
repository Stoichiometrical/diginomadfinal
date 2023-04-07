import "./about.scss"
import AboutUsHero from "../../components/aboutHero/AboutUsHero";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";
import Form from "../../components/form/Form";
import {useState} from "react";

export default function About() {
      const[popUp,setPopUp] = useState(false);
    return(
        <>
            <div className="about">
                <div className="about-container">
                    <AboutUsHero setPopUp={setPopUp}/>
                    { popUp &&  <Form/>  }
                    <Team/>
                    <Footer/>
                </div>

            </div>
        </>
    )
}