function submitData()
{
var career=document.querySelector("#career").value;
var name=document.querySelector("#name").value;
var mobile=document.querySelector("#mobile").value;
var email=document.querySelector("#email").value;
var address=document.querySelector("#address").value;



var institute=document.querySelector("#institute").value;
var branch=document.querySelector("#branch").value;
var year=document.querySelector("#year").value;
var year2=document.querySelector("#year2").value;


var name1=document.querySelector("#name1").value;
var branch1=document.querySelector("#branch1").value;
var year1=document.querySelector("#year1").value;
var name2=document.querySelector("#name2").value;






var name3=document.querySelector("#name3").value;
var branch2=document.querySelector("#branch2").value;
var year3=document.querySelector("#year3").value;
var name4=document.querySelector("#name4").value;


var career2=document.querySelector("#career2").value;


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
  var transaction=request.transaction
  ("formdata","readwrite");
    store=transaction.objectStore("formdata");
    store.put({
      career:career,
      name:name,
      mobile:mobile,
      email:email,
      address:address,
    education:[
      {
  institute :institute,
branch:branch,
year:year,
percentage:year2
},
{
institute:name1,
branch:branch1,
year:year1,
percentage:name2
},
{
institute:name3,
branch:branch2,
year:year3,
percentage:name4
}
]

  });
}









  window.open("index.html");
}
