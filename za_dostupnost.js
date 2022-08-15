// google search za hotel reservation:
// https://www.google.com/search?q=how+to+check+availability+react+hotel&oq=how+to+check+availability+react&aqs=chrome.1.69i57j33i160l2j33i22i29i30l7.8392j0j7&sourceid=chrome&ie=UTF-8

var dateFrom = "02/05/2013";
var dateTo = "02/09/2013";
var dateCheck = "02/07/2013";

var d1 = dateFrom.split("/");
var d2 = dateTo.split("/");
var c = dateCheck.split("/");

console.log(d1)

var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
var check = new Date(c[2], parseInt(c[1])-1, c[0]);

console.log(from)
console.log(check > from && check < to)



entered_date = 02/11/2022;

s1_zauzeta_od = 02/10/2022
s1_zauzeta_do = 02/14/2022

s2_zauzeta_od = 02/13/2022
s2_zauzeta_do = 02/18/2022

s3_zauzeta_od = 02/10/2022
s4_zauzeta_do = 02/14/2022