import React from "react";
import styled, { css } from "styled-components";

const Jokes = styled.div`
  font-size: 54px;
  font-family: "Fjalla One", sans-serif;
  transition: all 1s;
`;

const Quote = props => {
  return (
    <Jokes>
      <i>
        <p>{props.joke}</p>
      </i>
    </Jokes>
  );
};

export default Quote;
