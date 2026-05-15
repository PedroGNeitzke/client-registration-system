const inputname = document.getElementById('inputname');
const inputemail = document.getElementById('inputemail');
const inputphone = document.getElementById('inputphone');
const signup = document.getElementById('signup');
const clientsContainer = document.getElementById('clients-container');
const clients = [];


signup.addEventListener('click', () => {

    const name = inputname.value;
    const email = inputemail.value;
    const phone = inputphone.value;
    
    const emailExists = clients.find(
        client => client.email === email
    )

    const phoneExists = clients.find(
        client => client.phone === phone
    )

    if (email === "" || name === "" || phone === "") {

        alert("Preencha todos os campos");

        inputname.style.border = "1px solid red";
        inputemail.style.border = "1px solid red";
        inputphone.style.border = "1px solid red";
    } 
    
    else if (emailExists) {

        alert("E-mail já cadastrado");

        inputemail.style.border = "1px solid red";

    } 
    
    else if (phoneExists) {

        alert("Telefone já cadastrado");

        inputphone.style.border = "1px solid red";
    } 
    
    else {

        const card = document.createElement('div');
        
        card.classList.add('client-card');
        
        card.innerHTML = `
            <h2>${name}</h2>
            <p>${email}</p>
            <p>${phone}</p>
            <button class="remove-btn">Remover</button>
        `

        clients.push({ name, email, phone });

        inputname.value = "";
        inputemail.value = "";
        inputphone.value = "";

        inputname.style.border = "";
        inputemail.style.border = "";
        inputphone.style.border = "";

        clientsContainer.appendChild(card);

        const button = card.querySelector('.remove-btn')

        button.addEventListener('click', () => {

            const index = clients.findIndex(
                client => client.email === email
            )
            clients.splice(index, 1);
            card.remove()

        })
    }

});