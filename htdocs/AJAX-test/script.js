window.onload = function () {
    document.querySelector('#shop_ip').onclick = function () {
        ajaxGet(1);
    }
}

function ajaxGet(){
    var request = new XMLHttpRequest();

    // request.readyState // 0 - new
    // request.readyState // 1 - open
    // request.readyState // 2 - send
    // request.readyState // 3 - частично пришёл ответ
    // request.readyState // 4 - ответ пришёл полностью


    request.onreadystatechange = function (){
        if(request.readyState == 4 && request.status == 200) {
            document.querySelector('#myip').innerHTML = request.responseText;
        }
    }

    request.open('GET','ip.php');
    request.send();
}