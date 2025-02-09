import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Card, CardHeader } from "@mui/material";
import { blue } from "@mui/material/colors";

const RiskChart = ({ data }) => {
    const chartData = data.level_vise_risk_analysis.map((level) => ({
        name: `Level ${level.level}`,
        risk: parseFloat(level.risk_percentage),
    })
);
   
    return (
        <Card className="riskChart">
            <CardHeader color={blue} title={"Risk Chart Details"}/>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {chartData[0].risk > 75 ? <Bar dataKey="risk" fill="#ff4d4d" /> : <Bar dataKey="risk" fill="#00FF00" />}

                    </BarChart>
                </ResponsiveContainer>
            </motion.div>
        </Card>
    );
};

export default RiskChart;
