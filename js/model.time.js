"use strict";


export function callTime(){
    const DATE = new Date();

    const TIME = {
                   hours: DATE.getHours(),
                   minutes: DATE.getMinutes(),
                   seconds: DATE.getSeconds()
                   };

    return TIME;
}
setInterval(callTime, 1000);







