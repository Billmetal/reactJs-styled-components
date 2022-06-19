import styled from "styled-components";
import kerriganImage from "../../images/kerr02.png";
import { Quotes } from "../../components";

export function App() { 
    return (
        <Content>
            <Quotes quote={"Que frase hein"} speaker={"Speaker"}/>
            <KerrImge src={kerriganImage} alt="Kerrigan"/>
        </Content>
    );
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const KerrImge = styled.img`
    width: 25vw;
    height: 70vh;
    align-self: flex-end;
`;