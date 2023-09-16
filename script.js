function myFunction() {
    var table = document.getElementById('gradetable');
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById('tname').value;
    cell2.innerHTML = document.getElementById('tage').value;
    cell3.innerHTML = document.getElementById('tsection').value;
}
function deleteRow() {

    document.getElementById("gradetable").deleteRow(0);
  }