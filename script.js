var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["children"] = document.getElementById("children").value;
    formData["position"] = document.getElementById("position").value;
    formData["experience"] = document.getElementById("experience").value;
    formData["organization"] = document.getElementById("organization").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.children;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.position;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.experience;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.organization;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("children").value = "";
    document.getElementById("position").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("organization").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("children").value = selectedRow.cells[2].innerHTML;
    document.getElementById("position").value = selectedRow.cells[3].innerHTML;
    document.getElementById("experience").value = selectedRow.cells[4].innerHTML;
    document.getElementById("organization").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.children;
    selectedRow.cells[3].innerHTML = formData.position;
    selectedRow.cells[4].innerHTML = formData.experience;
    selectedRow.cells[5].innerHTML = formData.organization;
}
function onDelete(td) {
    if (confirm('Вы уверены, что хотите удалить эту запись ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameError").classList.contains("hide"))
            document.getElementById("fullNameError").classList.add("hide");
    }
    return isValid;
}