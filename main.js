// Fecha objetivo (puede ser en formato ISO 8601 o una cadena en formato legible)
const targetDate = new Date('2023-12-15');

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  // Calcula los días, horas, minutos y segundos restantes
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Actualiza el elemento del contador en el HTML
  document.getElementById('countdown').innerHTML = `
    Faltan: ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

  // Actualiza el contador cada segundo
  setTimeout(updateCountdown, 1000);
}

// Inicia la actualización del contador
updateCountdown();





function whatsapp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;
    
    var url = "https://wa.me/525586788574?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Phone :* "+phone+"%0a"
    +"*Date :* "+date+"%0a"
    +"*Message :* "+message;
    
    window.open(url,'_blank').focus();
    }
