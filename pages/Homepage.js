import { Grid, Button } from "@mui/material";
import { useRouter } from 'next/router'
import ConnectWallet from "./ConnectWallet";
export default function HomePage() {
const router = useRouter();
  return (
    <div>
        <ConnectWallet/>
      <div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item md={8}>
            <Button variant="contained" onClick={() => {router.push('./SetUpExpense')}}>Set up a recurring reimbursement</Button>
          </Grid>
          <Grid item md={8}>
            <Button variant="contained" onClick={() => {router.push('./ViewTransactions')}}>View my transactions</Button>
          </Grid>
          <Grid item md={8}>
            <Button variant="contained">Link bank account</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
