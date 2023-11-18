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