import { TextareaAutosize, Grid } from "@mui/material";
import React from "react";

export default function AddVendor() {
  const handleSubmit = async (event) => {
    const data = {
        vendorAdd: event.target.vendorAdd.value,
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
      >
        <Grid>
          {" "}
          <h1>Add a new vendor</h1>
        </Grid>
        <Grid item xs={8}>
          <label htmlFor="vendorAdd">Vendor address</label>
          <input type="text" id="vendorAdd" name="vendorAdd" required />
        </Grid>
        <Grid item xs={8}>
          <label htmlFor="vendorName">Vendor Name</label>
          <input type="text" id="vendorName" name="vendorName" required />
        </Grid>
        <Grid item xs={8}>
          <label htmlFor="description">Description</label>
          <TextareaAutosize
            maxRows={4}
            aria-label="desc"
            placeholder="Description"
            style={{ width: 200 }}
          />
        </Grid>
        <Grid item xs={8}>
          <button type="submit">Submit</button>
        </Grid>
      </Grid>
    </form>
  );
}
