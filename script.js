const form = document.querySelector('#account-form');

function validatePass(form){
    if(form.password-box.value !== form.confirmPassword-box.value){
        alert("HELKP")
    }
}

