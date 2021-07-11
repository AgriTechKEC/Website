import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import img1 from './Assets/AGRI.png';
import  fire  from "./Firebase";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

class Teams extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      team: []
    };
  }
  componentDidMount() {
    const db = fire.firestore();
        db.collection("Teams")
        .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
            const d={
                id:doc.id,
                ...doc.data(),
            }
            console.log(d);
            return d;
        });
        this.setState({ team: data });
      });
  }
  render(){
    const { team } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" style={{marginTop:40}}>
          <Typography variant="h4" gutterBottom style={{textAlign:"Center", color:"#00897b", fontWeight:"bold", fontFamily:"Roboto"}}>
              Teams
          </Typography>
          <Grid
                container
                spacing={10}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                style={{marginTop:30}}
            >
                {team.map(team => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card style={{height:650}}>
                         <CardActionArea>
                          <CardMedia title="Team Logo"><img src={team.Logo} style={{width:"100%", height:200}}/></CardMedia>
                          </CardActionArea>
                            <CardContent style={{padding:30}}>
                              <Typography gutterBottom variant="h5" component="h2">
                                {team.Title}
                              </Typography>
                              <Typography variant="subtitle2" color="textSecondary" component="h6" style={{textAlign:"justify", paddingTop:15}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;{team.Description}
                              </Typography>
                              <Typography gutterBottom variant="h6" style={{paddingTop:15}}>Final Year Incharge</Typography>
                              <Typography gutterBottom variant="body2" style={{marginLeft:30}}>{team.Inc1}</Typography>
                              <Typography gutterBottom variant="h6">Third Year Incharge</Typography>
                              <Typography gutterBottom variant="body2" style={{marginLeft:30}}>{team.Inc2}</Typography>
                            </CardContent>
                        </Card>
                     </Grid>
                ))}
            </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Teams;