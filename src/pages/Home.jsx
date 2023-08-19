import { useState } from 'react';
import '../styles/Home.css';
import Navbar from './../common/Navbar';
import bannerImg from '../assets/images/bigImage.png';
import Header from '../common/Header';
import phone from '../assets/images/img1.png';
import zigTxt from '../assets/images/img2.png';
import MobileButtons from '../common/MobileButton.jsx';
import ade from '../assets/images/ade.jpg';
import Footer from '../common/Footer';



const Home = () => {
    const[isIndividual, setIsIndividual] = useState(true);
    const cards =[
        {
            id: 1, 
            title: 'Tamper-proof Payment', 
            text1: 'Lorem ipsum dolor sit amet consectetur jheloo adipisicing elit. Sunt nostru.',
            text2: 'Lorem ipsum dolor sit amet consectetur jheloo adipisicing elit. Sunt nostru.',
            text3: 'Lorem ipsum dolor sit amet consectetur jheloo adipisicing elit. Sunt nostru.'

        },
        {
            id: 2, 
            title: 'All Payroll, Anytime', 
            text1: 'Lorem ipsum dolor sit amet consectetur jheloo adipisicing elit. Sunt nostru.',
            text2: 'Lorem ipsum jheloo adipisicing elit. Sunt nostru Sunt nostrum, mollitia doloremque  Laborum.',
        },
        {
            id: 3, 
            title: 'Payroll in Seconds', 
            text1: 'Lorem ipsum dolor sit amet consectetur jheloo adipisicing elit. Sunt nostru',
            text2: 'Sunt nostru Sunt nostrum, mollitia Lab.',
        }
    ];

    const individualInputs = ['First Name', 'Last Name', 'Email', 'Job Title', 'Company Size'];
    const companyInputs = ['Company Name', 'Company Location', 'Company Number',,'Company Mission', 'Company Size'];


    return (
       <>
            <div className="home-container">
                <Navbar/>
                <div className="banner-container">
                    <div className="txt-area">
                        <h1>Run your <span style={{color: '#20624c'}}>payroll</span> <span style={{color: '#a38d42'}}>easily</span> in <span style={{color: '#f5311c'}}>seconds</span></h1>
                        <p>We've built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills and relavan taxes all at once.</p>
                        <button>Start Using, Free Forever</button>

                        <MobileButtons subHeader="Download the Eazipay App"/>
                    </div>

                    <div className="img-area">
                        <img src={bannerImg} alt='banner'/>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <Header text={'For Individuals and Businesses'}
                subHead={"Join 200+ business using Eazipay's solution"}/>

                <div className="cards">
                    {cards.map(card => (
                        <div className="card" key={card.id}>
                            <h2>{card.title}</h2>
                            <p>{card.text1}</p>
                            <p>{card.text2}</p>
                            <p>{card.text3}</p>
                        </div>
                    ))}
                </div>

                <p>We are happy to answer queries. Please, reach us at<br/> <span>hello@myazipay.com</span>  and expect our response shortly after.</p>
            </div>

            <div className="started-container">
                <Header text={'How Eazipay Works'} subHead={'Get started in 3 simple steps.'}/>
                <div className="imgs">
                    <div className="img">
                        <img src={phone} alt=''/>
                    </div>

                    <div className="img">
                        <img src={zigTxt} alt=''/>
                    </div>
                </div>
            </div>
            
            <div className="free-container">
                <div className="txt-area">
                    <h1>Free forever <br/>for your <span>salary <br/>payment</span></h1>
                    <MobileButtons subHeader="Subscribe to the Eazilife today" />
                </div>

                <div className="img-area">
                        <img src={ade} alt=""/>
                </div>

            </div>

            <div className="exclusive-container">
                <div className="txt-area">
                    <h1>Get an Exclusive Demo of Eazipay</h1>
                    <p>Our greatest priority is to put you and your business first. Let's show you how we cajnn help.</p>
                </div>

                <div className="form-area">
                    <h3>First things first</h3>
                    <p>We want to serve you better. Tell us a bit <br/>about yourself or company</p>
                    <div className="btn-container">
                        <button className={isIndividual && 'active'} onClick={() => setIsIndividual(!isIndividual)}>Individual</button>
                        <button className={!isIndividual && 'active'} onClick={() => setIsIndividual(!isIndividual)}>Company</button>
                    </div>

                    <form>
                        {isIndividual ? (
                            individualInputs.map((individual, index) => (
                                <input type='text' placeholder={individual} key={index}/>
                            ))
                        ): companyInputs.map((company, index) => (
                            <input type='text' placeholder={company} key={index}/>
                        ))}
                        

                        <button>Request Demo</button>
                    </form>
                </div>
            </div>

            <Footer/>
       </>
    );
}
 
export default Home;