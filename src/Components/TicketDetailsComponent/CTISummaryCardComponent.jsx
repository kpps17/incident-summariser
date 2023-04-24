import React from "react";
import {Card, CardContent, Typography} from "@mui/material";

export function CTISummaryCardComponent(props) {
    let {ActiveTicket, ResolvedTicket} = props;

    return (
        <Card sx={{ minWidth: 30 }} variant="outlined">
            <CardContent>
                <Typography sx={{ mb: 0.3 }} color="text.primary">
                    {`Active Tickets: ${ActiveTicket}`}
                </Typography>
                <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    {`Resolved Tickets: ${ResolvedTicket}`}
                </Typography>
            </CardContent>
        </Card>
    )
}