import './App.css';
import * as React from 'react';
import {Box, Button, Drawer, Grid, Typography} from "@mui/material";
import bakerydata from "./BakeryData.json"
import BakeryItem from "./BakeryItem";
import SelectBar from "./SelectBar";
import ShoppingCart from "./ShoppingCart";
import {useState} from "react";

function App() {
    const [type, setType] = useState("All");
    const [plimit, setPlimit] = useState([]);
    const [cart, setCart] = useState(new Map());
    const [price, setPrice] = useState(0);
    const [sorted, setSorted] = useState(false);

    const matchesFilterType = item => {
        return ((type === "All") || (type === item.type)) && (((plimit[0] <= item.price) && (plimit[1] > item.price)) || (plimit.length === 0))
    }

    const changeSortWay = (a, b) => {
        if (sorted) {
            return a.price - b.price;
        }
        else {
            if (a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }
            else {
                return 0;
            }
        }
    }

    const handleSort = () => {
        setSorted(true);
    }

    const handleUnsort = () => {
        setSorted(false);
    }

    // const bakerydataToDisplay = [...bakerydata]
    // if (sorted) {
    //     bakerydataToDisplay.sort((a, b) => a.price - b.price)
    // }

  return (
      <div>
          <Box sx={{ display: 'flex' }}>
              <Drawer sx={{
                  width: 240,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                      width: 240,
                      boxSizing: 'border-box',
                  },
              }} variant="permanent" anchor="left">
                  <ShoppingCart cart={cart} price={price} setCart={setCart} setPrice={setPrice}/>
              </Drawer>
              <div>
                  <div>
                      <Typography variant="h1" align="center">Tatte Bakery</Typography>
                      <Typography variant="h5" className="grey-text" align="center">Fake :)</Typography>
                      <SelectBar setType={setType} setPlimit={setPlimit}/>
                      <div>
                          {!sorted && <div><Button onClick={handleSort}>Sort by Price</Button> Now items are unsorted </div>}
                          {sorted && <div><Button onClick={handleUnsort}>Unsorted</Button> Now items are sorted</div>}
                      </div>
                  </div>
                  <div>
                      <Grid container spacing={2}>
                          {
                              bakerydata.sort(changeSortWay).filter(matchesFilterType).map((item, index) => <Grid item xs={4}><BakeryItem item={item} setCart={setCart} setPrice={setPrice}/></Grid>)
                          }
                      </Grid>
                  </div>

                  {/*<Grid container spacing={2}>*/}
                  {/*    {*/}
                  {/*        bakerydataToDisplay.filter(matchesFilterType).map((item, index) => <Grid item xs={4}><BakeryItem item={item} setCart={setCart} setPrice={setPrice}/></Grid>)*/}
                  {/*    }*/}
                  {/*</Grid>*/}
              </div>
          </Box>
      </div>
  );
}

export default App;
