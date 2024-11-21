import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

// Career Data
const careerData = [
  {
    title: "Recovery Manager and Recovery Officer",
    locations: "Seventeen districts throughout Pakistan",
    description:
      "Recovery Managers and Recovery Officers should possess a strong understanding of local recovery laws and procedures. They must be adept at tactfully managing various types of defaulters. Candidates should be trained to locate individuals, corporations, and assets in a professional and efficient manner. Paid training is provided.",
    requirements: [
      "Outgoing personality",
      "Attention to detail",
      "Keyboarding skills",
    ],
    benefits: "Competitive salary, bonuses, and full benefits",
  },
  {
    title: "Credit Investigators",
    locations: "Rawalpindi, Lahore, Peshawar, Karachi",
    description:
      "Credit Investigation personnel are trained to efficiently locate individuals, corporations, and assets. Our investigations department is fully computerized, equipped with Internet access, our proprietary collection system, and specialized tracing software.",
    requirements: [
      "Outgoing demeanor",
      "Meticulous attention to detail",
      "Proficient keyboarding skills",
      "Proficiency in written and spoken English",
      "Knowledge of additional languages (preferred)",
    ],
    benefits: "Competitive salary, bonuses, and comprehensive benefits",
  },
  {
    title: "Debt Recovery Consultant",
    locations: "Head Office",
    description:
      "Candidates must be eager to learn the Art of Negotiation. Responsibilities include contacting clients with overdue accounts and negotiating to achieve satisfactory resolutions.",
    requirements: [
      "Proficiency in oral and written English",
      "Post-secondary business programs (preferred)",
      "Additional language skills (asset)",
    ],
    benefits: "Competitive salary, bonus, and benefits packages",
  },
];

// Styled Components
const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f4f6f8",
  padding: "4rem 2rem",
  minHeight: "100vh",
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2.5rem",
  color: "#333",
  textAlign: "center",
  marginBottom: "3rem",
}));

const CareerCard = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "2rem",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  textAlign: "left", // Align content to the left
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

const CareerTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.8rem",
  color: "#333",
  marginBottom: "0.8rem",
}));

const CareerDescription = styled(Typography)(({ theme }) => ({
  color: "#555",
  marginBottom: "1.5rem",
  fontSize: "1rem",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#00796b",
  marginBottom: "0rem",
}));

const RequirementsList = styled(List)(({ theme }) => ({
  marginTop: "0.5rem",
  paddingLeft: "0px",
  listStyleType: "none",
  color: "#555",
  marginBottom: "1rem",
}));

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  paddingLeft: "0rem",
  paddingTop: "0rem",
  paddingBottom: "0rem",
  fontSize: "0.8rem",
}));

const LocationText = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#00796b",
  marginBottom: "1rem",
}));

const ApplyMessage = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  fontSize: "0.9rem",
  fontWeight: 600,
  color: "#00796b",
}));

const Section3 = () => {
  return (
    <PageContainer>
      <TitleText variant="h4">Explore Career Opportunities</TitleText>

      <Grid container spacing={4} justifyContent="center">
        {careerData.map((career, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CareerCard elevation={3}>
              <CareerTitle>{career.title}</CareerTitle>

              <LocationText>
                <LocationOnIcon sx={{ marginRight: "8px" }} />
                {career.locations}
              </LocationText>

              <CareerDescription>{career.description}</CareerDescription>

              <SectionTitle>Requirements:</SectionTitle>
              <RequirementsList>
                {career.requirements.map((item, index) => (
                  <ListItemStyled key={index}>
                    <ListItemText primary={item} sx={{ color: "#555" }} />
                  </ListItemStyled>
                ))}
              </RequirementsList>

              <SectionTitle>Benefits:</SectionTitle>
              <Typography
                variant="body2"
                sx={{ color: "#333", marginBottom: "1rem" }}
              >
                {career.benefits}
              </Typography>

              <Divider sx={{ margin: "1rem 0" }} />

              <ApplyMessage>
                <EmailIcon sx={{ marginRight: "8px" }} />
                Apply to: <strong>ceo@cdcs.com.pk</strong>
              </ApplyMessage>
            </CareerCard>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Section3;
