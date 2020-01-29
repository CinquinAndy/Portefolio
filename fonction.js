function changementtaillefenetre(){
    let premiereImage = document.getElementById("premiereImageCarroussel");
    let deuxiemeImage = document.getElementById("deuxiemeImageCarroussel");
    let troisiemeImage = document.getElementById("troisiemeImageCarroussel");
    let quatriemeImage = document.getElementById("quatriemeImageCarroussel");
    let cinquiemeImage = document.getElementById("cinquiemeImageCarroussel");
    let sixiemeImage = document.getElementById("sixiemeImageCarroussel");
    if (document.body.clientWidth>=680){
        premiereImage.src='images/cinquinMaeva.png';
        deuxiemeImage.src='images/Conseils.png';
        troisiemeImage.src='images/Ifrocean.png';
        quatriemeImage.src='images/CinquinAndy.png';
        cinquiemeImage.src='images/BewSite.png';
        sixiemeImage.src='images/Endar.png';
    }else if (document.body.clientWidth<680){
        premiereImage.src='images/cinquinMaevaPhone.png';
        deuxiemeImage.src='images/ConseilsPhone.png';
        troisiemeImage.src='images/IfroceanPhone.png';
        quatriemeImage.src='images/CinquinAndyPhone.png';
        cinquiemeImage.src='images/BewSitePhone.png';
        sixiemeImage.src='images/EndarPhone.png';
    }
}

function clickSuite1(){
    // click sur accueil 1->2
    Page1.style.display="none";
    Page2.style.display="flex";
    stop();
}
function clickSuite2(){
    // click sur qui suis-je ? -> go sur mes projets -> 2->5
    Page2.style.display="none";
    Page5.style.display="flex";
}
function clickSuite2More(){
    // click pour en savoirs plus -> go sur mon parcours -> 2->3
    Page2.style.display="none";
    Page3.style.display="flex";
}
function clickSuite3(){
    // click sur mon parcours -> go sur mes projets 3->5
    Page3.style.display="none";
    Page5.style.display="flex";
}
function clickSuite3More(){
    // click pour en savoirs plus -> go sur mon histoire, passions -> 3->4
    Page3.style.display="none";
    Page4.style.display="flex";
}
function clickSuite4(){
    // click sur Mon histoire, Mes passions -> go sur mes projets 4->5
    Page4.style.display="none";
    Page5.style.display="flex";
}
function clickSuite5(){
    // click sur mes projets/réalisations -> go sur mes expériences 5->6
    Page5.style.display="none";
    Page6.style.display="flex";
}
function clickSuite6(){
    // click sur Expériences -> go sur mes compétences 6->7
    Page6.style.display="none";
    Page7.style.display="flex";
}
function clickSuite7(){
    // click sur mes compétences -> go sur les contacts 7->8
    Page7.style.display="none";
    Page8.style.display="flex";
}
function clickSuite8(){
    // click sur contact - retour accueil 8->1
    Page8.style.display="none";
    Page1.style.display="flex";
    interval=setInterval(change, 30);
    interval2=setInterval(Rchange, 30);
}

function change() {
    caractere = TableauPremiereLigne[nb].length;
    if (reset) {
        chaine = document.getElementsByClassName("ligne")[0].innerHTML;
        document.getElementsByClassName("ligne")[0].innerHTML = chaine.substring(0, chaine.length - 1);
        if (document.getElementsByClassName("ligne")[0].innerHTML.toString() == ".") {
            reset = false;
        }
    } else {
        if (i < caractere) {
            document.getElementsByClassName("ligne")[0].innerHTML += TableauPremiereLigne[nb][i];
            i++;
        } else {
            if (nb >= 2) {
                nb = -1;
            }
            nb++;
            i = 0;
            reset = true;
        }
    }
}
function stop() {
    clearInterval(interval);
    clearInterval(interval2);
}

function Rchange() {
    if (Rreset) {
        if ((Rchaine % 10) == 0) {
            document.getElementById("arrow_downz").style.color = "grey";
        }
        if ((Rchaine % 20) == 0){
            document.getElementById("arrow_downz").style.color = "white";
            Rchaine=0;
        }
        Rchaine++;
    } else {
        Rcaractere = TableauResteLigne[Rnb].length;
        if (Ri < Rcaractere) {
            document.getElementsByClassName("ligne")[Rnb + 1].innerHTML += TableauResteLigne[Rnb][Ri];
            Ri++;
        } else {
            if (Rnb >= 15) {
                Rreset = true;
            }
            Rnb++;
            Ri = 0;
        }
    }
}