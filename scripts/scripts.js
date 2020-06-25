"use strict";

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function smoothIntro(){
    for(var i = 0.0; i<=1; i = i + 0.1){
        await sleep(110);
        $(".intro").css({"opacity": String(i)});
        $(".aboutUs").css({"opacity": String(i)});
    }
}
async function smoothIntro2() {
    for(var i = 300.0; i>=0; i = i - 4){
        await sleep(5);
        $(".intro").css({"margin-top": String(i)+"px"});
    }
}

smoothIntro();
smoothIntro2();
