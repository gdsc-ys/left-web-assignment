import { useState } from 'react'

export default function Modal({
  planForModal,
  planColor,
  planDetail,
  modalUp,
  handleModalUp,
  handlePlanDetail,
}) {
  const [newPlan, handleNewPlan] = useState('')
  const headColor = planColor[planForModal]
  const curDetail = planDetail[planForModal]
  return (
    <div
      className="modal-back"
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          handleModalUp(false)
        }
      }}
      style={{ top: modalUp ? '0%' : '100%' }}
    >
      <div className="modal-content">
        <div className="modal-head" style={{ backgroundColor: headColor }}>
          <h1 className="modal-head-text">{planForModal}</h1>
        </div>
        <div
          className="check-container"
          style={{
            display: Object.keys(planColor).length == 0 ? 'none' : 'block',
          }}
        >
          {curDetail?.map((details) => {
            const [detail, state] = details
            return (
              <p>
                <input
                  type="checkbox"
                  className="plan-check-button"
                  checked={state}
                  onClick={(e) => {
                    e.preventDefault()
                    details[1] = !details[1]
                    handlePlanDetail(planDetail)
                    handleNewPlan('')
                  }}
                ></input>
                <p className="todo-sentence">{detail}</p>
              </p>
            )
          })}
        </div>
        <div className="add-button-box">
          <button className="add-more-tasks"></button>
          <label
            htmlFor="add-more-tasks"
            className="add-more-tasks-label"
            onClick={() => {
              curDetail.push([newPlan, false])
              handlePlanDetail(planDetail)
              handleNewPlan('')
            }}
          >
            +
          </label>
          <input
            type="text"
            className="add-plan"
            value={newPlan}
            onChange={(e) => {
              handleNewPlan(e.target.value)
            }}
            placeholder="add new plan"
          ></input>
        </div>
      </div>
    </div>
  )
}
