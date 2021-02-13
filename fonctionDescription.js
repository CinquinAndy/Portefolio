function changementtaillefenetre() {
    let e = document.getElementById("premiereImageCarroussel"), n = document.getElementById("deuxiemeImageCarroussel"),
        s = document.getElementById("troisiemeImageCarroussel"),
        g = document.getElementById("quatriemeImageCarroussel"),
        m = document.getElementById("cinquiemeImageCarroussel"), o = document.getElementById("sixiemeImageCarroussel"),
        i = document.getElementById("septiemeImageCarroussel"), r = document.getElementById("huitiemeImageCarroussel"),
        t = document.getElementById("neuviemeImageCarroussel"), a = document.getElementById("dixiemeImageCarroussel"),
        y = document.getElementById("imagePresentationSiteJulieSommaro"),
        z = document.getElementById("imagePresentationSiteIsabelleCinquin"),
    w = document.getElementById("imagePresentationTutorat"),
    v = document.getElementById("imagePresentationAquatair");
    document.body.clientWidth >= 680 ? (
        e.src = "images/cinquinMaeva.png",
        n.src = "images/Conseils.png",
        s.src = "images/Ifrocean.png",
        g.src = "images/CinquinAndy.png",
        m.src = "images/BewSite.png",
        o.src = "images/Endar.png",
            i.src = "images/Hublot.png",
            r.src = "images/LogoPerso.png",
            t.src = "images/PortefolioV2.png",
            a.src = "images/ProjetRetroAliceDesktop.png",
            y.src = "images/julieSommaro.jpg",
            z.src = "images/isabelleCinquin.jpg",
            w.src = "images/scratchOverflow.jpg",
            v.src = "images/aquatair.png"
        )
        : document.body.clientWidth < 680 && (
                e.src = "images/cinquinMaevaPhone.png",
                    n.src = "images/ConseilsPhone.png",
                    s.src = "images/IfroceanPhone.png",
                    g.src = "images/CinquinAndyPhone.png",
                    m.src = "images/BewSitePhone.png",
                    o.src = "images/EndarPhone.png",
                    i.src = "images/HublotPhone.png",
                    r.src = "images/LogoPersoPhone.png",
                    t.src = "images/PortefolioV2Phone.png",
                    a.src = "images/ProjetRetroAlicePhone.png",
                    y.src = "images/julieSommaroPhone.jpg" ,
                    z.src = "images/isabelleCinquinPhone.jpg",
                    w.src = "images/scratchOverflowPhone.jpg",
                    v.src = "images/aquatairPhone.png"
    )
}
