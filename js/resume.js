var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
para=query[i].substring(1).split("=");
paravalue=parseInt(para[1]);

}
var idb=window.indexedDB||window.msIndexedDB||window.webkitIndexedDB;
if(!idb in window)
{
  console.log("indexDB is not supported");
}
  var open=idb.open("storeData",1);
  console.log("indexDB is created");

open.onupgradeneeded=function(e){
var request=e.target.result;
var store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}


open.onerror=function(error){
  console.log("error is occured");
}

open.onsuccess=function(ert)
{
  request=ert.target.result;
  var transaction=request.transaction("formdata","readwrite");
    store=transaction.objectStore("formdata");

var info=store.get(paravalue);
info.onsuccess=function(data){
  console.log(data);
  personalinfo(data.target.result);
}
  }
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="images/heman.jpg";
  image.alt=pi.name;
  left.append(image);

  var name=document.createElement("h3");
  name.textContent=pi.name;
  left.append(name);

  var mobile=document.createElement("h3");
  mobile.textContent=pi.mobile;
  left.append(mobile);


  var email=document.createElement("h3");
  email.textContent=pi.email;
  left.append(email);


  var address=document.createElement("h3");
  address.textContent=pi.address;
  left.append(address);



  var head15=document.createElement("h3");
  head15.textContent="Carrier Objective";
  right.append(head15);
var head18=document.createElement("hr");
right.append(head18);

var head11=document.createElement("h3");
head11.textContent="Education Details";
right.append(head11);


var head19=document.createElement("hr");
right.append(head19);
var table=document.createElement("table");
table.border="1";
var tr1="<tr><th> institution </th><th>  branch  </th><th> year of passing</th><th>percentage</th></tr>";
var tr2="";
for(var i in pi.education){
tr2=tr2+"<tr><td>"+pi.education[i]. institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].year+"</td><td>"+pi.education[i].percentage+"</td></tr>";
}
table.innerHTML=(tr1+tr2);
right.append(table);


var head16=document.createElement("h3");
head16.textContent="Skills";
right.append(head16);

var head20=document.createElement("hr");
right.append(head20);


var career2=document.createElement("h3");
career2.textContent=pi.address;
right.append(career2);
}
