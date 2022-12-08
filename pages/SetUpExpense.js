import { Router, SystemSecurityUpdate } from "@mui/icons-material";
import {
  Select,
  FormControl,
  MenuItem,
  Grid,
  Box,
  InputLabel,
} from "@mui/material";
import React from 'react'
import { useRouter } from 'next/router'

export default function SetUpExpense() {
  const router = useRouter();
  const [type, setType] = React.useState('');
  const [vendor, setVendor] = React.useState('');

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeVendor = (event) => {
    if(event.target.value === 4) router.push('./AddVendor');
    else
      setVendor(event.target.value);
  };

  const handleSubmit = async (event) => {
    const data = {
      walletAdd: event.target.walletadd.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    alert(JSONdata);
    // API endpoint where we send form data.
    // const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    // const response = await fetch(endpoint, options)
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        pacing={2}
        columns={16}
      >
        <Grid>
          {" "}
          <h1>Set up your recurring reimbursement</h1>
        </Grid>
        <Grid item md={8}>
          <Box sx={{ minWidth: 120 }}>
            <label htmlFor="purchasetype">Select type of purchase</label>
            <FormControl fullWidth>
              <Select
                labelId="purchaseType"
                id="purchasetype"
                value={type}
                label="Select type of purchase"
                onChange={handleChangeType}
              >
                <MenuItem value={'type1'}>Type1</MenuItem>
                <MenuItem value={'type1'}>Type2</MenuItem>
                <MenuItem value={'type1'}>Type3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          </Grid>
        <Grid item md={8}>
          <label htmlFor="walletAddress">Your wallet address</label>
          <input type="text" id="walletadd" name="walletadd" required />
        </Grid>
        {/* <label htmlFor="vendor">Select your vendor</label>
      <input type="text" id="vendor" name="vendor" required /> */}
        <Grid item md={8}>
          <label htmlFor="vendors">Vendors</label>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <Select
              labelId="Vendors"
              id="vendors"
              value={vendor}
              label="Vendors"
              onChange={handleChangeVendor}
            >
              <MenuItem value={1}>LA Fitness</MenuItem>
              <MenuItem value={2}>Planet Fitness</MenuItem>
              <MenuItem value={3}>Equinox</MenuItem>
              <MenuItem value={4}>Add a new vendor</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={8}>
          <label htmlFor="code">Charge Code</label>
          <input type="text" id="code" name="code" required />
        </Grid>
        <Grid item md={8}>
          <button type="submit">Submit</button>
        </Grid>
      </Grid>
    </form>
  );
}
