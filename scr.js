var btn1 = document.getElementById("btn1");
btn1.addEventListener('click', function() {
    console.log(this);
});

var btns = document.getElementsByClassName('btn');
for (var i=0; i<btns.length; ++i) {
    btns[i].addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
}


var btnTs = document.getElementsByClassName('btnT');
for (var i=0; i<btnTs.length; ++i) {
    btnTs[i].addEventListener('click', function() {
        this.innerHTML = 'クリックすな';
        for (var j=0; j<btnTs.length; ++j) {
            btnTs[j].classList.remove('clickedT');
        }
        this.classList.toggle('clickedT');
    });
}