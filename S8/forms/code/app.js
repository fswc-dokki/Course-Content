var formElement = document.forms[1].uname;
const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

Array.from(document.forms[0].elements).forEach((el, idx) => {
    el.hasAttribute("required") &&
        el.addEventListener("blur", ev => {
            if (el.value === "") {
                if (!el.nextElementSibling) {
                    var errMessage = document.createElement("p");
                    errMessage.innerHTML = "Field is required!";
                    el.parentElement.append(errMessage);
                }
            } else if (el.nextElementSibling) {
                el.nextElementSibling.remove();
            }
        });
});

function validateEmail(el) {
    if (!emailPattern.test(el.value)) {
        if (!el.nextElementSibling) {
            var errMessage = document.createElement("p");
            errMessage.innerHTML = "Email is wrong!";
            el.parentElement.append(errMessage);
        }
    } else if (el.nextElementSibling) {
        el.nextElementSibling.remove();
    }
}

document.forms[0].addEventListener("submit", ev => {
    ev.preventDefault();
    console.log("Form submitted!");
});

document.getElementById("sub").addEventListener("click", ev => {
    document.forms[0].submit();
});
