import React from "react";
import {Link} from "react-router-dom";

import  './Home.css';

const Home = () => {
    return (
    <div className="home">
        <div className="navbar">
            <Link to="/NewArrival" className="herf">New Collection</Link>
            <Link to="/FutureEvents" className="herf">Future Events</Link>
            <Link to="/Sale" className="herf">On Going Sale</Link>
            <Link to="/Stories" className="herf">Stories</Link>
            <Link to="/Blog" className="herf">Blogs</Link>
            <Link to="/FAQ" className="herf">FAQs</Link>
            <Link to="/Contacts" className="herf">Contact Us</Link>
            <Link to="/About" className="herf">About</Link>
        </div>
        <div className="img">
            <img src="https://i.pinimg.com/564x/6b/d7/4f/6bd74f897cdf1c4429f3e2fb6121ce36.jpg" className="imgLogo"  />
        </div>
        <div className="footer">
        <h2 className="heading">Connect With Us On:</h2>
        <h2 className="heading">Call Us:</h2>
            <div className="option">
                <div className="instagram">
                    <Link to='https://www.instagram.com/?hl=en' className="social-media-handle"><img className="logo" src="https://th.bing.com/th/id/R.b473fcad595f09b0afe1270d9016ac8c?rik=UkXeB5L2aE8Biw&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG9.png&ehk=GnhAoqBr5eV3LRtLGDB2XElOW7mvkdk29%2byVkqj09y8%3d&risl=&pid=ImgRaw&r=0" alt="Instagram Logo" />Instagram</Link>
                </div>
                <div className="twitter">
                    <Link to='https://twitter.com/home?lang=en-in' className="social-media-handle"><img className="logo" src="https://th.bing.com/th/id/R.24f65c3ae28f05eabc075c80518b890e?rik=GZRtMc9Spr41bg&riu=http%3a%2f%2fwww.infolaw.co.uk%2fnewsletter%2fwp-content%2fuploads%2f2016%2f07%2fTwitter_logo_blue-1024x833.png&ehk=NajOsoyi2jyPJdVIE9EV3XuO0gQDhJGxWLJIG9SRvYU%3d&risl=&pid=ImgRaw&r=0" alt="Twitter Logo" />Twitter</Link>
                </div>
                <div className="facebook">
                    <Link to='https://www.facebook.com/' className="social-media-handle"><img className="logo" src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" alt="Facebook logo" />Facebook</Link>
                </div>
            </div>
            
        </div>
    </div>
    )
};

export default Home;
