import BSN from 'bootstrap.native';

const refs = {
    modal: document.querySelector('#subscription-modal'),
    subsribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 3000;
const MAX_PROMT_ATEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

const modal = new BSN.Modal('#subscription-modal');
// modal.show();
openModal();

refs.modal.addEventListener('hide.bs.modal', openModal)
refs.subsribeBtn.addEventListener('click', () => {
    hasSubscribed = true;
    modal.hide();
})



function openModal() {
    if (promptCounter === MAX_PROMT_ATEMPTS || hasSubscribed) {
        return;
    }
    setTimeout(() => {
        modal.show();
        promptCounter += 1;
    }, PROMPT_DELAY); 
}

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMT_ATEMPTS || hasSubscribed) {
//         console.log('We have to stop the interval function');
//         clearInterval(intervalId);
//         return;
//     };
//     console.log('Subscribe! - ' + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);