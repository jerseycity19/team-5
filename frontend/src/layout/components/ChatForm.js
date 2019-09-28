import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import link from '../../link'

const useStyles = makeStyles(theme => ({
  textArea: {
    resize: 'none',
  },
  container: {
    width: 600,
    display: 'inline-grid',
    flexWrap: 'nowrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}))

export default function ChatForm () {
  const classes = useStyles()

  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [story, setStory] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')


  const handleSubmit = async () => {
    const response = await fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        story,
        city,
        state,
      }),
    })
  }

  return (
    <div>
      <hr/>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="First Name"
          className={classes.textField}
          onChange={(e) => setFirst(e.target.value)}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Last Name"
          className={classes.textField}
          onChange={(e) => setLast(e.target.value)}
          margin="normal"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Story"
          multiline
          rows="4"
          onChange={(e) => setStory(e.target.value)}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="City"
          className={classes.textField}
          onChange={(e) => setCity(e.target.value)}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="State"
          className={classes.textField}
          onChange={(e) => setState(e.target.value)}
          margin="normal"
        />
        <br></br>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  )
}
