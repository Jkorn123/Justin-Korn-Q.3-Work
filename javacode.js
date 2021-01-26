div = document.getElementById("div");

function buttonClick () {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  console.log(fname, lname);

  myJSON = {
    'firstName': fname,
    'lastName': lname,
  }
  strData2 = localStorage.getItem("fname/lname");
  data = JSON.parse(strData2);
  // Create array to store JSON objects
  data.push(myJSON);
  strData = JSON.stringify(data);
  localStorage.setItem("fname/lname", strData);

  console.log(localStorage);
  console.log(myJSON);
  console.log(data);

  if (myJSON['firstName'] == 'justin' || 'Justin') {
    div.innerHTML = "\n";
    div.innerHTML += "\t\t<h1>That's me!</h1>\n"
    div.innerHTML += "\t\t<img src='picture.jpg' />\n"
    div.innerHTML += "\t\t<p>" + myJSON['firstName'] + " " + myJSON['lastName'] + "</p>\n";
  } else {
    div.innerHTML = "\n";
    div.innerHTML += "\t\t<p>That's not me!<p>";
  }

}

div2 = document.getElementById("div2");

function buttonClick2 () {
  var justin = document.getElementById('justin');
  var bryan = document.getElementById('bryan');
  myJSON = {
    'justin': 'Justin',
    'bryan': 'Bryan',
    'justinCheck': justin.checked,
    'bryanCheck': bryan.checked,
  }

  if (myJSON['justinCheck']) {
    div2.innerHTML = "\n";
    div2.innerHTML += "\t\t<h1>That's also me!</h1>\n"
    div2.innerHTML += "\t\t<img src='picture.jpg' />\n"
    div2.innerHTML += "\t\t<p>" + myJSON['justin'] + " " + 'Korn' + "</p>\n";
  } else if (myJSON['bryanCheck']) {
    div2.innerHTML = "\n";
    div2.innerHTML += "\t\t<h1>That's not me!</h1>\n"
    div2.innerHTML += "\t\t<img src='Bryan.png' />\n"
    div2.innerHTML += "\t\t<p>" + myJSON['bryan'] + " " + 'Korn' + "</p>\n";
  } else {
    div2.innerHTML = "\n";
    div2.innerHTML += "\t\t<p>You didn't select a name!</p>\n";
  }
}

// Test code for local Storage.
//div3 = document.getElementById("div3");
//function userPass() {
//  var uname = document.getElementById('uname').value;
//  var pword = document.getElementById('pword').value;
//  var unamedata = localStorage.getItem("uname")
//  if (unamedata != "") {

//    div3.innerHTML = "\n";
//    document.getElementById("div3").innerHTML += localStorage.getItem("username");
//    document.getElementById("div3").innerHTML += localStorage.getItem("password");
//  } else {
//    document.getElementById("div3").innerHTML = "browser does not support storage";
//  }
//}
