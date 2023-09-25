import React from 'react'
import "../Dashboard/dashboard.css";
import {BiSolidTachometer} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {FcStatistics} from "react-icons/fc";
import {AiFillCreditCard, AiFillStar,AiTwotoneSetting,AiOutlineSearch} from "react-icons/ai";
import {BsFillQuestionOctagonFill} from "react-icons/bs";
import {GrLogout} from "react-icons/gr";
import {CiMoneyBill} from "react-icons/ci";

import pho from "../../assets/pourDashboard.jpeg"
const Dashboard = () => {
  return (

        <section className='dashboard'>
        <div className="Sidebar">
       
            <div className="lago"></div>
            <ul className='manu'>
                <li  className='active'>
                    <a href="#">
                    <BiSolidTachometer className='ice'/>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                    <CgProfile className='ice'/>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                    <FcStatistics className='ice'/>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                    <AiFillCreditCard className='ice'/>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                    <BsFillQuestionOctagonFill className='ice'/>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                    <AiFillStar className='ice'/>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                    <AiTwotoneSetting className='ice'/>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#" className='logout'>
                    <GrLogout className='ice'/>
                    <span>Dashboard</span>
                    </a>
                </li>
            </ul>
        </div>

        <div className="main--content">
            <div className="head--wrapper">
                <div className="head--title">
                    <span>Primary</span>
                    <h2>Dashboard</h2>
                </div>
                <div className="user--info">
                    <div className="searc--box">
                    <AiOutlineSearch className="ko"/>
                    <input type="text" placeholder='Search' className='lui'/>
                    </div>
                    <img src={pho} alt="" />
                </div>
            </div>

{/* pour le corps du dashboard */}
            <div className="card--container">
            <h3 className="maintitle">today Data</h3>
            <div className="card--wrapper">
                <div className="payement-card">
                    <div className="card--head">
                        <div className="amount">
                            <span className='little'>
                                Payement amount
                            </span>
                            <span className='amount--value'>
                                500.000 Frs
                            </span>
                        </div>
                        <CiMoneyBill className='sous'/>
                    </div>
                    <span className="card-detail">
                        **** **** **** 332
                    </span>
                </div>


            </div>
        </div>


        </div>
        </section>
  )
}

export default Dashboard