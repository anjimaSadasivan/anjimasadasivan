import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./styles";

const Sideprofile = (props) => {
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState(false);
  const [hoveredGitHub, setHoveredGitHub] = useState(false);
  const gifUrl = "https://media.tenor.com/yCFHzEvKa9MAAAAi/hello.gif";

  return (
    <div style={{ ...styles.sideProfile, ...props?.style }}>
      <img src={gifUrl} style={styles.displayPicture} alt="Profile GIF" />
      <h1 style={styles.headingStyle}>Anjima Sadasivan</h1>
      <h2 style={styles.headingStyle}> Software Engineer</h2>
      <div>
        <a
          href="https://www.linkedin.com/in/anjima-sadasivan-979835167/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconSpacing}
          onMouseEnter={() => setHoveredLinkedIn(true)}
          onMouseLeave={() => setHoveredLinkedIn(false)}
        >
          <FaLinkedin
            style={{
              ...styles.icon,
              color: hoveredLinkedIn ? "#0a66c2" : "#fff", // Change color on hover
              transform: hoveredLinkedIn ? "scale(1.2)" : "scale(1)", // Add hover effect
            }}
          />
        </a>
        <a
          href="https://github.com/anjimaSadasivan"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconSpacing}
          onMouseEnter={() => setHoveredGitHub(true)}
          onMouseLeave={() => setHoveredGitHub(false)}
        >
          <FaGithub
            style={{
              ...styles.icon,
              color: hoveredGitHub ? "#0a66c2" : "#fff",
              transform: hoveredGitHub ? "scale(1.2)" : "scale(1)",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Sideprofile;
