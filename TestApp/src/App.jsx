import './App.css'
import { HeloUser, Amazoncards } from './GeretUser'
import { useState } from 'react'
import ToDo from './todo';
import AxiosPrac from './AxiosPrac';
function App() {
  // const oldPrice = ["4400", "3400", "5540", "7895"]
  // const newPrice = ["54530", "878", "89222", "4595"]
  // var [hrt, setHrt] = useState(false)
  // var heart = true;
  // const handleHrt = () => {
  //   setHrt(!hrt)
  // }
  // const [move, setMove] = useState({ 'red': 1, 'green': 1, 'pink': 1, 'orange': 1 })
  // const changeRed = () => {
  //   setMove((newMove) => {
  //     return (
  //       { ...newMove, red: newMove.red + 1 }
  //     );
  //   })
  // }
  // const  chandeGreen=()=>{
  //   setMove((greenMove)=>{
  //     return(
  //       {...greenMove,green:greenMove.green+1}
  //     )
  //   })
  // }


  return (
    <>
    <AxiosPrac/>
    {/* <ToDo/> */}
      {/* <HeloUser name="Zeeshan" message="Hi" color={{'color':'green'}}/>
      <HeloUser name="Arman" message="From" color={{'color':'red'}}/> */}

      {/* <Amazoncards title="Lopgotac Mx master" name="8000 pdi" imp="5 programable buttons" oldPrice={oldPrice} newPrice={newPrice} idx={1} />
      <Amazoncards title="Lopgotac Mx master" name="8000 pdi" imp="5 programable buttons" oldPrice={oldPrice} newPrice={newPrice} idx={2} />
      <Amazoncards title="Lopgotac Mx master" name="8000 pdi" imp="5 programable buttons" oldPrice={oldPrice} newPrice={newPrice} idx={3} />
      <Amazoncards title="Lopgotac Mx master" name="8000 pdi" imp="5 programable buttons" oldPrice={oldPrice} newPrice={newPrice} idx={4} /> */}
      {/* <h1 onClick={handleHrt}>
        {hrt? <i class="fa-regular fa-heart"></i>: <i class="fa-solid fa-heart"></i>}
       
      </h1> */}

      {/* <button onClick={changeRed} style={{ "background": "red" }}>{move.red}</button>
      <br /><br />
      <button onClick={chandeGreen} style={{ "background": "green" }}>{move.green}</button>
      <br /><br />
      <button style={{ "background": "pink" }}>{move.pink}</button>
      <br /><br />
      <button style={{ "background": "orange" }}>{move.orange}</button> */}
    </>
  )
}

export default App
