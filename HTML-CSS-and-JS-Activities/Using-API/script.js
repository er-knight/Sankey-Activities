async function fetchData() {
    const response = await fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817");
    console.log(typeof response, response);
    const jsonData = await response.json();
    console.log(typeof jsonData, jsonData);
    const data = jsonData.data;

    let table = document.createElement("table");

    let headRow = document.createElement("tr");
    for (let field in data[0]) {
        let th = document.createElement("th");
        let text = document.createTextNode(field);
        th.setAttribute("style", "text-transform: capitalize")
        th.appendChild(text);
        headRow.appendChild(th);
    }

    table.appendChild(headRow);

    for (let i = 0; i < data.length; i++) {
        let bodyRow = document.createElement("tr");
        for (let field in data[i]) {
            let td = document.createElement("td");
            let text = document.createTextNode(data[i][field]);
            td.append(text);
            bodyRow.append(td);
        }
        table.appendChild(bodyRow);
    }

    document.body.appendChild(table);
}

fetchData();