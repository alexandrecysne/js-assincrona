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

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Alexandre", lang:"JS"},
                {name: "Ilton", lang:"Java"},
                {name: "Leandro", lang:"C#"},
                {name: "Michelle", lang:"SQÇ"}
            ])
        },3000)
    })
}

//função assincrona com async await
async function principal(){
    var usuarios = await pegarUsuarios();
    console.log(usuarios);
}

principal();