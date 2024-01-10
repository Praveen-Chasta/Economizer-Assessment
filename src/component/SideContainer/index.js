import { BsFillBagDashFill } from "react-icons/bs";
import { SiTheconversation } from "react-icons/si";
import { RiRobot2Line, RiBarChartBoxLine } from "react-icons/ri";
import { LuMessagesSquare } from "react-icons/lu";
import { TbMessage2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { PiLineSegmentsLight } from "react-icons/pi";

import { CiSearch, CiSliderHorizontal } from "react-icons/ci";
import "./index.css";

const SideContainer = () => (
  <div className="left-side-container">
    <div>
      <div className="top-side-container">
        <h3>Blue Receipt</h3>
        <div className="search-container">
          <CiSearch />
          <input type="search" placeholder="Search..." className="input" />
        </div>
        <div className="dashboard">
          <BsFillBagDashFill className="icon" />
          <p className="dash-para">Dashboard</p>
        </div>
      </div>
      <hr className="hr-line" />
      <ul className="ul-lists">
        <li className="list-items">
          <SiTheconversation className="icon-1" />
          <p className="dash-para">Conversation</p>
        </li>
        <li className="list-items">
          <RiRobot2Line className="icon-1" />
          <p className="dash-para">Automation</p>
        </li>
        <li className="list-items">
          <RiBarChartBoxLine className="icon-1" />
          <p className="dash-para">Campaigns</p>
        </li>
        <li className="list-items">
          <LuMessagesSquare className="icon-1" />
          <p className="dash-para">Popup</p>
        </li>
        <li className="list-items">
          <TbMessage2 className="icon-1" />
          <p className="dash-para">Live Chat</p>
        </li>
        <li className="list-items">
          <PiLineSegmentsLight className="icon-1" />
          <p className="dash-para">Segments</p>
        </li>
        <li className="list-items">
          <CiSliderHorizontal className="icon-1" />
          <p className="dash-para">Integration</p>
        </li>
      </ul>
    </div>
    <div className="side-username-cont">
      <CgProfile className="side-profile-icon" />
      <div className="one">
        <h1 className="side-profile-heading">Ogus Yagiz Kara</h1>
        <p className="side-profile-para">Store Name</p>
      </div>
    </div>
  </div>
);

export default SideContainer;
