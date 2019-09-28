import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import link from '../../link'
import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: "10px 10px"
    },
}));

export default function StoryBox(props) {
    const classes = useStyles();
    // console.log('hey', props.story)
    // return <div className="yeet">
    //     <div>
    //     <img src={require()}/>
    //     {props.story.firstName} {props.story.lastName}</div>
    //     <p>{props.story.content}</p>
    // </div>
    return <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
            {props.story.firstName} {props.story.lastName}
        </Typography>
        <Typography component="p">
            {props.story.content}
        </Typography>
    </Paper>
}