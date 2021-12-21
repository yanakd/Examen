function Calcul(){
    let cal = document.getElementById("calcul"); 
    resu=document.getElementById("larg").value*document.getElementById("long").value;
    cal.textContent = "Surface:"+resu+"M2";
    
    let nom=document.getElementById("nom");
    let aire= document.getElementById("linepiece");
    aire.textcontent="Pièce:"+nom+resu+"m2";
    
    let surfacetot= document.getElementById("linesurf");
    resultats=[];
    resultats.push(resu)
    for (let i=0; i<resultats.lenght;i++){
        let tot=0;
        tot+=resultats[0];
    }
    surfacetot.textcontent="Surface totale:"+tot+"m2";

};