"use strict";

export function digital(time){
    let digital = document.getElementById("digital");
    let hours = String(time.hours);
    let minutes = String(time.minutes);
    let seconds = String(time.seconds);
    //digital.textContent=hours.padStart(2, "0")+":"+minutes.padStart(2, "0")+":"+seconds.padStart(2, "0");

    document.getElementById("hour-1").setAttribute("class", "num-" + hours.padStart(2, "0")[0]);
    document.getElementById("hour-2").setAttribute("class", "num-" + hours.padStart(2, "0")[1]);
    document.getElementById("minute-1").setAttribute("class", "num-" + minutes.padStart(2, "0")[0]);
    document.getElementById("minute-2").setAttribute("class", "num-" + minutes.padStart(2, "0")[1]);
    document.getElementById("second-1").setAttribute("class", "num-" + seconds.padStart(2, "0")[0]);
    document.getElementById("second-2").setAttribute("class", "num-" + seconds.padStart(2, "0")[1]);

}