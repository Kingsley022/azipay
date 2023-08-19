import { AiOutlineMenu } from 'react-icons/ai';
import { RiArrowDropDownLine} from 'react-icons/ri';
import {HiOutlineUserPlus} from 'react-icons/hi2';
import {BsSend} from 'react-icons/bs';
import {LiaHandHoldingUsdSolid, LiaMoneyBillWaveAltSolid} from 'react-icons/lia';
import {LuCalendarDays} from 'react-icons/lu';
import '../styles/Dashboard.css';
import React, { useState } from 'react';
import { FaRegBell, FaEyeSlash, FaEye} from 'react-icons/fa';
import profile from '../assets/images/oldwoman.jpg';
import { menuList } from '../data';
import Chart from './../common/Chart';


const Dashboard = () => {
    const [menuItems, setMenuItems] = useState(menuList);

    const quickActions = [
        { id: 1, icon: HiOutlineUserPlus, label: 'Add Employee', color: '#ed2828', bg:'#f3929233'},
        { id: 2, icon: LiaMoneyBillWaveAltSolid, label: 'Pay Salaries', color: '#008000', bg:'#8ecbc533'},
        { id: 3, icon: BsSend, label: 'Pay Compliances',  color: '#5a81d7', bg:'#698de233'},
        { id: 4, icon: LiaHandHoldingUsdSolid, label: 'Quick Loan', color: '#10978b', bg:'#69e2d833'}
    ]

    const handleMenuToggle = (menu) => {
       const toggledMenu =  menuItems.map( menuItem => {
            if(menuItem.id === menu.id) {
                return {...menuItem, isActive: true};
            }else{
                return {...menuItem, isActive: false};
            }
        });
        setMenuItems(toggledMenu);
    }

    return (
        <div className="dashboard-container">
            <div className="side-menu-container">
                <div className="logo">
                    <AiOutlineMenu/>
                    <h2>azipay</h2>
                </div>

                <ul>
                    {menuItems.map(menuItem => (
                        <li key={menuItem.id} className={menuItem.isActive && 'active'} onClick={() => handleMenuToggle(menuItem)}>
                            <div className="label-area">
                                <div className='txt'>
                                    {React.createElement(menuItem.icon)}
                                    <p>{menuItem.label}</p>
                                </div>
                                {menuItem.subMenu && <RiArrowDropDownLine/>}
                            </div>
                            {menuItem.isActive ? menuItem.subMenu && <div className="subMenus">
                                {menuItem.subMenu.map((menu, index) => (
                                    <p key={index}>{menu}</p>
                                ))}
                            </div> : ''}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="main-conatiner">
                <div className="top-details">
                    <h4>Logo</h4>
                    <div className="details-container">
                        <div className="icon">
                            <FaRegBell/>
                            <sup>7</sup>
                        </div>
                        <div className="details">
                            <div className="img-container">
                                <img src={profile} alt=''/> 
                            </div>
                            <p className="name">Kalu Abasiama <br/><span className="user">Admin</span></p>
                        </div>

                    </div>
                </div>

                <div className="welcome-container">
                    <h2>Welcome Abasiama</h2>
                    <p className="msg">Pay and manage your employees in minutes</p>

                    <div className="wallet-container">
                        <div className="balance-area">
                            <div className="balance-container">
                                <p>Wallet Balance</p>
                                <div className="balance">
                                    <h4>N12,560,078.00 <span><FaEye/> <FaEyeSlash/></span></h4>
                                    <button>Fund Wallet</button>
                                </div>
                            </div>

                            <div className="quick-actions">
                                {quickActions.map(action =>
                                    (
                                        <div className="action" key={action.id}>
                                            <div className="icon" style={{color: action.color, background: action.bg}}>
                                                {React.createElement(action.icon)}
                                            </div>
                                            <p>{action.label}</p>
                                       </div>
                                    )
                                )}
                            </div>

                        </div>
                        <div className="payroll-area">
                            <div className="payroll">
                                <p className='pay'>Next Payroll</p>
                                <div className="day">
                                    <LuCalendarDays/>
                                    <span>Friday</span>
                                </div>
                                <p>09/11/2022</p>
                            </div>

                            <div className="total-employee">
                                <p className="txt">Total Employee</p>
                                <h2>64</h2>
                                <div className="genders">
                                    <div className="male">
                                        <div className="line"></div>
                                        <p>Male <br/>32</p>
                                    </div>

                                    <div className="female">
                                        <div className="line"></div>
                                        <p>Female <br/>32</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Chart/>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;