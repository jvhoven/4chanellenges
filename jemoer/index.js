var teller=0;
var maxwidth=41;
var width=1;

while(width>0){
    var row = " ".repeat((maxwidth-width)/2)+"*".repeat(width)+" ".repeat((maxwidth-width)/2);
    if(teller<20){
        width+=2;
    } else {
        width-=2;
    }

    teller++;
    console.log(row);
}
