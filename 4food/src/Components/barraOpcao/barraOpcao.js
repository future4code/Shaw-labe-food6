import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import {baseUrl} from '../../BaseUrl/baseUrl';
import { useState, useEffect } from "react";
import axios from "axios";

export default function BarraOpcao() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const navigate = useNavigate
  const [posts, setPosts] = useState([])
  
  useEffect (() => {
  const axiosConfig = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }
  axios.get(`${baseUrl}/restaurants`, axiosConfig)
  .then((response) => {
  setPosts(response.data.posts);
  })
}, {})
    

  
return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}