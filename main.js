'use strict';


function run_flash() {
    $("#flash").css("opacity", "0.7");
    $("#flash").fadeTo("middle", 0);
}

// {
//     const nofrash = document.getElementById('nofrash');
//     const frash = document.getElementById('btn5');
//     frash.addEventListener('click', () => {

//         if (nofrash.classList == '') {
//             nofrash.classList.add('frash');
//         } else {
//             nofrash.classList.remove('frash');
//         }
//     });
// }





// 小雨小雨小雨小雨
{
    const fine = document.getElementById('fine');
    const change = document.getElementById('btn1');
    change.addEventListener('click', () => {
        
        if (fine.classList == '') {
            fine.classList.add('rains');
        } else {
            fine.classList.remove('rains');
        }
    });
}


// 本降り本降り本降り本降り
{
    const fine3 = document.getElementById('fine3');
    const fine4 = document.getElementById('fine4');
    const change = document.getElementById('btn2');
    change.addEventListener('click', () => {

        if (fine3.classList == '') {
            fine3.classList.add('rains3');
        } else {
            fine3.classList.remove('rains3');
        }

        if (fine4.classList == '') {
            fine4.classList.add('rains4');
        } else { fine4.classList.remove('rains4'); }
    });
}


// 土砂降り土砂降り土砂降り土砂降り
{
    const change = document.getElementById('btn3');
    change.addEventListener('click', () => {
        const fine5 = document.getElementById('fine5');
        const fine6 = document.getElementById('fine6');

        if (fine5.classList == '') {
            fine5.classList.add('rains5');
        } else {
            fine5.classList.remove('rains5');
        }

        if (fine6.classList == '') {
            fine6.classList.add('rains6');
        } else { fine6.classList.remove('rains6'); }
    });
}


// バケツバケツバケツバケツバケツ
{
    const change = document.getElementById('btn4');
    change.addEventListener('click', () => {
        const fine7 = document.getElementById('fine7');
        const fine8 = document.getElementById('fine8');

        if (fine7.classList == '') {
            fine7.classList.add('rains7');
        } else {
            fine7.classList.remove('rains7');
        }

        if (fine8.classList == '') {
            fine8.classList.add('rains8');
        } else { fine8.classList.remove('rains8'); }
    });
}

// function sound() {
//     // [ID:sound-file]の音声ファイルを再生[play()]する
//     document.getElementById('sound-file').play();
// }


window.addEventListener('DOMContentLoaded', function () {

    const btn_play = document.getElementById("btn_play");
    const btn_pause = document.getElementById("btn_pause");
    const audioElement = document.querySelector("audio");

    btn_play.addEventListener("click", e => {
        audioElement.play();
    });

    btn_pause.addEventListener("click", e => {
        audioElement.pause();
    });
});