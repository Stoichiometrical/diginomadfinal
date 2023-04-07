import "./continent.scss"
import ContinentHero from "../../components/continentHero/ContinentHero";
import Footer from "../../components/footer/Footer";
import Compare from "../../components/compare/Compare";


export default function Continent() {

    return(
        <>
            <div className='continent'>
                <div className="continent-wrapper">
                    <ContinentHero/>
                    <div className="ask">
                        <div className="ask-t">ALREADY KNOW YOUR POSSIBLE DESTINATIONS?
                            COMPARE THEM INSTEAD</div>
                    </div>
                    <Compare/>
                    <Footer/>
                </div>

            </div>
        </>
    )
}