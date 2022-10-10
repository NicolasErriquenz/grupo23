$(document).ready(main);

var manu_expandido = true;

function main() {
    $('.menu_bar').click(function () {
        if (manu_expandido) {
            $('nav').animate({
                left: '0'
            });
        } else {
            $('nav').animate({
                left: '-100%'
            });
        }
        manu_expandido = !manu_expandido;
    });

};

const aVideos = [
    {
        id:1,
        video: "https://www.youtube.com/embed/WHFLQGfM7EE",
        titulo: "Clase HTML 01",
        active: true,
    },
    {
        id:2,
        video: "https://www.youtube.com/embed/imC-qNhYcvs",
        titulo: "Clase HTML 02",
        active: false,
    },
    {
        id:3,
        video: "https://www.youtube.com/embed/Q5wkoCwsL1A",
        titulo: "Clase CSS 01",
        active: false,
    },
    {
        id:4,
        video: "https://www.youtube.com/embed/ZoSTl-kOPi4",
        titulo: "Clase CSS 02",
        active: false,
    },
    {
        id:5,
        video: "https://www.youtube.com/embed/D7QlAtra_jk",
        titulo: "Clase Bootstrap",
        active: false,
    },
    {
        id:6,
        video: "https://www.youtube.com/embed/6mOFuraWjxw",
        titulo: "Clase Git / GitHub",
        active: false,
    },
];

function createTags(){
    aVideos.forEach(video => {
        var span = `<a class="tag ${(video.active ? "tag_activo" : "")}" href="javascript:void(0);" attr-id="${video.id}">${video.titulo}</a>`;
        $(".tag_container").append(span)
    });
}

createTags();

$(".tag").click(function(el){
    $(".tag").removeClass("tag_activo");
    $(this).addClass("tag_activo");

    var idClickeado = $(this).attr("attr-id");
    var video = aVideos.filter( video => video.id == idClickeado)[0];
    console.log(video.video);
    $(".iframe").attr("src", video.video);
})