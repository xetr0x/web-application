console.log('test')

let dataURL = '../json/exercise1.json';
let res = new XMLHttpRequest();
res.open('GET', dataURL);
res.responseType='json';
res.send();

console.log('data recived');


res.onload = () => {
    const data = res.response;
    console.log(data);

    const headline = data['headline'];
    const intro = data['intro'];
    

    const p1 = document.createElement('p');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    img.src = data['articleimage'];

    const button = document.createElement('button');

    button.textContent = "hide";
    
    p1.textContent = intro;
    h1.textContent = headline;
    
    
    document.getElementById('exercise1').appendChild(button);
    document.getElementById('exercise1').appendChild(h1);
    document.getElementById('exercise1').appendChild(p1);
    document.getElementById('exercise1').appendChild(img);
    
    
}
 






