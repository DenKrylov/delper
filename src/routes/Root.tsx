import { Outlet } from "react-router-dom"
import { Box, CssBaseline, useTheme } from "@mui/material"
import { useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Header } from "../components/Header/Header";

export const Root = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={() => setOpen(true)} />
      <NavBar theme={theme} open={open} handleDrawerClose={() => setOpen(false)} />
      <Outlet />
    </Box>
  )
}
