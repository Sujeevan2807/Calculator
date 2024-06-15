const distanceEl = document.querySelector("#distance");
const tankEl = document.querySelector("#tank");
const priceEl = document.querySelector("#fuel-price");
const calculateBtnEl = document.querySelector("#calculateBtn");

calculateBtnEl.addEventListener("click",(event)=>{
    event.preventDefault()

    if(distanceEl.value ==""){
        alert("You should enter distance");
    }
    else{
        const distance = distanceEl.value;
        const tank = tankEl.value;
        const price = priceEl.value;

        const result = (distance/tank) * price;

        console.log(result);
    }
})