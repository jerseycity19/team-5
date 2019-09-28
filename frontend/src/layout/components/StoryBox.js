import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: "10px 10px"
    },
}));

export default function StoryBox(props) {
    const classes = useStyles();
    return <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
            {props.story.firstName} {props.story.lastName}
        </Typography>
        <Typography component="p">
            {props.story.content}
        </Typography>
    </Paper>
}