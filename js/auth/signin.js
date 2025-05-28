const mailInput = document.getElementById("Emailinput");
const passwordInput = document.getElementById("Passwordinput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appelé l'API pour verifier les credentials en BDD
    
    if(mailInput.value == "test@mail.fr" && passwordInput.value == "123"){
        alert("vous êtes connecté");

        //il faudra récupérer le vrai token
        const token = "fsgdrgxgvdsrgrtbxvsrgrdhdbdrbdrt"
        setToken(token);
        //Placer ce token en cookie

        setCookie("role", "client", 7);

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}