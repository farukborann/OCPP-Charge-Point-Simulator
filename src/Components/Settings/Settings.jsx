import React, { useState } from "react";

import { Container, Box, Tabs, Tab, Paper } from "@mui/material";
import BootNotification from "./BootNotification";
import MainSettings from "./MainSettings";
import Simulation from "./Simulation";
import Station from "./Station";
import TabPanel from "./TabPanel";

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabChange = (event, newValue) => setActiveTab(newValue);

  return (
    <Container sx={{ maxWidth: "1366px !important" }}>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={activeTab}
            onChange={tabChange}
            aria-label="basic tabs example"
          >
            <Tab label="Main" {...a11yProps(0)} />
            <Tab label="Boot notification" {...a11yProps(1)} />
            <Tab label="Station" {...a11yProps(2)} />
            <Tab label="Simulation" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={activeTab} index={0}>
          <MainSettings />
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <BootNotification />
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          <Station />
        </TabPanel>
        <TabPanel value={activeTab} index={3}>
          <Simulation />
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Settings;
