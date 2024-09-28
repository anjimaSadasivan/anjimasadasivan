import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AboutMeCard() {
  return (
    <Card
      sx={{
        width: "65vw",
        backgroundColor: "black",
        marginLeft: 10,
        marginTop: 10,
      }}
    >
      <CardContent>
        <Typography variant="body2" sx={{ color: "white", fontSize: 28 }}>
          I am a software engineer specializing in frontend development, with
          strong experience in JavaScript libraries React.js and React Native. I
          am proficient in Python and have been honing my DSA skills. In my
          role, I write code, optimize it, fix bugs, and implement new features,
          typically using Jira for task management. As part of my
          responsibilities, I build reusable components, add features to
          products, and enhance the user interface for web and mobile
          applications. I graduated with a B.Tech degree in Electronics and
          Communication with honors in 2022 from Rajiv Gandhi Institute of
          Technology. My passion for technology and development has grown during
          my academic years, where I completed several projects, including a
          weed removal robot using Raspberry Pi and TensorFlow for model
          training. I enjoy reading crime thrillers and watching anime.
        </Typography>
      </CardContent>
    </Card>
  );
}
