import Nav from 'react-bootstrap/Nav';

function SelectBar(props) {
    const setType = props.setType;
    const selectFilterType = eventKey => {
        setType(eventKey)
    }
    return (
        <Nav variant="tabs" className="justify-content-center" onSelect={selectFilterType}>
            <Nav.Item>
                <Nav.Link eventKey="All">All</Nav.Link>
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
    )
}

export default SelectBar;