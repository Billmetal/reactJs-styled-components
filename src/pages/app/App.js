import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import kerriganImage from "../../images/kerr02.png";
import { Quotes } from "../../components";
import { getQuote } from "../../service";
import { sounds } from "../../sounds";

let i = 1;

function index(len) { 
    if (i === (len - 1)) {
        i = -1;
    }
    i++;
    return i;
}

export function App() { 
    let isMounted = useRef(true);

    const [quoteState, setQuoteState] = useState({ quote: "loading quote ...", speaker: "loading speaker ..." });

    /** API return
     * my api return is a array (Ex: [{ quote: "ok", speaker: "Speaker" }]) 
     * I needed to create a function "index(len)" that received a param with the array lenght and
     * changing the index using the variable "i" on each button click.
     * **/
    const onUpdate = async () => { 
        const quote = await getQuote();
        if (isMounted.current) {
            let v = index(quote.length);
            let audio = new Audio(sounds[v]);
            setQuoteState(quote[v]);
            audio.play();
        }
    };

    useEffect(() => { 
        onUpdate();
    },[]);

    return (
        <Content>
            <Quotes {...quoteState} onUpdate={onUpdate} />
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
    width: 400px;
    height: 700px;
    align-self: flex-end;
`;