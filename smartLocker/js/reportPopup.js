{
  // report popup

  const openReportButton = document.getElementById('openReportPopup')
  const closeReportButton = document.getElementById('closeReportPopup')
  const popupReport = document.getElementById('popupReport')
  const overlay = document.getElementById('overlay')

  openReportButton.addEventListener('click', (e) => {
    e.preventDefault();
    openReport()
  })

  closeReportButton.addEventListener('click', () => {
    closeReport()
  })

  const openReport = () => {
    console.log("open report popup")
    popupReport.classList.add('active')
    overlay.classList.add('active')
  }

  const closeReport = () => {
    console.log("close report popup")
    popupReport.classList.remove('active')
    overlay.classList.remove('active')
  }
}