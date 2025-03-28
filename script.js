const inputElem = document.getElementById("input")
const button = document.getElementById("btn")
const output = document.getElementById("output")

button.addEventListener("click", ()=>{
    if (inputElem.value === ""){
        alert("Type in a valid plan")
    }else{
        const inputVal = inputElem.value;
        const li = document.createElement("li");
        li.innerText = inputVal;
        output.appendChild(li);
        const span = document.createElement("span");
        span.innerText = "\u00d7"
        li.appendChild(span)
    }
    inputElem.value = "";
})

output.addEventListener("click", (e)=> {
    if(e.target.tagName === "LI"){
        e.target.classL.toggle("check")
    }
})