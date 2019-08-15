const notifier = require('node-notifier');
const path = require('path');

const cookEgg = document.getElementById('cookEgg');
const cookNoodles = document.getElementById('cookNoodles');
const boilWater = document.getElementById('boilWater');
const washClothes = document.getElementById('washClothes');

const cookTime= {
    cookEggTime: 5*60,
    cookNoodleTime: 10*60,
    washClothesTime: 50*60,
    boilWaterTime: 15*60
};

const clockWarningMessage = {
    eggMessage: '鸡蛋煮好啦！',
    noodleMessage: '面条煮好啦！',
    waterMessage: '水煮开啦！',
    washMessage: '衣服洗好啦！'
};

cookEgg.addEventListener('click',()=>{
   let cookEggTime = cookTime.cookEggTime;
   let timerId = setInterval(()=>{
       if(cookEggTime <= 0){
           clearCountDown('eggInfo','eggCD',clockWarningMessage.eggMessage);
           clockNotify(clockWarningMessage.eggMessage);
           clearInterval(timerId);
       }
       showCountDown('eggCD',cookEggTime);
       cookEggTime --;
   },1000)
});

cookNoodles.addEventListener('click',()=>{
    let cookNoodleTime = cookTime.cookNoodleTime;
    let timerId = setInterval(()=>{
        if(cookNoodleTime <= 0){
            clearCountDown('noodleInfo','noodleCD',clockWarningMessage.noodleMessage);
            clockNotify(clockWarningMessage.noodleMessage);
            clearInterval(timerId);
        }
        showCountDown('noodleCD',cookNoodleTime);
        cookNoodleTime --;
    },1000)
});

boilWater.addEventListener('click',()=>{
    let boilWaterTime = cookTime.boilWaterTime;
    let timerId = setInterval(()=>{
        if(boilWaterTime <= 0){
            clearCountDown('waterInfo','waterCD',clockWarningMessage.waterMessage);
            clockNotify(clockWarningMessage.waterMessage);
            clearInterval(timerId);
        }
        showCountDown('waterCD',boilWaterTime);
        boilWaterTime --;
    },1000)
});

washClothes.addEventListener('click',()=>{
    let washClothesTime = cookTime.washClothesTime;
    let timerId = setInterval(()=>{
        if(washClothesTime <= 0){
            clearCountDown('washInfo','washCD',clockWarningMessage.washMessage);
            clockNotify(clockWarningMessage.washMessage);
            clearInterval(timerId);
        }
        showCountDown('washCD',washClothesTime);
        washClothesTime --;
    },1000)
});

function clockNotify(message){
    notifier.notify({
        title: 'LazyMan Clock',
        message: message,
        icon: path.join(__dirname, 'clock.ico'),
        sound: true,
    })
}

function  showCountDown(id,time) {
    const countDown = document.getElementById(id);
    const min = Math.floor(time/60);
    const seconds = time%60;
    countDown.innerText = `${min}:${seconds}`;
}

function clearCountDown(infoId,cdId,message) {
    document.getElementById(infoId).innerText = message;
    document.getElementById(cdId).innerText = '';
}

