{
  // verifieer pop-up

  const openPopupButton = document.getElementById('openPopup');
  const closePopupButton = document.getElementById('closePopup');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay')


  openPopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(checkValidation()){
      openPopup()
    }
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

  const checkValidation = () => {
    jsVoorNaam = document.getElementById("js-inputFName")
    jsNaam = document.getElementById("js-inputName")
    jsEmail = document.getElementById("js-inputEmail")
    jsPhoneNr = document.getElementById("js-inputPhone")
    
    console.log(jsVoorNaam.value.length)

    if (jsVoorNaam.value.length > 3){
      jsVoorNaam.classList.remove("inputField");
      jsVoorNaam.classList.add("inputFieldError");
      document.getElementById("js-FNameError").innerHTML = "Gelieve een geldige naam in te vullen"
    }

    if (jsNaam.value == ""){
      jsNaam.classList.remove("inputField")
      jsNaam.classList.add("inputFieldError")
      document.getElementById("js-NameError").innerHTML = "Gelieve een geldige naam in te vullen"
    }

    if (jsEmail.value == ""){
      jsEmail.classList.remove("inputField")
      jsEmail.classList.add("inputFieldError")
      document.getElementById("js-EmailError").innerHTML = "Gelieve een geldig email in te vullen"
    }

    if (jsPhoneNr.value == ""){
      jsPhoneNr.classList.remove("inputField")
      jsPhoneNr.classList.add("inputFieldError")
      document.getElementById("js-PhoneError").innerHTML = "Gelieve een geldig telefoonnummer in te vullen"
    }

    
    console.log("voornaam: ",jsVoorNaam.value," naam: ",jsNaam.value , " Email: ",jsEmail.value ," telefoon: ", jsPhoneNr.value)
    return false
  }
}
