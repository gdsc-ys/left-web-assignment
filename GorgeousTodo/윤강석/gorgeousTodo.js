const addButton = document.querySelector('.add-button')
const deleteButton = document.querySelector('.delete-button')
const motherContainer = document.querySelector('#container')
const todoBoxList = document.querySelectorAll('.todo-box-container')
const modalBack = document.querySelector('.modal-back')
const modalContent = document.querySelector('.modal-content')
const addPlanButton = document.querySelector('#add-more-tasks-label')
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
  li.style.backgroundColor = planHeadColor[id]
})

function addPlanBox() {
  const newBoxTitleComp = document.querySelector('.newbox-title')
  const newBoxColorComp = document.querySelector('.newbox-title-color')
  const firstLine = document.querySelector('.first-line')
  const secondLine = document.querySelector('.second-line')
  const todoBoxContainer = document.createElement('div')
  const todoBox = document.createElement('div')
  const todoText = document.createElement('div')
  const todoHeader = document.createElement('div')
  const todoContainer = document.createElement('div')

  const newBoxTitle = newBoxTitleComp.value
  const newBoxColor = newBoxColorComp.value
  if (newBoxTitle === '') {
    alert('제목을 입력해주세요')
    return 0
  }
  planDictionary[newBoxTitle] = []
  planHeadColor[newBoxTitle] = newBoxColor
  todoBoxContainer.setAttribute('id', newBoxTitle)
  todoBoxContainer.setAttribute('class', 'todo-box-container')
  todoBox.setAttribute('class', 'todo-box')
  todoText.setAttribute('class', 'todo-text')
  todoHeader.setAttribute('class', 'todo-header')
  todoContainer.setAttribute('class', 'todo-container')
  todoBoxContainer.addEventListener('click', () => {
    openModal(newBoxTitle)
  })
  todoHeader.innerText = newBoxTitle
  todoHeader.style.backgroundColor = newBoxColor
  todoText.append(todoHeader)
  todoText.append(todoContainer)
  todoBox.append(todoText)
  todoBoxContainer.append(todoBox)
  if (Object.keys(planDictionary).length <= 4) {
    firstLine.append(todoBoxContainer)
    todoBoxContainer.style.top = `${
      30 * (Object.keys(planDictionary).length - 1)
    }px`
    todoBoxContainer.style.left = `${
      -50 * (Object.keys(planDictionary).length - 1)
    }px`
  } else {
    secondLine.append(todoBoxContainer)
    todoBoxContainer.style.top = `${
      30 * (Object.keys(planDictionary).length - 5)
    }px`
    todoBoxContainer.style.left = `${
      -50 * (Object.keys(planDictionary).length - 5)
    }px`
  }

  openModal(newBoxTitle)
  newBoxColorComp.value = '#FFFFFF'
  newBoxTitleComp.value = ''
}

function clickPlan(id, planName, checkButton) {
  const currentList = planDictionary[id]
  for (let li of currentList) {
    if (li[0] == planName) {
      checkButton.checked = !li[1]
      li[1] = !li[1]
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
  modalHead.style.backgroundColor = planHeadColor[id]
  checkContainer.innerHTML = ''
  planList.forEach((plan) => {
    const [planName, planDone] = plan
    const planSentence = document.createElement('p')
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
  modalBack.style.top = '100%'
}

function addPlan() {
  const currentPlanId = document.querySelector('#modal-head-text')
  const currentPlanList = planDictionary[currentPlanId.innerText]
  const planInput = document.querySelector('#add-plan')
  const currentTextToAdd = planInput.value
  const checkContainer = document.querySelector('#check-container')
  const containerToFind = document.querySelector('#' + currentPlanId.innerText)
  const todoContainer = containerToFind.querySelector('.todo-container')
  if (planInput.value == '') {
    alert('계획을 입력해주세요')
    return 0
  }
  currentPlanList.push([currentTextToAdd, false])
  const planSentence = document.createElement('p')
  planSentence.className = 'todo-sentence'
  planSentence.innerText = currentTextToAdd
  const planCheck = document.createElement('input')
  planCheck.className = 'plan-check-button'
  planCheck.type = 'checkbox'
  planCheck.checked = false
  planCheck.addEventListener('click', () => {
    clickPlan(currentPlanId, currentTextToAdd, planCheck)
  })
  const planBox = document.createElement('p')
  planBox.className = 'planBox'
  planBox.append(planCheck)
  planBox.append(planSentence)
  checkContainer.append(planBox)
  const planSentence2 = document.createElement('p')
  planSentence2.innerText = currentTextToAdd
  todoContainer.append(planSentence2)
  planInput.value = ''
}

addButton.addEventListener('click', () => {
  addPlanBox()
})

addPlanButton.addEventListener('click', () => {
  addPlan()
})

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
