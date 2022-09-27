import { Typography } from '@mui/material'

export function HeaderText(props) {
  return (
    <Typography variant="h5" sx={{ textAlign: 'center' }}>
      {props.text}
    </Typography>
  )
}
