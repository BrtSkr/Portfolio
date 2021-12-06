let arrow = document.querySelector('.nav-arrow')
let nav = document.querySelector('.navbar')
var array = [arrow, nav]

const expandNav = () => {
    
    array[1].style.height = "10vh"
    array[0].style.animation = "rotate-arrow .5s ease-in-out 1 both";
    const condenseNav = () => {
        nav.style.height = '2vh'
        arrow.style.animation = "rotate-arrow2 .5s ease-in-out 1 alternate both";
    }
    array.forEach(element => {
        element.addEventListener('mouseout', condenseNav, false)
    });
}
array.forEach(element => {
    element.addEventListener('mouseenter', expandNav, false)
})