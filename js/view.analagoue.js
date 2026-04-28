"use strict";

export let analogoue = {
    init: function(){
        this.canvas = document.createElement("canvas");
        this.canvas.height = 300;
        this.canvas.width = 300;
        this.ctx = this.canvas.getContext("2d");

        document.getElementById("analogoue").append(this.canvas);
    },

    clockBody: function(hours, minutes, seconds){
        this.ctx.clearRect(0, 0,this.canvas.width,this.canvas.height);

        const MIDDLEV = this.canvas.height/2;
        const MIDDLEH = this.canvas.width/2;
        const RADIUS = 120;

        this.ctx.beginPath();
        this.ctx.arc(MIDDLEV, MIDDLEH, RADIUS,0,2*Math.PI);
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "pink";
        this.ctx.fillStyle = "#FFE4E1";
        this.ctx.fill();
        this.ctx.stroke();
    },

    hands: function(angle, length, color, width){
        const MIDDLEV = this.canvas.height/2;
        const MIDDLEH = this.canvas.width/2;
        const VERTICAL = MIDDLEV+Math.sin(angle)*length;
        const HORIZONTAL = MIDDLEH+Math.cos(angle)*length;

        this.ctx.beginPath();
        this.ctx.moveTo(MIDDLEH,MIDDLEV);
        this.ctx.lineTo(HORIZONTAL, VERTICAL);
        this.ctx.lineWidth=width;
        this.ctx.strokeStyle =color;
        this.ctx.stroke();
    },

    update: function(time){
        const HOURS = (time.hours* 30-90)*(Math.PI/180);
        const MINUTES  = (time.minutes * 6-90)*(Math.PI/180);
        const SECONDS  = (time.seconds *6-90)*(Math.PI/180);

        this.clockBody();
        this.hands(SECONDS,110,"purple",2);
        this.hands(MINUTES,110,"pink",4);
        this.hands(HOURS,69,"pink",7);
    }
}