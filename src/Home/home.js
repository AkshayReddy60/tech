import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './home.css';
import opp from '../Assets/opp.png';
import conn from '../Assets/conn.png';
import insights from '../Assets/insights.png';
import innn from '../Assets/innn.png';
import bioo from '../Assets/bioo.png';
import bio1 from '../Assets/bio1.png'
import bio2 from '../Assets/bio2.png'
import bio3 from '../Assets/bio3.png'
import bio4 from '../Assets/bio4.png'

function Home(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [bio1, bio2, bio3, bio4];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); 
        return () => clearInterval(interval);
    }, [images.length]);
    return(
        <>
        <div className="sta">
        <div
                className="homeimg"
                style={{
                    transform: `translateX(-${currentIndex * 100}vw)`,
                }}
            >
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`bio${index}`} className="samesi" />
                ))}
            </div>
            <div className="startt">
            
            <div className="cont">
                <p>At BioBiz, we are keen to capitalize on India’s rich biodiversity and the availability of large amounts of biomass 
                    residues to develop a sustainable bio-economy and attractive business opportunities for diverse stakeholders – farmers, 
                    rural stakeholders, end-use industries, entrepreneurs / startups, and financial investors.</p>

                <p>As part of a leading climate tech consulting firm, we will provide critical assistance with market intelligence, 
                data-driven analyses, professional networking, and opportunities for relevant stakeholders to get effective visibility. </p><br></br>
                <h2>Main Section</h2>
                <div className="itemsss">
                    <div className="secitems">
                        <img src={opp} alt="opp" className="imgicon"/><br></br>
                        <Link to="/opportunities" className="order">Opportunities</Link>
                    </div>
                    <div className="secitems">
                        <img src={conn} alt="opp" className="imgicon"/><br></br>
                        <Link to="/biobiscon" className="order">Consulting</Link>
                    </div>
                    <div className="secitems">
                        <img src={insights} alt="opp" className="imgicon"/><br></br>
                        <Link to="/insight" className="order">Insight</Link>
                    </div>
                    <div className="secitems">
                        <img src={innn} alt="opp" className="imgicon"/><br></br>
                        <Link to="/innovationinsight" className="order">Innovation Insights</Link>
                    </div>
                    <div className="secitems">
                        <img src={bioo} alt="opp" className="imgicon"/><br></br>
                        <Link to="/bring" className="order">Biomass Residue Intelligence</Link>
                    </div>

                </div>

            </div>
            
            <div className="indiaup">
                <h3>INDIA UPDATE</h3>
                <ul>
                <li>India to Reduce Emissions</li>
                        <li>India’s First Cowshed with Integrated CBG Plant Opens in Gwalior</li>
                        <li>Biochar Use in Steelmaking Explored</li>
                        <li>Ethanol Plant by Kisan Cooperative Sugar Mill in Pilibhit</li>
                        <li>World’s Largest Sustainable Aviation Fuel Plants by TruAlt</li>
                        <li>Biofuel Production from Seaweed</li>
                </ul>
                
                

            </div>
            
            
            </div>  
            

            </div>
            <div className="org">
                <div className="down"><br></br>
                
                <h2 className="ddd">Other Section</h2>
                </div>
                <div className="insi">
                    <Link to="/indiaupdate">India Update</Link>
                    <Link>Weekly Update</Link>
                    <Link to="/bring">Bring</Link>
                    <Link to="/insight">India Biomass Residues</Link>
                </div> 
                <div className="doee">
                    <h3>BioBiz is a division of Energy Alternatives India (EAI)</h3>
                </div><br></br><br></br>

                
            </div>
            <div className="copy">
                <p>Copyright @ 2024 BioBiz, All rights reserved.</p>

            </div>
        
        </>
    )
}
export default Home;
