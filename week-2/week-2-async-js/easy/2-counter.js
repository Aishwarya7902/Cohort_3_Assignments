let counter=0;
function increseCount(){
    console.log(counter);
    counter++;
    setTimeout(increseCount,1000);
}

increseCount();