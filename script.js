const apiKey = '7b0b4a851916cae1c4aecb84';
const apiURL = ` https://v6${apiKey}.exchangerate-api.com/v6/7b0b4a851916cae1c4aecb84/latest/`;
 
//função para consulta á taxa de câmbio via API
 
async function getExchangeRate(daMoeda,paraMoeda){
    try{
 
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = response.json();
 
        if(data.result === "success"){
            return data.conversion_rates[paraMoeda];
         
        }else{
            throw new Error('Erro ao buscar taxa de câmbio');
        }
    }catch(error){
        console.error("Erro:", error);
        return null;
       
    }
}