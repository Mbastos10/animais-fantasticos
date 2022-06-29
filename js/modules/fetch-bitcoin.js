export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((btcJSON) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / btcJSON.BRL.sell).toFixed(4);
    })
    .catch((err) => {
      console.log(Error(err));
    });
}
