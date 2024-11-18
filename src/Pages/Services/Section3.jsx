import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import Rectangle3 from "../../assets/Images/Rectangle3.png";
import Service1 from "../../assets/Images/Service1.png";
import Service2 from "../../assets/Images/Service2.png";
import Service3 from "../../assets/Images/Service3.png";

const Section3 = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem("");
  };

  const listItems = [
    {
      title: "Debt Collection",
      short_desc:
        "We offer a full range of debt collection services tailored to meet the unique needs of financial institutions. Our experienced team ensures a strategic approach to recover outstanding amounts, from amicable negotiations to legal action when necessary.",
      details: (
        <>
          <Typography variant="body1" gutterBottom>
            Corporate Debt Collection Services (CDCS) stands as a prominent
            agency in the field of debt recovery. Our primary emphasis lies in
            the collection of commercial accounts receivable and the management
            of delinquent debts, in addition to offering pre-collection
            outsourcing services and various other recovery solutions. Our team
            of professional collectors has extensive and varied experience. CDCS
            is registered with the Pakistan Software Export Board, and we ensure
            all debt collection activities are conducted using recorded landline
            numbers. Our collectors have a strong track record in commercial
            debt collection and third-party services. We operate on a "No
            Recovery - No Fee" basis, meaning we only charge a commission on the
            money we collect, whether it goes directly to the bank or through
            our office.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We specialize in recovering commercial receivables, bad debts, and
            debts for various entities, including banks and DFIs, such as:
          </Typography>
          <ul
            style={{
              paddingLeft: "20px",
              lineHeight: "1.6",
              listStyleType: "disc",
            }}
          >
            <li>
              <Typography variant="body2">
                Recovery of Non-Performing Loans (NPLs)
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Recovery of credit card debts
              </Typography>
            </li>
            <li>
              <Typography variant="body2">Consumer loans</Typography>
            </li>
            <li>
              <Typography variant="body2">Vehicle loans</Typography>
            </li>
            <li>
              <Typography variant="body2">Commercial loans</Typography>
            </li>
            <li>
              <Typography variant="body2">Bad cheques</Typography>
            </li>
            <li>
              <Typography variant="body2">Overdraft facilities</Typography>
            </li>
            <li>
              <Typography variant="body2">Credit card accounts</Typography>
            </li>
            <li>
              <Typography variant="body2">Mortgage home loans</Typography>
            </li>
            <li>
              <Typography variant="body2">Utility bills</Typography>
            </li>
            <li>
              <Typography variant="body2">
                Retail and department store accounts
              </Typography>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Skip Tracing",
      short_desc:
        "When debtors are difficult to locate, our skip tracing services use advanced techniques to find the most accurate and up-to-date information, ensuring that your debt collection efforts are not hampered by elusive individuals.",
      details: (
        <>
          <Typography variant="body1" gutterBottom>
            Every year, millions of people change their homes, often without
            informing their creditors. This results in many accounts being
            written off because creditors cannot contact their customers.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We can assist in finding these 'gone away' cases and help reduce the
            number of written-off accounts. Our Commercial Debt Collection
            Agency provides accurate and current forwarding address information
            for individuals or companies that have relocated.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            Types of 'Gone Away' Cases
          </Typography>
          <ul
            style={{
              paddingLeft: "20px",
              lineHeight: "1.6",
              listStyleType: "disc",
            }}
          >
            <li>
              <Typography variant="body2">
                Unintentional: Individuals who forget to update their address.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Relief-Seeking: Those who attempt to avoid payment by appearing
                unreachable.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Criminal: Individuals who deliberately hide to avoid detection.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" gutterBottom sx={{ marginTop: "1rem" }}>
            Our skip tracing service can locate up to 90% of 'gone away' cases,
            providing accurate and current forwarding addresses. Our extensive
            experience shows that it is difficult to completely disappear.
            Utilizing the latest databases, technology, and a skilled team, we
            find most 'gone-aways'.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            Additional Services
          </Typography>
          <Typography variant="body2" gutterBottom>
            We also support process serving, litigation, and judgment execution.
            When searching for individuals or assets, our resources and
            accredited network across the country perform these essential tasks
            efficiently.
          </Typography>
          <ul
            style={{
              paddingLeft: "20px",
              lineHeight: "1.6",
              listStyleType: "disc",
            }}
          >
            <li>
              <Typography variant="body2">
                Serving legal documents through experienced investigators and
                process servers.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Advanced techniques for locating debtors who have moved or are
                difficult to contact.
              </Typography>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Asset Tracing",
      short_desc:
        "Our asset tracing services help identify and secure the debtor's assets, allowing for more effective debt recovery, whether through garnishments, liens, or other legal means.",
      details: (
        <>
          <Typography variant="body1" paragraph>
            Identifying and securing debtor assets for efficient recovery in
            debt collection in Pakistan involves a systematic approach. Here are
            the key steps to secure debtor assets effectively:
          </Typography>

          <Typography variant="h6" gutterBottom>
            Key Steps for Asset Tracing:
          </Typography>
          <Box component="div" sx={{ marginBottom: "1.5rem" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              1. Initial Assessment & Debtor Profile
            </Typography>
            <Typography variant="body2" paragraph>
              Gather and evaluate basic information about the debtor's financial
              status and history.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              2. Engage in Pre-Collection Steps
            </Typography>
            <Typography variant="body2" paragraph>
              Communicate with the debtor to understand their position and
              potential repayment options.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              3. Legal Action and Court Proceedings
            </Typography>
            <Typography variant="body2" paragraph>
              Initiate legal steps if voluntary repayment is not feasible.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              4. Asset Identification
            </Typography>
            <Box
              component="div"
              sx={{ paddingLeft: "1rem", marginTop: "0.5rem" }}
            >
              <Typography variant="body2" gutterBottom>
                <strong>Immovable Property:</strong> Identify real estate
                holdings, land, or buildings by checking land records through
                the Land Revenue Department or the Federal Board of Revenue
                (FBR). Verify title deeds for ownership.
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Movable Property:</strong> This includes vehicles,
                machinery, and other valuables. Check ownership at the Excise &
                Taxation Department.
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Bank Accounts & Financial Assets:</strong> Identify
                accounts or investments. Obtain bank information via a court
                order.
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              5. Asset Freezing & Attachment
            </Typography>
            <Typography variant="body2" paragraph>
              Freeze and attach identified assets through legal channels.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              6. Cross-Border Collection (if applicable)
            </Typography>
            <Typography variant="body2" paragraph>
              Take international measures for asset collection if needed.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              7. Monitoring & Enforcing Collection
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Continued Monitoring:</strong> Regularly track the
              debtor's financial status to ensure compliance with repayment
              plans.
            </Typography>
          </Box>

          <Typography variant="h6" gutterBottom>
            Legal Framework in Pakistan:
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              <Typography variant="body2">
                Civil Procedure Code (CPC) for debt recovery procedures.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Execution of Decrees Act 1997 for judgment enforcement.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Negotiable Instruments Act, 1881 for cheques and promissory note
                debt recovery.
              </Typography>
            </li>
          </Box>
        </>
      ),
    },
    {
      title: "Profile Verifications",
      short_desc:
        "Our comprehensive profile verification process ensures that the debtor's information is correct and up-to-date, enabling more targeted and successful debt recovery strategies.",
      details: (
        <>
          <Typography variant="body1" paragraph>
            Verifying personal profiles is essential for legal purposes as it
            ensures the authenticity and accuracy of individuals' information.
            Legal verification helps individuals confirm their identity and
            validate the details of their personal profiles.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Importance of Profile Verification:
          </Typography>
          <Box component="div" sx={{ marginBottom: "1.5rem" }}>
            <Typography variant="body2" paragraph>
              This verification process plays a vital role in various areas,
              including:
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyleType: "disc",
                paddingLeft: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <li>
                <Typography variant="body2">
                  <strong>Reuniting Overseas Families:</strong> Ensures accurate
                  identification to facilitate family reunions.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  <strong>Employment:</strong> Confirms the legitimacy of
                  personal details for job applications and background checks.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  <strong>Financial Transactions:</strong> Verifies personal
                  profiles to prevent fraud and secure transactions.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  <strong>Legal Proceedings:</strong> Provides verified
                  information crucial for court cases and legal matters.
                </Typography>
              </li>
            </Box>

            <Typography variant="body2" paragraph>
              Profile verification acts as a strong deterrent against identity
              theft, fraud, and other unlawful activities. By confirming the
              authenticity and trustworthiness of personal profiles, this
              process helps maintain security and reliability in both personal
              and professional domains.
            </Typography>

            <Typography variant="body1" paragraph>
              The legalization of verification is thus a necessary measure to
              uphold the integrity and security of personal information.
            </Typography>
          </Box>
        </>
      ),
    },
  ];
  return (
    <section>
      <div className="bg-Artboardlarge overflow-x-hidden">
        {/* Section container */}
        <div className="max-w-[1440px] mx-auto lg:px-10 xl:px-24 p-2 md:p-10 md:py-10">
          <Grid container>
            {/* Left Side (Images) */}
            <Grid item xs={12} md={6} className="flex justify-center">
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <img
                    src={Service1}
                    alt="Service 1"
                    className="w-full shadow-2xl rounded-3xl"
                  />
                </Grid>
                <Grid item>
                  <img
                    src={Service2}
                    alt="Service 2"
                    className="w-full shadow-2xl rounded-3xl"
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Right Side (Text + Cards) */}
            <Grid
              item
              xs={12}
              md={6}
              className="flex flex-col justify-center items-center md:items-start"
            >
              {/* Card Grid Layout */}
              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ marginTop: { xs: 3, sm: 3, md: 0 } }}
              >
                {listItems.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper
                      onClick={() => handleClickOpen(item)}
                      sx={{
                        cursor: "pointer",
                        padding: 3,
                        mx: 2,
                        textAlign: "center",
                        boxShadow: 2,
                        borderRadius: "5PX",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: 6,
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="#03A651"
                        textAlign="start"
                      >
                        {item.title}
                      </Typography>
                      <Typography textAlign="start">
                        {item.short_desc}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ marginTop: 2 }}
                        textAlign="start"
                      >
                        Click to learn more
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          {/* Dialog Box for Displaying Details */}
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle
              sx={{ backgroundColor: "#f4f4f4", fontWeight: "bold" }}
            >
              {selectedItem.title}
            </DialogTitle>
            <DialogContent sx={{ paddingTop: 2 }}>
              <Box sx={{ padding: "1rem" }}>
                <Typography variant="body1" paragraph>
                  {selectedItem.details}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions sx={{ padding: "1rem" }}>
              <Button
                onClick={handleClose}
                sx={{ backgroundColor: "#03A651" }}
                variant="contained"
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Section3;
