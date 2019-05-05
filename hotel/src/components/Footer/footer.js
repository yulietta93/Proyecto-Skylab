import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import './footer.scss'

const Footer = () => {
  return (


      <div  style={{ backgroundColor: "black" }}>
      <MDBContainer className="mt-5 mb-4 text-center text-md-center">
        <MDBRow className="mt-4">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong  style={{ color: "white"}} > Nature Norway</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px"}}
            />
            <p style={{ color: "white"}}>
              We love for our guests to feel at home and want to give you
              reasons to come back. We make sure your stay in Norway is
              unforgettable. The best selection of holiday apartments.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong style={{ color: "white"}}>Follow us</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px"}}
            />
            <p>
              <a  style={{ color: "white"}} href="https://www.facebook.com/">Facebook</a>
            </p>
            <p>
              <a  style={{ color: "white"}} href="https://www.instagram.com/">Instagram</a>
            </p>
            <p>
              <a style={{ color: "white"}} href="https://twitter.com/?lang=en">Twitter</a>
            </p>
            <p>
              <a style={{ color: "white"}} href="https://www.linkedin.com/feed/">Linkedin</a>
            </p>
          </MDBCol>
         
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong style={{ color: "white"}}>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p style={{ color: "white"}}>
              <i className="fa fa-home mr-3" /> Norway, NN 10012, NR
            </p>
            <p style={{ color: "white"}}>
              <i className="fa fa-envelope mr-3" /> nn@gmail.com
            </p>
            <p style={{ color: "white"}}>
              <i className="fa fa-phone mr-3" /> + 01 934 567 88
            </p>
            <p style={{ color: "white"}}>
              <i className="fa fa-print mr-3" /> + 01 934 587 70
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" style={{ color: "white"}}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright | Cookies | Text Legal{" "}
        </MDBContainer>
      </div>
      </div>
   
 
  );
};

export default Footer;
