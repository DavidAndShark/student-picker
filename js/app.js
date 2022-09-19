import { students } from "../data/data.js"
import { confetti } from "./confetti.js"

/*-------------------------------- Constants --------------------------------*/

const locations = Object.keys(
  students.reduce(function (acc, { loc }) {
    acc[loc] = acc[loc] ? acc[loc]++ : 1
    return acc
  }, {})
)

/*-------------------------------- Variables --------------------------------*/

let first, filteredStudents

/*------------------------ Cached Element References ------------------------*/

const pickedList = document.getElementById('picked')
const selectEl = document.querySelector('select')
const pickBtn = document.getElementById('pick-btn')
const profile = document.getElementById('img')

/*----------------------------- Event Listeners -----------------------------*/

pickBtn.addEventListener('click', handlePickBtnClick)
selectEl.addEventListener('change', buildStudents)

/*-------------------------------- Functions --------------------------------*/

function handlePickBtnClick(evt) {
  if (filteredStudents.length) {
    let contestant = filteredStudents.splice(
      Math.floor(Math.random() * filteredStudents.length),
      1
    )[0]
    let li = document.createElement('li')
    li.innerHTML = `${contestant.studentName} (${contestant.loc})`
    if (first) {
      pickedList.firstElementChild.remove()
      pickedList.appendChild(li)
      first = false
    } else {
      pickedList.insertBefore(li, pickedList.firstElementChild)
    }
    confetti.start(1000)
    profile.setAttribute('src', `https://github.com/${contestant.ghUser}.png`)
    if (!filteredStudents.length) pickBtn.innerHTML = `That's all!<br />Reset?`
  } else {
    buildStudents()
  }
}

function buildStudents() {
  let selLoc = selectEl.value
  filteredStudents =
    selLoc === 'ALL'
      ? students.slice()
      : students.filter(student => student.loc.includes(`${selLoc}`))
  pickedList.innerHTML = "<li>Who's First?</li>"
  first = true
  profile.setAttribute('src', '')
  pickBtn.innerHTML = `Next<br>Contestant!`
}

function init() {
  locations.forEach(function (loc) {
    selectEl.innerHTML += `<option value="${loc}">${loc}</option>`
  })
  buildStudents()
}

init()
