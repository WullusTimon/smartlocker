{
  // verifieer pop-up

  const openPopupButton = document.getElementById('openPopup');
  const closePopupButton = document.getElementById('closePopup');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay')
  const verifyBtn = document.getElementById('js-btnsend')
  const sendAgain = document.querySelector(".sendAgain")

  sendAgain.addEventListener('click',()=>{
    sendCode()
  })

  verifyBtn.addEventListener('click', () => {
    jsVoorNaam = document.getElementById("js-inputFName")
    jsNaam = document.getElementById("js-inputName")
    jsEmail = document.getElementById("js-inputEmail")
    jsPhoneNr = document.getElementById("js-inputPhone")
    jsCode = document.getElementById('js-verify')

    var data = {
      firstname : jsVoorNaam.value,
      lastname : jsNaam.value,
      email: jsEmail.value,
      code: jsCode.value,
      phonenumber: jsPhoneNr.value
    };
    const queryString = window.location.search;
    const lst = queryString.split("=");
    var json = JSON.stringify(data);
    console.log(json)

    //POST request with body equal on data in JSON format
    fetch(`https://smartlockerg3.azurewebsites.net/api/locker/${lst[1]}/open`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      window.location.href = `../pages/lockerOpened.html?id=${lst[1]}`
    })
    .catch((error) => {
      let verifyWrong = document.getElementById("verifyWrong")
      verifyWrong.removeAttribute("hidden"); 
    });

  })

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
    sendCode()
    console.log("open")
    popup.classList.add('active')
    overlay.classList.add('active')
  }

  const sendCode = () => {
    jsEmail = document.getElementById("js-inputEmail")

    const queryString = window.location.search;
    const lst = queryString.split("=");
    console.log(lst[1])
    console.log(jsEmail.value)

    var data = {
      email: jsEmail.value
    };

    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", `https://smartlockerg3.azurewebsites.net/api/locker/${lst[1]}/generatecode`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
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
    let nameformat = /^[a-zA-Z ,.'-]+$/
    console.log(jsVoorNaam.value.length)
    let state = false

    if (!jsVoorNaam.value.match(nameformat) || jsVoorNaam.value.length < 3){
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

    if (!jsNaam.value.match(nameformat) || jsNaam.value.length < 3){
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
    let phoneFormat = /^0(\d){9}$/
    if (jsPhoneNr.value == "" || jsPhoneNr.value.length < 12||jsPhoneNr.value.match(phoneFormat)){
      jsPhoneNr.classList.remove("inputField")
      jsPhoneNr.classList.add("inputFieldError")
      document.getElementById("js-PhoneError").innerHTML = "Gelieve een geldig telefoonnummer in te vullen"
      state = false
    }
    else{
      if (state == true){
        state = true
      }else{
        state = false
        jsPhoneNr.classList.remove("inputFieldError")
        jsPhoneNr.classList.add("inputField")
        document.getElementById("js-PhoneError").innerHTML = ""
      }
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