function myFunction() {
    document.getElementById("demo").innerHTML = "Tschüss";
  }

  function Ampelrot() {
    const ampel = document.getElementById("myImage");
  ampel.src = "ampelaufrot21422869.webp";
  ampel.classList.add("blink");
  setTimeout(() => ampel.classList.remove("blink"), 1800);
    document.getElementById("myImage").src="ampelaufrot21422869.webp";
    
  }

  function Ampelgrün(){
    const ampel = document.getElementById("myImage");
    ampel.src = "ampelaufgruen.webp";
    ampel.classList.add("blink");
    setTimeout(() => ampel.classList.remove("blink"), 1800);
    document.getElementById("myImage").src="grüne-ampel-43233625.webp";
  }

  function Porsche(){
    document.getElementById("Auto").src="Porsche-911.webp";
  }

  function Lamborghini(){
    document.getElementById("Auto").src="Lamborghini-Aventador-SVJ.webp";
  }

  function changeCarAuto(src) {
    const car = document.getElementById("Auto");
    car.classList.add("slide-in");
  
    setTimeout(() => {
      car.src = src;
      car.classList.remove("slide-in");
    }, 300);
  }
  
  function Porsche() {
    changeCarAuto("Porsche-911.webp");
  }
  
  function Lamborghini() {
    changeCarAuto("Lamborghini-Aventador-SVJ.webp");
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  function updateDateTime() {
    const now = new Date(); 
  
    const day = now.getDate().toString().padStart(2, '0'); 
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear(); 
  
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    const seconds = now.getSeconds().toString().padStart(2, '0'); 
  
    const dateTimeString = `Datum: ${day}.${month}.${year} | Uhrzeit: ${hours}:${minutes}:${seconds}`;
  
    document.getElementById("dateTime").innerText = dateTimeString;
  }
  
  setInterval(updateDateTime, 1000);

  function addItem() {
    var newItem = document.getElementById("newItem").value.trim(); 
    if (newItem !== "") {  
        var ul = document.getElementById("einkaufsliste");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newItem));  
        ul.appendChild(li);  
        document.getElementById("newItem").value = "";  
    } else {
        alert("Bitte gib ein Element ein!");  
    }
}
  
function saveList() {
  var ul = document.getElementById("einkaufsliste");
  var items = Array.from(ul.getElementsByTagName("li")).map(function(item) {
      return item.textContent;
  });
  localStorage.setItem("einkaufsliste", JSON.stringify(items));
}

function loadList() {
  var storedItems = JSON.parse(localStorage.getItem("einkaufsliste"));
  if (storedItems) {
      var ul = document.getElementById("einkaufsliste");
      storedItems.forEach(function(itemText) {
          var li = document.createElement("li");
          li.textContent = itemText;
          ul.appendChild(li);
      });
  }
}

window.onload = loadList;

function deleteItem(event) {
  var li = event.target;
  li.parentNode.removeChild(li);
}

function clearList() {
  var ul = document.getElementById("einkaufsliste");
  ul.innerHTML = "";  
}

function checkAnswers() {
  const answer1 = document.getElementById('question1').value.trim().toLowerCase();
  const result = document.getElementById('quizResult');
  
  if (answer1 === 'paris') {
    result.innerText = 'Richtig!';
  } else {
    result.innerText = 'Falsch! Die richtige Antwort ist Paris.';
  }
}

const secret = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  if (guess === secret) {
    document.getElementById('result').innerText = "Richtig geraten! 🎉";
  } else {
    document.getElementById('result').innerText = "Leider falsch, versuch's nochmal!";
  }
}

function markDate() {
  const date = document.getElementById('dateInput').value;
  if (date) {
    const ul = document.getElementById('markedDates');
    const li = document.createElement('li');
    li.textContent = "Markiert: " + date;
    ul.appendChild(li);
  }
}

const zielDatum = new Date("July 20, 2025 00:00:00").getTime();

function updateCountdown() {
  const jetzt = new Date().getTime();
  const abstand = zielDatum - jetzt;

  if (abstand < 0) {
    document.getElementById("countdown").innerHTML = "🎉 Die Sommerferien haben begonnen!";
    return;
  }

  const tage = Math.floor(abstand / (1000 * 60 * 60 * 24));
  const stunden = Math.floor((abstand % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minuten = Math.floor((abstand % (1000 * 60 * 60)) / (1000 * 60));
  const sekunden = Math.floor((abstand % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = tage;
  document.getElementById("hours").textContent = stunden;
  document.getElementById("minutes").textContent = minuten;
  document.getElementById("seconds").textContent = sekunden;
}

setInterval(updateCountdown, 1000);
updateCountdown();

let hunger = 100;
let happiness = 100;
let petImage = document.getElementById("pet");
let message = document.getElementById("message");

function updateStatus() {
    document.getElementById("pet-hunger").innerText = `Hunger: ${hunger}`;
    document.getElementById("pet-happiness").innerText = `Glück: ${happiness}`;
}


function feedPet() {
    if (hunger < 100) {
        hunger += 10;
        message.innerText = "Yummy! Dein Haustier ist jetzt weniger hungrig!";
    } else {
        message.innerText = "Das Haustier ist schon satt!";
    }

    if (happiness < 100) {
        happiness += 5;
    }

    updateStatus();
    animatePet("feed");
}

function playWithPet() {
    if (happiness < 100) {
        happiness += 10;
        message.innerText = "Es hat Spaß gemacht! Dein Haustier ist jetzt glücklicher!";
    } else {
        message.innerText = "Dein Haustier ist schon sehr glücklich!";
    }

    if (hunger > 0) {
        hunger -= 5;
    }

    updateStatus();
    animatePet("play");
}

function animatePet(action) {
    if (action === "feed") {
        petImage.style.transform = "scale(1.1)";
        setTimeout(() => petImage.style.transform = "scale(1)", 300);
    } else if (action === "play") {
        petImage.style.transform = "scale(1.2)";
        setTimeout(() => petImage.style.transform = "scale(1)", 300);
    }
}

document.getElementById("feed-button").addEventListener("click", feedPet);
document.getElementById("play-button").addEventListener("click", playWithPet);

updateStatus();

function updateAvatar() {
  const skin = document.getElementById("skinSelect").value;
  const eyes = document.getElementById("eyeSelect").value;
  const clothes = document.getElementById("clothesSelect").value;

  document.getElementById("head").style.backgroundColor = skin;
  document.getElementById("eyes").textContent = eyes;
  document.getElementById("clothes").textContent = clothes;
}



