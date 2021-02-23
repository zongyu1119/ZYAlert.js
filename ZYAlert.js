/**一个提示消息 */
ZYAlert = function (text, auto_close = true) {
    var old_div = document.getElementById("alert_div");
    if (old_div != null) {
        old_div.remove();
    }
    var div = null;
    this.close = function () {
        if (div != null) {
            div.remove();
        }
    };
    if (text != null && text.length > 0) {    
        div = document.createElement("div");
        div.id="alert_div";
        div.style.width = (text.length * 25) + "px";
        div.style.height = "40px";
        div.style.border = "1px solid #007bff";
        div.style.fontSize = "20px";
        div.innerText = text;
        div.style.textAlign = "center";
        div.style.lineHeight = "40px";
        div.style.backgroundColor = "#17a2b8";
        div.style.color = "#FFFFFF";
        div.style.borderRadius = "15px";
        div.style.position = "fixed";
        div.style.left = (parseInt(document.body.clientWidth) - (text.length * 25)) / 2 + "px";
        div.style.top = "60px";
        div.style.zIndex = "99999";
        document.body.appendChild(div);
        if (auto_close) {
            setTimeout(function () {
                div.remove();
            }, 3000);
        }
    }
}