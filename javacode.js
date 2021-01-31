userName = document.getElementById("name");
checkName = document.getElementById("check");
selectFood = document.getElementById("checkBox");

function enterName () {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  console.log(fname, lname);

  myJSON = {
    'firstName': fname,
    'lastName': lname,
  }
  //Checks if there is any data b/c you can't get data if there is no data!
  //Creates a list for all the data that will be entered.
  if(localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]');
  }

  //Gets the last entered data from the previous session.
  //Currently a work in progress.


  var oldData = JSON.parse(localStorage.getItem('data'));
  oldData.push(myJSON);
  localStorage.setItem('data', JSON.stringify(oldData));
  console.log(localStorage);

}

function selectName () {
  var justin = document.getElementById('justin');
  var bryan = document.getElementById('bryan');
  var bobby = document.getElementById('bobby');
  myJSON = {
    'justin': 'Justin',
    'bryan': 'Bryan',
    'bobby': 'Bobby',
    'wanya': 'Wanya',
    'justinCheck': justin.checked,
    'bryanCheck': bryan.checked,
    'bobbyCheck': bobby.checked,
  }

  checkName.innerHTML = "\n";
  if (myJSON['justinCheck']) {
    checkName.innerHTML += "\t\t<h1>That's me!</h1>\n"
    checkName.innerHTML += "\t\t<img src='picture.jpg' />\n"
    checkName.innerHTML += "\t\t<p>" + myJSON['justin'] + " " + 'Korn' + "</p>\n";
  } else if (myJSON['bryanCheck']) {
    checkName.innerHTML += "\t\t<h1>That's my brother!</h1>\n"
    checkName.innerHTML += "\t\t<img src='Bryan.png' />\n"
    checkName.innerHTML += "\t\t<p>" + myJSON['bryan'] + " " + 'Korn' + "</p>\n";
  } else if (myJSON['bobbyCheck']) {
    checkName.innerHTML += "\t\t<h1>That's my dad!</h1>"
  } else {
    checkName.innerHTML += "\t\t<p>You didn't select a name!</p>\n";
  }
}

// Still a work in progress. Trying to check multiple boxes at once and getting
// multiple data points. Currently only works with one.
function getFood() {
  var pizza = document.getElementById('pizza');
  var chips = document.getElementById('chips');
  var hamburger = document.getElementById('hamburger');
  myJSON = {
    'pizzaCheck': pizza.checked,
    'chipsCheck': chips.checked,
    'hamburgerCheck': hamburger.checked,
  }
  console.log(myJSON)
  selectFood.innerHTML = "\n";
  if (myJSON['pizzaCheck'] == true) {
    selectFood.innerHTML += "\t\t<p>You must like pizza!</p>";
  } else if (myJSON['chipsCheck'] == true) {
    selectFood.innerHTML += "\t\t<p>You must like chips!</p>";
  } else if (myJSON['hamburgerCheck'] == true) {
    selectFood.innerHTML += "\t\t<p>You must like hamburgers!<p>";
  } else {
    selectFood.innerHTML += "\t\t<p>You must hate snacks!<p>";
  }
}
