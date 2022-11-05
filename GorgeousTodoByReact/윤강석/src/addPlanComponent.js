import { useState } from 'react'

function addNewPlan(
  planList,
  planColor,
  planDetail,
  handlePlanList,
  handlePlanColor,
  handlePlanDetail,
  inputColor,
  inputValue,
) {
  console.log(handlePlanDetail)
  planList.push(inputValue)
  planColor[inputValue] = inputColor
  planDetail[inputValue] = []
  handlePlanList(planList)
  handlePlanColor(planColor)
  handlePlanDetail(planDetail)
}

export default function AddPlanComponent({
  planList,
  planColor,
  planDetail,
  handlePlanList,
  handlePlanColor,
  handleModalUp,
  handlePlanForModal,
  handlePlanDetail,
}) {
  const [inputColor, handleInputColor] = useState('#000000')
  const [inputValue, handleInputValue] = useState('')

  return (
    <div className="button-box">
      <input
        className="newbox-title-color"
        type="color"
        value={inputColor}
        onChange={(e) => {
          handleInputColor(e.target.value)
        }}
      ></input>
      <input
        className="newbox-title"
        placeholder="new title"
        value={inputValue}
        onChange={(e) => {
          handleInputValue(e.target.value)
        }}
      ></input>
      <button
        className="add-button"
        onClick={() => {
          addNewPlan(
            planList,
            planColor,
            planDetail,
            handlePlanList,
            handlePlanColor,
            handlePlanDetail,
            inputColor,
            inputValue,
          )
          handleModalUp(true)
          handlePlanForModal(inputValue)
          handleInputColor('#000000')
          handleInputValue('')
        }}
      >
        add
      </button>
    </div>
  )
}
