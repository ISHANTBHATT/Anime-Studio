import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LoginPage from './LoginPage';
import UserInfo from './UserInfo';
import {useDataLayerValue} from "../DataLayer";
import { db,auth } from "../firebase";





const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Login', 'User Info', 'Create an ad'];
}




export default function HorizontalLabelPositionBelowStepper() {
  

const [{basket, user}, dispatch] = useDataLayerValue();

const userInfo = ({firstName,lastName,address,email,city,zip}) => {
  if(user){
    let payload = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        email: email,
        city: city,
        zip: zip,
    }
    db.collection('user').doc(user?.uid).collection('userInfo').doc(user?.uid).set(payload);
    console.log("data>>",firstName);
} 
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    // case 0:
    //   return <LoginPage />;
        case 0:
      return <UserInfo userInfo={userInfo} />;
    case 1:
      return '2';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <div>
        <LoginPage />
      </div> */}
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div style={{display:"flex",justifyContent:"center"}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
