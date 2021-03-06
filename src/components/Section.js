import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = (props) => {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <ItemText>
                <Fade bottom><h1>{props.title}</h1></Fade>
                <Fade bottom><p>{props.desc1} <a href=''><u>{props.desc2}</u></a></p></Fade>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <Fade left>
                        <LeftButton>
                            {props.leftButtonText}
                        </LeftButton>
                    </Fade>
                    <Fade right>
                        { props.rightButtonText &&
                        <RightButton>
                            {props.rightButtonText}
                        </RightButton>
                        }
                    </Fade>
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; // horizontal
    background-image: ${props => `url('${props.bgImage}')`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    p {
        color: #696969;
    }
    a {
        color: #696969;
    }
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 12px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`
