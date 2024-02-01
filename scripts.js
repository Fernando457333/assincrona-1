const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');
//neste metodo,tanto a cidade quanto o estado vão ser imprimidos independentes
getCityFromZipcode('41256250').then(cidade => {
    console.log(cidade)
}).catch((erro) => {//com o catch podemos imprimir uma mensagem de erro
    console.log(erro)
});

getStateFromZipcode('41256250').then(uf => {
    console.log(uf);
})


//outro netodo
const cidade = getCityFronZipcode('41256258');

cidade.then(cidade => {
    console.log(cidade);
});

cidade.catch((erro) => {
    console.log(erro.mensage);
})

//neste metodo eles irão seguir uma ordem de 1º e depois 0 2º

getCityFromZipcode9('41256250').then(cidade => {
    console.log(cidade);
    getStateFromZipcode('41256250').then(uf => {
        console.log(uf)
    })
}).catch((erro) => {
    console.log(erro.mensage);
})

    //asyn / await

    (async function () {
        const cidade = await getCityFromZipcode('41256250');

        console.log(cidade);

        const estado = await getStateFromZipcode('41256250');

        console.log(estado)
    })();
// function normal
async function teste() {
    return
};

//arrow function

const teste = async () => {

};