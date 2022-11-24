let key = document.getElementById('key'),
    keyCode = document.getElementById('code'),
    hiddenElements = document.querySelectorAll('.hidden');

document.onkeydown = function (e) {
    [].forEach.call(hiddenElements, function (el) {
        el.classList.remove('hidden');
    });
    info.classList.add('hidden');
    key.innerHTML = e.key;
    keyCode.innerHTML = e.keyCode;
    console.log(e)
};