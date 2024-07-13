

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


let boxThree = document.querySelector('.b_three'); 

boxThree.addEventListener('click',()  => {
boxThree.style.background = 'rgb(38, 38, 49)'
}
)



document.querySelector('.button_click').onclick = () => {
console.log('Hello')  
boxOne.style.background = '#523300';
boxTwo.style.background = '#044300';
boxThree.style.background = '#338300'
}


function createElement(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.firstElementChild;
}


