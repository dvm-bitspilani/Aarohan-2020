faqcontainer = document.getElementsByClassName("faqelementcontainer");
faqanswer = document.getElementsByClassName("faqanswer");
faqanswer[2].style.display = "block";
faqcontainer[2].style.border = "2px solid #F2CF19";
faqcontainer[2].style.background = "#FFFDF2";
faqcontainer[2].style.width = "66vw";
var alreadyOpen = [];
for (var i = 0; i < faqcontainer.length; i++) {
    alreadyOpen.push(false);
}

window.addEventListener('resize',function(){
    if(window.innerWidth<900)
        containerheight=8;
    else
        containerheight=5;
})
var containerheight = 5;

faqcontainer[0].addEventListener('click', function () {
    if (!alreadyOpen[0]) {
        faqanswer[0].style.display = "block";
        faqcontainer[0].style.height = "18vh";
        faqcontainer[0].style.border = "2px solid #F2CF19";
        faqcontainer[0].style.background = "#FFFDF2";
        alreadyOpen[0] = true;
    } else {
        faqanswer[0].style.display = "none";
        faqcontainer[0].style.height = containerheight + "vh";
        faqcontainer[0].style.border = "1px solid #707070";
        faqcontainer[0].style.background = "none";
        alreadyOpen[0] = false;
    }
})
faqcontainer[1].addEventListener('click', function () {
    if (!alreadyOpen[1]) {
        faqanswer[1].style.display = "block";
        faqcontainer[1].style.height = "18vh";
        faqcontainer[1].style.border = "2px solid #F2CF19";
        faqcontainer[1].style.background = "#FFFDF2";
        alreadyOpen[1] = true;
    } else {
        faqanswer[1].style.display = "none";
        faqcontainer[1].style.height = containerheight + "vh";
        faqcontainer[1].style.border = "1px solid #707070";
        faqcontainer[1].style.background = "none";
        alreadyOpen[1] = false;
    }
})
faqcontainer[2].addEventListener('click', function () {
    if (!alreadyOpen[2]) {
        faqanswer[2].style.display = "block";
        faqcontainer[2].style.height = "18vh";
        faqcontainer[2].style.width = "66vw";
        faqcontainer[2].style.border = "2px solid #F2CF19";
        faqcontainer[2].style.background = "#FFFDF2";
        alreadyOpen[2] = true;
    } else {
        faqanswer[2].style.display = "none";
        faqcontainer[2].style.height = containerheight + "vh";
        faqcontainer[2].style.width = "66vw";
        faqcontainer[2].style.border = "1px solid #707070";
        faqcontainer[2].style.background = "white";
        alreadyOpen[2] = false;
    }
})
faqcontainer[3].addEventListener('click', function () {
    if (!alreadyOpen[3]) {
        faqanswer[3].style.display = "block";
        faqcontainer[3].style.height = "18vh";
        faqcontainer[3].style.border = "2px solid #F2CF19";
        faqcontainer[3].style.background = "#FFFDF2";
        alreadyOpen[3] = true;
    } else {
        faqanswer[3].style.display = "none";
        faqcontainer[3].style.height = containerheight + "vh";
        faqcontainer[3].style.border = "1px solid #707070";
        faqcontainer[3].style.background = "white";
        alreadyOpen[3] = false;
    }
})
faqcontainer[4].addEventListener('click', function () {
    if (!alreadyOpen[4]) {
        faqanswer[4].style.display = "block";
        faqcontainer[4].style.height = "18vh";
        faqcontainer[4].style.border = "2px solid #F2CF19";
        faqcontainer[4].style.background = "#FFFDF2";
        alreadyOpen[4] = true;
    } else {
        faqanswer[4].style.display = "none";
        faqcontainer[4].style.height = containerheight + "vh";
        faqcontainer[4].style.border = "1px solid #707070";
        faqcontainer[4].style.background = "white";
        alreadyOpen[4] = false;
    }
})
faqcontainer[5].addEventListener('click', function () {
    if (!alreadyOpen[5]) {
        faqanswer[5].style.display = "block";
        faqcontainer[5].style.height = "18vh";
        faqcontainer[5].style.border = "2px solid #F2CF19";
        faqcontainer[5].style.background = "#FFFDF2";
        alreadyOpen[5] = true;
    } else {
        faqanswer[5].style.display = "none";
        faqcontainer[5].style.height = containerheight + "vh";
        faqcontainer[5].style.border = "1px solid #707070";
        faqcontainer[5].style.background = "white";
        alreadyOpen[5] = false;
    }
})
    