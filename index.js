let trait = function(label, description){
    return `<div class="trait-div">
        <label for=${label}>${description}</label>
        <input type="textbox" name=${label} id=${label}>
    </div>`
}

let template = `<div class="traits-container">
    
    <div class="button-div">
    <button onClick="setMinor()">Minor</button>
    <button onClick="setMedium()">Medium</button>
    <button onClick="setModerate()">Moderate</button>
    <button onClick="setMajor()">Major</button>
    <button onClick="setColossal()">Colossal</button>
    </div>    
    
    ${trait("name", "Name")}
    ${trait("primary", "Primary Pool")}
    ${trait("secondary", "Secondary Pool")}
    ${trait("desperation", "Desperation Pool")}
    ${trait("enhancement", "Enhancement")}
    ${trait("defense", "Defense")}
    ${trait("health", "Health")}
    ${trait("edges", "Edges")}
    ${trait("source", "Source")}
    ${trait("powers", "Powers")}
    <div class="button-div">
        <button onClick="prettify()">Format</button>
        <button onClick="clearInput()">Clear Input</button>
        <button onClick="clearAll()">Clear All</button>
    </div>
</div>`

let getter = function(target){
    let value = document.getElementById(target).value;
    var regex = /\*/gi;
    return value.replace(regex, "•");
}


let prettify = function(){
    let output = `<div>
        <b>${getter("name")}</b><br />
        <b>Primary Pool: </b> ${getter("primary")}<br />
        <b>Secondary Pool: </b> ${getter("secondary")}<br />
        <b>Desperation Pool: </b> ${getter("desperation")}<br />
        <b>Enhancement: </b> ${getter("enhancement")}<br />
        <b>Defense: </b> ${getter("defense")}<br />
        <b>Health: </b> ${getter("health")}<br />
        <b>Edges: </b> ${getter("edges")}<br />
        <b>Source: </b> ${getter("source")}<br />
        <b>Powers: </b> ${getter("powers")}<br />
        <br />
    </div>`

    document.getElementById("output").innerHTML += output;
}

let clearAll = function(){
    if (confirm("Are you sure you want to clear the entire page?")) {
        document.getElementById("output").innerHTML = "";        
    }
}

let clearInput = function(){
    if (confirm("Are you sure you want to clear the input fields?")) {
        document.getElementById("name").value = "";
        document.getElementById("primary").value = "";
        document.getElementById("secondary").value = "";
        document.getElementById("desperation").value = "";
        document.getElementById("enhancement").value = "";
        document.getElementById("defense").value = "";
        document.getElementById("health").value = "";
        document.getElementById("edges").value = "";
        document.getElementById("source").value = "";
        document.getElementById("powers").value = "";
    }
}

let setMinor = function(){
    //if (confirm("Are you sure you want to clear the input fields?")) {
        document.getElementById("name").value = "";
        document.getElementById("primary").value = "6 (";
        document.getElementById("secondary").value = "4 (";
        document.getElementById("desperation").value = "2";
        document.getElementById("enhancement").value = "0";
        document.getElementById("defense").value = "3";
        document.getElementById("health").value = "3";
        document.getElementById("edges").value = "4 dots";
        document.getElementById("source").value = "Quantum ** (20 Quantum points)";
        document.getElementById("powers").value = "2 dots";
    //}
}

let setMedium = function(){
    //if (confirm("Are you sure you want to clear the input fields?")) {
        document.getElementById("name").value = "";
        document.getElementById("primary").value = "7 (";
        document.getElementById("secondary").value = "5 (";
        document.getElementById("desperation").value = "3";
        document.getElementById("enhancement").value = "1";
        document.getElementById("defense").value = "3";
        document.getElementById("health").value = "4";
        document.getElementById("edges").value = "5 dots";
        document.getElementById("source").value = "Quantum *** (25 Quantum points)";
        document.getElementById("powers").value = "3 dots";
    //}
}

let setModerate = function(){
    //if (confirm("Are you sure you want to clear the input fields?")) {
        document.getElementById("name").value = "";
        document.getElementById("primary").value = "8 (";
        document.getElementById("secondary").value = "6 (";
        document.getElementById("desperation").value = "4";
        document.getElementById("enhancement").value = "2";
        document.getElementById("defense").value = "4";
        document.getElementById("health").value = "5";
        document.getElementById("edges").value = "6 dots";
        document.getElementById("source").value = "Quantum **** (30 Quantum points)";
        document.getElementById("powers").value = "4 dots";
    //}
}

let setMajor = function(){
    //if (confirm("Are you sure you want to clear the input fields?")) {
        document.getElementById("name").value = "";
        document.getElementById("primary").value = "9 (";
        document.getElementById("secondary").value = "7 (";
        document.getElementById("desperation").value = "5";
        document.getElementById("enhancement").value = "4";
        document.getElementById("defense").value = "4";
        document.getElementById("health").value = "6";
        document.getElementById("edges").value = "7 dots";
        document.getElementById("source").value = "Quantum ***** (35 Quantum points)";
        document.getElementById("powers").value = "5 dots";
    //}
}


let setColossal = function(){
    //if (confirm("Are you sure you want to clear the input fields?")) {
        document.getElementById("name").value = "";
        document.getElementById("primary").value = "10 (";
        document.getElementById("secondary").value = "8 (";
        document.getElementById("desperation").value = "6";
        document.getElementById("enhancement").value = "5";
        document.getElementById("defense").value = "5";
        document.getElementById("health").value = "8";
        document.getElementById("edges").value = "8 dots";
        document.getElementById("source").value = "Quantum ***** * (40 Quantum points)";
        document.getElementById("powers").value = "6 dots";
    //}
}

/*
let saveOld = function(){

    let saveInput = function(keyName){
        window.localStorage.setItem(keyName, getter(keyName));
    }

    saveInput("name");
    saveInput("primary");
    saveInput("secondary");
    saveInput("desperation");
    saveInput("enhancement");
    saveInput("defense");
    saveInput("health");
    saveInput("edges");
    saveInput("source");
    saveInput("powers");
}

let loadOld = function(){

    let loadInput = function(keyName){
        document.getElementById(keyName).value = window.localStorage.getItem(keyName);
    }
    
    loadInput("name");
    loadInput("primary");
    loadInput("secondary");
    loadInput("desperation");
    loadInput("enhancement");
    loadInput("defense");
    loadInput("health");
    loadInput("edges");
    loadInput("source");
    loadInput("powers");
}
*/

document.getElementById("app").innerHTML = template;
//loadOld();