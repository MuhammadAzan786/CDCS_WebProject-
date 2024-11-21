import * as React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../src/assets/Images/CDCS-LOGO.png";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Our Strategy", path: "/our-strategy" },
  { name: "Outsourcing", path: "/outsourcing" },
  { name: "About Us", path: "/aboutus" },
  { name: "Careers", path: "/careers" },
];

function NavBar1(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = useLocation(); // Hook to get the current route

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Corporate Depts Collection Services
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textDecoration: "none",
                textAlign: "center",
                backgroundColor:
                  location.pathname === item.path ? "#e0f7fa" : "inherit", // Highlight active item
                color: location.pathname === item.path ? "#03a651" : "inherit", // Change text color
                "&:hover": {
                  backgroundColor: "#e0f7fa",
                  textDecoration: "none",
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          py: 2,
          px: { md: 0, lg: 6 },
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          color: "#000000",
        }}
      >
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "80px", marginRight: "15px" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
              fontSize: {xs:"0.8rem",sm:"0.9rem",md:"1rem"},
              fontWeight: "600",
              color: "#4d4d4d",
              textTransform: "uppercase",
            }}
          >
            Corporate Depts{" "}
            <span style={{ color: "#03a651" }}>Collection Services</span>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "block", md: "none" },
              "&:hover": {
                backgroundColor: "#e0f7fa",
                transition: "background-color 0.3s ease-in-out",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color:
                    location.pathname === item.path ? "#03a651" : "#333333", // Highlight active item
                  mr: 1,
                  fontSize: "0.8rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  position: "relative",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#03a651",
                    transform: "translateY(-8px)",
                    textDecoration: "none",
                  },
                  "&:focus": {
                    color: "#03a651", // Match the hover or active state color
                    outline: "none",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

NavBar1.propTypes = {
  window: PropTypes.func,
};

export default NavBar1;
