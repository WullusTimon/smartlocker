let getDOMElements = () => {
    getSmartlockerAPI()
}

const getSmartlockerAPI = function () {
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

const showSmartlocker = function (json) {

    let pageLocker = document.getElementById("js-page-lockerlanding")
    let pageLockerDetail = document.getElementById("js-page-lockerdetail")
    let pageLockerForm = document.getElementById("js-page-lockerform")

    if (pageLocker) {
        let locker = document.getElementById("js-locker")
        let lockerNietbeschikbaar = document.getElementById("js-lockerDisabled")

        let htmlString_locker = " "
        let htmlString_lockerNON = " "

        for (const item of json) {
            if (item.status == "locked") {
                htmlString_locker += `<a class="locker"  href="../pages/lockerDetail.html?id=${item.lockeruuid}">
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
            else {
                htmlString_lockerNON += `<a class="lockerDisabled" href="../pages/lockerDetail.html?id=${item.lockeruuid}">
                                        <div class="lockerInfo statusDiv">
                                        <div>
                                            <h3>${item.displayname}</h3>
                                            <p class="geriefText">${item.materials}</p>
                                        </div>
                                        <p class="geriefText condition">${item.status}</p>
                                        </div>
                                        <img class="lockerImg" src="../assets/img/locker1.png" alt="foto van een locker">
                            
                                    </a>`
            }

        }
        locker.innerHTML = htmlString_locker
        lockerNietbeschikbaar.innerHTML = htmlString_lockerNON
    }
    if (pageLockerDetail) {
        const queryString = window.location.search;
        const lst = queryString.split("=");
        console.log(lst[1])
        for (const item of json) {
            if (item.lockeruuid == lst[1]) {
                let lockerType = document.querySelector(".jsType")
                let lockerLocation = document.querySelector(".jsLocatie")
                let lockerName = document.getElementById("js-displayname")
                let lockerButton = document.getElementById("js-button")
                let lockerRapporteer = document.getElementById("openReportPopup")

                console.log(item.status)
                if (item.status == "maintenance" || item.status == "unlocked"){
                    lockerButton.classList.remove("blueButton")
                    lockerButton.classList.add("greyButton")

                    lockerRapporteer.classList.remove("redButton")
                    lockerRapporteer.classList.add("greyButton")
                }

                lockerButton.href = `../pages/form.html?id=${item.lockeruuid}`
                lockerType.innerHTML = item.materials
                lockerLocation.innerHTML = item.location
                lockerName.innerHTML = item.displayname
            }
        }
    }
    if (pageLockerForm) {
        const queryString = window.location.search;
        const lst = queryString.split("=");
        console.log(lst[1])
        console.log("form page")
    }
}


document.addEventListener('DOMContentLoaded', function () {
    getDOMElements();
});