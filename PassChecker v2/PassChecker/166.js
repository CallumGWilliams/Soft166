function Clear()
{
  document.getElementById("PasswordBox").value="";
}

var lightColour;

function switchLightOff(lightID)  //This function takes a light ID number.  It then switches the given light on or off.
{
  var lightCommand = {"on": false}; //this creates a string of  { "on" : false }
  var lightURI = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + lightID + "/state/";

  $.ajax({
    url: lightURI,  //calls function getLightURI (see below) and passes the required light ID
    type: "PUT",
    data: JSON.stringify(lightCommand)  //translates contents of lightCommand variable into jSON code
  })
}


function switchLightOn(lightID, lightColour) {
  var lightCommand = {"on": true, "hue":(lightColour), "bri":250}; //replace 25500 with the different colours?
  var lightURI = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + lightID + "/state/";

  console.log(lightCommand);
  console.log(lightURI);

  $.ajax({
    url: lightURI,
    type: "PUT",
    data: JSON.stringify(lightCommand)
  })

}

function Start(lightID, lightColour) {
  var tempPassword = document.getElementById("PasswordBox").value;
  var passStrength;
  var baseScore;
  var passScore = 0;

  if (tempPassword.length < 5) {
    passStrength = poor;
  } else {
    baseScore = 100
  }

  var passLength = tempPassword.length - 5;

  if (passLength < 2) {
    passScore = passScore + 100;
  }
  if (passLength > 2 && passLength < 6) {
    passScore = passScore + 200;
  }
  if (passLength > 6) {
    passScore = passScore + 350;
  }


  passScore = passScore + baseScore;

  if (tempPassword.match(/[0-9]/g)) {
    passScore = passScore + 100
  }
  if (tempPassword.match(/[A-Z]/g)) {
    passScore = passScore + 100
  }


  if (tempPassword.match(/[!"£$%^&*]/g)) {
    passScore = passScore + 200
  }

  var strengthMeter = document.getElementById("strengthMeter");
  strengthMeter.value = passScore;



  if (passScore < 400) {
    alert("Password strength is weak");
    switchLightOff(1);
    switchLightOff(2);
    switchLightOff(4);
    switchLightOff(5);
    switchLightOn(3, lightColour=0);
    switchLightOn(6, lightColour=0);




  }
  if (passScore >= 400 && passScore < 800) {
    alert("Password strength is average");
    switchLightOff(1);
    switchLightOff(4);
    switchLightOn(3,lightColour=8000);
    switchLightOn(6, lightColour=8000);
    switchLightOn(2, lightColour=8000);
    switchLightOn(5, lightColour=8000);


  }


  if (passScore >= 800) {
    alert("Password strength is strong");
    switchLightOn(1,lightColour=25500);
    switchLightOn(2, lightColour=25500);
    switchLightOn(3, lightColour=25500);
    switchLightOn(4,lightColour=25500);
    switchLightOn(5,lightColour=25500);
    switchLightOn(6,lightColour=25500);

  }
  }










