function Clear()
{
  document.getElementById("PasswordBox").value="";
}

function Start() {
  var tempPassword = document.getElementById("PasswordBox").value;
  var passStrength;
  var baseScore;
  var passScore = 0;

  var Numbers = /[0-9]/g;
  var numNumbers = 0;

  var upperCase = /[A-Z]/g;
  var numUpper = 0;

  var lowerCase = /[a-z]/g;
  var numLower = 0;

  var symbols = /[!"£$%^&*()]/g;
  var numSymbols = 0;

  if (tempPassword.length < 5)
  {
    passStrength = poor;
  }
  else
  {
    baseScore = 100
  }

var passLength = tempPassword.length - 5;

if (passLength < 2)
{
passScore = passScore + 100;
}
if (passLength > 2 && passLength < 6)
{
  passScore = passScore + 200;
}
if (passLength > 6)
{
  passScore = passScore + 350;
}



passScore = passScore + baseScore;

  if (tempPassword.match(/[0-9]/g))
  {
    passScore = passScore + 100
      }
 if (tempPassword.match(/[A-Z]/g))
 {
   passScore = passScore + 100
 }


if (tempPassword.match(/[!"£$%^&*]/g))
{
  passScore = passScore + 200
}

  //var strengthMeter  = document.getElementById("strengthMeter").value;
  // strengthMeter = passScore;

if (passScore < 400 )
{
  alert("Password strength is weak")
}
if (passScore >= 400 && passScore < 800)
{
  alert("Password strength is average")
}
if (passScore >= 800)
{
  alert("Password strength is strong")
}
    }







