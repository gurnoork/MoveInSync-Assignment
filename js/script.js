//Function To Display Popup
var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var n=1;
var x=0;
var id=1;
function AddRow()
{
    var AddRown=document.getElementById("showtable");
    var NewRow=AddRown.insertRow(n);
    list1[x] = document.getElementById("name").value;
    list2[x]=id++;
    list3[x] = document.getElementById("city").value;
    list4[x] = document.getElementById("degree").value;
    list5[x]=new Date();
    var cel1=NewRow.insertCell(0);
    var cel2=NewRow.insertCell(1);
    var cel3=NewRow.insertCell(2);
    var cel4=NewRow.insertCell(3);
    var cel5=NewRow.insertCell(4);
    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];
    cel5.innerHTML=list5[x];
    n++;
    x++;
}

//Function To Display Popup
function openform()
{
    document.getElementById("myform").style.display="block";
}
//Function to Hide Popup
function closeform()
{
    document.getElementById("myform").style.display="none";
}



