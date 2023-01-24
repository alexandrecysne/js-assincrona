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
/*
pegarId().then((id) => {
    buscarEmail(id).then((email) => {
        enviarEmail("Olá mundo!", email).then(() => {
            console.log("Email enviado para o usuário com id: " + id);
        }).catch(err => {
            console.log(err);
        })
    })
})
*/

//convert função assincrona promises hell (acima) para async await
async function principal() {
    //síncrona
    var id = await pegarId();
    //síncrona
    var email = await buscarEmail(id);
    //assíncrona
    enviarEmail("olá, como vai? ", email).then(() => {
        console.log("email enviado!")
    }).catch((err) => {
        console.log(err);
    })
}

//principal();

//convert função assincrona promises hell (acima) para async await (try catch)
async function principal2() {
    //síncrona
    var id = await pegarId();
    //síncrona
    var email = await buscarEmail(id);
    //síncrona
    try {
        await enviarEmail("olá, como vai? ", email);
        console.log("Email enviado com sucesso!");
    } catch (err) {
        console.log('opa, deu erro! ' + err)
    }
}

principal2();



