import './home.scss'
import Hero from "../../components/hero/Hero";
import Cards from "../../components/card/Cards";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import Door from "../../components/door/Door";



export default function Home(){

    return(
        <>
            <Hero/>
            <div id="continents">
                <Cards heading="HOW DIGINOMAD CAN HELP YOU">
                    <Card name="Find the cost of living in a country" image="assets/c8.jpg"   />
                    <Card name="Compare the cost of living in two countries" image="assets/c7.jpg" />
                    <Card name="Get to know the country you want to move to" image="assets/c1.jpg" />
                </Cards>

            </div>

            <Door/>

            <Footer/>

        </>


    )
}