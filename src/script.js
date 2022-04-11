const daysElement = document.getElementById("daysLeft")
const hoursElement = document.getElementById("hoursLeft")
const minutesElement = document.getElementById("minutesLeft")
const secondsElement = document.getElementById("secondsLeft")

function calculateTime() {
  const today = new Date().getTime()
  const endDate = new Date("7 nov, 2022 12:00:00").getTime()
  const difference = endDate - today

  const daysLeft = Math.floor((difference / 1000) / (3600*24))
  const hoursLeft = Math.floor(((difference / 1000) % (3600*24)) / 3600)
  const minutesLeft = Math.floor(((difference / 1000) % 3600) / 60)
  const secondsLeft = Math.floor((difference / 1000) % 60)

  daysElement.textContent = daysLeft
  hoursElement.textContent = hoursLeft
  minutesElement.textContent = minutesLeft
  secondsElement.textContent = secondsLeft

  setTimeout(calculateTime, 1000)
}

calculateTime()