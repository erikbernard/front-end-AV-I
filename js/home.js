
setTimeout(() => {
    openModal()
}, 100);

function openModal(){
    var modal = document.getElementById("credito");
    var btn = document.getElementById("btnCreditos");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function submitForm(event){
    id = Math.floor(Math.random() * 10000) + 1;
    event.preventDefault();
    let name = document.dados.name.value;
    let mensg = document.dados.mensg.value;

    var date = new Date();
    var time = `${date.getHours()}:`+`${date.getMinutes()}`;
    var conteine = document.createElement("DIV");
    conteine.id = `${id}`;

    var view = document.querySelector("#view");

    var mensContent = document.createElement("DIV");
    mensContent.classList.add("view");

    var span = document.createElement("span");
    span.innerHTML = mensg;

    var spanName = document.createElement("span");
    spanName.innerHTML = `${name} - ${time}`;

    var imgClose = document.createElement("img");
    imgClose.src = "./img/btn-close.svg";

    document.getElementById("form").reset();
    imgClose.onclick = function(event){
        let idEvent = event.path[2].id;
        let viewList = document.getElementById("view");
        for (const i of viewList.children) {
            if(i.id == idEvent){
                document.getElementById(idEvent).remove();
            }
            continue;
        }
    }

    mensContent.appendChild(span);
    mensContent.appendChild(imgClose);

    conteine.appendChild(spanName);
    conteine.appendChild(mensContent);
    view.appendChild(conteine);
}