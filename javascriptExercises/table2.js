var x = document.getElementsByTagName("body")[0];

var data = [
    { name: "Juancho Carrancho", idNumber: 1000000990, cellPhone: "3002305690", url: "www.test.com.co" },
    { name: "Pepito Perez", idNumber: 11000002800, cellPhone: "3052369630", url: "www.example.edu.co" },
    { name: "Juancho Carrancho", idNumber: 1000000990, cellPhone: "3002305690", url: "www.test.com.co" },
    { name: "Pepito Perez", idNumber: 11000002800, cellPhone: "3052369630", url: "www.example.edu.co" },
    { name: "Juancho Carrancho", idNumber: 1000000990, cellPhone: "3002305690", url: "www.test.com.co" },
    { name: "Pepito Perez", idNumber: 11000002800, cellPhone: "3052369630", url: "www.example.edu.co" },
    { name: "Juancho Carrancho", idNumber: 1000000990, cellPhone: "3002305690", url: "www.test.com.co" },
    { name: "Pepito Perez", idNumber: 11000002800, cellPhone: "3052369630", url: "www.example.edu.co" },
    { name: "Juancho Carrancho", idNumber: 1000000990, cellPhone: "3002305690", url: "www.test.com.co" },
    { name: "Pepito Perez", idNumber: 11000002800, cellPhone: "3052369630", url: "www.example.edu.co" },
    { name: "Juancho Carrancho", idNumber: 1000000990, cellPhone: "3002305690", url: "www.test.com.co" },
    { name: "Pepito Perez", idNumber: 11000002800, cellPhone: "3052369630", url: "www.example.edu.co" },
    { name: "Juancho Carrancho", idNumber: 1000000990, cellPhone: "3002305690", url: "www.test.com.co" },
];

var newTable = document.createElement("Table");
var headerTable = document.createElement("tr");

var headersTable = ["#", "Name", "Id Number", "Cellphone", "URL"];

for (let i = 0; i <= headersTable.length - 1; i++) {
    var setHd = document.createElement("th");
    setHd.innerHTML = headersTable[i];
    setHd.style.color = "gold";
    headerTable.appendChild(setHd);
    newTable.appendChild(headerTable);
};

for (let j = 0; j <= data.length - 1; j++) {
    var newRow = document.createElement("tr");
    var setCol = document.createElement("th");
    setCol.innerHTML = j + 1;
    setCol.style.color = "white";
    newRow.appendChild(setCol);
    var setCol1 = document.createElement("th");
    setCol1.innerHTML = (data[j].name);
    setCol1.style.color = "white";
    newRow.appendChild(setCol1);
    var setCol2 = document.createElement("th");
    setCol2.innerHTML = (data[j].idNumber);
    setCol2.style.color = "white";
    newRow.appendChild(setCol2);
    var setCol3 = document.createElement("th");
    setCol3.innerHTML = (data[j].cellPhone);
    setCol3.style.color = "white";
    newRow.appendChild(setCol3);
    var setCol4 = document.createElement("th");
    var setUrl = document.createElement("a");
    setUrl.setAttribute("href", "data[j].url");
    setUrl.innerHTML = (data[j].url);
    setUrl.style.color = "lightBlue";
    setCol4.appendChild(setUrl);
    newRow.appendChild(setCol4);

    newTable.appendChild(newRow);
};

x.appendChild(newTable);
