const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
];
let raceCounter = 0;
const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', () => {
    raceCounter = + 1;
    const promises = horses.map(run);
    updateWinnerField('');
    updeteProgressField('The race have started, bets are not taken');
    Promise.race(promises).then(({ horse, time }) => {
        updateWinnerField(`The winner is ${horse}, have finished in ${time} time`);
        updateResultsTable({ horse, time, raceCounter });
    });
    Promise.all(promises).then(() => {
        updeteProgressField('The race is over, you can make your bets')
    });
});
function updateWinnerField(message) {
    refs.winnerField.textContent = message;
};
function updeteProgressField(message) {
    refs.progressField.textContent = message;
};
function updateResultsTable({ horse, time, counter }) {
    const tr = `<tr>${counter}<td>0</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdsacentHTML('bedorend', tr);
};

// const promises = horses.map(run);
// Promise.race(promises).then(({horse, time}) => console.log(`The winner is ${horse}, have finished in ${time} time`));
// Promise.all(promises).then(x=> {console.log(x)})

// console.log('%с Run is up, make your wages!', 'color: brown; font-size: 14px;');

function run(horse) {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 3500);

        setTimeout(() => {
            resolve({ horse, time });
        }, time)
    });
};

// run('Mango').then(x => console.log(x)).catch(e => console.log(e));





function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}