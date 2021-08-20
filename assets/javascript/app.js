
let currentDate = moment().format('dddd, MMMM Do')

document.getElementById('currentDay').textContent = currentDate

let presentHour = moment().hour()

let schedule = {
  'plan8': '',
  'plan9': '',
  'plan10': '',
  'plan11': '',
  'plan12': '',
  'plan13': '',
  'plan14': '',
  'plan15': '',
  'plan16': '',
  'plan17': ''
}

let workday = JSON.parse(localStorage.getItem('workday')) || schedule

const stringInteger = (timeString) => {
  switch (timeString) {
    case '8AM': return 8
    case '9AM': return 9
    case '10AM': return 10
    case '11AM': return 11
    case '12PM': return 12
    case '1PM': return 13
    case '2PM': return 14
    case '3PM': return 15
    case '4PM': return 16
    case '5PM': return 17
  }
}

for (let i = 8; i <= 17; i++) {
  let timeCounter = 'time' + i
  let timeString = document.getElementById(timeCounter).textContent
  let timeInteger = stringInteger(timeString)

  if (presentHour == timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('present')
  }
  else if (presentHour < timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('future')
  }
  else if (presentHour > timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('past')
  }

  let planCounter = "plan" + i
  document.getElementById(planCounter).textContent = workday[planCounter]
}


document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')) {

    let note = event.target.previousElementSibling.children[0].value

    let plan = event.target.previousElementSibling.children[0].id


    workday[plan] = note
    

    localStorage.setItem('workday', JSON.stringify(workday))

  }
})
