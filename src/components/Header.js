import styled from 'styled-components';

const Header = () => {
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
                    <a href='#'>Menu</a>
                </RightMenu>
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
`

const Info = styled.div`
    display: flex;
    min-height: 50px;
    background-color: white;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;

    a {
        text-decoration: underline;
    }
`

const Nav = styled.div`
    display: flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: bold;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        font-weight: bold;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`

