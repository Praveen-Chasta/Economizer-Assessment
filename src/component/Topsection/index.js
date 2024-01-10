import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";
import { FaShieldHalved } from "react-icons/fa6";
import { GoLock, GoPlus } from "react-icons/go";
import { IoIosRefresh } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";
import "./index.css";

const Topsection = () => (
  <>
    <div className="top-section-container">
      <div className="dots-container">
        <div className="dot red"></div>
        <div className="dot yellow"></div>
        <div className="dot green"></div>
        <LiaLessThanSolid className="top-icon-1" />
        <LiaGreaterThanSolid className="top-icon" />
      </div>
      <div className="top-shield-container">
        <FaShieldHalved className="shield-icon" />
        <div className="link-container">
          <GoLock className="lock-icon" />
          <p className="link-para">bluereceipt.com</p>
          <IoIosRefresh className="refresh-icon" />
        </div>
      </div>
      <div className="top-items-container">
        <FiUpload className="upload" />
        <GoPlus className="plus" />
        <MdOutlineContentCopy className="copy" />
      </div>
    </div>
  </>
);
export default Topsection;
