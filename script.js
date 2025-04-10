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

  function toggleDropdown() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block"; 
    }
}


window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function toggleDropdown() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block"; 
    }
}

function showContent(option) {
    var content = document.getElementById("extraContent");
    var infoText = document.getElementById("infoText");

   
    content.style.display = "block";

    
    if (option === 'option1') {
        infoText.innerHTML = "Du hast Noah gewählt. Weitere Informationen zu Noah.";
    } else if (option === 'option2') {
        infoText.innerHTML = "Du hast Lara gewählt. Weitere Informationen zu Lara.";
    } else if (option === 'option3') {
        infoText.innerHTML = "Du hast Paula gewählt. Weitere Informationen zu Paula.";
    }

    
    document.getElementById("dropdownMenu").style.display = "none";
}

function toggleDropdown() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block"; 
    }
}


function showContent(option) {
    var content = document.getElementById("extraContent");
    var infoText = document.getElementById("infoText");

   
    content.style.display = "block";

   
    if (option === 'option1') {
        infoText.innerHTML = "Du hast Noah gewählt. Weitere Informationen zu Noah.";
    } else if (option === 'option2') {
        infoText.innerHTML = "Du hast Lara gewählt. Weitere Informationen zu Lara.";
    } else if (option === 'option3') {
        infoText.innerHTML = "Du hast Paula gewählt. Weitere Informationen zu Paula.";  
    } else if (option === 'option4'){
        infoText.innerHTML = "du hast Mama gewählt. Weitere Informationen zu Mama.";
    } else if (option === 'option5'){
        infoText.innerHTML = "du hast Papa gewählt. Weitere Informationen zu Papa.";
    }

  
    document.getElementById("dropdownMenu").style.display = "none";
}

function toggleDropdown() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block"; 
    }
}


window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function showInfo(name, beruf) {
    document.getElementById('infoName').innerText = 'Hallo ich bin ' + name;
    document.getElementById('infoBeruf').innerText = 'Infos zu mir: ' + beruf;
    document.getElementById('info').style.display = 'block'; 
}


function closeInfo() {
    document.getElementById('info').style.display = 'none'; 
}


    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === "block") {
                    openDropdown.style.display = "none";
                }
            }
        }
    }