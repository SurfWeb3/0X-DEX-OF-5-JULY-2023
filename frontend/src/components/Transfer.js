import React from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';

export function Transfer({ transferTokens, tokenSymbol }) {
  return (
    <div>
      <h4>Transfer</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const to = formData.get("to");
          const amount = formData.get("amount");

          if (to && amount) {
            transferTokens(to, amount);
          }
        }}
      >
        <div className="form-group">
          <TextField
            id="input-with-icon-textfield"
            label={`Amount of ${tokenSymbol}`}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-group">
          <TextField
            id="input-with-icon-textfield"
            label='Recipient address'
            required
            fullWidth
            className="form-control"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-group" style={{marginTop: '24px'}}>
          <Button
            variant="contained"
            type="submit"
          >
            submit
          </Button>
        </div>
      </form>
    </div>
  );
}
