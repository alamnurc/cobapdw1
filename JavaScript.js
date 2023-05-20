const nama = document.querySelector('#nama');
const nim = document.querySelector('#nim');
const hari = document.querySelector('#hari');
const makanpagi = document.querySelector('#makanpagi')
const minumpagi = document.querySelector('#minumpagi')
const makansiang = document.querySelector('#makansiang')
const minumsiang = document.querySelector('#minumsiang')
const makanmalam = document.querySelector('#makanmalam')
const minummalam = document.querySelector('#minummalam')

nama.addEventListener('click', updateName);
nim.addEventListener('click', updateNim);
hari.addEventListener('click', updateDay);
makanpagi.addEventListener('click', updatemakanpagi);
minumpagi.addEventListener('click', updateminumpagi);
makansiang.addEventListener('click', updatemakansiang);
minumsiang.addEventListener('click', updateminumsiang);
makanmalam.addEventListener('click', updatemakanmalam);
minummalam.addEventListener('click', updateminummalam);

function updateName(){
    const name =prompt('Masukkan nama: ');
    nama.textContent = name;
}

function updateNim(){
    const id =prompt('Masukkan nim: ');
    nim.textContent = id;
}

function updateDay(){
    const day =prompt('Masukkan hari: ');
    hari.textContent = day;
}

function updatemakanpagi(){
    const inputmakanpagi=prompt('Masukkan makanan pagi anda: ');
    makanpagi.textContent = inputmakanpagi;
}

function updateminumpagi(){
    const inputminumpagi=prompt('Masukkan minuman pagi anda: ');
    minumpagi.textContent = inputminumpagi;
}

function updatemakansiang(){
    const inputmakansiang=prompt('Masukkan makanan siang anda: ');
    makansiang.textContent = inputmakansiang;
}

function updateminumsiang(){
    const inputminumsiang=prompt('Masukkan minuman siang anda: ');
    minumsiang.textContent = inputminumsiang;
}

function updatemakanmalam(){
    const inputmakanmalam=prompt('Masukkan makanan malam anda: ');
    makanmalam.textContent = inputmakanmalam;
}

function updateminummalam(){
    const inputminummalam=prompt('Masukkan minuman malam anda: ');
    minummalam.textContent = inputminummalam;
}

const circle = document.querySelector('.circle');
window.addEventListener('mousemove', mouseMoveHandler);
window.addEventListener('mousedown', mouseDownHandler);
window.addEventListener('mouseup', mouseUpHandler);

function mouseMoveHandler(e) {
    circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
    circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
    circle.style.opacity = 1;
  }
  
function mouseUpHandler(e) {
    circle.style.transform = "scale(1)";
}
  
function mouseDownHandler() {
    circle.style.transform = "scale(2)";
}