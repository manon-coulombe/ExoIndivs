function controle() {
  let year = document.getElementById("input").value;
  function isLeapYear(){
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
    }
    else
      if (year % 4 == 0) {
        return true;
      }
    }

  if (isLeapYear() == true) {
    alert("L'année " + year + " est bissextile");
  }
  else {
    alert("L'année " + year + " n'est pas bissextile");
  }
}
