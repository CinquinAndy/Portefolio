function changementtaillefenetre() {
    let e = document.getElementById("premiereImageCarroussel"), n = document.getElementById("deuxiemeImageCarroussel"),
        w = document.getElementById("imagePresentationTutorat"),
        t = document.getElementById("quatriemeImageCarroussel"),
        m = document.getElementById("cinquiemeImageCarroussel"), o = document.getElementById("sixiemeImageCarroussel"),
        g = document.getElementById("septiemeImageCarroussel"), i = document.getElementById("huitiemeImageCarroussel"),
        r = document.getElementById("neuviemeImageCarroussel"), a = document.getElementById("dixiemeImageCarroussel");
    document.body.clientWidth >= 680 ? (e.src = "images/cinquinMaeva.png", n.src = "images/Conseils.png", w.src = "images/scratchOverflow.jpg", t.src = "images/CinquinAndy.png", m.src = "images/BewSite.png", o.src = "images/Endar.png", g.src = "images/Hublot.png", i.src = "images/LogoPerso.png", r.src = "images/PortefolioV2.png", a.src = "images/ProjetRetroAliceDesktop.png", document.getElementById("frisePhone").style.display = "none", document.getElementById("friseDesktop").style.display = "block") : document.body.clientWidth < 680 && (e.src = "images/cinquinMaevaPhone.png", n.src = "images/ConseilsPhone.png", w.src = "images/scratchOverflowPhone.jpg", t.src = "images/CinquinAndyPhone.png", m.src = "images/BewSitePhone.png", o.src = "images/EndarPhone.png", g.src = "images/HublotPhone.png", i.src = "images/LogoPersoPhone.png", r.src = "images/PortefolioV2Phone.png", a.src = "images/ProjetRetroAlicePhone.png", document.getElementById("friseDesktop").style.display = "none", document.getElementById("frisePhone").style.display = "block")
}
