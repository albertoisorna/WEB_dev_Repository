var Name = "Alberto"
var Surname = "Gonzalez Isorna"
var email = "alberto_algon@hotmail.com"

var NameId = document.querySelector('input[id*="name" i]').id
var SurnameId = document.querySelector('input[id*="surname" i]').id
var emailId = document.querySelector('input[id*="email" i]').id

document.getElementById(NameId).value = Name;
document.getElementById(SurnameId).value = Surname;
document.getElementById(emailId).value = email;
