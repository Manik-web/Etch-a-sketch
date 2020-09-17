console.log('hi');
let container = document.querySelector('#container');

turnOn =(event)=>{
    if(event.target.style.background==='lightgrey'){
        event.target.style.background = 'white';
    }else{
        event.target.style.background='lightgrey';
    }
}

let makeGrid =(width)=>{
    let number = width*width;
    for (i=0;i<number;i++){
        container.innerHTML +='<div class="grid" id="grid'+(i+1)+'"></div';
    }
    var elements = document.getElementsByClassName('grid');
    Array.from(elements).forEach(function(element) {
        element.addEventListener('mouseover', turnOn);
      });
}
makeGrid(4);


turnOn =(event)=>{
    if(event.target.style.background==='lightgrey'){
        event.target.style.background = 'white';
    }else{
        event.target.style.background='lightgrey';
    }
}

