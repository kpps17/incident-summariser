import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

export function UserLoginComponent(props) {
    let {alias, setAlias} = props;
    const [open, setOpen] = useState(true);

    const isEmpty = (str) =>  {
        return (!str || str.length === 0);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleContinue = () => {
        if (!isEmpty(alias)) {
            handleClose();
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Welcome to Incident Insight</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To use this tool please provide your alias
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Alias"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => setAlias(e.target.value.trim())}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleContinue}>Continue</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}