import logo from './logo.svg'
import './App.css'
import { useState, useRef, useEffect } from 'react'
import Header from './header.js'
import AddPlanComponent from './addPlanComponent.js'
import BoxContainer from './BoxContainer.js'
import Modal from './Modal.js'

function getStorage(storage, hpl, hpc, hpd) {
  if (storage.keys.includes('planList')) {
    hpl(JSON.parse(storage['planList']))
  }
  if (storage.keys.includes('planColor')) {
    hpc(JSON.stringify(storage['planColor']))
  }
  if (storage.keys.includes('planList')) {
    hpd(JSON.stringify(storage['planDetail']))
  }
}

function App() {
  /** list composed with plan title */
  const [planList, handlePlanList] = useState([])
  /** map, key : plan title, value : plan color*/

  const [planColor, handlePlanColor] = useState({})
  /** map key : plan title, value : plan detail, value = [detail, state] */
  const [planDetail, handlePlanDetail] = useState({})
  const [modalUp, handleModalUp] = useState(false)
  /** title to put on modal, executed when clicking the plan box*/
  const [planForModal, handlePlanForModal] = useState('')
  /** 
  const myStorage = useRef(window.localStorage)

  useEffect(
    getStorage(
      myStorage.current,
      handlePlanList,
      handlePlanColor,
      handlePlanDetail,
    ),
    [],
  )

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setObject('planList', planList)
      localStorage.setObject('planDetail', planDetail)
      localStorage.setObject('planColor', planColor)
    })
  }, [])
*/
  return (
    <div className="App">
      <Header />
      <AddPlanComponent
        planList={planList}
        planColor={planColor}
        planDetail={planDetail}
        handlePlanList={handlePlanList}
        handlePlanColor={handlePlanColor}
        handleModalUp={handleModalUp}
        handlePlanForModal={handlePlanForModal}
        handlePlanDetail={handlePlanDetail}
      />
      <BoxContainer
        planList={planList}
        planColor={planColor}
        planDetail={planDetail}
        handleModalUp={handleModalUp}
        handlePlanForModal={handlePlanForModal}
      />
      <Modal
        planForModal={planForModal}
        planColor={planColor}
        planDetail={planDetail}
        modalUp={modalUp}
        handleModalUp={handleModalUp}
        handlePlanDetail={handlePlanDetail}
      ></Modal>
    </div>
  )
}

export default App
