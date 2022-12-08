import vendors from "./utils/vendorsList";
import {
  Select,
  FormControl,
  MenuItem,
  Grid,
  Box,
  InputLabel,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";

export default function SetUpExpense() {
  const router = useRouter();
  const [type, setType] = React.useState("");
  const [vendor, setVendor] = React.useState("");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeVendor = (event) => {
    setVendor(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      walletAdd: event.target.walletadd.value,
      purchasetype: type,
      vendor: vendor,
      chargeCode: event.target.code.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    alert(JSONdata);
    const endpoint = "/api/newpayment";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    //API endpoint where we send form data.
    const response = await fetch(endpoint, options);
    let res = await response.json();
    let totalTransactions = [];
    console.log("Response from api--->", res);
    if (res.data !== undefined) {
      let vendor = res.data.vendor;
      if (Object.values(vendors).includes(vendor)) {
        if (typeof window !== "undefined") {
          totalTransactions.push(res.data);
          localStorage.setItem("data", JSON.stringify(totalTransactions));
        }
        router.push("./ViewTransactions");
      } else {
      }
    } else {
      console.log(res);
    }
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
                <MenuItem value={"type1"}>Type1</MenuItem>
                <MenuItem value={"type1"}>Type2</MenuItem>
                <MenuItem value={"type1"}>Type3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item md={8}>
          <label htmlFor="walletadd">Your wallet address</label>
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
              <MenuItem value={vendors.LaFitness}>LA Fitness</MenuItem>
              <MenuItem value={vendors.PlanetFitness}>Planet Fitness</MenuItem>
              <MenuItem value={vendors.Equinox}>Equinox</MenuItem>
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
