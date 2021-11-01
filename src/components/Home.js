import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section 
                title='Model S' 
                desc1='Order Online For' 
                desc2='Touchless Delivery'
                backgroundImg = '/images/model-s.jpg'
                leftButtonText='custom order'
                rightButtonText='Existing Inventory'
            />
            <Section
                title='Model Y' 
                desc1='Order Online For' 
                desc2='Touchless Delivery'
                backgroundImg = '/images/model-y.jpg'
                leftButtonText='custom order'
                rightButtonText='Existing Inventory'
            />
            <Section 
                title='Model 3' 
                desc1='Order Online For' 
                desc2='Touchless Delivery'
                backgroundImg = '/images/model-3.jpg'
                leftButtonText='custom order'
                rightButtonText='Existing Inventory'
            />
            <Section
                title='Model X' 
                desc1='Order Online For' 
                desc2='Touchless Delivery'
                backgroundImg = '/images/model-x.jpg'
                leftButtonText='custom order'
                rightButtonText='Existing Inventory'
            />
            <Section
                title='Solar Panels' 
                desc1='Lowest Cost Solar Panels in America' 
                desc2=''
                backgroundImg = '/images/solar-panel.jpg'
                leftButtonText='order now'
                rightButtonText='learn more'
            />
            <Section
                title='Solar Roof' 
                desc1='Produce Clean Energy From Your Roof' 
                desc2=''
                backgroundImg = '/images/solar-roof.jpg'
                leftButtonText='order now'
                rightButtonText='learn more'
            />
            <Section
                title='Accessories' 
                desc1='' 
                desc2=''
                backgroundImg = '/images/accessories.jpg'
                leftButtonText='shop now'
                rightButtonText=''
            />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    height: 100vh;
`