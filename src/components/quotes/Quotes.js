import styled from "styled-components";
import { string, func } from "prop-types";
import { Button } from "../../components/button/Button";

export const Quotes = ({ quote, speaker, onUpdate }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onClick={onUpdate} >Next Quote</Button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
};

const Wrapper = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
    color: white;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 45px;
`;