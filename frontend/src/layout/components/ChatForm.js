import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useState, useEffect } from 'react'
import link from '../../link'
import StoryBox from './StoryBox'

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

export default function ChatForm() {
  const classes = useStyles()

  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [story, setStory] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [success, setSuccess] = useState(false)

  const [stories, setStories] = useState(null)

  useEffect(() => {
    load()
  }, [])

  const load = () => {
    fetch(link + '/story', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()).then(responseJSON => {
      let dog = responseJSON
      console.log(dog)
      setStories(responseJSON)
    })

  }

  const handleSubmit = async () => {
    const response = await fetch(link + '/story', {
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
        content: story,
      }),
    })
    const responseJSON = await response.json()
    console.log(responseJSON)
    if (responseJSON.success) {
      setSuccess(true)

      // This is inefficient but I don't care at this point
      load()
    }
  }

  return (
    <div>
      <hr />
      {stories &&
        <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
          {stories.map(x =>
            <Grid item xs={12} md={6}>
              <StoryBox story={x} />
            </Grid>,
          )}
        </Grid>
      }
      {success && <h3>Form was successfully created</h3>}
      <h2>Share Your Story!</h2>
      <p>Find your voice and use it to empower those around you.</p>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="First Name"
          className={classes.textField}
          onChange={(e) => setFirst(e.target.value)}
          value={firstName}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Last Name"
          className={classes.textField}
          onChange={(e) => setLast(e.target.value)}
          value={lastName}
          margin="normal"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Story"
          multiline
          rows="4"
          onChange={(e) => setStory(e.target.value)}
          className={classes.textField}
          value={story}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="City"
          className={classes.textField}
          onChange={(e) => setCity(e.target.value)}
          value={city}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="State"
          className={classes.textField}
          onChange={(e) => setState(e.target.value)}
          value={state}
          margin="normal"
        />
        <br></br>
        <Button variant="contained" color="primary" style={{ backgroundColor: '#60c4b6', marginBottom: '20px' }}
          onClick={() => handleSubmit(console.log('Help'))}>
          Submit
        </Button>
      </form>
    </div>
  )
}
