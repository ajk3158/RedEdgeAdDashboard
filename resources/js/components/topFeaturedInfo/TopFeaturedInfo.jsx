import React from 'react'
import "./topfeaturedinfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { getSheet, getDifference, numFormat, percentChange, round } from "../../directData"

console.log(window.data_array);
console.log(timeGrab);

function arrow(string){
  
    if(string.toString().substr(0,1) === "-"){
     return <ArrowDownward className='featuredIcon negative' />;
  }
    else{
      return <ArrowUpward className='featuredIcon' />;
    }
}

export default function TopFeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">{getSheet(0, 1)}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{numFormat(getSheet(2, 1))}</span>
                    <span className="featuredMoneyRate">{round(percentChange(getSheet(1, 1), getSheet(2, 1)))}% {arrow(round(percentChange(getSheet(1, 1), getSheet(2, 1))))}</span>
                </div>
                <span className="featuredSub">Compared to {getSheet(3, 1)}</span>
                <div>
                <span className="featuredSub" style={{fontSize: "13px", color: "gray"}}>Actual Difference: {numFormat(getDifference(1, 1, 2, 1))}</span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">{getSheet(0, 2)}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{numFormat(getSheet(2, 2))}</span>
                    <span className="featuredMoneyRate">{round(percentChange(getSheet(1, 2), getSheet(2, 2)))}% {arrow(round(percentChange(getSheet(1, 2), getSheet(2, 2))))}</span>
                </div>
                <span className="featuredSub">Compared to {getSheet(3, 1)}</span>
                <div>
                <span className="featuredSub" style={{fontSize: "13px", color: "gray"}}>Actual Difference: {numFormat(getDifference(1, 2, 2, 2))}</span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">{getSheet(0, 3)}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{numFormat(getSheet(2, 3))}</span>
                    <span className="featuredMoneyRate">{round(percentChange(getSheet(1, 3), getSheet(2, 3)))}% {arrow(round(percentChange(getSheet(1, 3), getSheet(2, 3))))}</span>
                </div>
                <span className="featuredSub">Compared to {getSheet(3, 1)}</span>
                <div>
                <span className="featuredSub" style={{fontSize: "13px", color: "gray"}}>Actual Difference: {numFormat(getDifference(1, 3, 2, 3))}</span>
                </div>
            </div>

        </div>
    )
}
