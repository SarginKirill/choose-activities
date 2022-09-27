import { Container } from '@mui/system'
import './App.scss'
import { MyList } from './Components/MyList/MyList'
import { NewActivity } from './Components/NewActivity/NewActivity'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { DoneTable } from './Components/DoneTable/DoneTable'
import { ComletedTypes } from './Components/CompletedTypes/CompletedTypes'

function App() {
  const randomActivities = []

  const [myKeys, setMyKeys] = useState(
    JSON.parse(localStorage.getItem('myKeys')) || []
  )
  const [myActivities, setMyActivities] = useState(getMyActivities())
  const [data, setData] = useState([])
  const [activitiesCompleted, setActivitiesCompleted] = useState(
    JSON.parse(localStorage.getItem('completed')) || []
  )
  const [loading, setLoading] = useState(true)

  function getMyActivities() {
    const myActivities = []

    if (myKeys.length) {
      myKeys.forEach((key) => {
        const item = JSON.parse(localStorage.getItem(key))
        myActivities.push(item)
      })
    }

    return myActivities
  }

  async function getRandomActivities() {
    for (let i = 0; i < 4; i++) {
      const responce = await axios.get('http://www.boredapi.com/api/activity/')
      randomActivities.push(responce.data)
    }
  }

  async function dataGenerate() {
    await getRandomActivities()
    setData(randomActivities)
    setLoading(false)
  }

  useEffect(() => {
    dataGenerate()
  }, [])

  useEffect(() => {
    localStorage.removeItem('myKeys')
    localStorage.setItem('myKeys', JSON.stringify(myKeys))

    localStorage.removeItem('completed')
    localStorage.setItem('completed', JSON.stringify(activitiesCompleted))
  }, [addItemToMyList, completeActivity])

  async function addItemToMyList(item, index) {
    data.splice(index, 1)

    const responce = await axios.get('http://www.boredapi.com/api/activity/')

    localStorage.setItem(item.key, JSON.stringify(item))

    setMyKeys([...myKeys, item.key])
    setData([...data, responce.data])
    setMyActivities([...myActivities, item])
  }

  function completeActivity(item, index) {
    myActivities.splice(index, 1)
    myKeys.splice(myKeys.indexOf(item.key), 1)

    item.date = new Date().toLocaleDateString()

    setActivitiesCompleted([...activitiesCompleted, item])
    setMyActivities([...myActivities])
    setMyKeys([...myKeys])

    localStorage.removeItem(item.key)
  }

  return (
    <Container maxWidth="lg">
      <NewActivity
        data={data}
        loading={loading}
        addItemToMyList={addItemToMyList}
      />
      <MyList data={myActivities} completeActivity={completeActivity} />

      <ComletedTypes data={activitiesCompleted} />

      <DoneTable data={activitiesCompleted} />
    </Container>
  )
}

export default App
