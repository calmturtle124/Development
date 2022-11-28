import Nav from 'react-bootstrap/Nav';

function SelectBar(props) {
    const setType = props.setType;
    const setPlimit = props.setPlimit;
    const selectFilterType = eventKey => {
        setType(eventKey)
    }
    const selectFilterPrice = eventKey => {
        if (eventKey === "All") {
            setPlimit(-1);
        }
        else {
            setPlimit(10);
        }
    }
    // const selectFilterPriceAll = e => {
    //     console.log("hiiiiii")
    //     if (e.target.checked) {
    //         setPlimit(-1)
    //     }
    //     else {
    //         setPlimit(10)
    //     }
    //
    // }
    // const selectFilterPriceTen = e => {
    //     console.log("hi")
    //     if (e.target.checked) {
    //         setPlimit(10)
    //     }
    //     else {
    //         setPlimit(-1)
    //     }
    // }
    return (
        <div>
            {/*<div className="form-check form-check-inline" align="center">*/}
            {/*    <input className="form-check-input" type="radio" name="radio1" id="allprice" onChange={e => selectFilterPriceAll(e)}/>*/}
            {/*    <label className="form-check-label" htmlFor="allprice">*/}
            {/*        All Price*/}
            {/*    </label>*/}
            {/*</div>*/}
            {/*<div className="form-check form-check-inline">*/}
            {/*    <input className="form-check-input" type="radio" name="radio1" id="lessthanten" onChange={e => selectFilterPriceTen(e)}/>*/}
            {/*    <label className="form-check-label" htmlFor="lessthanten">*/}
            {/*        Price less than $10*/}
            {/*    </label>*/}
            {/*</div>*/}
            <Nav variant="tabs" className="justify-content-center" onSelect={selectFilterPrice}>
                <Nav.Item>
                    <Nav.Link eventKey="All">All Price</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="10">Price less than $10</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav variant="tabs" className="justify-content-center" onSelect={selectFilterType}>
                <Nav.Item>
                    <Nav.Link eventKey="All">All Type</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Sandwich">Sandwich</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Salad">Salad</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Shakshuka">Shakshuka</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Other">Other</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>

    )
}

export default SelectBar;