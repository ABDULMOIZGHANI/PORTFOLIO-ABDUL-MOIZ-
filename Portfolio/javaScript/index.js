let hamBurger = document.getElementById('hamBurger');

hamBurger.addEventListener('click', () => {
    let nav = document.getElementById('nav-items');
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
    }
    else {
        nav.style.display = 'none'
    }
})

let i = 0;
let text = `t KARACHI UNIVERSITY (UBIT)`;

function typing() {
    if (i < text.length) {
        document.getElementById('texxt').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
        // setInterval(typing, 1000);
    }
    else {
        i = 0;
        document.getElementById('texxt').innerHTML = `a`;

        setTimeout(typing, 0);

    }
}
typing()




let i2 = 0;
let text2 = `y Services`;

function typing2() {
    if (i2 < text2.length) {
        document.getElementById('texxt2').innerHTML += text2.charAt(i2);
        i2++;
        setTimeout(typing2, 100);
        // setInterval(typing, 1000);
    }
    else {
        i2 = 0;
        document.getElementById('texxt2').innerHTML = "M";
        setTimeout(typing2, 0);

    }
}

typing2()



let i3 = 0;

let text3 = `rojects I have done`;

function typing3() {
    if (i3 < text3.length) {
        document.getElementById('texxt3').innerHTML += text3.charAt(i3);
        i3++;
        setTimeout(typing3, 100);
    }
    else {
        i3 = 0;
        document.getElementById('texxt3').innerHTML = "P";
        setTimeout(typing3, 0);
    }
}

typing3()


let i4 = 0;

let text4 = `ront-End Projects`;

function typing4() {
    if (i4 < text4.length) {
        document.getElementById('texxt4').innerHTML += text4.charAt(i4);
        i4++;
        setTimeout(typing4, 100);
    }
    else {
        i4 = 0;
        document.getElementById('texxt4').innerHTML = "F";
        setTimeout(typing4, 0);
    }
}

typing4()


let i5 = 0;

let text5 = `hat Clients Says`;

function typing5() {
    if (i5 < text5.length) {
        document.getElementById('texxt5').innerHTML += text5.charAt(i5);
        i5++;
        setTimeout(typing5, 100);
    }
    else {
        i5 = 0;
        document.getElementById('texxt5').innerHTML = "W";
        setTimeout(typing5, 0);
    }
}

typing5()

const btn = document.getElementById('form');
const userName = document.getElementById('inputName');

function sending() {
    btn.innerHTML = 'Your Message has been successfully send. Thank You!'
}