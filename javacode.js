checkName = document.getElementById("check");
selectFood = document.getElementById("checkBox");
userName = document.getElementById("name");

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
  var oldData = JSON.parse(localStorage.getItem('data'));
  oldData.push(myJSON);
  localStorage.setItem('data', JSON.stringify(oldData));
  console.log(localStorage);
  console.log(oldData);
  var x = oldData[oldData.length -2];
  f = x['firstName'];
  l = x['lastName']
  console.log(x)
  userName.innerHTML = "\n";
  userName.innerHTML += "\t\t<p>" + "Your previous entry was:" +
  " " + f + " " + l + "</p>\n";
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
  //Checks which of the boxes have been checked by the user and will display certain
  //messages depending on their input.
  selectFood.innerHTML = "\n";
  if (myJSON['pizzaCheck']) {
    selectFood.innerHTML += "\t\t<p>You must like pizza!</p>";
  } if (myJSON['chipsCheck']) {
    selectFood.innerHTML += "\t\t<p>You must like chips!</p>";
  } if (myJSON['hamburgerCheck']) {
    selectFood.innerHTML += "\t\t<p>You must like hamburgers!<p>";
  } if (!(myJSON['pizzaCheck']) && !(myJSON['chipsCheck']) && !(myJSON['hamburgerCheck'])) {
    selectFood.innerHTML += "\t\t<p>You must hate snacks!<p>";
  }
}
