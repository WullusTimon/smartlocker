{
  // verifieer pop-up

  const openPopupButton = document.getElementById('openPopup');
  const closePopupButton = document.getElementById('closePopup');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay')


  openPopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup()
  })

  closePopupButton.addEventListener('click', () => {
    closePopup()
  })

  const openPopup = () => {
    console.log("open")
    popup.classList.add('active')
    overlay.classList.add('active')
  }

  const closePopup = () => {
    console.log("close")
    popup.classList.remove('active')
    overlay.classList.remove('active')
  }
}