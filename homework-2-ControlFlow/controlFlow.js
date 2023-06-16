// ---Prima parte---

/*
let calculImp;
let capacitCilind = prompt("Introduceti capacitatea cilindrica");

if (capacitCilind <= 1600) {
  calculImp = Math.floor(capacitCilind * (8 / 200));
  alert("Impozitul dumneavoastra este de " + calculImp + " lei");
} 
else if (1601 <= capacitCilind && capacitCilind <= 2000) {
  calculImp = Math.floor(capacitCilind * (22 / 200));
  alert("Impozitul dumneavoastra este de " + calculImp + " lei");
} 
else if (2001 <= capacitCilind && capacitCilind <= 2600) {
  calculImp = Math.floor(capacitCilind * (85 / 200));
  alert("Impozitul dumneavoastra este de " + calculImp + " lei");
} 
else if (2601 <= capacitCilind && capacitCilind <= 3000) {
  calculImp = Math.floor(capacitCilind * (171 / 200));
  alert("Impozitul dumneavoastra este de " + calculImp + " lei");
} 
else {
  calculImp = Math.floor(capacitCilind * (345 / 200));
  alert("Impozitul dumneavoastra este de " + calculImp + " lei");
}
*/

// ---A doua parte BONUS---

const tipVehicul = prompt("Introduceti tipul de vehicul");
let capacitCilind;

switch (tipVehicul) {
  case "motocicleta": {
    capacitCilind = prompt("Introduceti capacitatea cilindrica");

    if (!isNaN(capacitCilind)) {
      if (capacitCilind <= 1600) {
        calculImp = Math.floor(capacitCilind * (8 / 200));
        alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      } else {
        calculImp = Math.floor(capacitCilind * (9 / 200));
        alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      }
      break;
    }
    alert("Capacitatea cilindrica trebuie sa fie un numar !");
    break;
  }

  case "autoturism": {
    capacitCilind = prompt("Introduceti capacitatea cilindrica");

    if (!isNaN(capacitCilind)) {
      if (capacitCilind <= 1600) {
        calculImp = Math.floor(capacitCilind * (8 / 200));
        alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      } else if (1601 <= capacitCilind && capacitCilind <= 2000) {
        calculImp = Math.floor(capacitCilind * (22 / 200));
        alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      } else if (2001 <= capacitCilind && capacitCilind <= 2600) {
        calculImp = Math.floor(capacitCilind * (85 / 200));
        alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      } else if (2601 <= capacitCilind && capacitCilind <= 3000) {
        calculImp = Math.floor(capacitCilind * (171 / 200));
        alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      } else {
        calculImp = Math.floor(capacitCilind * (345 / 200));
        alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      }
      break;
    }
    alert("Capacitatea cilindrica trebuie sa fie un numar !");
    break;
  }

  case "autobuz":
  case "autocar":
  case "microbuz": {
    capacitCilind = prompt("Introduceti capacitatea cilindrica");
    if (!isNaN(capacitCilind)) {
      calculImp = Math.floor(capacitCilind * (28 / 200));
      alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      break;
    }
    alert("Capacitatea cilindrica trebuie sa fie un numar !");
    break;
  }

  case "camion":
  case "tir": {
    capacitCilind = prompt("Introduceti capacitatea cilindrica");
    if (!isNaN(capacitCilind)) {
      calculImp = Math.floor(capacitCilind * (34 / 200));
      alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      break;
    }
    alert("Capacitatea cilindrica trebuie sa fie un numar !");
    break;
  }

  case "tractor": {
    capacitCilind = prompt("Introduceti capacitatea cilindrica");
    if (!isNaN(capacitCilind)) {
      calculImp = Math.floor(capacitCilind * (22 / 200));
      alert("Impozitul dumneavoastra este de " + calculImp + " lei");
      break;
    }
    alert("Capacitatea cilindrica trebuie sa fie un numar !");
    break;
  }
  default: {
    alert("Nu exista acest autovehicul !");
  }
}
