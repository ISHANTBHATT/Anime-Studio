import React,{useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { easing, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function FormPropsTextFields({userInfo}) {

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [address,setAddress]=useState("");
    const [email,setEmail]=useState("");
    const [city,setCity]=useState("");
    const [zip,setZip]=useState("");
    const classes = useStyles();
  
    const send = (e) => {
      e.preventDefault();
      // if(!firstName || !lastName || !address || !email || !zip ) return;
      userInfo({firstName,lastName,address,email,city,zip});
    }
    
  
  const defaultProps = {
    options: cityList,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: cityList.map((option) => option.title),
  };
  const [value, setValue] = useState(null);
  return (

    <form style={{display:'flex', flexDirection:"column",alignItems:'center', margin:'70px 0px'}} className={classes.root} noValidate autoComplete="off" >
     
     <div >
        <TextField
        style={{marginBottom:'30px'}}
        id="name" label="First Name*" type="name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        />
        <TextField style={{marginLeft:'40px'}} id="standard-search" label="Last Name*" type="search"  value={lastName}
        onChange={e => setLastName(e.target.value)}/>

      </div>

      <div> 
      <TextField style={{marginBottom:'30px'}} id="standard-search" label="Address*" type="search"   value={address}
        onChange={e => setAddress(e.target.value)}/>
        <TextField style={{marginLeft:'40px'}} id="email" label="Email*" type="email"  value={email}
        onChange={e => setEmail(e.target.value)}/>
      </div>

      <div style={{display:'flex'}}>
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={city}
        onChange={(event, newValue) => {
          setCity(newValue);
        }}
        renderInput={(params) => <TextField {...params} label="City*" margin="normal" />}
      />
        <TextField style={{marginLeft:'40px'}} id="standard-search" label="Zip/Postal code*" type="search"  value={zip}
        onChange={e => setZip(e.target.value)}/>
      </div>
      <div style={{marginTop:'50px',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <p>All above info is correct as per my knowledge</p>
      <Button variant="contained" color="primary" onClick={send}>
          Confirm
      </Button>
      </div>

    </form>
  );
}

const cityList = [
  { title: 'Mumbai'},
  { title: 'Delhi'},
  { title: 'Bangalore'},
  { title: 'Hyderabad'},
  { title: 'Ahmedabad'},
  { title: 'Chennai'},
  { title: 'Kolkata'},
  { title: 'Surat'},
  { title: 'Pune'},
  { title: 'Jaipur'},
  { title: 'Lucknow'},
  { title: 'Kanpur'},
  { title: 'Nagpur'},
  { title: 'Indore'},
  { title: 'Thane'},
  { title: 'Bhopal'},
  { title: 'Visakhapatnam'},
  { title: 'Pimpri and Chinchwad'},
  { title: 'Patna'},
  { title: 'Vadodara'},
  { title: 'Ghaziabad'},
  { title: 'Ludhiana'},
  { title: 'Agra'},
  { title: 'Nashik'},
  { title: 'Faridabad'},
  { title: 'Dehradun'},
  { title: 'Hardwar'},
  { title: 'Haldwani and Kathgodam'},
  { title: 'Rudrapur'},
  { title: 'Kashipur'},
  { title: 'Roorkee'},
];