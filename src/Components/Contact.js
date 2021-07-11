import React from 'react';
import fire from "./Firebase";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

class Contact extends React.Component{
    constructor(props){
      super(props);
      this.feedback=this.feedback.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.state={
        name:"",
        email:"",
        subject:"",
        message:"",
        coordinator:[]
      }
    }

    componentDidMount() {
        const db = fire.firestore();
            db.collection("MainIncharge")
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
            this.setState({ coordinator: data });
          });
      }

    handleChange(e){
      this.setState({
          [e.target.name]:e.target.value
      })
    }

    feedback(e){
      e.preventDefault();
      const db = fire.firestore();
          const userRef = db.collection("Contact").add({
          Name: this.state.name,
          Email:this.state.email,
          Subject:this.state.subject,
          Message:this.state.message,
          });
        alert("Thank You! For Your Valuable Time");
    } 

    render(){
        const { coordinator } = this.state.coordinator;
      return(
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom style={{textAlign:"Center", color:"#00897b", fontWeight:"bold", fontFamily:"Roboto"}}>
              Contact Details
            </Typography>
          <Grid container spacing={10}>
              <Grid item xs={12} md={6}>
                  <Paper elevation={1} style={{textAlign:"center", paddingLeft:50, paddingRight:50, paddingTop:20}}>
                    <Typography variant="h4">Staff Coordinator</Typography>
                    <Typography variant="subtitle1">K S Manoj </Typography>
                    <Typography variant="subtitle1">Assistant Professor</Typography>
                    <Typography variant="subtitle1">Mechanical Department</Typography>
                    <Typography variant="subtitle1">Kongu Engineering College</Typography>
                    <Typography variant="subtitle1">8344809080</Typography>
                  </Paper>
                  <Paper elevation={1}>
                  <Typography variant="h4">Student Coordinators</Typography>
                    {this.state.coordinator.map(coordinator => (
                        <div>
                        <Typography variant="subtitle1">{coordinator.Name}</Typography>
                        <Typography variant="subtitle1">{coordinator.Dept}</Typography>
                        <Typography variant="subtitle1">{coordinator.Position}</Typography>
                        </div>
                    ))}
                  </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                    <Paper elevation={1} style={{paddingLeft:50, paddingRight:50, paddingTop:20}}>
                        <CardContent style={{textAlign:"center"}}>
                            <Typography variant="h4">FeedBack</Typography>
                            <Grid style={{padding:10}}><TextField name="name" type="text" id="standard-basic" label="Name" onChange={this.handleChange} value={this.state.name} style={{width:"90%"}} /></Grid>
                            <Grid style={{padding:10}}><TextField name="email" type="email" id="standard-basic" label="Email" onChange={this.handleChange} value={this.state.email} style={{width:"90%"}} /></Grid>
                            <Grid style={{padding:10}}><TextField name="subject" type="text" id="standard-basic" label="Subject" onChange={this.handleChange} value={this.state.subject} style={{width:"90%"}} /></Grid>
                            <Grid style={{padding:10}}><TextField name="message" id="standard-multiline-static" label="Message" multiline rows={3} onChange={this.handleChange} value={this.state.message} style={{width:"90%"}} /></Grid>
                            <Grid style={{padding:10}}><Button variant="contained" color="primary"  onClick={this.feedback} endIcon={<Icon><SendIcon/></Icon>} style={{paddingRight:25, paddingLeft:25, paddingTop:15, paddingBottom:15, fontSize:15, backgroundColor:"#00897b"}}>Send</Button></Grid>
                        </CardContent>
                    </Paper>
                </Card>
              </Grid>
          </Grid>
          </Container>
      );
    }
  }
  export default Contact;