import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

const sessionIdValue = uuidv4();

export function UserLoginComponent(props) {
    let {alias, setAlias, sessionId, isAliasInLocalStorage, setSessionId} = props;
    const [open, setOpen] = useState(true);

    const isEmpty = (str) =>  {
        return (!str || str.length === 0);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleContinue = () => {
        console.log(sessionIdValue, alias)
        if (!isEmpty(alias)) {
            setSessionId(sessionIdValue)
            localStorage.setItem('alias', alias);
            localStorage.setItem('sessionId', sessionIdValue)
            setOpen(false);
        }
    }

    const handleClose = () => {
        setOpen(true);
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
                        onChange={e => setAlias(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleContinue}>Continue</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}