import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import Styles from "./payment/Styles";
import { Form, Field } from "react-final-form";
import Card from "./payment/Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./payment/cardUtils";

const SecondComponent = () => {
  const context = useContext(MyContext);

  const onSubmit = (values) => {
    context.setCVC(values.cvc);
    context.setExpiry(values.expiry);
    context.setName(values.name);
    context.setNumber(values.number);
  };
  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          active,
        }) => {
          return (
            <form onChange={handleSubmit}>
              <Card
                number={values.number || ""}
                name={values.name || ""}
                expiry={values.expiry || ""}
                cvc={values.cvc || ""}
                focused={active}
              />
              <div className="cardNumber_name">
                <div>
                  <Field
                    name="number"
                    component="input"
                    type="text"
                    pattern="[\d| ]{16,22}"
                    placeholder="Card Number"
                    format={formatCreditCardNumber}
                  />
                </div>
                <div>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="cardValid_cvc">
                <Field
                  name="expiry"
                  component="input"
                  type="text"
                  pattern="\d\d/\d\d"
                  placeholder="Valid Thru"
                  format={formatExpirationDate}
                />
                <Field
                  name="cvc"
                  component="input"
                  type="text"
                  pattern="\d{3,4}"
                  placeholder="CVC"
                  format={formatCVC}
                />
              </div>
              <div className="buttons">
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          );
        }}
      />
    </Styles>
  );
};

export default SecondComponent;
