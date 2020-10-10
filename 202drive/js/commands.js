console.log("%c%s", "color: white; background: red; font-size: 50px;","米奇搖搖搖");
console.log("貓咪雲端版本 >> Ver 1.20\nRelease Date: 2020/09/30\n\n");

function files(myName, Type) {
    if (myName === ""){
        alert("共享碼不得留白");
        return;
    }
    if (Type === "download"){
        document.location.href="./" + myName
    }
}
