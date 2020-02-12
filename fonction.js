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
    Page1.style.animationName='slideout';
    Page1.style.marginTop="100vh";
    setTimeout(clickSuite1_AfterAnimation,1000);
}
function clickSuite1_AfterAnimation() {
    Page1.style.display="none";
    Page1.style.animationName='slidein';
    Page1.style.marginTop="0";
    Page2.style.display="flex";
    stop();
    Bouton_Arrow_down.setAttribute('onclick','clickSuite2()');
}

function clickSuite2(){
    // click sur qui suis-je ? -> go sur mes projets -> 2->5
    Page2.style.animationName='slideout';
    Page2.style.marginTop="100vh";
    setTimeout(clickSuite2_AfterAnimation,1000);
}
function clickSuite2_AfterAnimation(){
    // click sur qui suis-je ? -> go sur mes projets -> 2->5
    Page2.style.display="none";
    Page2.style.animationName='slidein';
    Page2.style.marginTop="0";
    Page6.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite5()');
}

function clickSuite2More(){
    // click pour en savoirs plus -> go sur mon parcours -> 2->3
    Page2.style.animationName='slideout';
    Page2.style.marginTop="100vh";
    setTimeout(clickSuite2More_AfterAnimation,1000);
}
function clickSuite2More_AfterAnimation(){
    // click pour en savoirs plus -> go sur mon parcours -> 2->3
    Page2.style.display="none";
    Page2.style.animationName='slidein';
    Page2.style.marginTop="0";
    Page3.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite5()');
}

function clickSuite3(){
    // click sur mon parcours -> go sur mes projets 3->5
    Page3.style.animationName='slideout';
    Page3.style.marginTop="100vh";
    setTimeout(clickSuite3_AfterAnimation,1000);
}
function clickSuite3_AfterAnimation(){
    // click sur mon parcours -> go sur mes projets 3->5
    Page3.style.display="none";
    Page3.style.animationName='slidein';
    Page3.style.marginTop="0";
    Page6.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite5()');
}

// ok ->
function clickSuite3More(){
    // click pour en savoirs plus -> go sur mon histoire, passions -> 3->4
    Page3.style.animationName='slideout';
    Page3.style.marginTop="100vh";
    setTimeout(clickSuite3More_AfterAnimation,1000);
}
function clickSuite3More_AfterAnimation(){
    // click pour en savoirs plus -> go sur mon histoire, passions -> 3->4
    Page3.style.display="none";
    Page3.style.animationName='slidein';
    Page3.style.marginTop="0";
    Page4.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite5()');
}

function clickSuite3More_Suite(){
    // click pour en savoirs plus -> go sur mon histoire, passions -> 3->4
    Page4.style.animationName='slideout';
    Page4.style.marginTop="100vh";
    setTimeout(clickSuite3More_AfterAnimation_Suite,1000);
}
function clickSuite3More_AfterAnimation_Suite(){
    // click pour en savoirs plus -> go sur mon histoire, passions -> 3->4
    Page4.style.display="none";
    Page4.style.animationName='slidein';
    Page4.style.marginTop="0";
    Page6.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite5()');
}

function clickSuite4(){
    // click sur Mon histoire, Mes passions -> go sur mes projets 4->5
    Page5.style.animationName='slideout';
    Page5.style.marginTop="100vh";
    setTimeout(clickSuite4_AfterAnimation,1000);
}
function clickSuite4_AfterAnimation(){
    // click sur Mon histoire, Mes passions -> go sur mes projets 4->5
    Page5.style.display="none";
    Page5.style.animationName='slidein';
    Page5.style.marginTop="0";
    Page6.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite5()');
}

function clickSuite5(){
    // click sur mes projets/réalisations -> go sur mes expériences 5->6
    Page3.style.animationName='slideout';
    Page3.style.marginTop="100vh";
    Page4.style.animationName='slideout';
    Page4.style.marginTop="100vh";
    Page5.style.animationName='slideout';
    Page5.style.marginTop="100vh";
    Page6.style.animationName='slideout';
    Page6.style.marginTop="100vh";
    setTimeout(clickSuite5_AfterAnimation,1000);
}
function clickSuite5_AfterAnimation(){
    // click sur mes projets/réalisations -> go sur mes expériences 5->6
    Page3.style.display="none";
    Page3.style.animationName='slidein';
    Page3.style.marginTop="0";
    Page4.style.display="none";
    Page4.style.animationName='slidein';
    Page4.style.marginTop="0";
    Page5.style.display="none";
    Page5.style.animationName='slidein';
    Page5.style.marginTop="0";
    Page6.style.display="none";
    Page6.style.animationName='slidein';
    Page6.style.marginTop="0";
    Page7.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite6()');
}

function clickSuite6(){
    // click sur Expériences -> go sur mes compétences 6->7
    Page7.style.animationName='slideout';
    Page7.style.marginTop="100vh";
    setTimeout(clickSuite6_AfterAnimation,1000);
}
function clickSuite6_AfterAnimation(){
    // click sur Expériences -> go sur mes compétences 6->7
    Page7.style.display="none";
    Page7.style.animationName='slidein';
    Page7.style.marginTop="0";
    Page8.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite7()');
}

function clickSuite7(){
    // click sur mes compétences -> go sur les contacts 7->8
    Page8.style.animationName='slideout';
    Page8.style.marginTop="100vh";
    setTimeout(clickSuite7_AfterAnimation,1000);
}
function clickSuite7_AfterAnimation(){
    // click sur mes compétences -> go sur les contacts 7->8
    Page8.style.display="none";
    Page8.style.animationName='slidein';
    Page8.style.marginTop="0";
    Page9.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite8()');
}

function clickSuite8(){
    // click sur contact - retour accueil 8->1
    Page9.style.animationName='slideout';
    Page9.style.marginTop="100vh";
    setTimeout(clickSuite8_AfterAnimation,1000);
}
function clickSuite8_AfterAnimation(){
    // click sur contact - retour accueil 8->1
    Page9.style.display="none";
    Page9.style.animationName='slidein';
    Page9.style.marginTop="0";
    Page1.style.display="flex";
    Bouton_Arrow_down.setAttribute('onclick','clickSuite1()');
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
        if ((Rchaine % 25) == 0) {
            document.getElementById("arrow_downz").style.color = "grey";
        }
        if ((Rchaine % 50) == 0){
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
            if (Rnb >= 12) {
                Rreset = true;
            }
            Rnb++;
            Ri = 0;
        }
    }
}