function getTodaysDate() {
    const date = new Date();
    return [date.getFullYear().toString(), (date.getMonth() + 1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0")].join("-");
}

function editButtonClickHandler(event) {
    console.log(event.target.parentElement.parentElement.parentElement);

    const updateFormOverlay = document.getElementById("update-form-overlay");
    updateFormOverlay.style.display = "flex";

    const row = event.target.parentElement.parentElement.parentElement;

    const updateForm = document.forms["update-form"];
    updateForm["update-title"].setAttribute("value", row.childNodes[0].textContent.toString());
    updateForm["update-start-date"].setAttribute("value", row.childNodes[1].textContent.toString());
    updateForm["update-end-date"].setAttribute("value", row.childNodes[2].textContent.toString());

    const startDateInput = row.childNodes[1].textContent.toString();
    const endDateInput = row.childNodes[2].textContent.toString();
    const todaysDate = getTodaysDate();

    switch (row.childNodes[3].textContent.toString()) {
        case "Upcoming":
            if (startDateInput <= todaysDate && todaysDate <= endDateInput) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due" disabled>Past Due</option>`;
            } else if (startDateInput > todaysDate) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" >Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            } else if (endDateInput < todaysDate) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
            } else {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            }
            if (!updateForm["update-status"].options[1].hasAttribute("selected")) {
                updateForm["update-status"].options[1].toggleAttribute("selected");
            }
            break;
        case "In Progress":
            if (startDateInput <= todaysDate && todaysDate <= endDateInput) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due" disabled>Past Due</option>`;
            } else if (startDateInput > todaysDate) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" >Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            } else if (endDateInput < todaysDate) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
            } else {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            }
            if (!updateForm["update-status"].options[2].hasAttribute("selected")) {
                updateForm["update-status"].options[2].toggleAttribute("selected");
            }
            break;
        case "Completed":
            if (startDateInput <= todaysDate && todaysDate <= endDateInput) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due" disabled>Past Due</option>`;
            } else if (startDateInput > todaysDate) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" >Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            } else if (endDateInput < todaysDate) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
            } else {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            }
            if (!updateForm["update-status"].options[3].hasAttribute("selected")) {
                updateForm["update-status"].options[3].toggleAttribute("selected");
            }
            break;
        case "Past Due":
            if (startDateInput <= todaysDate && todaysDate <= endDateInput) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due" disabled>Past Due</option>`;
            } else if (startDateInput > todaysDate) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" >Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            } else if (endDateInput < todaysDate) {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
            } else {
                updateForm["update-status"].innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            }
            if (!updateForm["update-status"].options[4].hasAttribute("selected")) {
                updateForm["update-status"].options[4].toggleAttribute("selected");
            }
            break;
    }

    row.setAttribute("id", "row-to-update");
}

function deleteButtonClickHandler(event) {
    console.log(event.target.parentElement.parentElement.parentElement);

    const row = event.target.parentElement.parentElement.parentElement;
    row.remove();

    const activitiesTable = document.getElementById("activities-table");

    if (activitiesTable.childNodes[0].tagName == "TBODY" && activitiesTable.childNodes[0].childElementCount == 1) {
        activitiesTable.childNodes[0].remove();
        activitiesTable.textContent = "No tasks scheduled!";
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    const addFormOverlay = document.getElementById("add-form-overlay");
    addFormOverlay.style.display = "none";

    const updateFormOverlay = document.getElementById("update-form-overlay");
    updateFormOverlay.style.display = "none";

    // don't show table headers if their is no data
    const activitiesTable = document.getElementById("activities-table");
    console.log(activitiesTable, activitiesTable.childNodes);
    if (!activitiesTable.hasChildNodes()) {
        activitiesTable.textContent = "No tasks scheduled!";
    }
});

const addForm = document.forms["add-form"];
addForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(`${event.target.id}: add clicked`);

    const activity = event.target["add-title"].value;
    const startDate = event.target["add-start-date"].value;
    const endDate = event.target["add-end-date"].value;
    const status = event.target["add-status"].value;

    console.log(activity, startDate, endDate, status);
    console.log(typeof startDate);

    const activitiesTable = document.getElementById("activities-table");
    if (activitiesTable.textContent === "No tasks scheduled!") {
        activitiesTable.textContent = "";

        const titleRow = activitiesTable.insertRow();
        titleRow.setAttribute("class", "title-row")

        const activityTitleCell = titleRow.insertCell();
        activityTitleCell.textContent = "Task";
        // activityTitleCell.addEventListener("click", handleSortByTitle);

        const startDateTitleCell = titleRow.insertCell();
        startDateTitleCell.textContent = "Start Date";
        // startDateTitleCell.addEventListener("click", handleSortByStartDate);

        const endDateTitleCell = titleRow.insertCell();
        endDateTitleCell.textContent = "End Date";
        // endDateTitleCell.addEventListener("click", handleSortByEndDate);

        const statusTitleCell = titleRow.insertCell();
        statusTitleCell.textContent = "Status";

        const buttonsTitleCell = titleRow.insertCell();
        buttonsTitleCell.textContent = "Action";
    }

    const row = activitiesTable.insertRow();

    const activityCell = row.insertCell();
    activityCell.textContent = activity;

    const startDateCell = row.insertCell();
    startDateCell.textContent = startDate;

    const endDateCell = row.insertCell();
    endDateCell.textContent = endDate;

    const statusCell = row.insertCell();
    switch (status) {
        case "upcoming":
            statusCell.textContent = "Upcoming";
            break;
        case "in-progress":
            statusCell.textContent = "In Progress";
            break;
        case "completed":
            statusCell.textContent = "Completed";
            activityCell.style["text-decoration"] = "line-through 2px";
            startDateCell.style["text-decoration"] = "line-through 2px";
            endDateCell.style["text-decoration"] = "line-through 2px";
            statusCell.style["text-decoration"] = "line-through 2px"; 
            break;
        case "past-due":
            statusCell.textContent = "Past Due";
            activityCell.style["text-decoration"] = "line-through 2px";
            startDateCell.style["text-decoration"] = "line-through 2px";
            endDateCell.style["text-decoration"] = "line-through 2px";
            statusCell.style["text-decoration"] = "line-through 2px"; 
            break;
    }

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

    editButton.addEventListener("click", editButtonClickHandler);
    deleteButton.addEventListener("click", deleteButtonClickHandler);

    addForm.reset();

    const addStatus = document.getElementById("add-status");
    
    if (addStatus.options[1].hasAttribute("disabled")) {
        addStatus.options[1].toggleAttribute("disabled"); // upcoming
    }
    if (addStatus.options[2].hasAttribute("disabled")) {
        addStatus.options[2].toggleAttribute("disabled"); // in-progress
    }
    if (addStatus.options[3].hasAttribute("disabled")) {
        addStatus.options[3].toggleAttribute("disabled"); // completed
    }
    if (addStatus.options[4].hasAttribute("disabled")) {
        addStatus.options[4].toggleAttribute("disabled"); // past-due
    }

    const addFormOverlay = document.getElementById("add-form-overlay");
    addFormOverlay.style.display = "none";
});

const cancelAddButton = document.getElementById("cancel-add-button");
cancelAddButton.addEventListener("click", function (event) {
    console.log(`${event.target.id}: cancel add clicked`);

    addForm.reset();

    const addStatus = document.getElementById("add-status");
    
    if (addStatus.options[1].hasAttribute("disabled")) {
        addStatus.options[1].toggleAttribute("disabled"); // upcoming
    }
    if (addStatus.options[2].hasAttribute("disabled")) {
        addStatus.options[2].toggleAttribute("disabled"); // in-progress
    }
    if (addStatus.options[3].hasAttribute("disabled")) {
        addStatus.options[3].toggleAttribute("disabled"); // completed
    }
    if (addStatus.options[4].hasAttribute("disabled")) {
        addStatus.options[4].toggleAttribute("disabled"); // past-due
    }

    const addFormOverlay = document.getElementById("add-form-overlay");
    addFormOverlay.style.display = "none";
});

const updateForm = document.forms["update-form"];
updateForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(`${event.target.id}: update clicked`);

    const activity = event.target["update-title"].value;
    const startDate = event.target["update-start-date"].value;
    const endDate = event.target["update-end-date"].value;
    const status = event.target["update-status"].value;

    const rowToUpdate = document.getElementById("row-to-update");
    rowToUpdate.removeAttribute("id");

    rowToUpdate.childNodes[0].textContent = activity;
    rowToUpdate.childNodes[1].textContent = startDate;
    rowToUpdate.childNodes[2].textContent = endDate;

    switch (status) {
        case "upcoming":
            rowToUpdate.childNodes[3].textContent = "Upcoming";
            rowToUpdate.childNodes[0].style["text-decoration"] = "none";
            rowToUpdate.childNodes[1].style["text-decoration"] = "none";
            rowToUpdate.childNodes[2].style["text-decoration"] = "none";
            rowToUpdate.childNodes[3].style["text-decoration"] = "none";
            break;
        case "in-progress":
            rowToUpdate.childNodes[3].textContent = "In Progress";
            rowToUpdate.childNodes[0].style["text-decoration"] = "none";
            rowToUpdate.childNodes[1].style["text-decoration"] = "none";
            rowToUpdate.childNodes[2].style["text-decoration"] = "none";
            rowToUpdate.childNodes[3].style["text-decoration"] = "none";
            break;
        case "completed":
            rowToUpdate.childNodes[3].textContent = "Completed";
            rowToUpdate.childNodes[0].style["text-decoration"] = "line-through 2px";
            rowToUpdate.childNodes[1].style["text-decoration"] = "line-through 2px";
            rowToUpdate.childNodes[2].style["text-decoration"] = "line-through 2px";
            rowToUpdate.childNodes[3].style["text-decoration"] = "line-through 2px";
            break;
        case "past-due":
            rowToUpdate.childNodes[3].textContent = "Past Due";
            rowToUpdate.childNodes[0].style["text-decoration"] = "line-through 2px";
            rowToUpdate.childNodes[1].style["text-decoration"] = "line-through 2px";
            rowToUpdate.childNodes[2].style["text-decoration"] = "line-through 2px";
            rowToUpdate.childNodes[3].style["text-decoration"] = "line-through 2px";
            break;
    }

    updateForm.reset();

    const updateStatus = document.getElementById("update-status");
    updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming">Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
    
    // if (updateStatus.options[1].hasAttribute("disabled")) {
    //     updateStatus.options[1].toggleAttribute("disabled"); // upcoming
    // }
    // if (updateStatus.options[2].hasAttribute("disabled")) {
    //     updateStatus.options[2].toggleAttribute("disabled"); // in-progress
    // }
    // if (updateStatus.options[3].hasAttribute("disabled")) {
    //     updateStatus.options[3].toggleAttribute("disabled"); // completed
    // }
    // if (updateStatus.options[4].hasAttribute("disabled")) {
    //     updateStatus.options[4].toggleAttribute("disabled"); // past-due
    // }

    const updateFormOverlay = document.getElementById("update-form-overlay");
    updateFormOverlay.style.display = "none";
});

const cancelUpdateButton = document.getElementById("cancel-update-button");
cancelUpdateButton.addEventListener("click", function (event) {
    console.log(`${event.target.id}: cancel update clicked`);

    const rowToUpdate = document.getElementById("row-to-update");
    rowToUpdate.removeAttribute("id");

    updateForm.reset();

    const updateStatus = document.getElementById("update-status");
    updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming">Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
    
    // if (updateStatus.options[1].hasAttribute("disabled")) {
    //     updateStatus.options[1].toggleAttribute("disabled"); // upcoming
    // }
    // if (updateStatus.options[2].hasAttribute("disabled")) {
    //     updateStatus.options[2].toggleAttribute("disabled"); // in-progress
    // }
    // if (updateStatus.options[3].hasAttribute("disabled")) {
    //     updateStatus.options[3].toggleAttribute("disabled"); // completed
    // }
    // if (updateStatus.options[4].hasAttribute("disabled")) {
    //     updateStatus.options[4].toggleAttribute("disabled"); // past-due
    // }

    const updateFormOverlay = document.getElementById("update-form-overlay");
    updateFormOverlay.style.display = "none";
});


const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", function(event) {
    
    const activitiesTable = document.getElementById("activities-table");
    const [, ...activitiesRows] = activitiesTable.childNodes[0].childNodes;

    const valueToSearch = event.target.value.trim().toLowerCase();
    console.log(valueToSearch);


    activitiesRows.forEach(function(row) {
        const activity = row.childNodes[0].textContent.toLowerCase();
        const startDate = row.childNodes[1].textContent;
        const endDate = row.childNodes[2].textContent;
        const status = row.childNodes[3].textContent.toLowerCase();

        if (!valueToSearch.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) && !valueToSearch.match(/[0-9]{4}/) && !valueToSearch.match(/[0-9]{2}/)) {
            if (!activity.includes(valueToSearch) && !status.includes(valueToSearch)) {
                row.style.display = "none";
            } else {
                row.style.display = "";
            }
        } else {
            if (!activity.includes(valueToSearch) && !startDate.includes(valueToSearch) && !endDate.includes(valueToSearch) && !status.includes(valueToSearch)) {
                row.style.display = "none";
            } else {
                row.style.display = "";
            }
        }
    })
    
})

const addNewButton = document.getElementById("add-new-button");
addNewButton.addEventListener("click", function (event) {
    console.log(`${event.target.id}: add new clicked`);

    const addFormOverlay = document.getElementById("add-form-overlay");
    addFormOverlay.style.display = "flex";
});

document.getElementById("add-start-date").addEventListener("input", function(event) {
    console.log(document.getElementById("add-start-date").value);
    
    const startDateInput = document.getElementById("add-start-date").value;
    const endDateInput = document.getElementById("add-end-date").value;
    if (endDateInput !== "" && startDateInput > endDateInput) {
        event.target.setCustomValidity("Start Date must be less than equal to End Date.");
        event.target.reportValidity();
    } else {
        event.target.setCustomValidity("");
        document.getElementById("add-end-date").setCustomValidity("");

        const addStatus = document.getElementById("add-status");
        const todaysDate = getTodaysDate();

        if (startDateInput <= todaysDate && todaysDate <= endDateInput) {
            addStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (!addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (!addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else if (startDateInput > todaysDate) {
            addStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" >Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (!addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (!addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (!addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else if (endDateInput < todaysDate) {
            addStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
            // if (!addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (!addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else {
            addStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        }
    }
});

document.getElementById("add-end-date").addEventListener("input", function(event) {

    const startDateInput = document.getElementById("add-start-date").value;
    const endDateInput = document.getElementById("add-end-date").value;
    if (startDateInput !== "" && startDateInput > endDateInput) {
        event.target.setCustomValidity("End Date must be greater than equal to Start Date.");
        event.target.reportValidity();
    } else {
        document.getElementById("add-start-date").setCustomValidity("");
        event.target.setCustomValidity("");

        const addStatus = document.getElementById("add-status");
        const todaysDate = getTodaysDate();

        if (startDateInput <= todaysDate && todaysDate <= endDateInput) {
            addStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (!addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (!addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else if (startDateInput > todaysDate) {
            addStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" >Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (!addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (!addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (!addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else if (endDateInput < todaysDate) {
            addStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
            // if (!addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (!addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else {
            addStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        }
    }
});

document.getElementById("update-start-date").addEventListener("input", function(event) {
    console.log(document.getElementById("update-start-date").value);

    const startDateInput = document.getElementById("update-start-date").value;
    const endDateInput = document.getElementById("update-end-date").value;
    if (endDateInput !== "" && startDateInput > endDateInput) {
        event.target.setCustomValidity("Start Date must be less than equal to End Date.");
        event.target.reportValidity();
    } else {
        event.target.setCustomValidity("");
        document.getElementById("update-end-date").setCustomValidity("");

        const updateStatus = document.getElementById("update-status");
        const todaysDate = getTodaysDate();

        if (startDateInput <= todaysDate && todaysDate <= endDateInput) {
            updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (!addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (!addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else if (startDateInput > todaysDate) {
            updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" >Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (!addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (!addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (!addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else if (endDateInput < todaysDate) {
            updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
            // if (!addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (!addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else {
            updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        }
    }
});

document.getElementById("update-end-date").addEventListener("input", function(event) {

    const startDateInput = document.getElementById("update-start-date").value;
    const endDateInput = document.getElementById("update-end-date").value;
    if (startDateInput !== "" && startDateInput > endDateInput) {
        event.target.setCustomValidity("End Date must be greater than equal to Start Date.");
        event.target.reportValidity();
    } else {
        document.getElementById("update-start-date").setCustomValidity("");
        event.target.setCustomValidity("");

        const updateStatus = document.getElementById("update-status");
        const todaysDate = getTodaysDate();

        if (startDateInput <= todaysDate && todaysDate <= endDateInput) {
            updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress">In Progress</option><option value="completed">Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (!addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (!addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else if (startDateInput > todaysDate) {
            updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" >Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (!addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (!addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (!addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else if (endDateInput < todaysDate) {
            updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed">Completed</option><option value="past-due">Past Due</option>`;
            // if (!addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (!addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        } else {
            updateStatus.innerHTML = `<option value="" selected disabled>Select Status</option><option value="upcoming" disabled>Upcoming</option><option value="in-progress" disabled>In Progress</option><option value="completed" disabled>Completed</option><option value="past-due" disabled>Past Due</option>`;
            // if (addStatus.options[1].hasAttribute("disabled")) {
            //     addStatus.options[1].toggleAttribute("disabled"); // upcoming
            // }
            // if (addStatus.options[2].hasAttribute("disabled")) {
            //     addStatus.options[2].toggleAttribute("disabled"); // in-progress
            // }
            // if (addStatus.options[3].hasAttribute("disabled")) {
            //     addStatus.options[3].toggleAttribute("disabled"); // completed
            // }
            // if (addStatus.options[4].hasAttribute("disabled")) {
            //     addStatus.options[4].toggleAttribute("disabled"); // past-due
            // }
        }
    }
});