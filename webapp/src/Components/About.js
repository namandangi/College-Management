import React from "react";
import dj from "../images/dj.png";

function About() {
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <h2>About us</h2>
      <br></br>
      <div style={{ width: "1300px" }} className="center-div">
        <div className="row">
          <div className="col-6">
            <p className="  ">
              Shri Vile Parle Kelavani Mandal’s (SVKM) Dwarkadas J. Sanghvi
              College of Engineering (DJSCE), was established in the year 1994.
              In the span of 25 years, DJSCE has come a long way and has made
              its impact felt not only in the country, but also abroad. DJSCE is
              an Autonomous Institution, granted autonomy by the University
              Grants Commission (UGC) for a period of 10 years, starting from
              the A.Y. 2019-20 till 2028-29.
              <br></br>
              <br></br>
              The college runs 8 undergraduate programmes, 3 post graduate
              programmes and 3 Ph.D. courses, permanently affiliated to the
              University of Mumbai.
              <br></br>
              <br></br>
              Students of the college, continue to bag top positions in the
              merit list - retaining the status of the college amongst
              Maharashtra’s premier colleges. The college is consistently rated
              amongst the top two colleges (often achieving first position) in
              the academic results at the 1st year examinations (Sem. I & II) of
              the University of Mumbai. The College has always been able to
              attract various reputed recruiters for campus placement. In the
              academic year 2018-19, 79 recruiters visited our campus for
              placement. Some of our eminent recruiters are: TCS Ltd., Amdocs
              Ltd., L & T, Oracle, BNP Paribas, Revcontent, Morgan Stanley, J.P.
              Morgan Chase, GEP, ATOS origin Ltd., E&Y, PWC, Fractal Analytics,
              ZS Associates, Infosys, L&T Infotech, L&T Tech Services, Reliance
              Industries Ltd., Reliance Petrochemicals, Reliance JIO, HUL,
              Siemens Ltd., Mahindra & Mahindra Farm Equipments, BOSCH, Nerolac
              Paints, Technimont ICB Pvt Ltd., Tata Projects, VCA Wabag.
            </p>
          </div>
          <div className="align-self-end col-6">
            <img src={dj} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
