import { FaApple } from "react-icons/fa"
import '../styles/Common.css';
import playStore from '../assets/images/playstore.png';

const MobileButtons = ({subHeader}) => {
    return (
        <div className="mobile-app">
            <p className="description" style={{color: 'black'}}>{subHeader}</p>
            <div className="btns">
                <div className="btn-container">
                    <div className="icon-container">
                        <FaApple className='icon'/>
                    </div>
                    <div className="txt">
                        <p className='desc'>Download on the <br/><span>Appstore</span></p>
                    </div>
                </div>   

                <div className="btn-container">
                    <div className="icon-container">
                        <img src={playStore} alt=''/>
                    </div>
                    <div className="txt">
                        <p className='desc'>Get on <br/><span>Google Play</span></p>
                    </div>
                </div> 
            </div> 
        </div>
    );
}
 
export default MobileButtons;
