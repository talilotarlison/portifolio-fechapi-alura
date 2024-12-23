// Exemplo simples de interatividade

document.addEventListener('DOMContentLoaded', function () {
    // Adicione qualquer código JavaScript que você deseja executar ao carregar a página.
    console.log('Página carregada!');
});

// modulo fetch 1

async function carregaDadosGithubPorUsuario(user) {
    const URL = `https://api.github.com/users/${user}`;
    let data = await fetch(URL);
    return data.json();
}

async function carregaDadosGithubPorUsuarioRepositorio(user) {
    const URLREPOS = `https://api.github.com/users/${user}/repos`
    let dataRepos = await fetch(URLREPOS)
    return dataRepos.json();
}

Promise.all([carregaDadosGithubPorUsuario("nadiaaoliverr"),
carregaDadosGithubPorUsuarioRepositorio("nadiaaoliverr")])
    .then((valores) => {
        userGitHub(valores[0]);
        userGitHubRepositorio(valores[1])
    })
    .catch(error => {
        throw new Error(error);
    })
    .finally(
        console.log("Finalizado com sucesso!")
    )

// dados na tela do usuario


function userGitHub(user) {
    console.log(user)
    let dadosUser = document.getElementById("user")
    dadosUser.innerHTML = `<h2> ${user.name}</h2>
                          <p> ${user.bio}</p>
                `
}


function userGitHubRepositorio(user) {
    console.log(user)
    let dadosUserRepositorio = document.getElementById("servicos")
    //map 

    function meuPropioMap(array, funcao) {
        let novoArray = []

        array.forEach(element => {
            // console.log( element.name)
            novoArray.push(funcao(element))
        });

        return novoArray;
    }


    let dados = meuPropioMap(user, (repositorio) => {
        return `<li>
                    <a href=${repositorio.html_url}>
                        <h3> ${repositorio.name}</h3> 
                    </a>
                    <p>  ${repositorio.description || "Sem Descricao "}</hp>
                    <p> Linguagem:  ${repositorio.language || "Sem Linguagem "}</hp> 
            </li>`
    })

    dadosUserRepositorio.innerHTML += dados.join(" ")
}



// modulo fetch 2

// async function carregaDadosGithubPorUsuario(user) {
//     const URL = `https://api.github.com/users/${user}`;
//     const URLREPOS = `https://api.github.com/users/${user}/repos`;

//     let data = await fetch(URL);
//     let dataRepos = await fetch(URLREPOS);

//     return {
//         user: await data.json(),
//         repos: await dataRepos.json()
//     };
// }

// Chama a função uma vez e resolve os dados de usuário e repositórios


// carregaDadosGithubPorUsuario("nadiaaoliverr")
//     .then((valores) => {
//         console.log(valores);
//     })
//     .catch(e => {
//         console.error("Erro:", e);
//     })
//     .finally(() => {
//         console.log("Finalizado com sucesso!");
//     });



// objetos javascript
const obj = {
    nome: 'Hugo',
    idade: 23,
    estado: 'SP'
}

const { nome, idade, estado } = obj

console.log(nome, idade, estado)


function useStats(valor, soma) {
    valorInical = valor
    valorAtual = soma(valor)
    return {
        valor: valor,
        soma: valorAtual
    }
}

const { valor, soma } = useStats(10, (e) => e + 1)

console.log(soma, valor)

