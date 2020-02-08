var db = firebase.firestore();

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

var listJourney = document.getElementById("journey-item")
db.collection("journeys").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // div class = "media-body" >
        //     <
        //     h4 > Rusizi / Mushaka - Musanze < /h4> <
        //     p > 9 / 2 / 2020 at 10: 00 am < /p> <
        //     p > 5000 rwf - 5 sits < /p> <
        //     /div>

        /**  <div class="media">
                                    <div class="media-left align-self-center">
                                        <img class="rounded-circle" src="img/cololla_image_for_item.png">
                                    </div>

                                    <div class="media-right align-self-center">
                                        <a href="#" class="btn btn-default">Join journey</a>
                                    </div>
                                </div> */

        var divMedia = document.createElement("div");
        var divImg = document.createElement("div");
        var divBtn = document.createElement("div");
        var btnJon = document.createElement("a");
        var imgCar = document.createElement("img");
        //For image icon
        imgCar.src = "img/cololla_image_for_item.png";
        divImg.classList.add("media-left");
        divImg.classList.add("align-self-center");
        divImg.appendChild(imgCar);
        //For join link

        divBtn.classList.add("media-right");
        divBtn.classList.add("align-self-center");
        btnJon.classList.add("btn");
        btnJon.classList.add("btn-default");
        btnJon.href = "join.html";
        btnJon.innerHTML = "Join journey";
        divBtn.appendChild(btnJon);

        //For data
        var div = document.createElement("div");

        div.classList.add("media-body");
        var h4 = document.createElement("h4");
        var pDate = document.createElement("p");
        var pPrice = document.createElement("p");
        h4.innerHTML = doc.data().journeyFrom + "/" + doc.data().departurePoint + "-" + doc.data().journeyTo;
        pDate.innerHTML = doc.data().dateToGo + " at " + doc.data().timeToGO;
        pPrice.innerHTML = doc.data().journeyPrice + "RWF - " + doc.data().numberOfSits + " sits";

        div.appendChild(h4);
        div.appendChild(pDate);
        div.appendChild(pPrice);


        divMedia.classList.add("media");
        divMedia.appendChild(divImg);
        divMedia.appendChild(div);
        divMedia.appendChild(divBtn);
        listJourney.appendChild(divMedia);
    });
});