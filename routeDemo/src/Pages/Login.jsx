import { useNavigate, Outlet } from "react-router-dom";
import SubscribeForm from "../Components/SubcribeForm";
import CustomCard from "../Components/CustomCard";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import MUIForm from "../Components/MUIForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Login() {
  return (
    <div className="Homepage">
      <SubscribeForm></SubscribeForm>
      <Grid container my={2}>
        <MUIForm />
      </Grid>

      <Grid container spacing={2} my={2}>
        <Grid item xs={4}>
          {/* div */}{" "}
          {/* use 4/12 columns on xs screens up
           */}
          <CustomCard title="First Column">First column is wider</CustomCard>
        </Grid>
        <Grid item xs={2}>
          middle item
        </Grid>
        <Grid item xs={2}>
          middle item
        </Grid>
        <Grid item xs={4}>
          <CustomCard title="Last Column">Last column is wider</CustomCard>
        </Grid>
      </Grid>
    </div> // 12
  );
}
