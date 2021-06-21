import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import styled from "styled-components";

const Div = styled.div`
  p {
    font-family: cursive;
    margin: 0px 10px;
  }
  .secondP {
    margin-top: -20px;
  }
  span {
    border: 1px solid black;
    border-radius: 10px;
  }
`;

const Assume = () => {
  const context = useContext(MyContext);

  return (
    <>
      {context.upPay ? (
        <Div>
          <span>
            <p>{`${context.gb} Gigabytes for ${context.month} month`}</p>
            <br />
            <p className="secondP">
              {`Total price: ${
                context.gb * context.price - context.gb * context.price * 0.1
              } $`}
            </p>
          </span>
        </Div>
      ) : (
        <Div>
          <span>
            <p>{`${context.gb} Gigabytes for ${context.month} month`}</p>
            <br />
            <p className="secondP">
              {`Total price: ${context.gb * context.price} $`}
            </p>
          </span>
        </Div>
      )}
    </>
  );
};

export default Assume;
