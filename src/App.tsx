import React, { useState } from 'react'

import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'

const App = () => {

  let items = [
    'New York',
    'London',
    'Taipei',
    'San Francisco',
    'Tokyo',
    'Paris'
  ]

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />
      <div>
        { alertVisible && <Alert>
          Hello <span>World</span>!
        </Alert>}
      </div>
      <Button color='dark' onClick={() => setAlertVisible(true)} >
        Button
      </Button>
    </div>
  )
}

export default App
