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
    location.reload();
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
    let state = false
    if (jsVoorNaam.value.length < 3){
      jsVoorNaam.classList.remove("inputField");
      jsVoorNaam.classList.add("inputFieldError");
      document.getElementById("js-FNameError").innerHTML = "Gelieve een geldige naam in te vullen"
      state = false
    }
    else{
      state = true
      jsVoorNaam.classList.remove("inputFieldError");
      jsVoorNaam.classList.add("inputField");
      document.getElementById("js-FNameError").innerHTML = ""
    }

    if (jsNaam.value.length < 3){
      jsNaam.classList.remove("inputField")
      jsNaam.classList.add("inputFieldError")
      document.getElementById("js-NameError").innerHTML = "Gelieve een geldige naam in te vullen"
      state = false
    }
    else{
      state = true
      jsNaam.classList.remove("inputFieldError")
      jsNaam.classList.add("inputField")
      document.getElementById("js-NameError").innerHTML = ""
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!jsEmail.value.match(mailformat)){
      jsEmail.classList.remove("inputField")
      jsEmail.classList.add("inputFieldError")
      document.getElementById("js-EmailError").innerHTML = "Gelieve een geldig email in te vullen"
      state = false
    }
    else{
      state = true
      jsEmail.classList.remove("inputFieldError")
      jsEmail.classList.add("inputField")
      document.getElementById("js-EmailError").innerHTML = ""
    }

    if (jsPhoneNr.value == ""){
      jsPhoneNr.classList.remove("inputField")
      jsPhoneNr.classList.add("inputFieldError")
      document.getElementById("js-PhoneError").innerHTML = "Gelieve een geldig telefoonnummer in te vullen"
      state = false
    }
    else{
      state = true
      jsPhoneNr.classList.remove("inputFieldError")
      jsPhoneNr.classList.add("inputField")
      document.getElementById("js-PhoneError").innerHTML = ""
    }
    console.log(state)
    if (state){
      resetErrors()
    }
    return state
  }
}

const resetErrors = () =>{
  jsVoorNaam = document.getElementById("js-inputFName")
  jsNaam = document.getElementById("js-inputName")
  jsEmail = document.getElementById("js-inputEmail")
  jsPhoneNr = document.getElementById("js-inputPhone")

  document.getElementById("js-FNameError").innerHTML = ""
  document.getElementById("js-NameError").innerHTML = ""
  document.getElementById("js-EmailError").innerHTML = ""
  document.getElementById("js-PhoneError").innerHTML = ""

  
  jsVoorNaam.classList.remove("inputFieldError");
  jsVoorNaam.classList.add("inputField");
  jsNaam.classList.remove("inputFieldError")
  jsNaam.classList.add("inputField")
  jsEmail.classList.remove("inputFieldError")
  jsEmail.classList.add("inputField")
  jsPhoneNr.classList.remove("inputFieldError")
  jsPhoneNr.classList.add("inputField")
}