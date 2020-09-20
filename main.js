console.log('hi');
let container = document.querySelector('#container');
//title
let title = document.createElement('h1');
title.setAttribute('id', 'title');
title.innerHTML = 'Etch a Sketch';
let menu = document.getElementById('buttonContainer');

//random colour button
let random = document.createElement('button');
random.setAttribute('id','random');
random.innerHTML = 'Set random colours';
let randomStatus = false;

menu.append(title);
menu.append(random);

//function called on mouseover
turnOn =(event)=>{
    if(randomStatus){
        event.target.style.background = getRandomColor();
    }else{
        event.target.style.background='lightgrey';

    }
    
}
//make a grid initial and after prompt
let makeGrid =(width)=>{
    rowWidth = 800/width;
    container.innerHTML = '';
    container.style.gridTemplateColumns = "repeat(" + width + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + width + ", 1fr)";
    let number = width*width;
    for (i=0;i<number;i++){
        const grid = document.createElement('div');
        grid.classList.add('blank');
        grid.style.background = 'white';
        grid.setAttribute('id',i);
        grid.addEventListener('mouseover',turnOn);
        container.appendChild(grid);
    }
   
}
makeGrid(4);


//function called on button press
let reset = () =>{
    container.innerHTML = '';
    let size= prompt('please enter the desired width (MAX is 64)');
    if(size>0 &&size<65){
        makeGrid(size);
    }else{alert('click "Change Grid Size" and try again')}
    
}
//generates a random colour when called
function getRandomColor() {
    var characters = "0123456789ABCDEF";
    var color = '#';
  
    for (var i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random()*15)];
    }
    
    return color;
  }
//triggered on button press
let randomCol = (event)=>{
    if(randomStatus){
        randomStatus = false;
    }else{
        randomStatus = true;
    }
}

let button = document.getElementById("button");
button.addEventListener('click',reset);

random.addEventListener('click',randomCol);


