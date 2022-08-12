import React from 'react';
import "./campaign.css";
import TopFeaturedInfo from "../../components/topFeaturedInfo/TopFeaturedInfo";
import BottomFeaturedInfo from "../../components/bottomFeaturedInfo/BottomFeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Chart from "../../components/chart/Chart";
import { campaignData, getSheet } from "../../directData";
import { createRoot } from 'react-dom/client';

export default function Campaign() {

  return (
    <div id="dashboard" >
    <div className="campaign">
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <TopFeaturedInfo />
      <Chart data={campaignData} title={getSheet(6, 0)} grid dataKey={getSheet(6, 1)} dataKey2={getSheet(6, 2)} dataKey3={getSheet(6, 3)} />
      <BottomFeaturedInfo />
      <div className="campaignWidgets">
        <WidgetLg />
      </div>
    </div>
    </div>
  )
}

if (document.getElementById('campaign')) {
  createRoot(document.getElementById('campaign')).render(<Campaign />)
}