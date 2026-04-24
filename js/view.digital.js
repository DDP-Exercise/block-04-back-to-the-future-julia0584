"use strict";

export function digital(time){
    let digital = document.getElementById("digital");
    let hours = String(time.hours);
    let minutes = String(time.minutes);
    let seconds = String(time.seconds);
    //digital.textContent=hours.padStart(2, "0")+":"+minutes.padStart(2, "0")+":"+seconds.padStart(2, "0");


    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // !!!! den folgenden Code für die visuelle Darstellung der digitalen Uhr habe ich aus dem Youtube Video "7 Segment Digital Clock - HTML + CSS + JS" von MinzCode !!!!
    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------

    document.getElementById("hour-1").setAttribute("class", "num-" + hours.padStart(2, "0")[0]); // .padStart(2, "0") => bei einer Ziffer soll immer 0 davor stehen
    document.getElementById("hour-2").setAttribute("class", "num-" + hours.padStart(2, "0")[1]); // [0] und [1] => String an Stelle 0 (erste Ziffer) und String an Stelle 1 (zweite Ziffer) trennen
    document.getElementById("minute-1").setAttribute("class", "num-" + minutes.padStart(2, "0")[0]); //.setAttribute => überschreibt alte Class mit neuer/richtiger Class
    document.getElementById("minute-2").setAttribute("class", "num-" + minutes.padStart(2, "0")[1]);
    document.getElementById("second-1").setAttribute("class", "num-" + seconds.padStart(2, "0")[0]);
    document.getElementById("second-2").setAttribute("class", "num-" + seconds.padStart(2, "0")[1]);

}