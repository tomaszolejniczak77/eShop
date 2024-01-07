(() => {

const runCounter = (endTime) => {

 const counterForPromotion = document.querySelector('#promotionCounter')

 const getSecondUntillEndOfPromotion = (date) => {
    // console.log(date);
 const end = new Date(date)
 const seconds = end.getTime() / 1000;
 const startSeconds = Date.now() / 1000;

 return seconds - startSeconds;

 }

 const s = getSecondUntillEndOfPromotion(endOfPromotion);

 const getTimerFormat = seconds => {
    if (seconds < 0) return 'Promocja zakończona';

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds - h * 3600) / 60);
    const s = Math.floor(seconds - h * 3600 - m * 60);

    return `${h} godz. ${m} min ${s} s`;
    
 }

 counterForPromotion.innerHTML = getTimerFormat(s);
 
}

const endOfPromotion = '2023-08-03T21:59:59Z';

// const date = new Date();
// date.setHours(date.getHours() +1);
// date.setMinutes(date.getMinutes() + 35);
// date.setSeconds(date.getSeconds() +10);

// const endOfPromotion = date.toISOString();

runCounter(endOfPromotion);

const convertedEndOfPromotion = new Date(endOfPromotion);

const intervalId = setInterval(() => {
    runCounter(endOfPromotion)

if (Date.now() > convertedEndOfPromotion.getTime()){
 clearInterval(intervalId);
}

}, 1000) 




})();