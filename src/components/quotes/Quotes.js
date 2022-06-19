import styled from "styled-components";
import { string } from "prop-types";

export const Quotes = ({ quote, speaker }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <button>Next Quote</button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    speaker: string
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