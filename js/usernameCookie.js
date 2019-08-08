function usernameCookie() {
    //获取cookie ,显示用户名
    if (getCookie()) {
        document.getElementsByClassName('wrapperLeft_a')[0].innerHTML = getCookie();
        document.getElementsByClassName('wrapperLeft_a')[1].innerHTML = "退出";
    }

    function getCookie() {
        if (document.cookie.includes('username')) {
            let username = document.cookie;
            username = username.split("=")
            return username[1];
        }
        return false;
    }
}