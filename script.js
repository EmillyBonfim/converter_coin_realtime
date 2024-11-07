const apiKey = 'af7c4b45f7f23b6aa93e18de';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
 
//função para consulta á taxa de câmbio via API
 
async function getExchangeRate(daMoeda, paraMoeda) {
    try {
 
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();
 
        if(data.result === "success") {
            return data.conversion_rates[paraMoeda];
         
        }else{
            throw new Error('Erro ao buscar taxa de câmbio');
        }
    }catch (error) {
        console.error("Erro:", error);
        return null;
       
    }
}

// ###################################################################################################
// Pega a consulta da API e faz os cálculos
document.getElementById('currency-form').addEventListener('submit', async function(event){
    event.preventDefault();

    // Obter valores de entrada
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    //parseFloat = Ponto Flutuante

    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);

    // Ele encontra o valor que deseja converter para o valor convertido e guarda dentro dessa variável


    if(exchangeRate){
        const convertedValue = valor * exchangeRate; // Guarda o resultado

        // console.log(convertedValue);

        const conversao = document.getElementById('conversao'); 
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`;

        // Configura o botão para executar a conversão 

    } else{
        alert('Erro ao buscar a cotação. Tente novamente');
    }


});