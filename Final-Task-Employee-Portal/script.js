let usedIds = new Set();

document.addEventListener("DOMContentLoaded", function (event) {
    const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
    editDetailsFormOverlay.style.display = "none";

    console.log("DOM content loaded!");

    // don't show table headers if their is no data
    const detailsTable = document.getElementsByClassName("details-table")[0];
    if (!detailsTable.hasChildNodes()) {
        detailsTable.textContent = "No details to display. Try adding some details.";
    }
});

document.forms["add-details-form"]["add-employee-id"].addEventListener("input", function (event) {
    const id = event.target.value;
    if (!usedIds.has(id)) {
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

    console.log(id);

    if (usedIds.has(id)) {
        console.log(usedIds, id);
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

    usedIds.add(id); // mark current id as used

    const nameCell = row.insertCell();
    nameCell.textContent = name;
    const ageCell = row.insertCell();
    ageCell.textContent = age;
    const genderCell = row.insertCell();
    genderCell.textContent = gender;
    genderCell.setAttribute("style", "text-transform: capitalize");
    const actionCell = row.insertCell();
    actionCell.setAttribute("class", "action-buttons");
    actionCell.innerHTML = "<div class='button-wrapper'><button id='edit-button'>Edit</button></div><div class='button-wrapper'><button id='delete-button'>Delete</button></div>"

    addDetailsForm.reset();

    document.getElementById("edit-button").addEventListener("click", function (event) {
        console.log("edit clicked");

        let idBeforeEdit = parseInt(event.target.parentElement.parentElement.parentElement.id, 10);
        console.log(idBeforeEdit);
        const nameBeforeEdit = document.getElementById(idBeforeEdit).childNodes[1].textContent;
        const ageBeforeEdit = parseInt(document.getElementById(idBeforeEdit).childNodes[2].textContent, 10);
        const genderBeforeEdit = document.getElementById(idBeforeEdit).childNodes[3].textContent;

        
        document.forms["edit-details-form"]["edit-employee-id"].setAttribute("value", idBeforeEdit);
        document.forms["edit-details-form"]["edit-employee-name"].setAttribute("value", nameBeforeEdit);
        document.forms["edit-details-form"]["edit-employee-age"].setAttribute("value", ageBeforeEdit);
        if (!document.forms["edit-details-form"]["edit-employee-gender"].options["edit-employee-gender-male"].hasAttribute("selected")) {
            document.forms["edit-details-form"]["edit-employee-gender"].options["edit-employee-gender-male"].toggleAttribute("selected");            
        }
        console.log(idBeforeEdit, nameBeforeEdit, ageBeforeEdit, genderBeforeEdit);

        const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
        editDetailsFormOverlay.style.display = "flex";

        document.forms["edit-details-form"]["edit-employee-id"].addEventListener("input", function (event) {
            const id = event.target.value;
            if (!usedIds.has(id)) {
                event.target.setCustomValidity("");
            }
        });

        document.forms["edit-details-form"].addEventListener("submit", function (event) {
            event.preventDefault();

            const editDetailsForm = document.forms["edit-details-form"];

            const idAfterEdit = parseInt(editDetailsForm["edit-employee-id"].value, 10);
            const nameAfterEdit = editDetailsForm["edit-employee-name"].value;
            const ageAfterEdit = parseInt(editDetailsForm["edit-employee-age"].value, 10);
            const genderAfterEdit = editDetailsForm["edit-employee-gender"].value;

            const rowToEdit = document.getElementById(idBeforeEdit.toString());

            if (idAfterEdit != idBeforeEdit && usedIds.has(idAfterEdit)) {
                const idField = document.getElementById("edit-employee-id");
                idField.setCustomValidity("Id is laready used. Please use another number.");
                idField.reportValidity();
                return;
            }

            rowToEdit.childNodes[0].textContent = idAfterEdit;
            rowToEdit.childNodes[1].textContent = nameAfterEdit;
            rowToEdit.childNodes[2].textContent = ageAfterEdit;
            rowToEdit.childNodes[3].textContent = genderAfterEdit;

            console.log(idAfterEdit);
            if (Number.isInteger(idAfterEdit)) {
                rowToEdit.setAttribute("id", idAfterEdit);
                usedIds.delete(idBeforeEdit);
                usedIds.add(idAfterEdit);
                idBeforeEdit = idAfterEdit;
            }

            const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
            editDetailsFormOverlay.style.display = "none";
        });

        document.getElementsByClassName("cancel-button")[0].addEventListener("click", function (event) {

            const rowToEdit = document.getElementById(idBeforeEdit.toString());

            rowToEdit.childNodes[0].textContent = idBeforeEdit;
            rowToEdit.childNodes[1].textContent = nameBeforeEdit;
            rowToEdit.childNodes[2].textContent = ageBeforeEdit;
            rowToEdit.childNodes[3].textContent = genderBeforeEdit;

            rowToEdit.setAttribute("id", idBeforeEdit);

            const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
            editDetailsFormOverlay.style.display = "none";
        });

        // editDetailsFormOverlay.style.display = "none";
    });

    document.getElementById("delete-button").addEventListener("click", function (event) {
        console.log("delete clicked");

        const rowId = parseInt(event.target.parentElement.parentElement.parentElement.id, 10);
        const rowToDelete = document.getElementById(rowId.toString());
    
        rowToDelete.remove();

        const detailsTable = document.getElementsByClassName("details-table")[0];
        if (detailsTable.childNodes[0].tagName == "TBODY" && detailsTable.childNodes[0].childElementCount == 1) {
            detailsTable.childNodes[0].remove();
            detailsTable.textContent = "No details to display. Try adding some details.";
        }
    });

});

