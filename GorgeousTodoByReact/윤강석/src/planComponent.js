export default function PlanComponent({
  plan,
  headColor,
  detail,
  handleModalUp,
  handlePlanForModal,
}) {
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
