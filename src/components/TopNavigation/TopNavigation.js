import React from "react";
import styled from "styled-components";

// Components
import Dropdown from "../shared/Dropdown/Dropdown";

const Container = styled.div`
    display: flex;
`

function TopNavigation() {
    const fileObject = {
        title: "File",
        items: [
            {
                label: 'Open',
                onClick: () => {console.log("Youv'e clicked open.")}
            },
            {
                label: 'Close',
                onClick: () => {console.log("Youv'e clicked close.")}
            }
        ]
    }

    const documentObject = {
        title: "Document",
        items: [
            {
                label: 'Headers',
                onClick: () => {console.log("Youv'e clicked headers.")}
            },
            {
                label: 'Page Numbers',
                onClick: () => {console.log("Youv'e clicked page numbers.")}
            }
        ]
    }

    const [openDropdown, setOpenDropdown] = React.useState("");

    const openState = {
        openDropdown,
        setOpenDropdown
    }

    return (
        <Container>
            <Dropdown data={fileObject} openState={openState} />
            <Dropdown data={documentObject} openState={openState} />
        </Container>
    )
}

export default TopNavigation;