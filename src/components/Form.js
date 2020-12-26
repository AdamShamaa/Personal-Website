import React from "react"

import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CheckIcon from '@material-ui/icons/Check';

import ReCAPTCHA from "react-google-recaptcha";

/*** Styling  ***/
 /* Form Component Styles */
 const paperStyle = {
    position: "relative",
    width: "55rem",
    padding: "1.5rem",
    maxWidth: "55rem"
}

 const formControlStyle = {
     margin: ".75rem 1.5rem 0 0",
     backgroundColor: "white",
     borderRadius: ".3rem",
     padding: ".2rem"
 }

 const inputLabelStyle = { padding: ".2rem .4rem", backgroundColor: "white"};
 const verifiedInputLabelStyle = { padding: ".2rem .4rem", backgroundColor: "white", color: "green"};

 const defaultInputStyle = {padding: ".1rem .1rem", minWidth: "10rem"}
 const verifiedDefaultInputStyle = {padding: ".1rem .1rem", minWidth: "10rem", borderBottom: "2px dotted green"};
 
 const emailInputStyle = {padding: ".1rem .1rem", minWidth: "22.8rem"}
 const verifiedEmailInputStyle = {padding: ".1rem .1rem", minWidth: "10rem", borderBottom: "2px dotted green"};

/** Form Success Page Styling **/
const formSuccessStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "5",
    left: "0rem",
    top: "0rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: ".2rem"
}

const headerStyle = {
   fontSize: "1.3rem",
   margin: ".2rem .8rem",
   fontWeight: "550"
}

const innerFormSuccessStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "1rem",
    padding: "1rem"
}

//captcha
const recaptchaRef = React.createRef();

//Data
const inputData = [
    {
        name: "First Name",
        funcName: "firstName"
    }, {
        name: "Last Name",
        funcName: "lastName"
    }
]

 class Form extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             input:{
                 firstName: "",
                 lastName: "",
                 emailAddress: "",
                 content: ""
             },
             errors:{
                firstName: "",
                lastName: "",
                emailAddress: "",
                content: ""
             },
             isVerified: false
         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleVerification = this.handleVerification.bind(this);
         this.updateField = this.updateField.bind(this);
     }

     updateField = (event) => {
         let input = this.state.input;
         let ID = event.target.id;
         input[ID] = event.target.value;
         this.setState({input})
    }

     handleSubmit = (event) => {
        const currentInput = this.state.input;
        let errors = {};

        if (!currentInput.firstName){
            errors.firstName = "Please enter your first name";
        }
        if (!currentInput.lastName){
            errors.lastName = "Please enter your last name";
        }
        if (!currentInput.emailAddress){
            errors.emailAddress = "Please enter a valid email address";
        }
        if (!currentInput.content){
            errors.content = "Please enter a message";
        }

        this.setState({errors})
        if (!(errors.firstName || errors.lastName || errors.emailAddress || errors.content)) {
            try {
                recaptchaRef.current.executeAsync();
            }catch(err){
                console.log(err)
            }
        }
     }

     handleVerification = () => {
        this.setState({isVerified: true})
     }
     
    render(){
        return(
            <Paper style={paperStyle} elevation={2} >
                <div style={this.state.isVerified ? formSuccessStyle : {display: "none"}}>
                        <div style={innerFormSuccessStyle}>
                            <CheckIcon style={{color: "#1c7834", margin: "0 .5rem 0 0", padding: "0.5rem 0 0 0", fontSize: "3.5rem"}}/>
                            <h3 style={headerStyle}>Thanks for reaching out,</h3>
                            <h3 style={headerStyle}>I'll get back as soon as I can!</h3>
                        </div>
                </div>
                <form >
                    {inputData.map((input,index) => {
                        return (
                        <FormControl style={formControlStyle} disabled={this.state.isVerified} key={index}>
                            <InputLabel htmlFor={input.funcName} style={this.state.isVerified ? verifiedInputLabelStyle: inputLabelStyle}>{input.name}</InputLabel>
                            <Input inputProps={{autoComplete: "new-password", form: { autocomplete: "off"}}} error={this.state.errors[input.funcName] ? true : false} id={input.funcName} disableUnderline={this.state.isVerified} onChange={this.updateField} style={this.state.isVerified ? verifiedDefaultInputStyle:defaultInputStyle}/>
                            <FormHelperText style={{color: "red"}}>{this.state.errors[input.funcName]}</FormHelperText>
                        </FormControl>
                        )
                    })}
                    <br/>
                    <FormControl style={formControlStyle} disabled={this.state.isVerified}>
                            <InputLabel htmlFor="emailAddress" style={this.state.isVerified ? verifiedInputLabelStyle: inputLabelStyle}>Email Address</InputLabel>
                            <Input inputProps={{autoComplete: "new-password", form: { autocomplete: "off"}}} error={this.state.errors["emailAddress"] ? true : false} id="emailAddress" disableUnderline={this.state.isVerified} onChange={this.updateField} style={this.state.isVerified ? verifiedEmailInputStyle:emailInputStyle}/>
                            <FormHelperText style={{color: "red"}}>{this.state.errors["emailAddress"]}</FormHelperText>
                    </FormControl>
                    <br /><br />
                    <FormControl style={formControlStyle}  variant="outlined" fullWidth={true} disabled={this.state.isVerified}>
                        <InputLabel htmlFor="content" style={this.state.isVerified ? verifiedInputLabelStyle: inputLabelStyle}>Content</InputLabel>
                        <OutlinedInput autoComplete="new-password" error={this.state.errors.content ? true : false} id="content" multiline={true} rows={7} onChange={this.updateField} disableUnderline={this.state.isVerified} style={this.state.isVerified ? {borderBottom: "2px dotted green"}:{}}/>
                        <FormHelperText style={{color: "red"}}>{this.state.errors.content}</FormHelperText>
                    </FormControl>
                    <FormControl style={{display:"flex", flexDirection:"row", width:"100%", alignItems:"center", justifyContent:"flex-start"}}>
                        <Button
                            variant="contained"
                            endIcon={<CallMadeIcon />}
                            color="primary"
                            style = {{backgroundColor: "#4287f5", margin:"1rem 0.3rem .3rem 0.3rem", maxHeight:"2.5rem", padding: "1.5rem"}}
                            onClick={this.handleSubmit}
                            disabled={this.state.isVerified}
                        >
                            Send
                        </Button>
                        <ReCAPTCHA 
                                ref={recaptchaRef}
                                sitekey = "6LcWVhIaAAAAAKaMhXaFsbrVV52W-rThYmE2p5zc"
                                size="invisible"
                                badge="inline"
                                style={{margin: "0.1rem", transform:"scale(0.8)", position: "relative", left:"-.5rem", bottom: "-.35rem", borderRadius:"1rem"}}
                                onChange={this.handleVerification}
                        />
                    </FormControl>
                </form>
            </Paper>
        )
    }
 }

 Form.propTypes = {
     //none!
 }

 export default Form