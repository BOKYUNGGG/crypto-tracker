import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import styled from "styled-components";

export interface HeaderProps {
    toggleHandler : () => void
}
const Wrapper = styled.header`
    display : flex;
    margin : 0 auto;
    width : 40em;
    justify-content : space-between;
`
export default function Header({toggleHandler}:HeaderProps ){


    return(
        <Wrapper>
            <Navbar />
            <ThemeToggle toggleHandler={toggleHandler}/>
        </Wrapper>
    )
}