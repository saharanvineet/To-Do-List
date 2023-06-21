const listcontainer = document.getElementById("list-container");
const input=document.getElementById("input-box");

function action() {
    if (input.value==='') {
        alert("Please add some task !")
    }
    else{
        // let v = localStorage.setItem(input.value);
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
        savedata()
    }
    input.value='';
}

listcontainer.addEventListener("click",function (e) {
         if (e.target.tagName==="LI") {
            e.target.classList.toggle("checked");
            savedata();
        }      
        else if (e.target.tagName==="SPAN") {
            e.target.parentElement.remove();
            savedata();
         }
},false)

function savedata() {
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask() {
    listcontainer.innerHTML=localStorage.getItem("data");
}

showtask();