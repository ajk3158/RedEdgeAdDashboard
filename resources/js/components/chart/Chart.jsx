import React, { useState } from 'react'
import "./chart.css"
import { LineChart, ReferenceLine, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import  jsPDF  from "jspdf";
import html2canvas from "html2canvas";
import { getSheet } from '../../directData';


export default function Chart({ title, data, dataKey, dataKey2, dataKey3, grid }) {


  const [lines, setLines] = useState(0)
  function revenueCost() {
    setLines(function () {
      return [
        <XAxis dataKey="name" stroke="#5550bd" />,
        <YAxis type="number" domain={[-100, 100]} tickCount={10} interval={0} stroke="#5550bd" />,
        <ReferenceLine y={0} stroke="#5550bd" strokeDasharray="3 3" />,
        <Line type="monotone" dataKey={dataKey} stroke="#3bb077" />,
        <Line type="monotone" dataKey={dataKey2} stroke="#c72d2d" />
      ]
    })
  }
  function profit() {
    setLines(function () {
      return [
        <XAxis dataKey="name" stroke="#5550bd" />,
        <YAxis type="number" domain={[-100, 100]} tickCount={10} interval={0} stroke="#5550bd" />,
        <ReferenceLine y={0} stroke="#5550bd" strokeDasharray="3 3" />,
        <Line type="monotone" dataKey={dataKey3} stroke="#000000" />
      ]
    })
  }


  /*var doc = new jsPDF();

  function saveDash(divID, title){
    doc.html(`<html><head><title>${title}</title></head><body>` + document.getElementById(divID).innerHTML + `</body></html>`, {
      callback: function (doc) {
        doc.save();
        }
      });
  } */

  function saveDash(divID) {
    const source = document.getElementById(divID);
    html2canvas(source, {logging:true, letterRendering:1, useCORS: true, scale:3}).then(canvas => {
      const imgWidth = 290;
      const imgHeight = 200;
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('l', 'mm', 'a4');
      pdf.addImage(imgData, 'JPG', 3.8, 5, imgWidth, imgHeight);
      pdf.save(getSheet(0,0) + " " + window.timeGrab + ".pdf");
    })
  }

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          {lines}
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>

      <div class="text-center" style={{ marginTop: 5 + "px" }}>
        <button className="chartButton" onClick={revenueCost}>Revenue/Cost</button>
        <button className="chartButton" onClick={profit}>Profit</button>
        <button className="chartButton" onClick={() => saveDash('dashboard')}>Save Dashboard</button>
      </div>
    </div>
  )
}
