const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
}

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick - onTick;

        this.init();
    }
    init() {
        const time = this.getComponentsTime(0);
        this.onTick(time);
    }
    start() {
        if (this.isActive) {
            return;
        };
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            
            const time = this.getComponentsTime(deltaTime);
            // updateClockface(time);
            this.onTick(time)
        }, 1000)
    };
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getComponentsTime(0);
        this.onTick(time)
    }
    getComponentsTime(time) {
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
    }
    pad(value) {
    return String(value).padStart(2, '0');
}

};

const timer = new Timer({
    onTick: updateClockface
})

// const timer = {
//     intervalId: null,
//     isActive: false,
//     start() {
//         if (this.isActive) {
//             return;
//         };
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             // const {hours, mins, secs} = getComponentsTime(deltaTime);
//             const time = getComponentsTime(deltaTime);
//             updateClockface(time);
//             // console.log(`${hours}:${mins}:${secs}`);
//         }, 1000);
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     },
// };
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
// timer.start();
function updateClockface({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

const promise = new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.5;
    setTimeout(() => {
        if (canFulfill) {
            resolve('Promise fulfilled')
        }
        reject('Promise rejected')
    }, 2000);
});

promise.then(result => {
    console.log(result);
},
    error => {
        console.log(error);
    });

promise.then(result => { console.log(result); return 5; }).then(x => { console.log(x); })

const makeOrder = dish => {
    const DELAY = 1000;
    return new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.5;
    setTimeout(() => {
        if (canFulfill) {
            resolve(`Your order ${dish}`)
        }
        reject('Promise rejected')
    }, DELAY);
})
}
makeOrder('cake').then(onMakeOrderSuccess).catch(onMakeOrderError);
function onMakeOrderSuccess(result) {
    console.log(result);
};
function onMakeOrderError(error) {
    console.log(error);
}