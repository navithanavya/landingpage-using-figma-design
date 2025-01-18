import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../data/data.json";
import "../styles/FAQsPage.css"; // Import the separate CSS file

const FAQsPage: React.FC = () => {
  const faqs = data.faqs;

  return (
    <Box className="faqs-container">
      <Typography variant="h3" className="faqs-title" sx={{ mb: 4 }}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} className="faq-item">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} className="faq-question">
            <Typography className="faq-question-text">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="faq-answer">
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQsPage;
