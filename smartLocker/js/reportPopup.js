{
  // report popup

  const openReportButton = document.querySelectorAll('[data-report-target]')
  const closeReportButton = document.querySelectorAll('[data-closereport-target]')
  const overlay = document.getElementById('overlay')
  const yesReport = document.querySelectorAll('[data-reportyes-target]')

  yesReport.forEach(button => {
    button.addEventListener('click', (e) => {
      pushToDisable()
    })
  })

  openReportButton.forEach(button => {
    button.addEventListener('click', (e) => {
      const popupReport = document.querySelector(button.dataset.reportTarget)
      e.preventDefault();
      openReport(popupReport)
    })
  })

  closeReportButton.forEach(button => {
    button.addEventListener('click', (e) => {
      const popupReport = button.closest('.popupReport')
      e.preventDefault();
      closeReport(popupReport)
    })
  })

  const openReport = (popupReport) => {
    if (popupReport == null) return
    popupReport.classList.add('active')
    overlay.classList.add('active')

    console.log("open report popup")
  }

  const closeReport = (popupReport) => {
    if (popupReport == null) return
    popupReport.classList.remove('active')
    overlay.classList.remove('active')
    console.log("close report popup")
  }

  const pushToDisable = () => {
    let pageLevel2 = document.getElementById("lockerlevel2")
    let pageLevel1 = document.getElementById("js-page-lockerdetail")

    if (pageLevel1){
      LevelReport("1")
    }
    else{
      LevelReport("2")
    }
    console.log('disabled')
    
    window.location.href = "../pages/lockers.html";
  }
  const LevelReport = (level) => {
      const queryString = window.location.search;
      const lst = queryString.split("=");
      console.log(lst[1])

      var xhr = new XMLHttpRequest();
      xhr.open("POST", `https://smartlockerg3.azurewebsites.net/api/locker/${lst[1]}/report/${level}`);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send()
  }
}