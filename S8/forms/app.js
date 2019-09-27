function submitHandler(e) {
    e.preventDefault();
    var formObj = {
        uname: this.uname.value,
        pass: this.pass.value,
        gender: this.gender.value
    };
    console.dir(formObj);
}

function changeHandler(e) {
    e.preventDefault();
    if (!validate(e.target)) showError(e.target);
}

function validate(el) {
    if (el.hasAttribute("required") && el.value === "") return false;
    return true;
}

function validateEmail(email) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}

function showError(el) {
    if (!el.nextElementSibling) {
        var message = document.createElement("p");
        message.innerHTML = "Field is Required";
        el.insertAdjacentElement("afterend", message);
    }
}

Array.from(document.forms).forEach(form => {
    form.addEventListener("submit", submitHandler.bind(form));

    Array.from(form.elements).forEach(el =>
        el.addEventListener("blur", changeHandler)
    );
});
