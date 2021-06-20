import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const FristComponent = () => {
  const classes = useStyles();
  const context = useContext(MyContext);

  const handleMonthChange = (event) => {
    context.setMonth(event.target.value);
    const pricePerGb = context.pricesPlan.find(
      (item) => item.duration_months == context.month
    );
    context.currentPrice(Number(pricePerGb.price_usd_per_gb));
  };
  const handleGbChange = (event) => {
    context.setGb(event.target.value);
  };
  const handleUpPay = () => {
    context.setUpPay(!context.upPay);
  };

  return (
    <>
      <div>
        <FormControl className={classes.formControl}>
          <Select
            value={context.month}
            onChange={handleMonthChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
          <FormHelperText>Duration(Month)</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <Select
            value={context.gb}
            onChange={handleGbChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
          <FormHelperText>Amount of gigabytes in a cloud</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControlLabel
          control={
            <IOSSwitch
              checked={context.upPay}
              onChange={handleUpPay}
              name="checkedB"
            />
          }
          label="Upfront Payment"
        />
      </div>
    </>
  );
};

export default FristComponent;
