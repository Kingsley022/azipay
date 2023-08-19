import { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import {FiMenu} from 'react-icons/fi';



const Navbar = () => {
    const[navLinks, setNavLinks] = useState(['Individual', 'Business', 'Pricing', 'Set your payroll']);
    const[winScroll, setWinScroll] = useState(false);
    const handleWindowsScroll = () => {
        if(window.scrollY > 25){
            setWinScroll(true);
        }else{
            setWinScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleWindowsScroll);
        return () => {window.removeEventListener('scroll', handleWindowsScroll);}
    },[]);

    return (
        <div className={`navbar ${winScroll && 'scroll-active'}`}>
            <div className="logo">
                <FiMenu/>
                <p>azipay</p>
            </div>

            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>

            <div className="buttons">
                <button className='login'>Login</button>
                <button className='register'>Register</button>
            </div>
        </div>
    );
}
 
export default Navbar;