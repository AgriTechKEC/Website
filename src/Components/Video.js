import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import video from "./Assets/c.mp4";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container style={{width:"100%", marginTop:75}}> */}
        <video autoPlay loop muted 
        style={{
            marginTop:65,
            height:555, 
            width:"100%",
            objectFit:"cover",
            }}>
            <source src={video} type="video/mp4"/>
        </video>
      {/* </Container> */}
    </React.Fragment>
  );
}