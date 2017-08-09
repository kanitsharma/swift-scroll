let scrollamount = 0
let panelcounter = 0
let wait = false
const well = document.getElementById('well')
well.style.transform = 'translateY(0)'
const panels = [...document.querySelectorAll('.panel')]
well.addEventListener('wheel', e => {
  if (e.deltaY < 0 && panelcounter > 0 && wait === false) {
    wait = true
    scrollamount += 100
    panelcounter--
    well.style.transform = `translateY(${scrollamount}vh)`
    setTimeout(function () {
      wait = false
    }, 1000)
  }
  if (e.deltaY > 0 && panelcounter < panels.length - 1 && wait === false) {
    wait = true
    scrollamount -= 100
    panelcounter++
    well.style.transform = `translateY(${scrollamount}vh)`
    setTimeout(function () {
      wait = false
    }, 1000)
  }
  setTimeout(() => {}, 1000)
})
