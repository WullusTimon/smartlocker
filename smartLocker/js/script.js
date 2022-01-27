console.log("test   ")
let getDOMElements = () => {

    // form.email.input = document.querySelector(".js-form-email-input");
    // form.email.message = document.querySelector(".js-form-email-message");
    // form.email.field = document.querySelector(".js-form-email-field");
    
    // form.name.input = document.querySelector(".js-form-name-input");
    // form.name.message = document.querySelector(".js-form-name-message");
    // form.name.field = document.querySelector(".js-form-name-field");

    // form.submit = document.querySelector(".js-form-submit");


    // card.title = document.querySelector(".js-card__title");
    // card.desc = document.querySelector(".js-card__desc");
    // card.image = document.querySelector(".js-card__image");
    
    // card.button = document.querySelector(".js-button");
    // card.idgredients = document.querySelector(".js-ingredients")
    // console.log(card.button)
    
    getSmartlockerAPI()
}

const getSmartlockerAPI = function(){
	let url = `https://smartlockerg3.azurewebsites.net/api/lockers`;
	fetch(url)
		.then(req => {
			if (!req.ok) {
				console.error('Error with fetch');
			} else {
				return req.json();
			}
		})
		.then(json => {
			console.log(json);
            showSmartlocker(json)
		});
    
};

const showSmartlocker = function (json){
    let pageLocker = document.getElementById("js-page-lockerlanding")
    let pageLockerDetail = document.getElementById("js-page-lockerdetail")
    if(pageLocker)
    {
        let locker = document.getElementById("js-locker")
        let name = document.getElementById("js-Name")
        let material = document.getElementById("js-Materiaal")

        name.innerHTML = json[0].displayname
        material.innerHTML = json[0].materials

        let htmlString_locker = " "
        for(const item of json)
        {
            if(item.status == "maintenance"){
                htmlString_locker += `<a class="locker"  href="../pages/lockerDetail.html">
                                        <!-- <div class="locker"> -->
                                        <div class="lockerInfo">
                                            <h3 id="js-Name">${item.displayname}</h3>
                                            <p class="geriefText" id="js-Materiaal">${item.materials}</p>
                                        </div>
                                        <img class="lockerImg" src="../assets/img/locker1.png" alt="foto van een locker">
                                        <!-- </div> -->
                                    </a>
                                    `
            }
            
        }
        locker.innerHTML = htmlString_locker

    }
    if(pageLockerDetail)
    {
        let lockerType = document.querySelector(".jsType")
        let lockerLocation = document.querySelector(".jsLocatie")
        lockerType.innerHTML = json[0].materials
        lockerLocation.innerHTML = json[0].displayname
    }

    
    
    //console.log(json[0].materials)
}


document.addEventListener('DOMContentLoaded', function () {
    getDOMElements();

    // page.brew = document.querySelector(".js-page-brew");
    // page.landing = document.querySelector(".js-page-landing");

    // if (page.brew) {
        
    //     getCoffeeAPI();
    // }
    // if (page.landing) {
    //     enableListeners();
    // }
});