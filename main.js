document.getElementById("status-color").addEventListener("click", changestatus);

function changestatus() {
    let element = document.getElementById("status-wrapper-switch");
    element.classList.contains("status-wrapper-switch") ?
        element.classList.remove('status-wrapper-switch') :
        element.classList.add('status-wrapper-switch');
}