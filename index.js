document.getElementById("discription-view").innerHTML=("Hello sample text");
document.getElementById("submit").addEventListener("click",function() {
    var disc = document.getElementById("discription").value;
    document.getElementById("discription-view").innerHTML=disc;
    var blob =new Blob([data],{ type: "text/plain;charset=utf-8"});
    const filename= 'litzz.txt';
    let newLink = document.createElement("a");
        newLink.download = filename;
        
});

