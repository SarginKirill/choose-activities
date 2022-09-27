import { Grid, Typography, Box } from '@mui/material'
import { Divider } from '../../UI/Divider/Divider'
import { HeaderText } from '../../UI/HeaderText/HeaderText'

export function ComletedTypes(props) {
  const { data } = props

  const allTypes = data.map((el) => el.type)

  const amountTypes = {}
  allTypes.forEach((el) => {
    amountTypes[el] = amountTypes[el] + 1 || 1
  })

  const completedTypes = Object.keys(amountTypes)

  return (
    <>
      <HeaderText text="Achievements" />
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '30px',
          marginTop: '40px',
          marginBottom: '80px',
          flexWrap: 'wrap',
        }}
      >
        {completedTypes.length ? (
          completedTypes.map((item, index) => (
            <Grid
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  border: '3px solid #1565c0',
                }}
              >
                <Typography variant="h4" component="div" color={'#1565c0'}>
                  {amountTypes[item]}
                </Typography>
              </Box>
              <Typography variant="h6" component="p">
                {item}
              </Typography>
            </Grid>
          ))
        ) : (
          <h3 style={{ margin: 'auto' }}>No completed activities</h3>
        )}
      </Grid>
      <Divider />
    </>
  )
}
