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