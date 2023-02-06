import Typography from "@mui/material/Typography";
import {Card, CardContent, Grid, TextField, Button } from "@mui/material";

import React, { useState,} from 'react'

export default function CreateUser({ employees, setEmployees, setIsAdding }) {
    

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');


  const handleAdd = e => {
      e.preventDefault();

      const id = employees.length + 1;
      const newEmployee = {
          id,
          firstName,
          lastName,
          email,
          salary,
          date
      }
      employees.push(newEmployee);
      setEmployees(employees);
      setIsAdding(false);
  }


    return (
      <Card style={{maxWidth:750, margin:"0 auto", padding:"3px 6px"}} >
          <CardContent>
          <Typography gutterBottom variant="h6" align="left" >Product Form </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p" align="left" > Fill up the Product Form and Our Team Contact you within 24 hours</Typography>
          
            <form onSubmit={handleAdd}>
            <Grid container spacing={1} >
              <Grid xs={12} sm={6} item>  
                <TextField label="First Name" name="productName"  type="text" placeholder="Enter Product Name" variant="outlined" fullWidth required  
                    // style={{p:-5}}
                    id="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    /></Grid>

              <Grid xs={12} sm={6} item>  
                <TextField label="lastName" type="text" name="price"  placeholder="Enter Product Price" variant="outlined" fullWidth required 
                    id="lastName"    
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    /></Grid>

              <Grid xs={12} sm={12} item>  
                <TextField label="Email" type="email" name="email"  placeholder="Enter Email Address" variant="outlined" fullWidth required 
                    id="email"       
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    /></Grid>

              <Grid xs={12} sm={6} item>
                <TextField label="Salary" type="number" name="phoneNo"  placeholder="Enter Phone Number" variant="outlined" fullWidth required  
                id="salary"    
                value={salary}
                  onChange={e => setSalary(e.target.value)}
              /></Grid>

              <Grid xs={12} sm={6} item>
                <TextField  type="date" name="phoneNo"  placeholder="Enter Phone Number" variant="outlined" fullWidth required  
                id="date"    
                value={date}
                  onChange={e => setDate(e.target.value)}
                  /></Grid>

              <Grid margin="5px" >  
                <Button type="submit" variant="contained" color="primary"
                >Submit</Button>
              </Grid>
              <Grid margin="5px">
                <Button type="button" variant="contained" color="error"
                  onClick={() => setIsAdding(false)}
                >Cancel</Button>
              </Grid>

            </Grid>
            </form>
          </CardContent>
        </Card>
  );
}
