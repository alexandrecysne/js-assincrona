function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(19)
        }, 1500)
    })
}

function buscarEmail(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("alexandre.cysne@gmail.com")
        }, 2000)
    })
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            if (!deuErro) {
                //promessa OK!
                //só pode passar um parametro
                resolve({ time: 4, to: "alexandre.cysne@gmail.com" })
            } else {
                //opa, deu erro!
                reject("Fila cheia")
            }
        }, 4000)
    });
}

//função assincrona com promises hell
pegarId().then((id) => {
    buscarEmail(id).then((email) => {
        enviarEmail("Olá mundo!", email).then(() => {
            console.log("Email enviado para o usuário com id: " + id);
        }).catch(err => {
            console.log(err);
        })
    })
})








