var width = $(".img_div").width();

var mq = window.matchMedia( "(max-width: 992px)" );
if(mq.matches){
    $(".img_div").css("height",width);
}

function redirect(){
    // const cat_list = ["category_A", "category_B", "category_C"];
    // var previous_link = document.referrer;
    // var prev_cat = previous_link.slice(-15,-5);

    document.location.href = document.referrer;
}

// category_B.html

$(".back_btn").on("click", redirect);