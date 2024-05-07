function buscarVersiculoAleatorio() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var response = JSON.parse(this.responseText);
                var versiculo = response.text;
                var referencia = response.book.name + " " + response.chapter + ":" + response.number;

                // Exibindo o versículo no HTML
                document.getElementById("textoVersiculo").textContent = versiculo;
                document.getElementById("referenciaVersiculo").textContent = referencia;

                // Mostrar o div com o botão de copiar
                document.getElementById("compartilharVersiculo").style.display = 'block';
            } else {
                console.error("Erro ao fazer a requisição à API. Status: " + this.status);
            }
        }
    };
    xhttp.open("GET", "https://www.abibliadigital.com.br/api/verses/nvi/random", true);
    xhttp.send();
}

function copiarVersiculo() {
    const textoVersiculo = document.getElementById('textoVersiculo').innerText;
    const referenciaVersiculo = document.getElementById('referenciaVersiculo').innerText;
    const versiculoCompleto = `${textoVersiculo} - ${referenciaVersiculo}`;

    navigator.clipboard.writeText(versiculoCompleto).then(() => {
        alert('Versículo copiado para a área de transferência!');
    }, (err) => {
        console.error('Falha ao copiar o versículo: ', err);
    });
}


