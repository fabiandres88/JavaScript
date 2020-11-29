/* Getting job oppotunities from:
https://www.arrivia.com/careers/job-openings/ */

var jobs = document.getElementsByClassName("row job-search-result");
var arrayJobs = [];
class opportunity {
	constructor(title, url, location) {
		this.title = title;
		this.url = url;
		this.location = location;
	}
}

(function table() {
	for (let i = 0; i <= jobs.length - 1; i++) {
		let title = jobs[i].firstChild.firstChild.innerHTML;;
		let url = jobs[i].firstChild.nextSibling.firstChild.href;;
		let location = jobs[i].firstChild.lastChild.innerHTML;
		let newJob = new opportunity(title, url, location);
		arrayJobs.push(newJob);
	}
	return arrayJobs;
})();
console.log(arrayJobs);

var x = document.getElementsByTagName("body")[0];

var test = document.createElement("p");
test.innerHTML = "TEST : FABIAN ANDRES RAMIREZ VELA";
test.style.background ="black";
test.style.color ="white";
x.appendChild(test);

var title = document.createElement("p");
title.innerHTML = "JOBS"
x.appendChild(title);

var headers = ['#', 'job title', 'location', 'job URL'];
(function createTable() {
	
	const table = document.createElement("table");
	
	const hrow = table.insertRow();
	for (let heading of headers) {
		hrow.insertCell(-1).outerHTML = `<th>${heading}</th>`;
	}
	
	for (let i = 0; i <= arrayJobs.length - 1; i++) {
		var drow = table.insertRow(-1);			
		drow.insertCell(-1).appendChild(document.createTextNode(i + 1));
		drow.insertCell(-1).appendChild(document.createTextNode(arrayJobs[i].title));
		drow.insertCell(-1).appendChild(document.createTextNode(arrayJobs[i].location));
		drow.insertCell(-1).appendChild(document.createTextNode(arrayJobs[i].url));
		
	}
	x.append(table);
})()
