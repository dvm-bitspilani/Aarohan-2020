let isOpened = false

const openCloseNav = () => {
    let navBar = document.getElementById('navBar')
    let hamLine = document.getElementsByClassName('hamburgerLines')
    let initialStyle = hamLine[1].style;
    if(isOpened){
        navBar.style.transform = 'translateX(-100%)'
        hamLine[0].style = initialStyle
        hamLine[2].style = initialStyle
        isOpened = false
    }
    else{
        navBar.style.transform = 'translateX(0%)'
        hamLine[0].style.transform = "rotate(45deg)"
        hamLine[2].style.transform = "rotate(-45deg)"
        hamLine[0].style.backgroundColor = 'white'
        hamLine[0].style.marginTop = '6px'
        hamLine[2].style.backgroundColor = 'white'
        hamLine[2].style.marginTop = '-14px'
        isOpened = true;
    }
}

const closeNav = () => {
    let navBar = document.getElementById('navBar')
    let hamLine = document.getElementsByClassName('hamburgerLines')
    let initialStyle = hamLine[1].style;
    if(isOpened){
        navBar.style.transform = 'translateX(-100%)'
        hamLine[0].style = initialStyle
        hamLine[2].style = initialStyle
        isOpened = false
    }
}