setInterval(()=>{
    var time = new Date();
    var startTime = new Date("2023/02/14 22:00");
    var st = time - startTime;
    document.getElementById("timenow").innerHTML = 
     "我们相爱了" + parseInt(st / 1000 / 60 / 60 / 24).toString() + "天啦~~";
},500);