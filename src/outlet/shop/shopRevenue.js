import React, {useEffect, useState} from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from "axios";
import {bool, boolean} from "yup";

const ShopRevenue = () => {
        const [data, setData] = useState([]);
        const [years, setYears] = useState([]);
        const [months, setMonths] = useState([
            {num: 1, name: 'January', Revenue: 0},
            {num: 2, name: 'February', Revenue: 0},
            {num: 3, name: 'March', Revenue: 0},
            {num: 4, name: 'April', Revenue: 0},
            {num: 5, name: 'May', Revenue: 0},
            {num: 6, name: 'June', Revenue: 0},
            {num: 7, name: 'July', Revenue: 0},
            {num: 8, name: 'August', Revenue: 0},
            {num: 9, name: 'September', Revenue: 0},
            {num: 0, name: 'October', Revenue: 0},
            {num: 11, name: 'November', Revenue: 0},
            {num: 12, name: 'December', Revenue: 0},
        ])
        useEffect(() => {
            axios.get("http://localhost:8080/shops/revenue", {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            }).then((resp) => {
                setData(resp.data);
            }).catch(err => {
                console.log(err);
            })
        }, [])
        useEffect(() => {
            let arr = [];
            for (const d of data) {
                let check = true;
                for (const a of arr) {
                    if (d.year == a) {
                        check = false;
                        break;
                    }
                }
                if (check) {
                    arr.push(d.year);
                }
            }
            setYears(arr)
        }, [data])
        const handleChange = (year) => {
            let arr = [];
            for (const month of months) {
                let check = false;
                let index = -1
                for (let i = 0; i < data.length; i++) {
                    if (data[i].year == year && data[i].month == month.num) {
                        check = true;
                        index = i;
                        break;
                    }
                }
                if (check) {
                    arr.push({num: month.num, name: month.name, Revenue: data[index].revenue})
                } else {
                    arr.push({num: month.num, name: month.name, Revenue: 0})
                }
            }
            setMonths(arr);
        };

        return (
            <>
                <div style={{marginTop: '20px'}} className="col-lg-9 col-md-4 col-12 border-end  d-none d-md-block">
                    <div style={{width:"130px", background:"green"}}>
                        <select onChange={(event) => handleChange(event.target.value)} className={'form-control'} >
                            <option>Choose Year</option>
                            {years.length > 0 && years.map((year) => (
                                <option value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{marginTop: '100px'}}>
                        <ResponsiveContainer className="chart" height={300}>

                            <LineChart width={200} height={300} data={months}
                                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="Revenue" stroke="green" activeDot={{r: 8}}/>
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </>
        );
    }
;

export default ShopRevenue;