div = document.getElementById("div");

function buttonClick () {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  console.log(fname, lname);
  div.innerHTML = "\n";
  div.innerHTML += "\t\t<h1>That's me!</h1>\n"
  div.innerHTML += "\t\t<img src='picture.jpg' />\n"
  div.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";
}

div2 = document.getElementById("div2");

function buttonClick2 () {
  var justin = document.getElementById('justin');
  var bryan = document.getElementById('bryan');

  if (justin.checked) {
    div2.innerHTML = "\n";
    div2.innerHTML += "\t\t<h1>That's also me!</h1>\n"
    div2.innerHTML += "\t\t<img src='picture.jpg' />\n"
    div2.innerHTML += "\t\t<p>" + 'Justin' + " " + 'Korn' + "</p>\n";
  } else if (bryan.checked) {
    div2.innerHTML = "\n";
    div2.innerHTML += "\t\t<h1>That's not me!</h1>\n"
    div2.innerHTML += "\t\t<img src='Bryan.png' />\n"
    div2.innerHTML += "\t\t<p>" + 'Bryan' + " " + 'Korn' + "</p>\n";
  }
}
