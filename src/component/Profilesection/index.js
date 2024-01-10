import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Chart from "chart.js/auto";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

const Profilesection = () => {
  const [setStartDate] = useState(new Date());
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["12.00AM", "Now", "11.59 PM"],
        datasets: [
          {
            label: "Line Chart",
            data: [65, 59, 80],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 2,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="profile-container">
          <div className="username-cont">
            <CgProfile className="profile-icon" />
            <div>
              <h1 className="profile-heading">Good Morning Ogus</h1>
              <p className="profile-para">
                Here are your state for today 09-01-2024
              </p>
            </div>
          </div>
          <div className="calender-container">
            <DatePicker
              onChange={(date) => setStartDate(date)}
              className="calender"
              placeholderText="Today"
            />
            <p>Compare to</p>
            <DatePicker
              onChange={(date) => setStartDate(date)}
              className="calender"
              placeholderText="Previous Day"
            />
          </div>
        </div>
        <div className="money-container">
          <div className="total-revenue">
            <li className="li-item">
              <p className="p-1">Total Revenue</p>
              <p className="p-2">+12.5%</p>
            </li>
            <h1 className="t-heading">$32621.72</h1>
            <p className="t-para">433 Orders</p>
          </div>
          <div className="subscribe">
            <li className="li-item">
              <p className="p-1">Subscribes</p>
              <p className="p-2">+32.5%</p>
            </li>
            <h1 className="t-heading">484,205</h1>
            <p className="t-para">$56 Orders</p>
          </div>
          <div className="subscribe">
            <li className="li-item">
              <p className="p-1">Conversations</p>
              <p className="p-3"> -3.4%</p>
            </li>
            <h1 className="t-heading">552,553</h1>
            <p className="t-para">5min Average Response Time</p>
          </div>
          <div className="subscribe">
            <li className="li-item">
              <p className="p-1">Popup Conversion Rate</p>
              <p className="p-2">+32.5%</p>
            </li>
            <h1 className="t-heading">25%</h1>
            <p className="t-para">5% Sales Conversion Rate</p>
          </div>
        </div>
        <div className="chart-container">
          <canvas ref={chartRef} style={{ width: "250px", height: "80px" }} />
        </div>
        <div>
          <ul className="ul-list-items">
            <button className="l-1">Automations</button>
            <button className="l-2">Capaigns</button>
            <button className="l-2">Segments</button>
            <DatePicker
              onChange={(date) => setStartDate(date)}
              className="calender-1"
              placeholderText="Last Month"
            />
          </ul>
        </div>
        <div className="automation-container">
          <div className="a-1">
            <img
              src="https://thumbs.dreamstime.com/b/supermarket-trolley-clipping-path-1558044.jpg"
              alt="trolley-img"
              className="trolley-img"
            />
            <div className="a-container">
              <div className="li-i-1">
                <h1 className="a-heading">Abandoned Cart 7 Days</h1>
                <FaLongArrowAltRight className="arrow" />
              </div>
              <p className="a-para">4024 Sent | 124 Clicks</p>
            </div>
          </div>
          <div>
            <div>
              <p className="a-p-1">$5,231</p>
              <p className="a-p-2">41 Orders | $150AOV</p>
            </div>
          </div>
        </div>
        <div className="campaign-container">
          <div className="a-1">
            <img
              src="https://thumbs.dreamstime.com/b/supermarket-trolley-clipping-path-1558044.jpg"
              alt="trolley-img"
              className="trolley-img"
            />
            <div className="a-container">
              <div className="li-i-1">
                <h1 className="a-heading">Abandoned Cart 15 Min</h1>
                <FaLongArrowAltRight className="arrow" />
              </div>
              <p className="a-para">4024 Sent | 124 Clicks</p>
            </div>
          </div>
          <div>
            <div>
              <p className="a-p-1">$24,521</p>
              <p className="a-p-2">41 Orders | $150AOV</p>
            </div>
          </div>
        </div>
        <div className="campaign-container">
          <div className="a-1">
            <img
              src="https://thumbs.dreamstime.com/b/supermarket-trolley-clipping-path-1558044.jpg"
              alt="trolley-img"
              className="trolley-img"
            />
            <div className="a-container">
              <div className="li-i-1">
                <h1 className="a-heading">Abandoned Cart 15 Min</h1>
                <FaLongArrowAltRight className="arrow" />
              </div>
              <p className="a-para">4024 Sent | 124 Clicks</p>
            </div>
          </div>
          <div>
            <div>
              <p className="a-p-1">$24,521</p>
              <p className="a-p-2">41 Orders | $150AOV</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilesection;
