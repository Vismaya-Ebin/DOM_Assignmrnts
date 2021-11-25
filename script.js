//Div created
const createDiv = document.createElement("div");
createDiv.setAttribute("class", "form-group");

//create h1
const title = document.createElement("h1");
title.setAttribute("id", "title");
title.innerHTML = "DOM Manipulation";
createDiv.appendChild(title);

//create p tag

const description = document.createElement("p");
description.setAttribute("id", "description");
description.innerHTML = "Dom Manipulation with Forms";
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
lastName.required = true;

//textarea
const divFour = document.createElement("div");
divFour.setAttribute("class", "form-group");

const textArea = document.createElement("textarea");
textArea.name = "Address";
textArea.cols = "30";
textArea.rows = "5";
textArea.setAttribute("id", "address");
textArea.setAttribute("placeholder", "Address");

const divThree = document.createElement("div");
divThree.setAttribute("class", "form-group");
//pincode
const pincode = document.createElement("input");
pincode.setAttribute("id", "pincode");
pincode.setAttribute("type", "text");
pincode.setAttribute("name", "pincode");
pincode.setAttribute("placeholder", "pincode");
pincode.required = true;

//Gender - Male
const genderLabel = document.createElement("label");
genderLabel.setAttribute("for", "male");
genderLabel.innerHTML = "Male";

const genderMale = document.createElement("input");
genderMale.setAttribute("id", "male");
genderMale.setAttribute("type", "radio");
genderMale.setAttribute("value", "Male");
genderMale.setAttribute("name", "gender");

//Gender - Female
const genderLabelFemale = document.createElement("label");
genderLabelFemale.setAttribute("for", "female");
genderLabelFemale.innerHTML = "Female";

const genderFemale = document.createElement("input");
genderFemale.setAttribute("id", "female");
genderFemale.setAttribute("type", "radio");
genderFemale.setAttribute("value", "Female");
genderFemale.setAttribute("name", "gender");

//create submit button

const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "submit");
submitButton.setAttribute("id", "submit");
submitButton.setAttribute("class", "btn btn-primary");

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

createForm.appendChild(genderLabel);
createForm.appendChild(genderMale);

createForm.appendChild(genderLabelFemale);
createForm.appendChild(genderFemale);

createForm.appendChild(breakElem.cloneNode());

createForm.appendChild(submitButton);
createForm.appendChild(breakElem.cloneNode());
