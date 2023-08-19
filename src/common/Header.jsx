import '../styles/Common.css';

const Header = ({text, subHead}) => {
    return (
        <>
            <h1 className="header">{text}</h1>
            <p className="sub-head">{subHead}</p>
        </>
    );
}
 
export default Header;