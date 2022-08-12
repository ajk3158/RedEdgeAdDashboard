import React from 'react'
import "./bottomfeaturedinfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { getSheet, getDifference, numFormat, regNumFormat, percentChange, round } from "../../directData.js"


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
            <span className="featuredTitle">{getSheet(0, 4)}</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{numFormat(getSheet(2, 4))}</span>
                <span className="featuredMoneyRate">{round(percentChange(getSheet(1, 4), getSheet(2, 4)))}% {arrow(round(percentChange(getSheet(1, 4), getSheet(2, 4))))}</span>
            </div>
            <span className="featuredSub">Compared to {getSheet(3, 1)}</span>
            <div>
            <span className="featuredSub" style={{fontSize: "13px", color: "gray"}}>Actual Difference: {numFormat(getDifference(1, 4, 2, 4))}</span>
            </div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">{getSheet(0, 5)}</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{regNumFormat(getSheet(2, 5))}</span>
                <span className="featuredMoneyRate">{round(percentChange(getSheet(1, 5), getSheet(2, 5)))}% {arrow(round(percentChange(getSheet(1, 5), getSheet(2, 5))))}</span>
            </div>
            <span className="featuredSub">Compared to {getSheet(3, 1)}</span>
            <div>
            <span className="featuredSub" style={{fontSize: "13px", color: "gray"}}>Actual Difference: {regNumFormat(getDifference(1, 5, 2, 5))}</span>
            </div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">{getSheet(0, 6)}</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{regNumFormat(getSheet(2, 6))}</span>
                <span className="featuredMoneyRate">{round(percentChange(getSheet(1, 6), getSheet(2, 6)))}% {arrow(round(percentChange(getSheet(1, 6), getSheet(2, 6))))}</span>
            </div>
            <span className="featuredSub">Compared to {getSheet(3, 1)}</span>
            <div>
            <span className="featuredSub" style={{fontSize: "13px", color: "gray"}}>Actual Difference: {regNumFormat(getDifference(1, 6, 2, 6))}</span>
            </div>
        </div>

    </div>
  )
}
