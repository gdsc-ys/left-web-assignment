type planComponentType = {
  plan: string
  headColor: string
  detail: Array<[string, boolean]>
  handleModalUp: (value: boolean) => void
  handlePlanForModal: (value: string) => void
}

export default function PlanComponent({
  plan,
  headColor,
  detail,
  handleModalUp,
  handlePlanForModal,
}: planComponentType) {
  return (
    <div
      className="todo-box-container"
      onClick={(e) => {
        handlePlanForModal(plan)
        handleModalUp(true)
      }}
    >
      <div className="todo-box">
        <div className="todo-text">
          <div className="todo-header" style={{ backgroundColor: headColor }}>
            {plan}
          </div>
          <div className="todo-container">
            {detail.map((tdsent) => {
              return <p>{tdsent[0]}</p>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
