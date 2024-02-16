import './App.css'
import HeloUser from './GeretUser'
function App() {

  return (
    <>
      <HeloUser name="Zeeshan" message="Hi" color={{'color':'green'}}/>
      <HeloUser name="Arman" message="From" color={{'color':'red'}}/>
    </>
  )
}

export default App
