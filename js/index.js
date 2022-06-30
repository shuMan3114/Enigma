var width = $(".img_div").width();

var mq = window.matchMedia( "(max-width: 1050px)" );
if(mq.matches){
    $(".img_div").css("height",width);
}


var width = $(".vid").width();

var mqv = window.matchMedia("(max-width: 850px)");
if (mvq.matches) {
    $(".vid").css("height", width);
}

function redirect(){
    const cat_list = ["category_A", "category_B", "category_C"];
    var previous_link = document.referrer;
    var prev_cat = previous_link.slice(-15,-5);
    switch (prev_cat) {
        case cat_list[0]:
            document.location.href = document.referrer;
            break;
        case cat_list[1]:
            document.location.href = document.referrer;
            break;
        case cat_list[2]:
            document.location.href = document.referrer;
            break;
        default:
            window.location.href="http://nhvps.github.io/enigma2k22/";
            break;
    }
}

$(".back_btn").on("click", redirect);