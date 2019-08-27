
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
    </div>`

    document.getElementById("output").innerHTML = output;
}

document.getElementById("app").innerHTML = template;
