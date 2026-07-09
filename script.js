

document.querySelectorAll('.tyou').forEach(function (el) {
  // 蝶が 3 つあれば、el に 1 つずつ入って、ここが 3 回実行される
  el.addEventListener('mouseover', function () {
  // マウスが乗るたびに、ここが実行される
    // 画面内のランダムな位置
    el.style.left = (Math.random() * 800) + "px";
    el.style.top = (Math.random() * 300 + 100) + "px";
});
});
document.querySelectorAll('.foo').forEach(function (el) {
el.addEventListener('mouseover', function () {
	el.style.left = (Math.random() * 300 + 400) + "px";
    	el.style.top = (Math.random() * 80 + 200) + "px";

});
});