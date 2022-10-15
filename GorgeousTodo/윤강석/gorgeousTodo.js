const addButton = document.querySelector('.add-button')
const deleteButton = document.querySelector('.delete-button')
const motherContainer = document.querySelector('#container')
const todoBoxList = document.querySelectorAll('.todo-box-container')
const modalBack = document.querySelector('.modal-back')
const modalContent = document.querySelector('.modal-content')

const myStorage = window.localStorage

let planDictionary = {
  Project: [
    ['javascript', false],
    ['carrot1', false],
    ['carrot2', false],
  ],
}

let planHeadColor = {
  Project: 'red',
}

const headerList = document.querySelectorAll('.todo-header')
headerList.forEach((li) => {
  const id = li.innerText
  li.style.color = planHeadColor[id]
})

function clickPlan(id, planName, checkButton) {
  const currentList = planDictionary[id]
  for (let li of currentList) {
    if (li[0] == planName) {
      checkButton.checked = !li[1]
      li[1] = !li[1]
      console.log(planDictionary)
      return 0
    }
  }
}

function openModal(id) {
  const planList = planDictionary[id]
  const modalHead = document.querySelector('#modal-head-text')
  const modalBack = document.querySelector('.modal-back')
  const checkContainer = document.querySelector('#check-container')
  modalBack.style.top = '0%'
  modalHead.innerText = id
  checkContainer.innerHTML = ''
  planList.forEach((plan) => {
    const [planName, planDone] = plan
    const planSentence = document.createElement('p')
    modalHead.style.color = planHeadColor[id]
    planSentence.className = 'todo-sentence'
    planSentence.innerText = planName
    const planCheck = document.createElement('input')
    planCheck.className = 'plan-check-button'
    planCheck.type = 'checkbox'
    planCheck.checked = planDone
    planCheck.addEventListener('click', () => {
      clickPlan(id, planName, planCheck)
    })
    const planBox = document.createElement('p')
    planBox.className = 'planBox'
    planBox.append(planCheck)
    planBox.append(planSentence)
    checkContainer.append(planBox)
  })
}

function closeModal() {
  const modalBack = document.querySelector('.modal-back')
  console.log('여기 오긴 했음')
  modalBack.style.top = '100%'
}

function stopCapturing() {
  return 0
}

todoBoxList.forEach((box) => {
  const boxId = box.getAttribute('id')
  box.addEventListener('click', () => {
    openModal(boxId)
  })
})

modalBack.addEventListener('click', (e) => {
  if (e.target == e.currentTarget) {
    closeModal()
  }
})
