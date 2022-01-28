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
    console.log('disabled')
    window.location.href = "../pages/lockers.html";
  }
}