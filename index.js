//TODO: Make this read from an array of objects containing name and description


let trait = function(label, description){
    return `<div class="trait-div">
        <label for=${label}>${description}</label>
        <input type="textbox" name=${label} id=${label}>
    </div>`
}

let template = `<div class="traits-container">
    <div class="trait-div">
        <div>Trait</div>
        <div>Pool / Description</div>
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
    <div class="trait-div">
        <button onClick="prettify()">Format</button>
        <button onClick="clearInput()">Clear Input</button>
        <br /><button onClick="clearAll()">Clear All</button>
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
    saveOld();
}

let clearAll = function(){
    if (confirm("Are you sure you want to clear the entire page?")) {
        saveOld();
        document.getElementById("output").innerHTML = "";        
    }
}

let clearInput = function(){
    if (confirm("Are you sure you want to clear the input fields?")) {
        saveOld();
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

document.getElementById("app").innerHTML = template;
loadOld();