// let scrollPos = 0;
// let isScrolled = false;
// let about = document.querySelector('.aboutContainer')
// // adding scroll event
// window.addEventListener('wheel', function() {
//     // detects new state and compares it with the new one
//     about.style.marginTop = '100vh'
//     if (((document.body.getBoundingClientRect()).top > scrollPos)){
//         if(isScrolled || document.body.getBoundingClientRect().top< 10){
//             about.style.marginTop = '100vh'
//             setTimeout(() => {
//                 isScrolled = false
//             }, 100)
//             console.log('a')
//         }
//     }
//     else if(document.body.getBoundingClientRect().top> 10 && !isScrolled) {
//         about.style.marginTop = '0';
//         console.log('b')
//         setTimeout(() => {
//             isScrolled = true
//         }, 100)
//     }
//     // saves the new position for iteration.
//     scrollPos = (document.body.getBoundingClientRect()).top;
// })