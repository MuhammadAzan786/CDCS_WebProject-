import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

const HowItWorks = () => {
  const steps = [
    {
      step: "Step 1: Initial Consultation",
      description:
        "We begin by understanding your specific needs, reviewing your accounts, and outlining a strategy that best suits your requirements.",
    },
    {
      step: "Step 2: Communication with Debtors",
      description:
        "Our team initiates communication with debtors to resolve outstanding amounts through negotiation and amicable solutions. We aim to preserve client relationships while recovering the debt.",
    },
    {
      step: "Step 3: Skip Tracing & Asset Tracing",
      description:
        "If necessary, we employ advanced skip tracing and asset tracing techniques to locate the debtor and secure their assets.",
    },
    {
      step: "Step 4: Legal Action (if required)",
      description:
        "When amicable collection attempts fail, we proceed with legal actions, including issuing legal notices, filing lawsuits, and pursuing court-enforced debt recovery solutions.",
    },
    {
      step: "Step 5: Regular Updates",
      description:
        "Throughout the process, we provide you with regular updates on progress, ensuring full transparency and peace of mind.",
    },
  ];

  return (
    <Container id="how-it-works" maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            textAlign: "center",
            color: "#03a651",
          }}
        >
          How It<span style={{color:"#000000"}}> Works</span> 
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 500, color: "text.secondary" }}
        >
          Our Debt Recovery Process:
        </Typography>
        <Typography sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}>
          Our structured approach ensures that we recover debts efficiently,
          ethically, and legally.
        </Typography>
        <Box>
          <List>
            {steps.map((item, index) => (
              <ListItem
                key={index}
                sx={{ pl: 0, pb: 3, alignItems: "flex-start" }}
              >
                <ArrowForwardIos sx={{ color: "#03a651", mr: 1, mt: 0.5 }} />
                <ListItemText
                  primary={item.step}
                  secondary={item.description}
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    sx: { fontWeight: "bold", color: "text.primary" },
                  }}
                  secondaryTypographyProps={{
                    variant: "body2",
                    sx: {
                      color: "text.secondary",
                      mt: 0.5,
                      fontSize: "0.95rem",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default HowItWorks;
