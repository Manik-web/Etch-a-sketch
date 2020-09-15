console.log('hi');
let container = document.querySelector('#container');

let grid1 = document.createElement('div');
let grid2 = document.createElement('div');
let grid3 = document.createElement('div');
let grid4 = document.createElement('div');
let grid5 = document.createElement('div');
let grid6 = document.createElement('div');
let grid7 = document.createElement('div');
let grid8 = document.createElement('div');
let grid9 = document.createElement('div');
let grid10 = document.createElement('div');
let grid11 = document.createElement('div');
let grid12 = document.createElement('div');
let grid13 = document.createElement('div');
let grid14 = document.createElement('div');
let grid15 = document.createElement('div');
let grid16 = document.createElement('div');

turnOn =(event)=>{
    
    event.target.style.background='lightgrey';
}


container.append(grid1);
grid1.addEventListener("mouseover", turnOn);
container.append(grid2);
grid2.addEventListener('mouseover',turnOn);
container.append(grid3);
grid3.addEventListener('mouseover',turnOn);
container.append(grid4);
grid4.addEventListener('mouseover',turnOn);
container.append(grid5);
grid5.addEventListener('mouseover',turnOn);
container.append(grid6);
grid6.addEventListener('mouseover',turnOn);
container.append(grid7);
grid7.addEventListener('mouseover',turnOn);
container.append(grid8);
grid8.addEventListener('mouseover',turnOn);
container.append(grid9);
grid9.addEventListener('mouseover',turnOn);
container.append(grid10);
grid10.addEventListener('mouseover',turnOn);
container.append(grid11);
grid11.addEventListener('mouseover',turnOn);
container.append(grid12);
grid12.addEventListener('mouseover',turnOn);
container.append(grid13);
grid13.addEventListener('mouseover',turnOn);
container.append(grid14);
grid14.addEventListener('mouseover',turnOn);
container.append(grid15);
grid15.addEventListener('mouseover',turnOn);
container.append(grid16);
grid16.addEventListener('mouseover',turnOn);
