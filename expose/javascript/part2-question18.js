function updateTime() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time); 
}

setInterval(updateTime, 1000);