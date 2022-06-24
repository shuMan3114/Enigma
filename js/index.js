var width = $(".img_div").width();

var mq = window.matchMedia( "(max-width: 992px)" );
if(mq.matches){
    $(".img_div").css("height",width);
}

function redirect(){
    const cat_list = ["category_A", "category_B", "category_C"];
    var previous_link = document.referrer;
    var prev_cat = previous_link.slice(-15,-5);
    cat_list.forEach(category => {
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
                document.location.href = "https://hunkypotion3114.github.io/Enigma/index.html#event_cards";
                break;
        }
    });

    document.location.href = document.referrer;
}

$(".back_btn").on("click", redirect);