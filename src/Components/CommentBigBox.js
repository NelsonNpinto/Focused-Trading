import { TextField, Typography } from '@mui/material'
import React from 'react'

const CommentBigBox = () => {
  return (
    <>
      <Typography sx={{}}>Add Comment:</Typography>
      <TextField
        sx={{ width: "100%" }}
        id="filled-multiline-static"
        multiline
        placeholder="Add comments here.."
        rows={6}
      />
    </>
  )
}

export default CommentBigBox
