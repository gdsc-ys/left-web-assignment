import * as React from 'react'
import { useState } from 'react'

//dict = {key : [[detail1, state1],[detail2, state2], ... ]}

type detailType = Array<[string, boolean]>

type planDictType = {
  [key: string]: detailType
}

type ModalProps = {
  planForModal: string
  planColor: { [key: string]: string }
  planDetail: { [key: string]: detailType }
  modalUp: boolean
  handleModalUp: (value: boolean) => void
  handlePlanDetail: (value: planDictType) => void
}

function deepCopyDict(dict: planDictType): planDictType {
  const keylist = Object.keys(dict)
  const result: planDictType = {}
  for (let k of keylist) {
    const curList = dict[k]
    const subResult: detailType = []
    curList.forEach((comp) => {
      subResult.push([...comp])
    })
    result[k] = subResult
  }
  return result
}

export default function Modal({
  planForModal,
  planColor,
  planDetail,
  modalUp,
  handleModalUp,
  handlePlanDetail,
}: ModalProps) {
  const [newPlan, handleNewPlan] = useState('')
  const headColor = planColor[planForModal]
  const curPlanDetail = deepCopyDict(planDetail)
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
            display: Object.keys(planColor).length === 0 ? 'none' : 'block',
          }}
        >
          {curDetail?.map((details) => {
            const [detail, state] = details
            const curIndex = curDetail.indexOf(details)
            return (
              <p>
                <input
                  type="checkbox"
                  className="plan-check-button"
                  checked={state}
                  onClick={(e) => {
                    e.preventDefault()
                    const curDetailCopy = curPlanDetail[planForModal]
                    curDetailCopy[curIndex][1] = !state
                    handlePlanDetail(curPlanDetail)
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
