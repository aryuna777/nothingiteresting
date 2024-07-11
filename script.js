

let boxOne = document.querySelector('.b_one');
boxOne.addEventListener('click', () =>
{ 
boxTwo.style.background = 'green'
})

let boxTwo = document.querySelector('.b_two'); 

boxTwo.addEventListener('click',()  => {
boxOne.style.background = 'brown'
}
)


document.querySelector('.button_click').onclick = () => {
console.log('Hello')  
boxOne.style.background = '#523300'
}


function createElement(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.firstElementChild;
}


