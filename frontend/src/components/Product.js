import React, { useEffect, useState } from "react";
import productsData from "../data/productsData";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CancelIcon from "@mui/icons-material/Cancel";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Rating,
} from "@mui/material";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Container sx={{ marginBottom: 10, marginTop: 5 }}>
      <Typography variant="h3" gutterBottom sx={{ marginBottom: 10 }}>
        Product List
      </Typography>
      <Grid container spacing={4}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 3,
                  transition: "0.3s",
                  cursor: "pointer",
                  border: "0px solid",
                  borderRadius: "30px",
                }}
                onClick={() => handleClickOpen(product)}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 150,
                    width: 150,
                    margin: "0 auto",
                    objectFit: "contain",
                    paddingTop: "10px",
                  }}
                  image={product.image}
                  alt={product.title}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "16px",
                    marginTop: "auto",
                  }}
                >
                  <Typography variant="h6" color="primary">
                    ${product.price}
                  </Typography>
                  <Button size="large" color="primary">
                    <AddBoxIcon
                      sx={{ fontSize: 40, color: "#3ED917", padding: "5px" }}
                    />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No products available</Typography>
        )}
      </Grid>

      {selectedProduct && (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>{selectedProduct.title}</DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              sx={{
                height: 300,
                width: "100%",
                margin: "0 auto",
                objectFit: "contain",
              }}
              image={selectedProduct.image}
              alt={selectedProduct.title}
            />
            <DialogContentText>
              <Typography variant="body1" gutterBottom>
                {selectedProduct.description}
              </Typography>
              <Typography variant="h6" color="primary">
                Price: ${selectedProduct.price}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Reviews & Rating:
              </Typography>

              <Rating
                name="read-only"
                value={selectedProduct.rating.rate}
                readOnly
              />
              <Typography variant="body2" color="text.secondary">
                ({selectedProduct.rating.count} reviews)
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              <CancelIcon
                sx={{ fontSize: 40, color: "#E90204", padding: "5px" }}
              />
            </Button>
            <Button onClick={handleClose} color="primary">
              <AddBoxIcon
                sx={{ fontSize: 40, color: "#3ED917", padding: "5px" }}
              />
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default Product;

