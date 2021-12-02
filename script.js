
//Div created
const createDiv = document.createElement("div");
createDiv.setAttribute("class", "form-group");

//create h1
const title = document.createElement("h1");
title.setAttribute("id", "title");
title.setAttribute("class", "display-4");
title.innerHTML = "DOM Manipulation";
createDiv.appendChild(title);

//create p tag

const description = document.createElement("p");
description.setAttribute("id", "description");
description.innerHTML = "Dom Manipulation with Forms";
description.setAttribute("class", "h4");
createDiv.appendChild(description);

//Form created
const createForm = document.createElement("form");
createForm.setAttribute("id", "form");

const divOne = document.createElement("div");
divOne.setAttribute("class", "form-group");
//input first

const fName = document.createElement("input");
fName.setAttribute("type", "text");
fName.setAttribute("name", "First Name");
fName.setAttribute("id", "first-name");
fName.setAttribute("placeholder", "First Name");
fName.setAttribute("class", "form-control");
fName.required = true;

const breakElem = document.createElement("br");

//input lastNAme
const divTwo = document.createElement("div");
divTwo.setAttribute("class", "form-group");

const lastName = document.createElement("input");
lastName.setAttribute("type", "text");
lastName.setAttribute("name", "Last Name");
lastName.setAttribute("placeholder", "Last Name");
lastName.setAttribute("id", "last-name");
lastName.setAttribute("class", "form-control");
lastName.required = true;

//textarea
const divFour = document.createElement("div");
divFour.setAttribute("class", "form-group");

const textArea = document.createElement("textarea");
textArea.name = "Address";
textArea.cols = "30";
textArea.rows = "5";
textArea.maxlength = "100";
textArea.setAttribute("id", "address");
textArea.setAttribute("placeholder", "Address");
textArea.setAttribute("class", "form-control");

const divThree = document.createElement("div");
divThree.setAttribute("class", "form-group");
//pincode
const pincode = document.createElement("input");
pincode.setAttribute("id", "pincode");
pincode.setAttribute("type", "text");
pincode.setAttribute("name", "pincode");
pincode.setAttribute("placeholder", "pincode");
pincode.setAttribute("class", "form-control");
pincode.required = true;

const radioBtnDiv = document.createElement("div");
radioBtnDiv.setAttribute(
  "class",
  "custom-control custom-radio custom-control-inline"
);
//Gender - Male
const genderLabel = document.createElement("label");
genderLabel.setAttribute("for", "customRadioInline1");
genderLabel.innerHTML = "Male";
genderLabel.setAttribute("class", "custom-control-label");

const genderMale = document.createElement("input");
genderMale.setAttribute("id", "customRadioInline1");
genderMale.setAttribute("type", "radio");
genderMale.setAttribute("value", "Male");
genderMale.setAttribute("name", "customRadioInline1");
genderMale.setAttribute("class", "custom-control-input");

//Gender - Female
const genderLabelFemale = document.createElement("label");
genderLabelFemale.setAttribute("for", "female");
genderLabelFemale.innerHTML = "Female";
genderLabelFemale.setAttribute("class", "custom-control-label");

const genderFemale = document.createElement("input");
genderFemale.setAttribute("id", "female");
genderFemale.setAttribute("type", "radio");
genderFemale.setAttribute("value", "Female");
genderFemale.setAttribute("name", "gender");
genderFemale.setAttribute("class", "custom-control-input");

const finalDiv = document.createElement("div");
finalDiv.setAttribute("class", "form-group");

// Dropdown options

const dropdownOptions = document.createElement("label");
dropdownOptions.innerHTML = "Choice of Food ";

//select tag

const selectTag = document.createElement("select");
selectTag.setAttribute("id", "select");

let favFood = ["Grill", "Noodles", "Cutlet", "Coffee", "Rice"];
for (const food of favFood) {
  let optionsInDropdown = document.createElement("option");
  optionsInDropdown.innerHTML = food;
  optionsInDropdown.classList.add("options");
  optionsInDropdown.setAttribute("id", food);
  selectTag.appendChild(optionsInDropdown);
}
selectTag.addEventListener("change", function () {
  alert("Selected" + document.getElementById("option"));
  alert("Selected");
});

const divFive = document.createElement("div");
divFive.setAttribute("class", "form-group");
//state
const state = document.createElement("input");
state.setAttribute("id", "state");
state.setAttribute("type", "text");
state.setAttribute("name", "pincode");
state.setAttribute("placeholder", "State");
state.setAttribute("class", "form-control");
state.required = true;

//country
const divSix = document.createElement("div");
divSix.setAttribute("class", "form-group");
//state
const country = document.createElement("input");
country.setAttribute("id", "country");
country.setAttribute("type", "text");
country.setAttribute("name", "country");
country.setAttribute("placeholder", "Country");
country.setAttribute("class", "form-control");
country.required = true;



const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");
submitButton.setAttribute("id", "submit");
submitButton.setAttribute(
  "class",
  "btn btn-primary btn btn-secondary btn-lg btn-block"
);
submitButton.addEventListener("click",  generate_table);


document.body.appendChild(createDiv);

createDiv.appendChild(createForm);

createForm.appendChild(divOne);
divOne.appendChild(fName);
divOne.appendChild(breakElem.cloneNode());

createForm.appendChild(divTwo);
divTwo.appendChild(lastName);
createForm.appendChild(breakElem.cloneNode());

createForm.appendChild(divFour);
divFour.appendChild(textArea);
createForm.appendChild(breakElem.cloneNode());

createForm.appendChild(divThree);
divThree.appendChild(pincode);
createForm.appendChild(divThree);
createForm.appendChild(breakElem.cloneNode());

createForm.appendChild(radioBtnDiv);
// radioBtnDiv.appendChild()

radioBtnDiv.appendChild(genderLabel);
radioBtnDiv.appendChild(genderMale);

radioBtnDiv.appendChild(genderLabelFemale);
radioBtnDiv.appendChild(genderFemale);

createForm.appendChild(breakElem.cloneNode());

createForm.appendChild(finalDiv);
finalDiv.appendChild(dropdownOptions);
finalDiv.appendChild(selectTag);

createForm.appendChild(divFive);
divFive.appendChild(state);
createForm.appendChild(breakElem.cloneNode());

createForm.appendChild(divSix);
divSix.appendChild(country);
createForm.appendChild(breakElem.cloneNode());

createForm.appendChild(submitButton);
createForm.appendChild(breakElem.cloneNode());
let tableDetails = [];
function generate_table() {

  const firstName = document.querySelector('#first-name').value;
  const lastName = document.getElementById('last-name').value;
  const country_Details = document.getElementById('country').value;
  const state_Details = document.getElementById('state').value;
  const pincode_Details = document.getElementById('pincode').value;
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('state', state_Details);
  localStorage.setItem('pincode',pincode_Details);
  localStorage.setItem('country',country_Details);
  tableDetails.push(localStorage.getItem('firstName'),
  localStorage.getItem('lastName'),
  localStorage.getItem('state'),
  localStorage.getItem('country'),
  localStorage.getItem('pincode'));
  console.log("123",tableDetails);
  console.log("123",tableDetails.length);
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  tbl.setAttribute("class", "table");
  var tblBody = document.createElement("tbody");
  var row = document.createElement("tr");

  // creating all cells
  for (var i = 0; i < 1; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < tableDetails.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(tableDetails[j]
      );
      cell.appendChild(cellText);
      
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}
