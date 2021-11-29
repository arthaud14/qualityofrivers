import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex items-center justify-center ">
        <p className="footer.p">Copyright 2021 - Arthaud PRIMEVERT</p>
      </div>
      <div className="px-10 p-10">
        <h2 className="text-blue-400 text-lg mb-2">Réseaux Sociaux</h2>
        <div className="Logo-res">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
