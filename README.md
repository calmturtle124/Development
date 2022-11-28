

# Development

### Link to Deployed Website
https://calmturtle124.github.io/Development/

### Goal and Value of the Application
This is a bakery online ordering page, the user can view all available items, and find what they want quickly by the filter and sort functionality. They can view all items in a specific type, filter out expensive items, and sort items from lower to higher prices.
After finding the item they want, they can add the item to the shopping cart showing on the left of the screen, and the shopping cart will store what item the user added, how many, and the total price of all items in the cart. Users can also remove items from the cart if they change their mind.

### Usability Principles Considered
1. (User control) Users have control over the cart and items: They can both add or remove items to the cart, they can apply and unapply sorting, and they can select and unselect (select other) item types for the gallery.
2. (Consistency) The format of all tabs are same, the format of all items in the gallery are same, and the format of all items in the cart are same.
3. (Recognition) The cart and its showing items are always at the left of the screen, the vertical scroll will only affect the gallery, not the cart, so the user can always see what is in the cart and make decisions based on that.
4. (Minimalist design) The page only shows the necessary information, there is no irrelevant information.

### Organization of Components
The main component: App
The App contains 3 subcomponents: SelectBar, ShoppingCart, and BakeryItem. Both SelectBar and ShoppingCart represent the whole select bar and cart, but the BakeryItem represents the format of a single bakery item, a Map function was used on a list of items that need to show in the gallery and convert each item to a BakeryItem for display.

### How Data is Passed Down Through Components
The App maintains 5 userState:
type: Type of items that currently should be displayed
plimit: Price limit on items that currently should be displayed
cart: All items in the cart currently
price: The total price of items in the cart currently
sorted: Whether the current items should be sorted
And each of them has a corresponding set method.

cart and setCart, price and setPrice have been passed to the ShoppingCart component, since it is responsible for showing the cart and the price, and changing them when the user removes items.
setType and setPlimit have been passed to the SelectBar, since it is responsible for updating the type when the user selects a type or/and the price limit.
setPrice and setCart has been passed to the BakeryItem component, since it is responsible for changing the cart and the price when the user adds items. Also, the element of the bakery data list is also passed into it, since it is responsible for showing the information (name, image, type...) of the element.

### How the User Triggers State Changes

type: the type state is a String. Users can select the type they want by the type nav bar. For example, if they select the "All" type, the type state will be set to "All”.
plimit: the plimit state is a Number. Users can select the price limit they want by the limit nav bar. Since the range of the price of bakery items is narrow, there are only two options for now: If they select “All price”, there is no limit of price on showing items. If they select “Price less than $10”, only items with a price lower or equal to $10 would be shown.
cart: the cart state is a Map. Users can add or remove items from the cart. The adding button is in the BakeryItem component, and the removing button is in the ShoppingCart component itself. If the user adds an item, a new Map will be generated, which is exactly the same except that item is added to it. If the user removes an item, a new Map will be generated, which is exactly the same except that item is removed from it. The new Map will be set as the new cart state.
price: the price state is a Number. price is completely related to the cart state. If the user adds an item to the cart, the new price state will be the old price + that item's price; if the user removes an item from the cart, the new price state will be the old price - that item's price.
sorted: the sorted state is a Boolean. If the user clicks the sort button, the sorted state will become "true"; if the user clicks the button again (now the button at the same position is the unsorted button), the sorted state will become "false".