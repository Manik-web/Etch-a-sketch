console.log('hi');
let container = document.querySelector('#container');
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
let rowWidth = parseInt(htmlStyles.getPropertyValue("--rowWidth"));
let fullWidth = 800;


turnOn =(event)=>{
    if(event.target.style.background==='lightgrey'){
        event.target.style.background = 'white';
    }else{
        event.target.style.background='lightgrey';
    }
}

let makeGrid =(width)=>{
    rowWidth = 1000/width;
    container.innerHTML = '';
    container.style.display = 'grid';
    document.documentElement.style.setProperty("--rowNum", width);
    document.documentElement.style.setProperty("--rowWidth", rowWidth+'px');
    let number = width*width;
    for (i=0;i<number;i++){
        container.innerHTML +='<div class="grid" id="grid'+(i+1)+'"></div';
    }
    var elements = document.getElementsByClassName('grid');
    Array.from(elements).forEach(function(element) {
        element.addEventListener('mouseover', turnOn);
      });

}
makeGrid(10);



let reset = () =>{
    var e = document.getElementsByClassName('grid');
    for(j=0;j<e.length;j++){
        e[j].style.background = 'white';
    }
    let size= prompt('please enter the desired width (MAX is 64)');
    makeGrid(size);
}

let button = document.getElementById("button");
button.addEventListener('click',reset);

