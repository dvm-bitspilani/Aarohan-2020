faqcontainer = document.getElementsByClassName("faqelementcontainer");
faqanswer = document.getElementsByClassName("faqanswer");


var alreadyOpen = [];
for (var i = 0; i < faqcontainer.length; i++) {
    alreadyOpen.push(false);
}


verticalLine = document.getElementsByClassName('verticalline');
initialVerticalStyle = verticalLine[1].style;
horizontalLine = document.getElementsByClassName('horizontalline');
initialhorizontallStyle = horizontalLine[1].style;

var containerheight = 11;
var containerheightopen = 40;
window.addEventListener('resize',resizeFunc)
    
function resizeFunc(){
    if(window.innerWidth<470){
        for(var i = 0; i < faqcontainer.length; i++)
            faqcontainer[i].style.width = "72vw"; 
    }

    else if(window.innerWidth<560)
    {    
        containerheight=11;
        containerheightopen=40;
        for (var i = 0; i < faqcontainer.length; i++) {
            if(alreadyOpen[i])
                faqcontainer[i].style.height = containerheightopen + "vh";  
            else
                faqcontainer[i].style.height = containerheight + "vh";
        faqcontainer[i].style.width = "66vw"; 
        }
    }

    else if(window.innerWidth<737)
    {   containerheight=8;
        containerheightopen=33;
        for (var i = 0; i < faqcontainer.length; i++) {
            if(alreadyOpen[i])
                faqcontainer[i].style.height = containerheightopen + "vh";  
            else
                faqcontainer[i].style.height = containerheight + "vh";
        faqcontainer[i].style.width = "66vw"; 
        }
    }

    else if(window.innerWidth<1080)
    {   containerheight=8;
        containerheightopen=27;
        for (var i = 0; i < faqcontainer.length; i++) {
            if(alreadyOpen[i])
                faqcontainer[i].style.height = containerheightopen + "vh";  
            else
                faqcontainer[i].style.height = containerheight + "vh";
        faqcontainer[i].style.width = "66vw"; 
        }
    }
    else
    {   containerheight=5;
        containerheightopen=21;
        for (var i = 0; i < faqcontainer.length; i++) {
            if(alreadyOpen[i])
                faqcontainer[i].style.height = containerheightopen + "vh";  
            else
                faqcontainer[i].style.height = containerheight + "vh";
        faqcontainer[i].style.width = "66vw"; 
        }
    }
}    

resizeFunc();
faqanswer[2].style.display = "block";
faqcontainer[2].style.height = containerheightopen + "vh";
faqcontainer[2].style.border = "2px solid #F2CF19";
faqcontainer[2].style.background = "#FFFDF2";
alreadyOpen[2] = true;
verticalLine[2].style.transform = "rotate(90deg)";
verticalLine[2].style.background = "#F2CF19";
horizontalLine[2].style.background = "#F2CF19";




faqcontainer[0].addEventListener('click', function () {
    if (!alreadyOpen[0]) {
        faqanswer[0].style.display = "block";
        faqcontainer[0].style.height = containerheightopen + "vh";
        faqcontainer[0].style.border = "2px solid #F2CF19";
        faqcontainer[0].style.background = "#FFFDF2";
        alreadyOpen[0] = true;
        verticalLine[0].style.transform = "rotate(90deg)";
        verticalLine[0].style.background = "#F2CF19";
        horizontalLine[0].style.background = "#F2CF19";
    } else {
        faqanswer[0].style.display = "none";
        faqcontainer[0].style.height = containerheight + "vh";
        faqcontainer[0].style.border = "1px solid #707070";
        faqcontainer[0].style.background = "none";
        alreadyOpen[0] = false;
        verticalLine[0].style=initialVerticalStyle;
        horizontalLine[0].style=initialhorizontallStyle;
    }
})
faqcontainer[1].addEventListener('click', function () {
    if (!alreadyOpen[1]) {
        faqanswer[1].style.display = "block";
        faqcontainer[1].style.height = containerheightopen + "vh";
        faqcontainer[1].style.border = "2px solid #F2CF19";
        faqcontainer[1].style.background = "#FFFDF2";
        alreadyOpen[1] = true;
        verticalLine[1].style.transform = "rotate(90deg)";
        verticalLine[1].style.background = "#F2CF19";
        horizontalLine[1].style.background = "#F2CF19";
    } else {
        faqanswer[1].style.display = "none";
        faqcontainer[1].style.height = containerheight + "vh";
        faqcontainer[1].style.border = "1px solid #707070";
        faqcontainer[1].style.background = "none";
        alreadyOpen[1] = false;
        verticalLine[1].style=initialVerticalStyle;
        horizontalLine[1].style=initialhorizontallStyle;
    }
})
faqcontainer[2].addEventListener('click', function () {
    if (!alreadyOpen[2]) {
        faqanswer[2].style.display = "block";
        faqcontainer[2].style.height = containerheightopen + "vh";
        faqcontainer[2].style.border = "2px solid #F2CF19";
        faqcontainer[2].style.background = "#FFFDF2";
        alreadyOpen[2] = true;
        verticalLine[2].style.transform = "rotate(90deg)";
        verticalLine[2].style.background = "#F2CF19";
        horizontalLine[2].style.background = "#F2CF19";
    } else {
        faqanswer[2].style.display = "none";
        faqcontainer[2].style.height = containerheight + "vh";
        faqcontainer[2].style.border = "1px solid #707070";
        faqcontainer[2].style.background = "white";
        alreadyOpen[2] = false;
        verticalLine[2].style=initialVerticalStyle;
        horizontalLine[2].style=initialhorizontallStyle;
    }
})
faqcontainer[3].addEventListener('click', function () {
    if (!alreadyOpen[3]) {
        faqanswer[3].style.display = "block";
        faqcontainer[3].style.height = containerheightopen + "vh";
        faqcontainer[3].style.border = "2px solid #F2CF19";
        faqcontainer[3].style.background = "#FFFDF2";
        alreadyOpen[3] = true;
        verticalLine[3].style.transform = "rotate(90deg)";
        verticalLine[3].style.background = "#F2CF19";
        horizontalLine[3].style.background = "#F2CF19";
    } else {
        faqanswer[3].style.display = "none";
        faqcontainer[3].style.height = containerheight + "vh";
        faqcontainer[3].style.border = "1px solid #707070";
        faqcontainer[3].style.background = "white";
        alreadyOpen[3] = false;
        verticalLine[3].style=initialVerticalStyle;
        horizontalLine[3].style=initialhorizontallStyle;
    }
})
faqcontainer[4].addEventListener('click', function () {
    if (!alreadyOpen[4]) {
        faqanswer[4].style.display = "block";
        faqcontainer[4].style.height = containerheightopen + "vh";
        faqcontainer[4].style.border = "2px solid #F2CF19";
        faqcontainer[4].style.background = "#FFFDF2";
        alreadyOpen[4] = true;
        verticalLine[4].style.transform = "rotate(90deg)";
        verticalLine[4].style.background = "#F2CF19";
        horizontalLine[4].style.background = "#F2CF19";
    } else {
        faqanswer[4].style.display = "none";
        faqcontainer[4].style.height = containerheight + "vh";
        faqcontainer[4].style.border = "1px solid #707070";
        faqcontainer[4].style.background = "white";
        alreadyOpen[4] = false;
        
        verticalLine[4].style=initialVerticalStyle;
        horizontalLine[4].style=initialhorizontallStyle;
    }
})
faqcontainer[5].addEventListener('click', function () {
    if (!alreadyOpen[5]) {
        faqanswer[5].style.display = "block";
        faqcontainer[5].style.height = containerheightopen + "vh";
        faqcontainer[5].style.border = "2px solid #F2CF19";
        faqcontainer[5].style.background = "#FFFDF2";
        alreadyOpen[5] = true;
        verticalLine[5].style.transform = "rotate(90deg)";
        verticalLine[5].style.background = "#F2CF19";
        horizontalLine[5].style.background = "#F2CF19";
    } else {
        faqanswer[5].style.display = "none";
        faqcontainer[5].style.height = containerheight + "vh";
        faqcontainer[5].style.border = "1px solid #707070";
        faqcontainer[5].style.background = "white";
        alreadyOpen[5] = false;
        verticalLine[5].style=initialVerticalStyle;
        horizontalLine[5].style=initialhorizontallStyle;
    }
})
faqcontainer[6].addEventListener('click', function () {
    if (!alreadyOpen[6]) {
        faqanswer[6].style.display = "block";
        faqcontainer[6].style.height = containerheightopen + "vh";
        faqcontainer[6].style.border = "2px solid #F2CF19";
        faqcontainer[6].style.background = "#FFFDF2";
        alreadyOpen[6] = true;
        verticalLine[6].style.transform = "rotate(90deg)";
        verticalLine[6].style.background = "#F2CF19";
        horizontalLine[6].style.background = "#F2CF19";
    } else {
        faqanswer[6].style.display = "none";
        faqcontainer[6].style.height = containerheight + "vh";
        faqcontainer[6].style.border = "1px solid #707070";
        faqcontainer[6].style.background = "white";
        alreadyOpen[6] = false;
        verticalLine[6].style=initialVerticalStyle;
        horizontalLine[6].style=initialhorizontallStyle;
    }
})
faqcontainer[7].addEventListener('click', function () {
    if (!alreadyOpen[7]) {
        faqanswer[7].style.display = "block";
        faqcontainer[7].style.height = containerheightopen + "vh";
        faqcontainer[7].style.border = "2px solid #F2CF19";
        faqcontainer[7].style.background = "#FFFDF2";
        alreadyOpen[7] = true;
        verticalLine[7].style.transform = "rotate(90deg)";
        verticalLine[7].style.background = "#F2CF19";
        horizontalLine[7].style.background = "#F2CF19";
    } else {
        faqanswer[7].style.display = "none";
        faqcontainer[7].style.height = containerheight + "vh";
        faqcontainer[7].style.border = "1px solid #707070";
        faqcontainer[7].style.background = "white";
        alreadyOpen[7] = false;
        verticalLine[7].style=initialVerticalStyle;
        horizontalLine[7].style=initialhorizontallStyle;
    }
})



    