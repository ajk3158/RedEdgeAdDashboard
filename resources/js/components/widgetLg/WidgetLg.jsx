import React from 'react'
import "./widgetLg.css"
import { getSheet, regNumFormat } from "../../directData"

export default function 
() {

    function platforms(){
        var plats = [];
        for(var x = 7; x < window.data_array.length; x++){
            if(window.data_array[x].length != 9){
                break;
            }
            plats.push(
                <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">{getSheet(x, 6)}</span>
            </td>
            <td className="widgetLgAmount">{regNumFormat(getSheet(x, 7))}</td>
            <td className="widgetLgDate">{getSheet(x, 8)}</td>
            </tr>
            )
        }
        return plats;
    }


    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle"> {getSheet(6, 5)} </h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh"><u>{getSheet(6, 6)}</u></th>
                <th className="widgetLgTh"><u>{getSheet(6, 7)}</u></th>
                <th className="widgetLgTh"><u>{getSheet(6, 8)}</u></th>
            </tr>

            {platforms()}

        </table>
    </div>
  )
}
