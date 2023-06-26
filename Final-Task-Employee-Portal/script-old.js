const employeeDetailsStore = {
    1: {"name": "Harry", "age": 18, "gender": "male" },
    2: {"name": "Ron", "age": 19, "gender": "male"},
    3: {"name": "Hermione", "age": 19, "gender": "female"},
    4: {"name": "James", "age": 40, "gender": "male"},
    5: {"name": "Lily", "age": 39, "gender": "female"}
};

let usedIds = new Set();
for (let id in employeeDetailsStore) {
    usedIds.add(parseInt(id, 10));
}

function nextUnusedId() {
    let id = 1;
    while (usedIds.has(id)) {
        id++;
    }
    return id;
}

function showEditForm(id) {

    document.getElementsByClassName("h1-wrapper")[0].style["pointer-events"] = "none";
    document.getElementsByClassName("add-form-wrapper")[0].style["pointer-events"] = "none";
    document.getElementsByClassName("details-wrapper")[0].style["pointer-events"] = "none";
    document.body.style.overflow = "hidden";

    const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
    editDetailsFormOverlay.style.display = "flex";

    console.log(`from showEditForm: ${id}`);

    const editDetailsForm = document.forms["edit-details-form"];

    editDetailsForm["edit-employee-id"].setAttribute("placeholder", id);
    editDetailsForm["edit-employee-id"].setAttribute("value", id);

    editDetailsForm["edit-employee-name"].setAttribute("placeholder", employeeDetailsStore[id]["name"]);
    editDetailsForm["edit-employee-name"].setAttribute("value", employeeDetailsStore[id]["name"]);

    editDetailsForm["edit-employee-age"].setAttribute("placeholder", employeeDetailsStore[id]["age"]);
    editDetailsForm["edit-employee-age"].setAttribute("value", employeeDetailsStore[id]["age"]);

    editDetailsForm["edit-employee-gender"].setAttribute("placeholder", employeeDetailsStore[id]["gender"]);
    if (!editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-${employeeDetailsStore[id]["gender"]}`].hasAttribute("selected")) {
        editDetailsForm["edit-employee-gender"].options[`edit-employee-gender-${employeeDetailsStore[id]["gender"]}`].toggleAttribute("selected");
    }

    editDetailsForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const newId = parseInt(editDetailsForm["edit-employee-id"].value, 10);
        const employeeDetails = {
            "name": editDetailsForm["edit-employee-name"].value,
            "age": parseInt(editDetailsForm["edit-employee-age"].value, 10),
            "gender": editDetailsForm["edit-employee-gender"].value
        };

        if (newId != id) {
            if (usedIds.has(newId)) {
                const idField = document.getElementById("edit-employee-id");
                idField.setCustomValidity(`Please used another number. (Suggested: ${nextUnusedId()})`);
                idField.reportValidity();
                return;
            }
            usedIds.delete(id);
            delete employeeDetailsStore[id];
        }
        employeeDetailsStore[newId] = employeeDetails;
        usedIds.add(newId);

        renderTable();

        document.getElementsByClassName("h1-wrapper")[0].style["pointer-events"] = "";
        document.getElementsByClassName("add-form-wrapper")[0].style["pointer-events"] = "";
        document.getElementsByClassName("details-wrapper")[0].style["pointer-events"] = "";
        document.body.style.overflow = "";

        editDetailsFormOverlay.style.display = "none";

    });

    const cancalButton = document.getElementsByClassName("cancel-button")[0];
    cancalButton.addEventListener("click", function(event) {
        editDetailsFormOverlay.style.display = "none";
    })

    document.getElementsByClassName("h1-wrapper")[0].style["pointer-events"] = "";
    document.getElementsByClassName("add-form-wrapper")[0].style["pointer-events"] = "";
    document.getElementsByClassName("details-wrapper")[0].style["pointer-events"] = "";
    document.body.style.overflow = "";
}

function renderMessage() {
    const table = document.getElementsByClassName("details-table")[0];

    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
    console.log(table.childNodes);

    let tr = document.createElement("tr");
    let td = document.createTextNode("No data to display!");
    tr.appendChild(td);
    table.appendChild(tr);
}

function renderTable() {

    const table = document.getElementsByClassName("details-table")[0];

    function renderHeader() {
        const headers = ["Id", "Name", "Age", "Gender", "Action"];
        const tr = document.createElement("tr");
        for (let header of headers) {
            const th = document.createElement("th");
            const text = document.createTextNode(header);
            th.appendChild(text);
            tr.appendChild(th);
        }
        table.replaceChildren(tr);
    };
    renderHeader();


    for (let id in employeeDetailsStore) {

        const employeeDetails = employeeDetailsStore[id];

        const tr = document.createElement("tr");

        function renderId() {
            const td = document.createElement("td");
            const text = document.createTextNode(id);
            td.appendChild(text);
            tr.appendChild(td);    
        }
        renderId();

        for (let key in employeeDetails) {
            const td = document.createElement("td");
            const text = document.createTextNode(employeeDetails[key]);
            td.appendChild(text);
            if (key === "gender") {
                td.setAttribute("style", "text-transform: capitalize");
            }
            tr.appendChild(td);
        }

        const td = document.createElement("td");
        td.setAttribute("class", "action-buttons")

        function renderEditButton() {
            const div = document.createElement("div");
            div.setAttribute("class", "button-wrapper");
            const button = document.createElement("button");
            button.setAttribute("class", "edit-button");
            button.setAttribute("id", id);
            button.innerText = "Edit";
            button.addEventListener("click", function (event) {
                const id = parseInt(button.getAttribute("id"), 10);
                console.log(id);
                showEditForm(id);
            });
            div.appendChild(button);
            td.appendChild(div);
        }
        renderEditButton();

        function renderDeleteButton() {
            const div = document.createElement("div");
            div.setAttribute("class", "button-wrapper");
            const button = document.createElement("button");
            button.setAttribute("class", "delete-button");
            button.setAttribute("id", id);
            button.innerText = "Delete";
            button.addEventListener("click", function (event) {
                const id = parseInt(button.getAttribute("id"), 10);
                usedIds.add(id);
                delete employeeDetailsStore[id];
                if (Object.keys(employeeDetailsStore).length === 0) {
                    renderMessage();
                } else {
                    renderTable();
                }
            });
            div.appendChild(button);
            td.appendChild(div);
        }
        renderDeleteButton();

        tr.appendChild(td);
        table.appendChild(tr);
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    const editDetailsFormOverlay = document.getElementsByClassName("edit-form-overlay")[0];
    editDetailsFormOverlay.style.display = "none";

    // don't show table headers if their is no data
    console.log("DOM content loaded!");
    if (Object.keys(employeeDetailsStore).length === 0) {
        renderMessage();
    } else {
        renderTable();
    }
});

const addDetailsForm = document.forms["add-details-form"];

addDetailsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = parseInt(addDetailsForm["add-employee-id"].value, 10);

    console.log(id);

    const employeeDetails = {
        "name": addDetailsForm["add-employee-name"].value,
        "age": parseInt(addDetailsForm["add-employee-age"].value, 10),
        "gender": addDetailsForm["add-employee-gender"].value
    };

    if (usedIds.has(id)) {
        const idField = document.getElementById("add-employee-id");
        idField.setCustomValidity(`Please used another number. (Suggested: ${nextUnusedId()})`);
        idField.reportValidity();
        return;
    }

    employeeDetailsStore[id] = employeeDetails;
    usedIds.add(id);

    renderTable();
});