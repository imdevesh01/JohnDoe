$(window).scroll(function () {
    if ($(this).scrollTop() >
        100) {
        $(".aro").fadeIn();
    } else {
        $(".aro").fadeOut();
    }
});

var i = 1;
document.querySelector(".prev").addEventListener("click", function () {
    if (i == 1) {
        document.querySelector("#t1").setAttribute("src", "emp.jpeg");
        i = 3;
        document.querySelector("#t3").setAttribute("src", "fill.jpeg");
        document.querySelector(".picture").setAttribute("src", "pic3.jpeg");
    }
    else {
        document.querySelector("#t" + i).setAttribute("src", "emp.jpeg");
        i--;
        document.querySelector("#t" + i).setAttribute("src", "fill.jpeg");
        document.querySelector(".picture").setAttribute("src", "pic" + i + ".jpeg");
    }
})
document.querySelector(".next").addEventListener("click", function () {
    if (i == 3) {
        document.querySelector("#t3").setAttribute("src", "emp.jpeg");
        i = 1;
        document.querySelector("#t1").setAttribute("src", "fill.jpeg");
        document.querySelector(".picture").setAttribute("src", "pic1.jpeg");
    }
    else {
        document.querySelector("#t" + i).setAttribute("src", "emp.jpeg");
        i++;
        document.querySelector("#t" + i).setAttribute("src", "fill.jpeg");
        document.querySelector(".picture").setAttribute("src", "pic" + i + ".jpeg");
    }
})

var i = 1;
var j = 1;
$(".small").click(function (e) {
    var x = this.id;
    var xx = x[x.length - 1];
    j = i;
    i = xx;

    var p = "#t" + i;
    var q = "#t" + j;
    $(".picture").attr("src", "pic" + i + ".jpeg");
    $(p).attr("src", "fill.jpeg");
    $(q).attr("src", "emp.jpeg");
})
