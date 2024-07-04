function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };
    const serviceID = "service_1kfx6xj";
    const templateID = "recipe_newsletter";

        emailjs.send(serviceID, templateID, params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            console.log(res);
            alert("You have successfully been subscribed to our newsletter!");
        }
    )

    .catch((err) => console.log(err));
}

