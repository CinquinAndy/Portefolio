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
