import { Grid } from '@mui/material'
import { Divider } from '../../UI/Divider/Divider'
import { HeaderText } from '../../UI/HeaderText/HeaderText'
import { CardItem } from '../CardItem/CardItem'

export function MyList(props) {
  const { data, completeActivity } = props

  return (
    <>
      <HeaderText text="Ideas in my list" />

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        gap="20px"
        marginTop="30px"
        style={{ overflowX: 'auto', flexWrap: 'nowrap' }}
      >
        {!data.length ? (
          <h3 style={{ margin: 'auto' }}>No added activities</h3>
        ) : (
          data.map((el, index) => (
            <div key={index}>
              <CardItem
                activity={el.activity}
                type={el.type}
                index={index}
                click={() => completeActivity(el, index)}
              />
            </div>
          ))
        )}
      </Grid>
      <Divider />
    </>
  )
}
