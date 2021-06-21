import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ThirdComponent = () => {
  const classes = useStyles();
  const context = useContext(MyContext);

  const onChangeAction = () => {
    context.setChecked(!context.checked);
  };

  const emailHandler = (e) => {
    context.setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!context.CVC || !context.expiry || !context.name || !context.number) {
      return alert("Provide correct payment data");
    } else if (
      !context.email ||
      !context.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    ) {
      return alert("Provide correct user email");
    } else if (!context.checked) {
      return alert("Read the Terms and conditions");
    }
    context.setStatus("Sending...");
    let data = {
      payment: {
        card_holder: context.name,
        cvc: context.cvc,
        expiry: context.expiry,
        number: context.number,
      },
      totalPrice: context.upPay
        ? context.gb * context.price - context.gb * context.price * 0.1
        : context.gb * context.price,
      userEmail: context.email,
      month: context.month,
      gb: context.gb,
    };
    await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    context.setStatus("Send");
    alert("Done");
  };

  return (
    <>
      {context.upPay ? (
        <span>
          {` Your choise is ${context.gb} Gigabytes for ${context.month} 
         month and Your total cost is:
          ${context.gb * context.price - context.gb * context.price * 0.1} $`}
          <p>{`Price per GB of your subscription - ${context.price} $`}</p>
        </span>
      ) : (
        <span>
          {` Your choise is ${context.gb} Gigabytes for ${context.month} 
         month and Your total cost is:
          ${context.gb * context.price} $`}
          <p>{`Price per GB of your subscription - ${context.price} $`}</p>
        </span>
      )}
      <label>
        Your email:
        <input
          type="text"
          name="email"
          value={context.email}
          onChange={emailHandler}
        ></input>
      </label>

      <label>
        Terms and Conditions:
        <input
          type="checkbox"
          checked={context.checked}
          onChange={onChangeAction}
        />
      </label>

      <form onSubmit={handleSubmit}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          type="submit"
        >
          {context.status}
        </Button>
      </form>
    </>
  );
};

export default ThirdComponent;
