import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./col.scss"



export default function  CompareChart({data}){
    return(
        <>
            <div className="col">
                <div className="col-wrapper">
                    <div className="head">COST OF LIVING</div>
            <BarChart
                width={800}
                height={410}
                margin={{ top: 40, right: 30 , left: 20, bottom: 15 }}
                data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" label={{  value: 'Expenses', position: 'bottom', fontWeight : 'bold' , offset : 18}}  />
                <YAxis label={{  value: 'Cost in USD', angle :-90 , position: 'left' , fontWeight : 'bold'}} />
                <Tooltip />
                <Legend />
                <Bar dataKey="country1" fill="#48ACF0" />

                <Bar dataKey="country2" fill="#82ca9d" />
            </BarChart>
                </div>
            </div>

        </>
    )
}