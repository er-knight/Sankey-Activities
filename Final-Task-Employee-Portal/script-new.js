// let usedIds = new Set();
let usedIds = [];

document.addEventListener("DOMContentLoaded", function (event) {
    const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
    editDetailsFormOverlay.style.display = "none";

    // don't show table headers if their is no data
    const detailsTable = document.getElementsByClassName("details-table")[0];
    if (!detailsTable.hasChildNodes()) {
        detailsTable.textContent = "No details to display. Try adding some details.";
    }
});

document.forms["add-details-form"]["add-employee-id"].addEventListener("input", function (event) {
    const id = event.target.value;
    // if (!usedIds.has(id)) {
    //     event.target.setCustomValidity("");
    // }
    if (!usedIds.includes(id)) {
        event.target.setCustomValidity("");
    }
});

document.forms["add-details-form"].addEventListener("submit", function (event) {
    event.preventDefault();

    const addDetailsForm = document.forms["add-details-form"];

    const id = parseInt(addDetailsForm["add-employee-id"].value, 10);
    const name = addDetailsForm["add-employee-name"].value;
    const age = parseInt(addDetailsForm["add-employee-age"].value, 10);
    const gender = addDetailsForm["add-employee-gender"].value;

    // if (usedIds.has(id)) {
    //     const idField = document.getElementById("add-employee-id");
    //     idField.setCustomValidity("Id is already used. Please use another number.");
    //     idField.reportValidity();
    //     return;
    // }

    if (usedIds.includes(id)) {
        const idField = document.getElementById("add-employee-id");
        idField.setCustomValidity("Id is already used. Please use another number.");
        idField.reportValidity();
        return;
    }

    const detailsTable = document.getElementsByClassName("details-table")[0];
    if (detailsTable.textContent === "No details to display. Try adding some details.") {
        detailsTable.textContent = "";

        const titleRow = detailsTable.insertRow();
        titleRow.setAttribute("class", "title-row")
        const idTitleCell = titleRow.insertCell();
        idTitleCell.textContent = "Id";
        const nameTitleCell = titleRow.insertCell();
        nameTitleCell.textContent = "Name";
        const ageTitleCell = titleRow.insertCell();
        ageTitleCell.textContent = "Age";
        const genderTitleCell = titleRow.insertCell();
        genderTitleCell.textContent = "Gender";
        const buttonsTitleCell = titleRow.insertCell();
        buttonsTitleCell.textContent = "Action";
    }

    const row = detailsTable.insertRow();

    row.setAttribute("id", id);
    const idCell = row.insertCell();
    idCell.textContent = id;

    // usedIds.add(id);
    if (!usedIds.includes(id)) {
        usedIds.push(id);
    } 

    const nameCell = row.insertCell();
    nameCell.textContent = name;
    const ageCell = row.insertCell();
    ageCell.textContent = age;
    const genderCell = row.insertCell();
    genderCell.textContent = gender;
    genderCell.setAttribute("style", "text-transform: capitalize");
    const actionCell = row.insertCell();
    actionCell.setAttribute("class", "action-buttons");    

    const wrapperDiv = document.createElement("div");
    wrapperDiv.setAttribute("class", "button-wrapper");

    const editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-button");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.textContent = "Delete";

    wrapperDiv.appendChild(editButton);
    wrapperDiv.appendChild(deleteButton);

    actionCell.appendChild(wrapperDiv);

    addDetailsForm.reset();

    editButton.addEventListener("click", editButtonClickHandler);
    deleteButton.addEventListener("click", deleteButtonClickHandler);
});

const editEmployeeIdField = document.forms["edit-details-form"]["edit-employee-id"];
editEmployeeIdField.addEventListener("input", function(event) {
    const id = event.target.value;
    // if (!usedIds.has(id)) {
    //     event.target.setCustomValidity("");
    // }
    if (!usedIds.includes(id)) {
        event.target.setCustomValidity("");
    }
});

const editDetailsForm = document.forms["edit-details-form"];
editDetailsForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const idBeforeEdit = parseInt(editDetailsForm["edit-employee-id"].getAttribute("placeholder"));

    const idAfterEdit = parseInt(editDetailsForm["edit-employee-id"].value, 10);
    const nameAfterEdit = editDetailsForm["edit-employee-name"].value;
    const ageAfterEdit = parseInt(editDetailsForm["edit-employee-age"].value, 10);
    const genderAfterEdit = editDetailsForm["edit-employee-gender"].value;

    const rowToEdit = document.getElementById(idBeforeEdit.toString());

    // if (idAfterEdit != idBeforeEdit && usedIds.has(idAfterEdit)) {
    //     const idField = document.getElementById("edit-employee-id");
    //     idField.setCustomValidity("Id is already used. Please use another number.");
    //     idField.reportValidity();
    //     return;
    // }
    if (idAfterEdit != idBeforeEdit && usedIds.includes(idAfterEdit)) {
        const idField = document.getElementById("edit-employee-id");
        idField.setCustomValidity("Id is already used. Please use another number.");
        idField.reportValidity();
        return;
    }

    rowToEdit.childNodes[0].textContent = idAfterEdit;
    rowToEdit.childNodes[1].textContent = nameAfterEdit;
    rowToEdit.childNodes[2].textContent = ageAfterEdit;
    rowToEdit.childNodes[3].textContent = genderAfterEdit;

    // if (idBeforeEdit != idAfterEdit) {
    //     usedIds.delete(idBeforeEdit);
    //     usedIds.add(idAfterEdit);
    //     rowToEdit.setAttribute("id", idAfterEdit);
    // } 
    if (idBeforeEdit != idAfterEdit) {
        if (usedIds.includes(idBeforeEdit)) {
            usedIds.splice(usedIds.indexOf(idBeforeEdit), 1);
        }
        if (!usedIds.includes(idAfterEdit)) {
            usedIds.push(idAfterEdit);
        }
        rowToEdit.setAttribute("id", idAfterEdit);
    } 

    editDetailsForm["edit-employee-id"].setAttribute("value", "");
    editDetailsForm["edit-employee-id"].setAttribute("placeholder", "");
    editDetailsForm["edit-employee-name"].setAttribute("value", "");
    editDetailsForm["edit-employee-age"].setAttribute("value", "");

    if (editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-male`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-male`].toggleAttribute("selected");            
    }
    if (editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-female`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-female`].toggleAttribute("selected");            
    }
    if (editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-other`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-other`].toggleAttribute("selected");            
    }

    editDetailsForm.reset();

    const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
    editDetailsFormOverlay.style.display = "none";
})

const cancelButton = document.getElementsByClassName("cancel-button")[0]
cancelButton.addEventListener("click", function (event) {

    editDetailsForm["edit-employee-id"].setAttribute("value", "");
    editDetailsForm["edit-employee-id"].setAttribute("placeholder", "");
    editDetailsForm["edit-employee-name"].setAttribute("value", "");
    editDetailsForm["edit-employee-age"].setAttribute("value", "");

    if (editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-male`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-male`].toggleAttribute("selected");            
    }
    if (editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-female`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-female`].toggleAttribute("selected");            
    }
    if (editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-other`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-other`].toggleAttribute("selected");            
    }

    editDetailsForm.reset();

    const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
    editDetailsFormOverlay.style.display = "none";
});



function editButtonClickHandler(event) {

    const idBeforeEdit = parseInt(event.target.parentElement.parentElement.parentElement.id, 10);
    const nameBeforeEdit = document.getElementById(idBeforeEdit).childNodes[1].textContent;
    const ageBeforeEdit = parseInt(document.getElementById(idBeforeEdit).childNodes[2].textContent, 10);
    const genderBeforeEdit = document.getElementById(idBeforeEdit).childNodes[3].textContent;
    
    editDetailsForm["edit-employee-id"].setAttribute("value", idBeforeEdit);
    editDetailsForm["edit-employee-id"].setAttribute("placeholder", idBeforeEdit);
    editDetailsForm["edit-employee-name"].setAttribute("value", nameBeforeEdit);
    editDetailsForm["edit-employee-age"].setAttribute("value", ageBeforeEdit);

    if (genderBeforeEdit === "male" && !editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-male`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-male`].toggleAttribute("selected");            
    } else if (genderBeforeEdit === "female" && !editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-female`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-female`].toggleAttribute("selected");            
    } else if (genderBeforeEdit === "other" && !editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-other`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-other`].toggleAttribute("selected");            
    }

    const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
    editDetailsFormOverlay.style.display = "flex";
}

function deleteButtonClickHandler(event) {

    const rowId = parseInt(event.target.parentElement.parentElement.parentElement.id, 10);
    const rowToDelete = document.getElementById(rowId.toString());

    rowToDelete.remove();

    const detailsTable = document.getElementsByClassName("details-table")[0];
    if (detailsTable.childNodes[0].tagName == "TBODY" && detailsTable.childNodes[0].childElementCount == 1) {
        detailsTable.childNodes[0].remove();
        detailsTable.textContent = "No details to display. Try adding some details.";
    }
}