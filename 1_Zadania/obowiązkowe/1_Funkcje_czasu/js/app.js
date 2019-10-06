function CountHello(x){
    var counter = 0;
    var interval = setInterval(()=>{
        if(counter == x){
            clearInterval(interval);
        }
        console.log("Hello ", counter);
        counter++;
    },500)}
    CountHello(5);
