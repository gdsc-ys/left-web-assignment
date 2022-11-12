import * as React from 'react'
import PlanComponent from './planComponent'

type detailType = Array<[string, boolean]>

type planDictType = {
  [key: string]: detailType
}

type BoxContainerProps = {
  planList: Array<string>
  planColor: { [key: string]: string }
  planDetail: planDictType
  handleModalUp: (value: boolean) => void
  handlePlanForModal: (value: string) => void
}

export default function BoxContainer({
  planList,
  planColor,
  planDetail,
  handleModalUp,
  handlePlanForModal,
}: BoxContainerProps) {
  if (planList.length === 0) {
    return <div></div>
  }
  return (
    <div className="container">
      <div className="first-line">
        {planList.slice(0, 4).map((plan) => {
          const curColor = planColor[plan]
          const curDetail = planDetail[plan]
          return (
            <PlanComponent
              plan={plan}
              headColor={curColor}
              detail={curDetail}
              handleModalUp={handleModalUp}
              handlePlanForModal={handlePlanForModal}
            />
          )
        })}
      </div>
      <div className="second-line">
        {planList.slice(4, 8).map((plan) => {
          const curColor = planColor[plan]
          const curDetail = planDetail[plan]
          return (
            <PlanComponent
              plan={plan}
              headColor={curColor}
              detail={curDetail}
              handleModalUp={handleModalUp}
              handlePlanForModal={handlePlanForModal}
            />
          )
        })}
      </div>
    </div>
  )
}
