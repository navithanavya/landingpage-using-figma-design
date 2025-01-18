import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import data from "../data/data.json";
import { motion } from "framer-motion"; // For animation
import { useInView } from "react-intersection-observer"; // For scroll-triggered animations
import "../styles/ProductsPage.css"; // Import the separate CSS file

const ProductsPage: React.FC = () => {
  const products = data.sections.find((section) => section.title === "Our Products")?.products;

  return (
    <Box className="products-container" sx={{ p: 4 }}>
      <Typography variant="h3" textAlign="center" className="products-title" sx={{ mb: 4 }}>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products?.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

interface ProductProps {
  product: {
    name: string;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={`product-card-container ${inView ? "in-view" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Card className="product-card">
        <CardMedia component="img" image={product.image} alt={product.name} />
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body2">{product.description}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductsPage;
