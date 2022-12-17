import './App.css';
import * as React from 'react';
import './index.css';

function App() {
    let backgroundImage = "/leone.jpg";
    return (
        <>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', position: 'fixed',
                width: '100vw',
                height: '100vh',
                zIndex: '-1'
            }}>
            </div>
            <nav className="navbar fixed-top navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand ms-2" href="https://peaceful-brigadeiros-ba83da.netlify.app">
                        <img className="img-fluid" width="25" src="homeicon.png" alt=""/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#start">
                                    <span className="text-dark">Start</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projectoverview">
                                    <span className="text-dark">Project Overview</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#goal">
                                    <span className="text-dark">Goal and Value</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#usability">
                                    <span className="text-dark">Usability Principles Considered</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#component">
                                    <span className="text-dark">Organization of Components</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#data">
                                    <span className="text-dark">Data Passing</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#stateschange">
                                    <span className="text-dark">State Changes</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#conclusion">
                                    <span className="text-dark">Conclusion</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="row pt-5">
                <div className="col-md-8 ps-5 large-padding">
                    <div className="display-1 pt-4 pb-5" id="start">Development</div>
                    <div className="ps-3 fw-light fs-4 text-secondary">
                        <div>
                            This project is about learning React.js. React is a Javascript library for building UI and it is important for a UI designer.
                        </div>
                        <div>
                            Now, let’s start looking at what a simple taste bakery web application written in react would look like!
                        </div>
                    </div>

                    <div className="row mt-5 large-bottom">
                        <img className="card-img round-all image-fluid" src="Development.png"
                             alt="chowdeckCover.png"/>
                    </div>

                    <div className="large-bottom pt-5" id="projectoverview">
                        <div className="fw-light display-4 pb-4">
                            Project Overview
                        </div>
                        <div className="fw-light fs-5 text-secondary">
                            <div className="row text-dark pb-4">


                                <div class="col-md-6">
                                    <div>
                                        Languages: HTML/CSS, Javascript
                                    </div>
                                    <div>
                                        (Library: React.js, Framework: Bootstrap)
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    Tools: IntelliJ
                                </div>

                            </div>
                            <div className="pb-1">What we will go through:
                            </div>
                            <ol>
                                <li className="pb-1">
                                    The Usability principles this bakery application wants to focus on.
                                </li>
                                <li className="pb-1">
                                    The components of this bakery. React application is composed of reusable components, reusability, and good structure is two of the advantage of React.
                                </li>
                                <li className="pb-1">
                                    The way that data passed through the component. The component here we used is a functional component, the way it works is to take in input data and output the corresponding react element.
                                </li>
                                <li className="pb-1">
                                    The user states in the bakery Application. In React, the user state hook will keep track of the state of the functional component, and also, it can be passed into other components as input data.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="large-bottom pt-5" id="goal">
                        <div className="fw-light display-4 pb-4">
                            Goal and Value of the Application
                        </div>
                        <div className="fw-light fs-5 text-secondary">
                            <div className="pb-4">
                                This is a bakery online ordering page, the user can view all available items, and find what they want quickly by the filter and sort functionality. They can view all items in a specific type, filter out expensive items, and sort items from lower to higher prices. After finding the item they want, they can add the item to the shopping cart showing on the left of the screen, and the shopping cart will store what item the user added, how many, and the total price of all items in the cart. Users can also remove items from the cart if they change their mind.
                            </div>
                        </div>
                    </div>

                    <div className="large-bottom pt-5" id="usability">
                        <div className="fw-light display-4 pb-4">
                            Usability Principles Considered
                        </div>
                        <div className="fw-light fs-5 text-secondary">
                            <ul>
                                <li>
                                    (User control) Users have control over the cart and items: They can both add or remove items to the cart, they can apply and unapply sorting, and they can select and unselect (select other) item types for the gallery.
                                </li>
                                <li>
                                    (Consistency) The format of all tabs are same, the format of all items in the gallery are same, and the format of all items in the cart are same.
                                </li>
                                <li>
                                    (Recognition) The cart and its showing items are always at the left of the screen, the vertical scroll will only affect the gallery, not the cart, so the user can always see what is in the cart and make decisions based on that.
                                </li>
                                <li>
                                    (Minimalist design) The page only shows the necessary information, there is no irrelevant information.
                                </li>
                            </ul>


                        </div>
                    </div>

                    <div className="large-bottom pt-5" id="component">
                        <div className="fw-light display-4 pb-4">
                            Organization of Components
                        </div>
                        <div className="fw-light fs-5 text-secondary">
                            <div>
                                The main component: App The App contains 3 subcomponents: SelectBar, ShoppingCart, and BakeryItem. Both SelectBar and ShoppingCart represent the whole select bar and cart, but the BakeryItem represents the format of a single bakery item, a Map function was used on a list of items that need to show in the gallery and convert each item to a BakeryItem for display.
                            </div>
                        </div>
                    </div>

                    <div className="large-bottom pt-5" id="data">
                        <div className="fw-light display-4 pb-4">
                            How Data is Passed Down Through Components
                        </div>
                        <div className="fw-light fs-5 text-secondary">
                            <div className="pb-4">
                                The App maintains 5 userState: type: Type of items that currently should be displayed plimit: Price limit on items that currently should be displayed cart: All items in the cart currently price: The total price of items in the cart currently sorted: Whether the current items should be sorted And each of them has a corresponding set method.
                            </div>
                            <div>
                                cart and setCart, price and setPrice have been passed to the ShoppingCart component, since it is responsible for showing the cart and the price, and changing them when the user removes items. setType and setPlimit have been passed to the SelectBar, since it is responsible for updating the type when the user selects a type or/and the price limit. setPrice and setCart has been passed to the BakeryItem component, since it is responsible for changing the cart and the price when the user adds items. Also, the element of the bakery data list is also passed into it, since it is responsible for showing the information (name, image, type...) of the element.
                            </div>
                        </div>
                    </div>

                    <div className="large-bottom pt-5" id="stateschange">
                        <div className="fw-light display-4 pb-4">
                            How the User Triggers State Changes
                        </div>
                        <div className="fw-light fs-5 text-secondary">
                            type: the type state is a String. Users can select the type they want by the type nav bar. For example, if they select the "All" type, the type state will be set to "All”. plimit: the plimit state is a list of Number. Users can select the price limit they want by the limit nav bar. Since the range of the price of bakery items is narrow, there are only 3 options for now: If they select “All price”, there is no limit of price on showing items. If they select “Price $5 - $10”, only items with a price in the range [5, 10) would be shown. If they select “Price >= $10”, only items with a price larger or equal than 10 would be shown. cart: the cart state is a Map. Users can add or remove items from the cart. The adding button is in the BakeryItem component, and the removing button is in the ShoppingCart component itself. If the user adds an item, a new Map will be generated, which is exactly the same except that item is added to it. If the user removes an item, a new Map will be generated, which is exactly the same except that item is removed from it. The new Map will be set as the new cart state. price: the price state is a Number. price is completely related to the cart state. If the user adds an item to the cart, the new price state will be the old price + that item's price; if the user removes an item from the cart, the new price state will be the old price - that item's price. sorted: the sorted state is a Boolean. If the user clicks the sort button, the sorted state will become "true"; if the user clicks the button again (now the button at the same position is the unsorted button), the sorted state will become "false".
                        </div>
                    </div>

                    <div className="large-bottom pt-5" id="conclusion">
                        <div className="fw-light display-4 pb-4">
                            Conclusion
                        </div>
                        <div className="fw-light fs-5 text-secondary">
                            In this project, I learned basic knowledge of React, including the component structure and hooks. In the future, I will continue to learn React and try to make a more complex web application, for example, a full stack project that can store user’s data (like the card items) in a database then it won’t go after the page refresh.
                        </div>
                    </div>


                </div>

                <div className="col-md-4">

                </div>
            </div>

        </>
    );
}

export default App;
