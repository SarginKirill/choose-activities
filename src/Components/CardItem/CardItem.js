import Card from '@mui/material/Card'
import { Typography } from '@mui/material'

export function CardItem(props) {
  const { activity, type } = props

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: '1',
        minHeight: '150px',
        minWidth: '250px',
        maxWidth: '250px',
        padding: '10px',
        marginBottom: '10px',
      }}
      onClick={props.click}
    >
      <Typography variant="h6" component="p">
        {activity}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {type}
      </Typography>
    </Card>
  )
}
