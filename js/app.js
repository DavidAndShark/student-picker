/*-------------------------------- Constants --------------------------------*/

const students = [
  { studentName: 'Alyssa', loc: 'Tampa', squad: '', ghUser: 'cactuspie23' },
  { studentName: 'Amanda', loc: 'BOS', squad: '', ghUser: 'shakestuffup73' },
  { studentName: 'Ana', loc: 'BOS', squad: '', ghUser: 'AWeidenkopf' },
  { studentName: 'Anchi', loc: 'BOS', squad: '', ghUser: 'chenannchi' },
  { studentName: 'Andrew', loc: 'ATX', squad: '', ghUser: 'Metranohm' },
  { studentName: 'Ashlee', loc: 'HOU', squad: '', ghUser: 'flytexas1989' },
  { studentName: 'Bren', loc: 'LIT', squad: '', ghUser: 'bsnobles' },
  { studentName: 'Carol', loc: 'NYC', squad: '', ghUser: 'kangcarol' },
  { studentName: 'Carolina', loc: 'HOU', squad: '', ghUser: 'creyes25' },
  { studentName: 'Chris E', loc: 'BOS', squad: '', ghUser: 'chriselliott97' },
  { studentName: 'Chris M', loc: 'MEM', squad: '', ghUser: 'cmthecoder' },
  { studentName: 'Chris S', loc: 'NYC', squad: '', ghUser: 'chrsteffen1' },
  { studentName: 'Damian', loc: 'NYC', squad: '', ghUser: 'dabyzness' },
  { studentName: 'David', loc: 'LA', squad: '', ghUser: 'IPREM1ERI' },
  { studentName: 'Ebba', loc: 'CHI', squad: '', ghUser: 'EbbaSchmid' },
  { studentName: 'Eduardo', loc: 'CHI', squad: '', ghUser: 'edumana' },
  { studentName: 'Eric', loc: 'VA', squad: '', ghUser: 'EricSokolowski' },
  { studentName: 'George', loc: 'ATL', squad: '', ghUser: 'geopan1521' },
  { studentName: 'Greg', loc: 'NYC', squad: '', ghUser: 'gfou20' },
  { studentName: 'James', loc: 'CHI', squad: '', ghUser: 'jhudson357' },
  { studentName: 'Jenn', loc: 'ATL', squad: '', ghUser: 'J3NNog1' },
  { studentName: 'Jess', loc: 'NJ', squad: '', ghUser: 'jlandis320' },
  { studentName: 'Jesse', loc: 'Reno', squad: '', ghUser: 'Jesse-Nicolas' },
  { studentName: 'Jessica', loc: 'CHI', squad: '', ghUser: 'jessykim' },
  { studentName: 'John', loc: 'BOS', squad: '', ghUser: 'JJK70' },
  { studentName: 'Julian', loc: 'MIA', squad: '', ghUser: 'julianboyne11' },
  { studentName: 'Karen', loc: 'ATL', squad: '', ghUser: 'kayfernander2022' },
  { studentName: 'Kristin', loc: 'HOU', squad: '', ghUser: 'KristinKanuch' },
  { studentName: 'Lauren', loc: 'Charlotte', squad: '', ghUser: 'laurenhatchett' },
  { studentName: 'Ledio', loc: 'NYC', squad: '', ghUser: 'LedioDylgjeri' },
  { studentName: 'Leon', loc: 'HOU', squad: '', ghUser: 'Ljchu87' },
  { studentName: 'Lily', loc: 'NYC', squad: '', ghUser: 'lilyshowlader' },
  { studentName: 'Lindsay', loc: 'ATX', squad: '', ghUser: 'lucky-feather' },
  { studentName: 'Luigi', loc: 'NYC', squad: '', ghUser: 'KnucklesLT' },
  { studentName: 'Maddie', loc: 'CBUS', squad: '', ghUser: 'mbstevenson96' },
  { studentName: 'Malcolm', loc: 'NYC', squad: '', ghUser: 'novascasgeorge' },
  { studentName: 'Marcus', loc: 'PHI', squad: '', ghUser: 'hymanrcus' },
  { studentName: 'Mariah', loc: 'MIA', squad: '', ghUser: 'Primemerlinian' },
  { studentName: 'Mike', loc: 'ATX', squad: '', ghUser: 'hieptrinh96' },
  { studentName: 'Mohamed', loc: 'WDB', squad: '', ghUser: 'MohamedO95' },
  { studentName: 'Nate', loc: 'BOS', squad: '', ghUser: 'NateMorgan' },
  { studentName: 'Naveen', loc: 'DAL', squad: '', ghUser: 'mrunlockedtech-odin' },
  { studentName: 'Patrick', loc: 'SA', squad: '', ghUser: 'thepika206' },
  { studentName: 'Rachel', loc: 'DAL', squad: '', ghUser: 'racssett' },
  { studentName: 'Rinhard', loc: 'ATL', squad: '', ghUser: 'reinhardts1' },
  { studentName: 'Ryan', loc: 'DFW', squad: '', ghUser: 'Rcombest' },
  { studentName: 'Samir', loc: 'EC', squad: '', ghUser: 'samirhannag' },
  { studentName: 'Shaniya', loc: 'DAL', squad: '', ghUser: 'shaniyadenson' },
  { studentName: 'Steph', loc: 'NJ', squad: '', ghUser: 'smichaelonline' },
  { studentName: 'Suleyma', loc: 'CHI', squad: '', ghUser: 'Suley01' },
  { studentName: 'Tal', loc: 'BOS', squad: '', ghUser: 'trimoni' },
  { studentName: 'Tia', loc: 'FL', squad: '', ghUser: 'tiamaureen' },
  { studentName: 'Tiffany', loc: 'DET', squad: '', ghUser: 'tiffanymorningstar' },
  { studentName: 'Zain', loc: 'NYC', squad: '', ghUser: 'Zain23456' },
  { studentName: 'Zeus', loc: 'DET', squad: '', ghUser: 'zgildo01' },
]
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
