function changementtaillefenetre(){
    let premiereImage = document.getElementById("premiereImageCarroussel");
    let deuxiemeImage = document.getElementById("deuxiemeImageCarroussel");
    let troisiemeImage = document.getElementById("troisiemeImageCarroussel");
    let quatriemeImage = document.getElementById("quatriemeImageCarroussel");
    let cinquiemeImage = document.getElementById("cinquiemeImageCarroussel");
    let sixiemeImage = document.getElementById("sixiemeImageCarroussel");
    let septiemeImage = document.getElementById("septiemeImageCarroussel");
    let huitiemeImage = document.getElementById("huitiemeImageCarroussel");
    let neuviemeImage = document.getElementById("neuviemeImageCarroussel");
    let dixiemeImage = document.getElementById("dixiemeImageCarroussel");
    if (document.body.clientWidth>=680){
        premiereImage.src='images/cinquinMaeva.png';
        deuxiemeImage.src='images/Conseils.png';
        troisiemeImage.src='images/Ifrocean.png';
        quatriemeImage.src='images/CinquinAndy.png';
        cinquiemeImage.src='images/BewSite.png';
        sixiemeImage.src='images/Endar.png';
        septiemeImage.src='images/Hublot.png';
        huitiemeImage.src='images/LogoPerso.png';
        neuviemeImage.src='images/PortefolioV2.png';
        dixiemeImage.src='images/ProjetRetroAliceDesktop.png';
    }else if (document.body.clientWidth<680){
        premiereImage.src='images/cinquinMaevaPhone.png';
        deuxiemeImage.src='images/ConseilsPhone.png';
        troisiemeImage.src='images/IfroceanPhone.png';
        quatriemeImage.src='images/CinquinAndyPhone.png';
        cinquiemeImage.src='images/BewSitePhone.png';
        sixiemeImage.src='images/EndarPhone.png';
        septiemeImage.src='images/HublotPhone.png';
        huitiemeImage.src='images/LogoPersoPhone.png';
        neuviemeImage.src='images/PortefolioV2Phone.png';
        dixiemeImage.src='images/ProjetRetroAlicePhone.png';
    }
}
