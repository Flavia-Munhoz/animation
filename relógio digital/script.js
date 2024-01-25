let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let ampm = document.getElementById('ampm');
console.log(horas, minutos, segundos, ampm);

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_ponto = document.querySelector('.hr_ponto');
let min_ponto = document.querySelector('.min_ponto');
let seg_ponto = document.querySelector('.seg_ponto');

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amPm = h >= 12 ? 'PM' : 'AM'

    console.log(amPm);

    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    horas.innerHTML = h + '<br><span>horas</span></br>';
    minutos.innerHTML = m + '<br><span>minutos</span></br>';
    segundos.innerHTML = s + '<br><span>segundos</span></br>';
    ampm.innerHTML = amPm;

    hh.style.strokeDashoffset = 440 - (440 * h ) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m ) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s ) / 60;

    hr_ponto.style.transform = `rotate(${h * 30}deg)`
    min_ponto.style.transform = `rotate(${m * 6}deg)`
    seg_ponto.style.transform = `rotate(${s * 6}deg)`
    

})

