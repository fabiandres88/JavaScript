var x = document.getElementsByTagName("body")[0];
var newTable = document.createElement("Table");
var headerTable = document.createElement("tr");
var headTable = document.createElement("th");
var headTable1 = document.createElement("th");
var headTable2 = document.createElement("th");
var headTable3 = document.createElement("th");

headTable.innerHTML = "#";
headTable.style.color = "white";
headTable1.innerHTML = "Name";
headTable1.style.color = "white";
headTable2.innerHTML = "Id Number";
headTable2.style.color = "white";
headTable3.innerHTML = "Cellphone";
headTable3.style.color = "white";
headerTable.appendChild(headTable);
headerTable.appendChild(headTable1);
headerTable.appendChild(headTable2);
headerTable.appendChild(headTable3);
newTable.appendChild(headerTable);

var firstRow = document.createElement("tr");
var data = document.createElement("td");
var data1 = document.createElement("td");
var data2 = document.createElement("td");
var data3 = document.createElement("td");
data.innerHTML = "1";
data.style.color = "white";
data1.innerHTML = "Fabian Ramirez";
data1.style.color = "white";
data2.innerHTML = "1098665984";
data2.style.color = "white";
data3.innerHTML = "3107564105";
data3.style.color = "white";
firstRow.appendChild(data);
firstRow.appendChild(data1);
firstRow.appendChild(data2);
firstRow.appendChild(data3);
newTable.appendChild(firstRow);

var secondRow = document.createElement("tr");
var data4 = document.createElement("td");
var data5 = document.createElement("td");
var data6 = document.createElement("td");
var data7 = document.createElement("td");
data4.innerHTML = "2";
data4.style.color = "gold";
data5.innerHTML = "Carolina Jaimes";
data5.style.color = "gold";
data6.innerHTML = "1098903949";
data6.style.color = "gold";
data7.innerHTML = "3102568963";
data7.style.color = "gold";
secondRow.appendChild(data4);
secondRow.appendChild(data5);
secondRow.appendChild(data6);
secondRow.appendChild(data7);
newTable.appendChild(secondRow);

x.appendChild(newTable);