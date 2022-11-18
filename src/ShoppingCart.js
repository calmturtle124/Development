import {Button, Divider} from "@mui/material";
import bakerydata from "./BakeryData.json";

function ShoppingCart(props) {
    const cart = props.cart;
    const price = props.price;
    const setCart = props.setCart;
    const setPrice = props.setPrice;

    const handleRemove = key => {
        const removeFromMap = old => {
            const newMap = new Map(old);
            let cur = newMap.get(key);
            if (cur > 1) {
                newMap.set(key, cur - 1);
            }
            else {
                newMap.delete(key);
            }
            return newMap;
        }

        setCart(removeFromMap);

        const n = bakerydata.find(ele => ele.name === key).price;
        setPrice(old => Math.round(((old - n) + Number.EPSILON) * 100) / 100);
    }

    return (
        <div>
            <div className="display-6 mb-3">Cart: </div>
            <div>
                {Array.from(cart).map(([key, value]) =>
                    <div className="mt-2">
                        <div>{key} x{value}</div>
                        <Button onClick={() => handleRemove(key)}>Remove one</Button>
                    </div>)}
            </div>
            <Divider/>
            <div>Total price: ${price}</div>
        </div>
    )
}

export default ShoppingCart;