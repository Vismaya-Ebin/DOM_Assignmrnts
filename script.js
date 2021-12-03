//container - row - col -md -4
const bootstrapContainer = document.createElement("div");
bootstrapContainer.setAttribute("class", "container");

const bootstrapRow = document.createElement("div");
bootstrapRow.setAttribute("class", "row");

const colMd4 = document.createElement("div");
colMd4.setAttribute("class", "col-md-10");

document.body.appendChild(bootstrapContainer);
bootstrapContainer.appendChild(bootstrapRow);
bootstrapRow.appendChild(colMd4);

//Div created
let multiFood = [];
const createDiv = document.createElement("div");
createDiv.setAttribute("class", "form-group");

//create h1
const title = document.createElement("h1");
title.setAttribute("id", "title");
title.setAttribute("class", "display-4");
title.innerHTML = "DOM Manipulation";
title.style.textAlign = "center";
title.style.color = "#337ab7";
colMd4.appendChild(title);

//create p tag

const description = document.createElement("p");
description.setAttribute("id", "description");
description.innerHTML = "Dom Manipulation with Forms";
description.setAttribute("class", "h4");
description.style.textAlign = "center";
description.style.color = "black";
colMd4.appendChild(description);

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
pincode.setAttribute("placeholder", "Pincode");
pincode.setAttribute("class", "form-control");
pincode.required = true;

const radioBtnDiv = document.createElement("div");
radioBtnDiv.setAttribute(
  "class",
  "custom-control custom-radio custom-control-inline"
);
//Gender - Male
const genderLabel = document.createElement("label");
genderLabel.setAttribute("for", "choice");
genderLabel.innerHTML = "Male";
genderLabel.setAttribute("class", "custom-control-label");

const genderMale = document.createElement("input");
genderMale.setAttribute("id", "customRadioInline1");
genderMale.setAttribute("type", "radio");
genderMale.setAttribute("value", "Male");
genderMale.setAttribute("name", "choice");
genderMale.style.margin = "10px";
genderMale.setAttribute("class", "custom-control-input");

//Gender - Female
const genderLabelFemale = document.createElement("label");
genderLabelFemale.setAttribute("for", "female");
genderLabelFemale.innerHTML = "Female";
genderLabelFemale.style.margin = "10px";
genderLabelFemale.setAttribute("class", "custom-control-label");

const genderFemale = document.createElement("input");
genderFemale.setAttribute("id", "female");
genderFemale.setAttribute("type", "radio");
genderFemale.setAttribute("value", "Female");
genderFemale.setAttribute("name", "choice");
genderFemale.setAttribute("class", "custom-control-input");

const finalDiv = document.createElement("div");
finalDiv.setAttribute("class", "form-group");

// Dropdown options

const dropdownOptions = document.createElement("label");
dropdownOptions.innerHTML = "Choice of Food ";
dropdownOptions.setAttribute("for", "food");
dropdownOptions.style.display = "block";

//select tag

const selectTag = document.createElement("select");
selectTag.setAttribute("id", "food");
selectTag.setAttribute("name", "food");
selectTag.multiple = true;

let favFood = ["Grill", "Noodles", "Cutlet", "Coffee", "Rice"];
for (const food of favFood) {
  let optionsInDropdown = document.createElement("option");
  optionsInDropdown.innerHTML = food;
  optionsInDropdown.classList.add("options");
  optionsInDropdown.style.padding = "12px";
  optionsInDropdown.setAttribute("id", food);
  selectTag.appendChild(optionsInDropdown);
}
selectTag.addEventListener("change", function () {
  multiFood = document.querySelectorAll("#food :checked");
});

const ptag = document.createElement("p");
ptag.innerHTML = "*Note to do multiselect press ctrl key from keyboard  ";
ptag.style.color = "red";
dropdownOptions.appendChild(ptag);

const divFive = document.createElement("div");
divFive.setAttribute("class", "form-group");
//state
const state = document.createElement("input");
state.setAttribute("id", "state");
state.setAttribute("type", "text");
state.setAttribute("name", "state");
state.setAttribute("placeholder", "State");
state.setAttribute("class", "form-control");
state.required = true;

//country
const divSix = document.createElement("div");
divSix.setAttribute("class", "form-group");

const country = document.createElement("input");
country.setAttribute("id", "country");
country.setAttribute("type", "text");
country.setAttribute("name", "country");
country.setAttribute("placeholder", "Country");
country.setAttribute("class", "form-control");
country.required = true;

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "button");
submitButton.innerHTML = "Submit";
submitButton.setAttribute("id", "submit");
submitButton.setAttribute(
  "class",
  "btn btn-primary btn btn-secondary btn-lg btn-block"
);
submitButton.addEventListener("click", popUpTableOnSubmit);

// document.body.appendChild(createDiv);
colMd4.appendChild(createDiv);

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

function popUpTableOnSubmit() {
  let tableValues = [];
  let selectedValue = "";
  let finalSelection = [];
  
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.getElementById("last-name").value;
  const address = document.querySelector("#address").value;
  const pincode_Details = document.getElementById("pincode").value;
  const state_Details = document.getElementById("state").value;
  const country_Details = document.querySelector("#country").value;

  const gender = document.querySelectorAll('input[name="choice"]');
  for (const gen of gender) {
    if (gen.checked) selectedValue = gen.value;
  }
  finalSelection = [...multiFood].map((option) => option.value);

  tableValues.push(
    firstName,
    lastName,
    address,
    pincode_Details,
    selectedValue,
    finalSelection,
    state_Details,
    country_Details
  );
  
  const table_Div = document.createElement("div");
  table_Div.setAttribute("class", "form-group");

  const createTable = document.createElement("table");
  createTable.setAttribute("border", "3px solid black");
  createTable.setAttribute("class", "table");

  const thead = document.createElement("thead");

  const table_Row = document.createElement("tr");
  createTable.appendChild(thead);

  thead.appendChild(table_Row);

  let tableHeaderValues = [
    "First Name",
    "Last Name",
    "Address",
    "Pincode",
    "Gender",
    "Food Choices",
    "State",
    "Country",
  ];
  let table_Header = [];
  let tableText = [];

  for (let i = 0; i < tableHeaderValues.length; i++) {
    table_Header[i] = document.createElement("th");
    tableText[i] = document.createTextNode(tableHeaderValues[i]);
    table_Header[i].appendChild(tableText[i]);
    table_Row.appendChild(table_Header[i]);
  }

  const table_Body = document.createElement("tbody");
  createTable.appendChild(table_Body);

  var row = document.createElement("tr");
  var cell = [];
  var cellText = [];
  for (var j = 0; j < tableValues.length; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    cell[j] = document.createElement("td");
    cellText[j] = document.createTextNode(tableValues[j]);
    cell[j].appendChild(cellText[j]);
    row.appendChild(cell[j]);
  }

  // add the row to the end of the tabl
  table_Body.appendChild(row);

  // document.body.appendChild(createTable);
  colMd4.appendChild(table_Div);
  table_Div.appendChild(createTable);
}
