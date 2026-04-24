"use strict";

export let analogoue = {
    init: function(){ // alles was Uhr braucht
        this.canvas = document.createElement("canvas"); // this = das Objekt indem ich mich gerade befinde = analogoue
        this.canvas.height = 300;
        this.canvas.width = 300; // canvas = Zeichenfläche
        this.ctx = this.canvas.getContext("2d"); // ctx = "Stift"

        document.getElementById("analogoue").append(this.canvas); //ins DOM rein
    },

    // zeichnet nur HG nicht die Hands!
    clockBody: function(hours, minutes, seconds){
        //alles löschen -> sonst "übermalen"
        this.ctx.clearRect(0, 0,this.canvas.width,this.canvas.height);

        const MITTEV = this.canvas.height/2;  // Mittelpunkt finden
        const MITTEH = this.canvas.width/2;
        const RADIUS = 120;

        // Clockbody bauen
        this.ctx.beginPath(); //neue Form
        this.ctx.arc(MITTEV, MITTEH, RADIUS,0,2*Math.PI);//Kreis zeichnen
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "pink";
        this.ctx.fillStyle = "#FFE4E1";
        this.ctx.fill();
        this.ctx.stroke(); //zeichnen starten/ausführen
    },

    //Zeiger zeichnen
    hands: function(angle, length, color, width){
        //Anfang von allen Zeigern
        const MITTEV = this.canvas.height/2;
        const MITTEH = this.canvas.width/2;
        //Ende von allen Zeigern
        const VERTIKAL = MITTEV+Math.sin(angle)*length;
        const HORIZONTAL = MITTEH+Math.cos(angle)*length;

        //Linie(Zeiger) zeichnen
        this.ctx.beginPath();
        this.ctx.moveTo(MITTEH,MITTEV);//Start
        this.ctx.lineTo(HORIZONTAL, VERTIKAL);//"zeichne Linie von Start nach hier"
        this.ctx.lineWidth=width;
        this.ctx.strokeStyle =color;
        this.ctx.stroke();
    },

    // Uhr wird jede Sekunde geupdated
    update: function(time){
        //Winkel von Zeiger berechnen
        const HOURS = (time.hours* 30-90)*(Math.PI/180);
        const MINUTES  = (time.minutes * 6-90)*(Math.PI/180);
        const SECONDS  = (time.seconds *6-90)*(Math.PI/180);

        this.clockBody();
        this.hands(SECONDS,110,"purple",2); //Sekundenzeiger zeichnen
        this.hands(MINUTES,110,"pink",4); //Minutenzeiger zeichnen
        this.hands(HOURS,69,"pink",7); //Studenzeiger zeichnen

    }
}