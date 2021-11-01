import { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    
    return (
        <Container>
            <Info>
                <a href='#'>Read Tesla's 2020 Impact Report</a>
            </Info>
            <Nav>
                <a>
                    <img src='/images/logo.svg' alt='Tesla logo'></img>
                </a>
                <Menu>
                    <a href='#'>Model S</a>
                    <a href='#'>Model 3</a>
                    <a href='#'>Model X</a>
                    <a href='#'>Model Y</a>
                    <a href='#'>Solar Roof</a>
                    <a href='#'>Solar Panels</a>
                </Menu>
                <RightMenu>
                    <a href='#'>Shop</a>
                    <a href='#'>Account</a>
                    <CustomMenu onClick={()=>setBurgerStatus(true)}>
                        Menu
                    </CustomMenu>
                </RightMenu>
                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={()=>setBurgerStatus(false)}/>
                    </CloseWrapper>
                    <li><a href='#'>Model S</a></li>
                    <li><a href='#'>Model 3</a></li>
                    <li><a href='#'>Model X</a></li>
                    <li><a href='#'>Model Y</a></li>
                    <li><a href='#'>Solar Roof</a></li>
                    <li><a href='#'>Solar Panels</a></li>
                    <li><a href='#'>Existing Inventory</a></li>
                    <li><a href='#'>Used Inventory</a></li>
                    <li><a href='#'>Trade-In</a></li>
                    <li><a href='#'>Test Drive</a></li>
                    <li><a href='#'>Powerwall</a></li>
                    <li><a href='#'>Commercial Energy</a></li>
                    <li><a href='#'>Utilities</a></li>
                    <li><a href='#'>Charging</a></li>
                    <li><a href='#'>Find Us</a></li>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>Investor Relations</a></li>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>Account</a></li>
                </BurgerNav>
            </Nav>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    display: block;
    min-height: 100px;
    position: fixed;
    align-items: center;
    left: 0;
    right: 0;
    z-index: 1;
`

const Info = styled.div`
    display: flex;
    min-height: 50px;
    background-color: white;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    cursor: pointer;
    a {
        text-decoration: underline;
    }
`

const Nav = styled.div`
    display: flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    cursor: pointer;
    a {
        font-weight: bold;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display:none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    a {
        font-weight: bold;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`

const CustomMenu = styled.div`
    font-weight: bold;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 2;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.4s ease-in-out;
    li {
        padding: 15px 0;
        a {
            font-weight: bold;
        }
    }
`
const CustomClose = styled(CloseIcon)`

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`