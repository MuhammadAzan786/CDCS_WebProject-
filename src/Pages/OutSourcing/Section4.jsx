import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import Diversity3Icon from "@mui/icons-material/Diversity3";
import {
  CheckCircle,
  Business,
  CreditCard,
  AccountBalance,
  People,
  Report,
  Update,
} from "@mui/icons-material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const benefits = [
  {
    text: "It lets you concentrate on what your business does best.",
    icon: <CheckCircle sx={{ fontSize: "3.5rem", color: "#03a651" }} />,
  },
  {
    text: "You can save money by not having to invest in costly collection software.",
    icon: <CreditCard sx={{ fontSize: "3.5rem", color: "#03a651" }} />,
  },
  {
    text: "It reduces expenses related to payroll, benefits, and other employee costs.",
    icon: <People sx={{ fontSize: "3.5rem", color: "#03a651" }} />,
  },
  {
    text: "You can access a team of skilled accounts receivable professionals during busy sales times.",
    icon: <Business sx={{ fontSize: "3.5rem", color: "#03a651" }} />,
  },
  {
    text: "It boosts your cash flow.",
    icon: <AccountBalance sx={{ fontSize: "3.5rem", color: "#03a651" }} />,
  },
  {
    text: "It shortens the time it takes to collect payments (known as days sales outstanding or DSO).",
    icon: <Update sx={{ fontSize: "3.5rem", color: "#03a651" }} />,
  },
  {
    text: "It lowers the amount of bad debt you have.",
    icon: <Report sx={{ fontSize: "3.5rem", color: "#03a651" }} />,
  },
  {
    text: "It enhances satisfaction for both customers and employees through effective management of accounts.",
    icon: <CheckCircle sx={{ fontSize: "3.5rem", color: "#03a651" }} />,
  },
  {
    text: "It helps maintain compliance with industry regulations and reduces legal risks.",
    icon: <AccountTreeIcon sx={{ fontSize: "3.5rem", color: "#03a651" }} />,
  },
];

const services = [
  {
    text: "Collecting commercial receivables and bad debts.",
    icon: <Business fontSize="large" sx={{ color: "#03a651" }} />,
  },
  {
    text: "Providing assistance with credit applications.",
    icon: <CreditCard fontSize="large" sx={{ color: "#03a651" }} />,
  },
  {
    text: "Conducting skip tracing.",
    icon: <People fontSize="large" sx={{ color: "#03a651" }} />,
  },
  {
    text: "Supplying professional manpower services.",
    icon: <Diversity3Icon fontSize="large" sx={{ color: "#03a651" }} />,
  },
];

const additionalInfo = [
  "A business profile gives a clear and unbiased view of how a company manages its financial responsibilities, including public records and legal information that show both its ability and willingness to pay.",
  "The consumer credit profile report provides precise and up-to-date information that helps improve your decision-making. Its user-friendly layout organizes similar data for quicker analysis.",
  "Additional reports like social searches, address updates, employment insights, and collection reports are essential tools for assessing customers and minimizing the risk of bad debts.",
  "Pre-collection dunning services can be a lifesaver when your department is short-staffed due to increased sales, company changes, or employee turnover. CDCS can create a customized program to help you manage overdue receivables, including sending out dunning letters on your behalf and making calls in your name. Unlike many other debt collection agencies, they offer tailored support to keep you on track.",
];

const Section4 = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        align="center"
        sx={{
          fontSize: { lg: "2.5rem", md: "2rem", sm: "1.5rem", xs: "1rem" },
        }}
        gutterBottom
      >
        Outsourcing Accounts Receivable
      </Typography>

      <Box sx={{ mt: 2 }}>
        <h1 className="text-[#03A651] font-poppins text-[25px] font-semibold leading-normal text-center">
          KEY BENEFITS
        </h1>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Discover the benefits and services provided by outsourcing your
          accounts receivable needs.
        </Typography>
        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 1,
                  textAlign: "center",
                  background:
                    "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(4,4,4,1) 0%, rgba(22,93,56,1) 100%)",
                  boxShadow: 2,
                  borderRadius: "5px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box mt={1}>{benefit.icon}</Box>
                <CardContent>
                  <Typography variant="body2" color="#fff">
                    {benefit.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 8 }}>
        <h1 className="text-[#03A651] font-poppins text-[25px] font-semibold leading-normal text-center">
          Services Provided
        </h1>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Explore the advantages and solutions offered by outsourcing your
          accounts payable services.
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 3,
                  textAlign: "center",
                  borderRadius: "5px",
                  background: "linear-gradient(135deg, #f0f0f0, #ffffff)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    p: 2,
                    backgroundColor: "#e0e0e0",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80px",
                    height: "80px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {service.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Card
          sx={{
            p: 3,
            backgroundColor: "#fff", // White background for clean contrast
            borderRadius: "5px", // Smooth, rounded corners
            boxShadow: 3, // Soft box shadow for depth
            transition: "0.3s", // Smooth transition for hover effect
            "&:hover": {
              boxShadow: 6, // Elevates on hover for an interactive feel
            },
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "600", // Bold for prominence
              color: "#333", // Dark color for better contrast
              letterSpacing: 0.5, // Adds a slight spacing between letters for a cleaner look
              textTransform: "uppercase", // Adds a stylish uppercase for a professional look
            }}
          >
            Additional Information
          </Typography>
          <List>
            {additionalInfo.map((info, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: 1.5, // Adds comfortable padding
                  borderBottom: "1px solid #f0f0f0", // Subtle separation between items
                  "&:last-child": {
                    borderBottom: "none", // Removes bottom border on last item
                  },
                }}
              >
                <ListItemText
                  primary={info}
                  sx={{
                    fontSize: "16px", // Slightly larger font for readability
                    fontWeight: 400, // Normal weight for body text
                    color: "#555", // Soft gray color for text
                    lineHeight: 1.8, // Improved line height for better readability
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>
    </Container>
  );
};

export default Section4;
