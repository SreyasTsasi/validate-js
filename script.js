const entries= [];
let tbody= document.getElementById("tbody");


class Form{
  username="";
  constructor(username) {
    this.username=username;
  }
validate() {
  if(this.username.length<4) {
    alert("Invalid");
  } else{
    alert("valid");
  }

}}

function submitHandler(event) {
  event.preventDefault();
  let data=new FormData(event.target);
  let username=data.get("username");
  entries.push(new Form(username))
  createRow();
}
function createRow(){
tbody.innerHTML="";
entries.forEach((item,index)=> {
let row=`<tr>
<td>${item.username}</td>
<td><button onclick ="entries[${index}].validate()">Validate</button></td></tr>`                                                 

tbody.innerHTML += row;

})
}
