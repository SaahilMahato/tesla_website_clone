import styled from 'styled-components';

const Footer = () => {

    return (
        <Container>
            <a href='#'>Tesla &copy; 2021</a>
            <a href='#'>Privacy &amp; Legal</a>
            <a href='#'>Contact</a>
            <a href='#'>Careers</a>
            <a href='#'>News</a>
            <a href='#'>Engage</a>
            <a href='#'>Locations</a>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
    display: flex;
    min-height: 40px;
    padding: 0px 56em;
    font-size: 12px;
    font-weight: bold;
    justify-content: center;
    justify-content: space-between;
    left: 0;
    right: 0;
    bottom: 0;
    a {
        color: #696969;
    }
`