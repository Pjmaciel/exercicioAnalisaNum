//Array Global para armazenar os numeros
const numeros = [];
const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


function addnumber(numb){
    if(numb <= 0 || numb > 100 ){
        window.alert("Campo invalido! Digite Numero entre 1 e 100!")
    }else{
        const inlist = numeros.indexOf(numb) !== -1;// -1 quer dizer que nao existe ou False
        if (inlist) {
            window.alert("Este número já foi adicionado.");
            return; // Sai da função para evitar a adição duplicada
        }
        numeros.push(numb);
        const tab = document.querySelector("select#selectValores");
        let item = document.createElement("option");
        item.text = `Adicionado o numero : ${numb}`;
        tab.appendChild(item)

        // Dar foco ao campo de input após adicionar um número
        document.getElementById("txtnumb").value = ""; // Limpa o campo
        document.getElementById("txtnumb").focus(); // Dá foco ao campo
    }
    
}

function analisarnumber(){
    if (numeros.length == 0 ){
        window.alert("Adicione ao menos um valor para finalizar. ")

    }else{
        const result = document.querySelector("div#resultado")
        const totalNumbers =  numeros.length;
        const maxNumber = Math.max(...numeros);
        const minNumber = Math.min(...numeros);
        const sumNumbers = numeros.reduce((total,num) => total + num , 0);
        const mediaNumbers = sumNumbers / totalNumbers;
        // Gerar um índice aleatório para acessar um valor no array
        const indiceAleatorio = aleatorio(0, numeros.length - 1);
        const numeroNaPosicaoAleatoria = numeros[indiceAleatorio];

        result.innerHTML = ""; // Limpa o conteúdo anterior

        result.innerHTML += `<p>Total de números adicionados: ${totalNumbers}</p>`
         result.innerHTML += `<p>Número na posição ${indiceAleatorio}: ${numeroNaPosicaoAleatoria}</p>`;
         result.innerHTML += `<p>Maior número: ${maxNumber}</p>`
         result.innerHTML += `<p>Menor número: ${minNumber}</p>`
         result.innerHTML += `<p>Soma dos números: ${sumNumbers}</p>`
         result.innerHTML += `<p>Média dos números: ${mediaNumbers.toFixed(2)}</p>`
    }
}