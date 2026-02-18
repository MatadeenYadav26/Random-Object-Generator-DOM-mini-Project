// 1: Create element: 

// var h1 = document.createElement('h1')
// var btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     // console.log("Hello")
//     var h1 = document.createElement('h1');
//     h1.innerHTML="Hello from JS";
//     console.log(h1);
// })

// 2: Append element:

// var h1 = document.createElement('h1');
// h1.innerHTML="Hello ji , from js.";
// var main = document.querySelector("main");

// main.appendChild(h1)

// var btn  = document.createElement('button');

// btn.innerHTML = 'download';

// var main = document.querySelector('main');

// main.appendChild(btn);


// var btn  = document.createElement('div');

// btn.innerHTML = 'download';

// var main = document.querySelector('main');
// btn.style.height="100px";
// btn.style.width="100px";
// btn.style.backgroundColor="Royalblue";
// main.appendChild(btn);


var btn = document.querySelector('button');
var main = document.querySelector('main');

btn.addEventListener('click',function(){


    var x = Math.random()*100;
    var y = Math.random()*100;
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    var r = Math.floor(Math.random()*360);





    var div = document.createElement('div');
    div.style.height = "50px";
    div.style.left = x+"%";
    div.style.top = y+"%";
    div.style.rotate = r+"deg";
    div.style.width = "50px";
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    main.appendChild(div);
    div.style.position='absolute';

    console.log(div);
    
})