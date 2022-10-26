
const hamburger = document.getElementById('js-openbtn');
const nav = document.getElementById('js-nav');
const body = document.body;

function toggleNav() {
    // ハンバーガーメニューボタンのイベントリスナ登録
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('js-active');
        hamburger.classList.toggle('js-active');
    });
}
toggleNav();

function closeNav() {
    // ページ内リンクをクリックしただけではメニューは閉じない
    // ページ内リンククリックでメニューを閉じる(クラスを除去する)イベントリスナ登録
    const el = document.getElementsByClassName('js-link');
    for(let i = 0; i < el.length; i++) {
        el[i].addEventListener('click', function() {
            nav.classList.remove('js-active');
            hamburger.classList.remove('js-active');
        });
    }
}
closeNav();

// Animation on Scroll
AOS.init();
