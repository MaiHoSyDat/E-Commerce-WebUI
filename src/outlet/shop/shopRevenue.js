import React, {useEffect, useState} from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from "axios";

import CommonUtils from "../../utils/CommonUtils";

const ShopRevenue = () => {
        const [data, setData] = useState([]);
        const [years, setYears] = useState([]);
        const [year, setYear] = useState(0)
        const [checked, setChecked] = useState(false);
        const [months, setMonths] = useState([
            {Number: 1, Month: 'January', Revenue: 0},
            {Number: 2, Month: 'February', Revenue: 0},
            {Number: 3, Month: 'March', Revenue: 0},
            {Number: 4, Month: 'April', Revenue: 0},
            {Number: 5, Month: 'May', Revenue: 0},
            {Number: 6, Month: 'June', Revenue: 0},
            {Number: 7, Month: 'July', Revenue: 0},
            {Number: 8, Month: 'August', Revenue: 0},
            {Number: 9, Month: 'September', Revenue: 0},
            {Number: 0, Month: 'October', Revenue: 0},
            {Number: 11, Month: 'November', Revenue: 0},
            {Number: 12, Month: 'December', Revenue: 0},
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
            setYear(year)
            let arr = [];
            for (const month of months) {
                let check = false;
                let index = -1
                for (let i = 0; i < data.length; i++) {
                    if (data[i].year == year && data[i].month == month.Number) {
                        check = true;
                        index = i;
                        break;
                    }
                }
                if (check) {
                    arr.push({Number: month.Number, Month: month.Month, Revenue: data[index].revenue})
                } else {
                    arr.push({Number: month.Number, Month: month.Month, Revenue: 0})
                }
            }
            setMonths(arr);
        };

        const exportFile = (data, nameSheet, nameFile) => {
            CommonUtils.exportExcel(data, nameSheet, nameFile)
                .then(() => {
                    console.log('Export successful');
                })
                .catch(error => {
                    console.error('Export failed:', error);
                });
        }
        return (
            <>
                <div style={{marginTop: '20px'}} className="col-lg-9 col-md-4 col-12 border-end  d-none d-md-block">
                    <div style={{width: "130px", background: "green"}}>
                        <select onChange={(event) => handleChange(event.target.value)} className={'form-control'}>
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
                                <XAxis dataKey="Month"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="Revenue" stroke="green" activeDot={{r: 8}}/>
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="d-flex ">
                        {checked ? (
                            <span className="btn btn-dark" onClick={() => {
                                setChecked(!checked)
                                document.getElementById('table').style.display = "none";
                            }}>Hide Table</span>
                        ) : (
                            <a className="btn btn-dark" onClick={() => {
                                setChecked(!checked)
                                document.getElementById('table').style.display = "block";
                            }}>Show Table</a>
                        )}

                        &nbsp;&nbsp;
                        <a className="btn btn-primary" onClick={() => exportFile(months, "Revenue in " + year, "revenue-in-" + year)}>
                            Export File Excel
                        </a>
                    </div>
                    <div id={"table"} className={"row"} style={{margin: "30px", display: 'none'}}>
                        <strong>Year : {year}</strong>
                        <table>
                            <table className="table mb-0 text-nowrap table-centered ">
                                <thead className="bg-light">
                                <tr>
                                    <th className="col-1" style={{border: "1px solid", textAlign: "center"}}>#</th>
                                    <th className="col-3" style={{border: "1px solid", textAlign: "center"}}>Month</th>
                                    <th className="col-3" style={{border: "1px solid", textAlign: "center"}}>Revenue</th>
                                </tr>
                                </thead>
                                <tbody>
                                {months.map((item) => (
                                    <tr>
                                        <td style={{border: "1px solid", textAlign: "center"}}>{item.Number}</td>
                                        <td style={{border: "1px solid", textAlign: "center"}}>{item.Month}</td>
                                        <td style={{border: "1px solid", textAlign: "center"}}>${item.Revenue}</td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>
                        </table>
                    </div>
                </div>
            </>
        );
    }
;

export default ShopRevenue;