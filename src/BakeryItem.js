import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

function BakeryItem(props) {
    const item = props.item;
    const setCart = props.setCart;
    const setPrice = props.setPrice;

    const addToMap = old => {
        const newMap = new Map(old);
        let cur = newMap.get(item.name);
        if (cur != null) {
            newMap.set(item.name, cur + 1);
        }
        else {
            newMap.set(item.name, 1);
        }
        return newMap;
    }

    const handleClicks = () => {
        setCart(addToMap);
        setPrice(old => Math.round(((old + item.price) + Number.EPSILON) * 100) / 100);
    }

    return (
        <div>
            <Card>
                <CardMedia component="img" height="150" image={item.image}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.detail}
                    </Typography>
                    <Typography variant="body1" pt={2}>
                        ${item.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" onClick={handleClicks}>Add to Cart</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default BakeryItem;