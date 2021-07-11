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

class Activities extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activity: []
    };
  }
  componentDidMount() {
    const db = fire.firestore();
        db.collection("Activities")
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
        this.setState({ activity: data });
      });
  }
  render(){
    const { activity } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" style={{marginTop:40}}>
          <Typography variant="h4" gutterBottom style={{textAlign:"Center", color:"#00897b", fontWeight:"bold", fontFamily:"Roboto"}}>
              Activites
          </Typography>
          <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                style={{marginTop:50}}
            >
                {activity.map(user => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card style={{height:300}}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                {user.Title}
                              </Typography>
                              <Typography variant="subtitle2" color="textSecondary" component="h6" style={{textAlign:"justify"}}>
                                {user.Description}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                     </Grid>
                ))}
            </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Activities;