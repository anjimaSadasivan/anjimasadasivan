import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardNew = (props) => {
  return (
    <Card sx={props?.styleforCard}>
      <CardMedia
        component="img"
        image={props?.imgUrl}
        alt={props?.imageAlt}
        sx={props?.imageStyle}
      />
      <iframe
        src={props?.imgUrl}
        style={props?.pdfStyle}
        title="PDF Viewer"
      ></iframe>
      <CardContent sx={props?.CardContent}>
        <Typography variant="body2" sx={props?.style}>
          {props?.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardNew;
