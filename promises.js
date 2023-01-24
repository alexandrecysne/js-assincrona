//função assincrona com promises
function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            if(!deuErro){
                //promessa OK!
                //só pode passar um parametro
                resolve({time: 4, to: "alexandre.cysne@gmail.com"}) 
            }else{
                //opa, deu erro!
                reject("Fila cheia")
            }
        },4000)
    });
}

enviarEmail("Olá mundo!","alexandre.cysne@gmail.com").then( ({time, to})=> {
    //parâmetro com desestruturação 
    console.log("Opa, você conseguiu fazer o que me prometeu!")
    console.log(`
    Time: ${time}
    --------------------
    To: ${to}
    `)
;}).catch((erro) => { //tratamento de erros em promises
    console.log("Que pena, não deu :( "+ erro);
})