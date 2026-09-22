function login(username, password) {
    let user = username;

    if (user && password) {
        console.log("Connexion réussie");
    } else {
        console.log("Veuillez renseigner vos identifiants");
    }
}