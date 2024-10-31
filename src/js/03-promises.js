import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formGrand = document.querySelector('.form');



formGrand.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const fulfilledCheck = formGrand.children[1].children[1].children[0].checked;
  const inputDelay = formGrand.children[0].childNodes[1].value;
 
    
  const makePromises = function (delay) {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        if (fulfilledCheck) {
          resolve(`✅ Fulfilled promise in ${delay}ms`);
        };
        rejected(`❌ Rejected promise in ${delay}ms`);
      }, delay);
    });
  };

  makePromises(inputDelay)
    .then(fulfilled => { iziToast.show({
        message: fulfilled,
        position: "topCenter",
        timeout: 2000,
        backgroundColor: 'green',
        messageColor: 'white',
        progressBar: false,
        animateInside: false,
      transitionIn: 'fadeIn',
      
        
      }); })
    .catch(rejected => { iziToast.show({
        message: rejected,
        position: "topCenter",
        timeout: 2000,
        backgroundColor: 'red',
        messageColor: 'white',
        progressBar: false,
        animateInside: false,
        transitionIn: 'fadeIn',
        targetFirst: false,
      }); }
    );

}
  




// promiseRespponse(inputDelay)
  //   .then(window.alert(`✅ Fulfilled promise in ${inputDelay}ms`))
  //   .catch(window.alert(`❌ Rejected promise in ${inputDelay}ms`))
  // setTimeout(() => {
  //   if (fulfilledCheck) {
  //     window.alert(`✅ Fulfilled promise in ${inputDelay}ms`);
  //   } else {
  //     console.log(`❌ Rejected promise in ${inputDelay}ms`);
  //   }
  // }, inputDelay)






  // console.log(formGrand.children[0].childNodes[1].value);
// console.log(formGrand.children[1].children);
  
// const logger = time => console.log(`Log every ${time}ms - ${Date.now()}`);
// const intervalId = setInterval(logger, 2000, 2000)


    //   if (fulfilledCheck) {
    //     return console.log(Promise.resolve((delay, `✅ Fulfilled promise in ${delay}ms`)));
    //   }
    //   return Promise.reject((delay, `❌ Rejected promise in ${delay}ms`))
    // }


    // makePromises(inputDelay).then((fulfilled) => alert(fulfilled))
    //   .catch((rejected) => alert(rejected))

    // console.log(makePromises);