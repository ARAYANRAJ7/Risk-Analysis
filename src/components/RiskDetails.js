import React from "react";
import { Card, CardContent, Typography,CardHeader } from "@mui/material";
import { motion } from "framer-motion";

const RiskDetails = ({ data }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card style={{ marginBottom: "20px" }} >
      <CardHeader color="primary" title={"Risk Details"}/>
        <CardContent>
          <Typography variant="h6">Address: {data.source_address}</Typography>
          <Typography variant="h6">Risk Score: {data.risk_score}</Typography>
          <Typography variant="h6">Risk Level: {data.risk}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RiskDetails;
