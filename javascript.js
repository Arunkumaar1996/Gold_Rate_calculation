function goldValue(){
    var goldPrice,goldWeight,gwastage,ggst,gmaking,goldWastage,totalWeight,goldAmount,addGst,goldGst,totalPrice;
    goldPrice = 4785;
    goldWeight =parseFloat(document.getElementById("gweight").value);
    gwastage =parseFloat(document.getElementById("gwastage").value);
    ggst =parseFloat(document.getElementById("ggst").value);
    gmaking =parseFloat(document.getElementById("gmaking").value);
    goldWastage = gwastage/100;
    totalWeight = goldWeight + goldWastage;
    goldAmount = totalWeight * goldPrice;

    ggst = ggst/100;
    addGst = goldAmount * ggst;
    goldGst = goldAmount + addGst;
    
    goldMaking = goldWeight * gmaking;
    inFormat = goldMaking.toFixed(3).toLocaleString('hi-IN');

    totalPrice = goldGst + goldMaking;
    inFormatTotal = totalPrice.toFixed(3).toLocaleString('hi-IN');
    if(gmaking==="0"||gmaking===""){
        document.getElementById("update").innerHTML="Rs."+inFormat;
    }
    else{
        document.getElementById("update").innerHTML="Rs."+inFormatTotal;

    }
};
function clear(){
    document.getElementById("gweight").value="";
    document.getElementById("gwastage").value="";
    document.getElementById("ggst").value="";
    document.getElementById("gmaking").value="";
}
