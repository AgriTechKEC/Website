import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import homeimg from './Assets/AGRI.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function SimpleContainer() {
    const classes = useStyles();

  return (
    <React.Fragment>
    <ThemeProvider>
      <CssBaseline />
      <Container maxWidth="lg" style={{marginTop:40}}>
        <Typography variant="h4" gutterBottom style={{textAlign:"Center", color:"#00897b", fontWeight:"bold", fontFamily:"Roboto"}}>
            Welcome To AgriTech
        </Typography>
        <Grid container spacing={10} style={{marginTop:15}}>
            <Grid item sm={12} md={8}>
                <Paper className={classes.paper} elevation={1}>
                    <Typography variant="subtitle1" gutterBottom style={{fontSize:24, textAlign:"justify"}}>&nbsp;&nbsp;&nbsp;&nbsp;WELCOME ALL ! .. Agriculture is an art of raising plant life from the soil for the use of mankind. Agriculture is a milestone in the history of human civilization. This is a platform developed by the Students of KONGU ENGINEERING COLLEGE to grab and share knowledge in the field of agriculture. The time is precious than anything in the globe, the spending happening  over on this platform will be most valuable. </Typography>
                </Paper>
            </Grid>
            <Grid item sm={12} md={4}>
                <img src={homeimg} alt="HomeImage" style={{width:300}}/>
            </Grid>
        </Grid>
        <Grid container style={{marginTop:30}}>
          <Grid item sm={12}>
              <Typography variant="h4" gutterBottom style={{textAlign:"Center", color:"#00897b", fontWeight:"bold", fontFamily:"Roboto"}}>
                Objective
              </Typography>
          </Grid>
          <Grid item sm={12}>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="subtitle1" style={{fontSize:25}} gutterBottom>
                Our vision is to create awareness among the students on agriculture and its technology as well as creating ideas and opportunities to improve agriculture.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    </React.Fragment>
  );
}