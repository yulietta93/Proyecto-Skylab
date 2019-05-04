import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      color="unique-color-dark"
      className="page-footer font-small pt-0"
    >
      <div style={{ backgroundColor: "black" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBCol md="6" lg="7" className="text-center text-md-right">
            <a className="fb-ic ml-0">
              <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
            </a>
            <a className="tw-ic">
              <i className="fab fa-twitter white-text mr-lg-4"> </i>
            </a>
            <a className="gplus-ic">
              <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
            </a>
            <a className="li-ic">
              <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
            </a>
            <a className="ins-ic">
              <i className="fab fa-instagram white-text mr-lg-4"> </i>
            </a>
          </MDBCol>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Nature Norway</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              We love for our guests to feel at home and want to give you
              reasons to come back. We make sure your stay in Norway is
              unforgettable. The best selection of holiday apartments.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Follow us</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="https://www.facebook.com/">Facebook</a>
            </p>
            <p>
              <a href="https://www.instagram.com/">Instagram</a>
            </p>
            <p>
              <a href="https://twitter.com/?lang=en">Twitter</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/feed/">Linkedin</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>More info</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="#!">Events</a>
            </p>
            <p>
              <a href="#!">Party</a>
            </p>
            <p>
              <a href="#!">Routes</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3" /> Norway, NN 10012, NR
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> nn@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 934 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 934 587 70
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright | Cookies | Text Legal{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
