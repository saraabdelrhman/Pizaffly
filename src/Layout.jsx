import React from "react";
import Navbar from "./Navbar";
// Import necessary Font Awesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { Outlet } from "react-router-dom";
import Home from "./Home/Home";

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
      <footer className="bg-danger text-light py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4">
<h3>LOCATION</h3>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
            </div>
            <div className="col-xxl-4">
           <h2> AROUND THE WEB</h2>
           <div className="d-flex">
      <FontAwesomeIcon icon={faFacebookF} style={{ padding: '1em', fontSize: '2em' }} />
      <FontAwesomeIcon icon={faInstagram} style={{ padding: '1em', fontSize: '2em' }} />
      <FontAwesomeIcon icon={faTwitter} style={{ padding: '1em', fontSize: '2em' }} />
    </div>

            </div>
            <div className="col-xxl-4">
<h2>ABOUT FREELANCER</h2>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          
          </div>
        </div>
      </footer>
      <div className="footer d-flex justify-content-center text-light bg-dark">
  <p>Copyright © Your Website 2021</p>
</div>

  
    </div>
  );
}
