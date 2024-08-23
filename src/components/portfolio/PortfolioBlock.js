import React, { useState } from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock({ image, live, source, title }) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const popupStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    popup: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      zIndex: 1001,
      textAlign: "center",
    },
    button: {
      marginTop: "10px",
      padding: "10px 20px",
      border: "none",
      backgroundColor: "#007bff",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box component={"img"} src={image} alt={"mockup"} />
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink
            link={live}
            title={"Live Demo"}
            icon={"fa fa-safari"}
            onClick={handlePopup}
          />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink
            link={source}
            title={"Source Code"}
            icon={"fa fa-code"}
            onClick={handlePopup}
          />
        </Box>
      </Box>

      {showPopup && (
        <>
          <div
            style={popupStyles.overlay}
            onClick={() => setShowPopup(false)}
          ></div>
          <div style={popupStyles.popup}>
            <p>Bientôt disponible. Merci de votre compréhension.</p>
            <button
              style={popupStyles.button}
              onClick={() => setShowPopup(false)}
            >
              Fermer
            </button>
          </div>
        </>
      )}
    </Box>
  );
}

export default PortfolioBlock;
