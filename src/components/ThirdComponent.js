import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const ThirdComponent = () => {

    const classes = useStyles();
  const context = useContext(MyContext);

  const onChangeAction = () =>{
      console.log(context.checked)
      context.setChecked(!context.checked)
  }

   const handleSubmit = () =>{
       console.log('yep')
   }

  return (
    <>
      <span>
        {` Your choise is ${context.gb} Gigabytes for ${context.month} 
         month and Your total cost is:
          ${context.gb * context.price - context.gb * context.price * 0.1} $`}
          <p>{`Price per GB of your subscription - ${context.price} $`}</p>
      </span>
      <label>
         Your email:
      <input type="text" name="email"></input>
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
        Send
      </Button>
</form>
    </>
  );
};

export default ThirdComponent;
