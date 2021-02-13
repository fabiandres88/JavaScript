/*Descripción del problema: Un profesor debe calcular el promedio de la nota de quices de sus estudiantes para subirla a
la plataforma de notas finales. Sin embargo, el profesor acordó con sus estudiantes que los ayudará eliminando la peor
de las 5 notas antes de calcular el promedio que finalmente reportará. Adicionalmente, el profesor se ha dado cuenta qué
las notas registradas en su planilla se encuentran en una escala de números enteros de 0 a 100 pero la plataforma está
diseñada para recibir el promedio únicamente en la escala estándar de la universidad: de 0 a 5, redondeado a dos
decimales.
Escriba una función qué reciba cómo parámetros: una cadena con el código alfanumérico del estudiante y cinco números
enteros (note1, note2, note3, note4, note5) que representan las notas de los quices del semestre y retorne una cadena
de caracteres que le proporciona al profesor la información que desea obtener. La cadena debe tener la siguiente
estructura: "El promedio ajustado del estudiante {código} es: {promedio}" dónde, el promedio reportado debe cumplir
con las especificaciones mencionadas anteriormente (redondeado a dos decimales, en escala de 0 a 5 y calculado
eliminando la peor de las cinco notas del estudiante).*/


//Data: Students List

var stud = [
	{id: 1, name: "Juan", note1: 97, note2: 98, note3:97, note4:86, note5:98},
	{id: 2, name: "Roberto", note1: 95, note2: 98, note3:96, note4:97, note5:95},
	{id: 3, name: "Alex", note1: 99, note2: 94, note3:96, note4:98, note5:93},
	{id: 4, name: "Jairo", note1: 97, note2: 91, note3:94, note4:96, note5:98},
	{id: 5, name: "Juana", note1: 91, note2: 91, note3:91, note4:96, note5:98},
	{id: 6, name: "Ruben", note1: 97, note2: 98, note3:97, note4:86, note5:98},
	{id: 7, name: "Carolina", note1: 100, note2: 98, note3:96, note4:97, note5:95},
	{id: 8, name: "Pedro", note1: 99, note2: 94, note3:96, note4:98, note5:93},
	{id: 9, name: "Mateo", note1: 97, note2: 91, note3:94, note4:96, note5:98},
	{id: 10, name: "Pablo", note1: 100, note2: 91, note3:91, note4:96, note5:98},
	{id: 11, name: "Matias", note1: 97, note2: 98, note3:100, note4:86, note5:98},
	{id: 12, name: "Raul", note1: 95, note2: 98, note3:96, note4:97, note5:95},
	{id: 13, name: "Andres", note1: 100, note2: 94, note3:96, note4:98, note5:93},
	{id: 14, name: "Sofia", note1: 97, note2: 100, note3:94, note4:96, note5:98},
	{id: 15, name: "Luisa", note1: 91, note2: 91, note3:91, note4:96, note5:98},
];

class finalSt {
constructor (id, name, note1, note2, note3, note4) {
	this.id = id;
	this.name = name;
	this.note1 = note1;
	this.note2 = note2;
	this.note3 = note3;
	this.note4 = note4;
};
};

//Setting array to fill up with greatest degrees
 
var studFinalist = [];

function sortArray () {

for(let i = 0; i < stud.length; i ++) {

if(stud[i].note1 <= stud[i].note2 && stud[i].note1 <= stud[i].note3
	&& stud[i].note1 <= stud[i].note4 && stud[i].note1 <= stud[i].note5) {

	var studentUp = new finalSt(stud[i].id, stud[i].name,stud[i].note2, stud[i].note3, stud[i].note4, stud[i].note5);
	studFinalist.push(studentUp);
	
}else if(stud[i].note2 <= stud[i].note1 && stud[i].note2 <= stud[i].note3
	&& stud[i].note2 <= stud[i].note4 && stud[i].note2 <= stud[i].note5) {
 
	var studentUp = new finalSt(stud[i].id, stud[i].name,
	stud[i].note1, stud[i].note3, stud[i].note4, stud[i].note5);
	studFinalist.push(studentUp);

}else if(stud[i].note3 <= stud[i].note1 && stud[i].note3 <= stud[i].note2
	&& stud[i].note3 <= stud[i].note4 && stud[i].note3 <= stud[i].note5) {

	studentUp = new finalSt(stud[i].id, stud[i].name,
	stud[i].note1, stud[i].note2, stud[i].note4, stud[i].note5);
	studFinalist.push(studentUp);

}else if(stud[i].note4 <= stud[i].note1 && stud[i].note4 <= stud[i].note2
	&& stud[i].note4 <= stud[i].note3 && stud[i].note4 <= stud[i].note5)  {

	studentUp = new finalSt(stud[i].id, stud[i].name,
	stud[i].note1, stud[i].note2, stud[i].note3, stud[i].note5);
	studFinalist.push(studentUp);

}else if(stud[i].note5 <= stud[i].note1 && stud[i].note5 <= stud[i].note2
	&& stud[i].note5 <= stud[i].note3 && stud[i].note5 <= stud[i].note4) {
 
	studentUp = new finalSt(stud[i].id, stud[i].name,
	stud[i].note1, stud[i].note2, stud[i].note3, stud[i].note4);
	studFinalist.push(studentUp);

}	

	};
};

sortArray();

function finalArray () {

	for(let i=0; i < studFinalist.length; i++) {
	console.log("Code: "+stud[i].id+" Note 1: "+stud[0].note1+" Note 2: "+stud[0].note2+
	" Note 3: "+stud[0].note3+" Nota 4: "+stud[0].note4+" Note 5: "+stud[0].note5+" The final average for student wtth id "+
	stud[i].id+" is: "+(((((studFinalist[i].note1+studFinalist[i].note2+studFinalist[i].note3+studFinalist[i].note4)/4)/100)*5).toFixed(2))
 );
	
}

};