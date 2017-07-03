window.onload = function () {
    document.querySelector('#shop_ip').onclick = function () {
        ajaxGet('ip.php', function(data){
                console.log(data);
        });
        
        ajaxGet('ip.php?id=12&a=b&hz=nz', function(data){
                document.querySelector('#myip').innerHTML = data;
        });
    }
}

function ajaxGet(url, callback){
    var f = callback || function(data){};
    var request = new XMLHttpRequest();

    // request.readyState // 0 - new
    // request.readyState // 1 - open
    // request.readyState // 2 - send
    // request.readyState // 3 - частично пришёл ответ
    // request.readyState // 4 - ответ пришёл полностью


    request.onreadystatechange = function (){
        if(request.readyState == 4 && request.status == 200) {
            f(request.responseText);
        }
    }

    request.open('GET',url);
    request.send();
}
