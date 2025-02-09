import React, { useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { TextField, Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import riskReducer from './store/riskSlice' ;
import RiskDetails from "./components/RiskDetails";
import RiskChart from "./components/RiskChart";
import dummyData from "./data/dummyData"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import './App.css';
import './style.css';
// import { Chart } from "chart.js";
// import { Bar } from "recharts";
// import gsap from "gsap";

const store = configureStore({
  reducer: { risk: riskReducer },
});

const theme = createTheme();


// const arr=[1,2,3,4,5]


function App() {
  const [search, setSearch] = useState("");
  const [riskData, setRiskData] = useState(null);

  const handleSearch = () => {
    const data = dummyData.find((e) => e.source_address === search);
    setRiskData(data);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md" style={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Risk Analysis Page
          </Typography>
          <TextField
            label="Enter Address"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleSearch()}
            style={{ marginBottom: "20px" }}
          />
          {riskData ? (
            <Card>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <RiskDetails data={riskData} />
              <RiskChart data={riskData} />
            </motion.div>
            </Card>
          ) : (
            < >
            <Typography variant="h6">No Data Found</Typography>
            </>
          )}
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
