import "./comparetable.scss"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";
import {useState} from "react";
import CompareChart from "../colChart/CompareChart";





export default function CompareTable({country1,country2}){
    const[foodprices,setFoodPrices] = useState(0)
    const[rentals,setRentals] = useState(0)
    const[utilities,setUtilities] = useState(0)
    const[transport,setTransport] = useState(0)
    const[clothing,setClothing] = useState(0)
    const[visual,setVisual] = useState(false)

    const[foodprices2,setFoodPrices2] = useState(0)
    const[rentals2,setRentals2] = useState(0)
    const[utilities2,setUtilities2] = useState(0)
    const[transport2,setTransport2] = useState(0)
    const[clothing2,setClothing2] = useState(0)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
    };

    const compare = [
        {
            "category": "Accomodation",
            "country1": rentals,
            "country2": rentals2,
        },
        {
            "category": "Transportation",
            "country1": transport,
            "country2": transport2
        },
        {
            "category": "Food",
            "country1": foodprices,
            "country2": foodprices2,
        },
        {
            "category": "Clothing",
            "country1": clothing,
            "country2": clothing2
        },
        {
            "category": "Utilities",
            "country1": utilities,
            "country2": utilities2
        },
    ]




    useEffect(()=>{
        async function fetchPrices(country1,country2){
            let responses = await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country1}`, options)
            let data = await responses.json()
            let p = data["prices"]

            let responses2 = await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country2}`, options)
            let data2 = await responses2.json()
            let p2 = data["prices"]

            let food = await p.filter( function(prices){return prices.category_name === "Markets"} )
            let sum = 0;
            for (let i = 0; i < food.length; i++) {
                sum += Number(food[i]["usd"]["avg"])
            }

            let food2 = await p2.filter( function(prices){return prices.category_name === "Markets"} )
            let sum2 = 0;
            for (let i = 0; i < food2.length; i++) {
                sum2 += Number(food[i]["usd"]["avg"])
            }

            let rentals = data["prices"][0]["usd"]["avg"]
            let clothing = Number(data["prices"][3]["usd"]["avg"]) + Number(data["prices"][4]["usd"]["avg"]) + Number(data["prices"][5]["usd"]["avg"])
            let utilities =  Number(data["prices"][46]["usd"]["avg"])  + Number(data["prices"][47]["usd"]["avg"]) + Number(data["prices"][48]["usd"]["avg"])
            let transport = data["prices"][44]["usd"]["avg"] * 60
            transport.toFixed(2)
            utilities.toFixed(2)
            sum.toFixed(2)
            utilities.toFixed(2)
            setRentals(rentals)
            setClothing(clothing)
            setTransport(transport)
            setUtilities(utilities)
            setFoodPrices(sum)

            let rentals2 = data2["prices"][0]["usd"]["avg"]
            let clothing2 = Number(data2["prices"][3]["usd"]["avg"]) + Number(data2["prices"][4]["usd"]["avg"]) + Number(data2["prices"][5]["usd"]["avg"])
            let utilities2 =  Number(data2["prices"][46]["usd"]["avg"])  + Number(data2["prices"][47]["usd"]["avg"]) + Number(data2["prices"][48]["usd"]["avg"])
            let transport2 = data2["prices"][44]["usd"]["avg"] * 60
            transport2.toFixed(2)
            utilities2.toFixed(2)
            sum2.toFixed(2)
            utilities2.toFixed(2)
            setRentals2(rentals2)
            setClothing2(clothing2)
            setTransport2(transport2)
            setUtilities2(utilities2)
            setFoodPrices2(sum2)
        }
        fetchPrices(country1,country2)

    },[])

    const showCompare = ()=>{
        setVisual(!visual)
    }


    return(
        <>
            <div className="comparetable">
                <div className="table-wrapper">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 , backgroundColor:"#48ACF0", color: "white" }} aria-label="simple table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{  color: "white" }}>EXPENSES</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}>{ country1}</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}>{country2 }</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{  color: "white" }}> Accomodation </TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}>{ rentals }</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}> { rentals2 } </TableCell>
                                </TableRow>
                                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{  color: "white" }}> Transportation</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}>{ transport }</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}> { transport2 }</TableCell>
                                </TableRow>

                                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{  color: "white" }}> Food</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}>{ foodprices }</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}> { foodprices2 } </TableCell>
                                </TableRow>

                                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{  color: "white" }}> Clothing </TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}>{ clothing }</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}> { clothing2 } </TableCell>
                                </TableRow>

                                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{  color: "white" }}> Utilities</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}>{ utilities }</TableCell>
                                    <TableCell align="center" sx={{  color: "white" }}>{ utilities2 } </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="btn" onClick={showCompare}>VISUALISE THIS</div>
                    { visual && <CompareChart data={compare}/> }



                </div>
            </div>
        </>
    )
}