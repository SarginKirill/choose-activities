import { HeaderText } from '../../UI/HeaderText/HeaderText'
import Grid from '@mui/material/Grid'
import { CardItem } from '../CardItem/CardItem'
import { Divider } from '../../UI/Divider/Divider'
import { Loader } from '../../UI/Loader/Loader'

export function NewActivity(props) {
  const { data, loading, addItemToMyList } = props

  return (
    <>
      <Grid
        container
        sx={{ marginTop: '90px' }}
        direction="row"
        justifyContent="center"
      >
        <HeaderText text="Choose fresh ideas to do" />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        gap="20px"
        marginTop="30px"
      >
        {loading ? (
          <Loader />
        ) : (
          data.map((el, index) => (
            <CardItem
              activity={el.activity}
              type={el.type}
              key={index}
              index={index}
              click={() => addItemToMyList(el, index)}
            />
          ))
        )}
      </Grid>
      <Divider />
    </>
  )
}
