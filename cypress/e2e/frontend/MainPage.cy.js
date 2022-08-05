/// <reference types="cypress" />

describe('Main Page', () => {
  it('Verify Title', () => {
    cy.visit('https://www.cfrcalatori.ro/')
    cy.title().should('eq','CFR Călători pagina oficială. Mersul trenurilor. Bilete online. Oferte. Servicii')
  })

  it('Verify Cookies Pop-up', () => {

    cy.get('#catapult-cookie-bar > h3').should('include.text','Cookies').should('be.visible')
    cy.get('#catapult-cookie-bar > span[class="ctcc-left-side"]').should('include.text','Pentru a afla mai multe informatii despre cookies si modul cum le folosim, te rugam citeste ').should('be.visible')
    cy.get('#catapult-cookie-bar > span[class="ctcc-left-side"] > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/politica-de-cookies/')
    cy.get('#catapult-cookie-bar > span[class="ctcc-left-side"] > a').should('have.text','Politica de Cookies').should('be.visible')
    cy.get('#catapult-cookie-bar > span[class="ctcc-right-side"] > button').should('have.text','Am înțeles').should('be.visible')

  // cy.get('#catapult-cookie-bar > span[class="ctcc-left-side"] > a').invoke('removeAttr','target').click()
  // cy.title().should('eq','Politica de Cookies - CFR Calatori')
  // cy.go('back')

    cy.get('#catapult-cookie-bar > span[class="ctcc-right-side"] > button').click()
  })

  it('Verify Notification Header', () => {
    cy.get('.notificareheader > div > div > div > a').should('be.visible').invoke('attr','href')
    .should('eq',"https://www.cfrcalatori.ro/comunicate/reducere-de-5-la-achizitionarea-biletelor-de-la-automatele-de-vanzare-si-prin-sistemele-online/")
    cy.get('.notificareheader').should('have.text',"\n\nAtenție! REDUCERE de 5% la achiziționarea biletelor de tren în trafic intern cumpărate de la automatele de bilete aflate în gări,\ndin aplicațiile mobile și de pe site-ul www.cfrcalatori.ro. Află detalii\n\n")
  })

  it('Verify Logo', () => {
    cy.get('.wpmm_brand_logo_wrap > a ').should('be.visible').invoke('attr','href').should('eq',"https://www.cfrcalatori.ro/")
    cy.get('.wpmm_brand_logo_wrap > a > img').click()
    cy.title().should('eq','CFR Călători pagina oficială. Mersul trenurilor. Bilete online. Oferte. Servicii')

  })

  it('Verify Menu Accordeon', () => {

    cy.get('.wpmm_mobile_menu_btn.show-close-icon').should('be.visible').should('have.text'," Meniu").click()
    cy.get('#menu-menu-1').should('be.visible')

    cy.get('#wp-megamenu-item-845 > a').should('have.text',"Acasă").should('be.visible').invoke('attr','href').should('eq',"https://www.cfrcalatori.ro/")
  //  cy.get('#wp-megamenu-item-845').click()
  //  cy.title().should('eq','CFR Călători pagina oficială. Mersul trenurilor. Bilete online. Oferte. Servicii')
  //  cy.go('back')
  
    cy.get('#wp-megamenu-item-727 > a').should('have.text',"Trafic intern  ").should('be.visible')
  //  cy.get('#wp-megamenu-item-727').click()
  
  cy.get('#wp-megamenu-item-710 > a').should('have.text',"Trafic internațional  ").should('be.visible')

  cy.get('#wp-megamenu-item-706 > a').should('have.text',"Presă  ").should('be.visible')

  cy.get('#wp-megamenu-item-700 > a').should('have.text',"Companie  ").should('be.visible')

  cy.get('#wp-megamenu-item-59 > a').should('have.text',"Contact").should('be.visible')

  cy.get('#wp-megamenu-item-31473 > a').should('have.text',"Contul meu  ").should('be.visible')

  cy.get('#wp-megamenu-item-846 > a').should('be.visible')

  cy.get('#wp-megamenu-item-wpml-ls-2-en > a').should('be.visible')
  cy.get('#wp-megamenu-item-wpml-ls-2-en > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/en/')
  })

  it('Verify Loop Wrap', () => {
    cy.get('.tp-loop-wrap').should('be.visible').invoke('attr','href')

  })

  it('Verify News', () => {
    cy.get('.news').should('be.visible')
    cy.get('div.news > div.infoC > div.ico').should('be.visible')
    cy.get('div.news > div.infoC > div.conte > span.nameComunicat').should('be.visible').should('have.text','Comunicat de presă')

  })

  it('Verify Menu Lateral', () => {
    cy.get('#menu-item-14317 > a').invoke('attr','href').should('eq','https://bileteinternationale.cfrcalatori.ro/ro/booking/search')
    cy.get('#menu-item-14317').should('have.text','Mers tren trafic internațional')
    cy.get('#menu-item-848 > a').invoke('attr','href').should('eq','https://bilete.cfrcalatori.ro/ro-RO/Trains')
    cy.get('#menu-item-848').should('have.text','Info tren în circulație')
    cy.get('#menu-item-2705 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/informatii-telefonice/')
    cy.get('#menu-item-2705').should('have.text','Informații telefonice')
    cy.get('#menu-item-928 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/asistenta-persoane-cu-dizabilitati/')
    cy.get('#menu-item-928').should('have.text','Asistenţă PRM')
    cy.get('#menu-item-36805 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/tren-charter/')
    cy.get('#menu-item-36805').should('have.text','Transport Charter')
    cy.get('#menu-item-3045 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/intrebari-frecvente/')
    cy.get('#menu-item-3045').should('have.text','Întrebări frecvente')
    cy.get('#menu-item-15375 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/cumpara-bilete-de-tren-online/')
    cy.get('#menu-item-15375').should('have.text','Cum cumpăr bilete ONLINE? / Detalii contul meu')
    cy.get('#menu-item-2715 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/raporteaza-calatoria-fara-bilet/')
    cy.get('#menu-item-2715').should('have.text','Raportează călătoria fără bilet')
  })

  it('Verify Sticky Notes', () => {
    cy.get('.stickyPost').should('be.visible')
   
  })

  it('Verify Footer', () => {
    cy.get('#nav_menu-12 > h3').should('be.visible').should('have.text','CFR Călători')
    cy.get('#menu-item-36802 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/parerea-ta-conteaza/')
    cy.get('#menu-item-36802').should('have.text','Părerea ta contează!')
    cy.get('#menu-item-994 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/galerie-media/')
    cy.get('#menu-item-994').should('have.text','Galerie media')
    cy.get('#menu-item-6041 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/politica-de-confidentialitate/')
    cy.get('#menu-item-6041').should('have.text','Politica de Confidenţialitate')
    cy.get('#menu-item-10296 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/politica-de-cookies/')
    cy.get('#menu-item-10296').should('have.text','Politica de Cookies')
    cy.get('#menu-item-27469 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/politica-de-monitorizare-audio-video/')
    cy.get('#menu-item-27469').should('have.text','Politica monitorizare video/audio-video')
    cy.get('#menu-item-29038 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/politica-de-protectie-a-datelor-cu-caracter-personal/')
    cy.get('#menu-item-29038').should('have.text','Politica  de protecție a datelor cu caracter personal')
    cy.get('#menu-item-995 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/conditii-de-utilizare/')
    cy.get('#menu-item-995').should('have.text','Condiţii de utilizare')
    cy.get('#menu-item-996 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/termeni-si-conditii/')
    cy.get('#menu-item-996').should('have.text','Termeni şi condiţii')
    cy.get('#menu-item-998 > a').invoke('attr','href').should('eq','http://www.anpc.gov.ro/')
    cy.get('#menu-item-998').should('have.text','A.N.P.C.')
    cy.get('#menu-item-2900 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/blog/')
    cy.get('#menu-item-2900').should('have.text','Blog')
    cy.get('#menu-item-5544 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/harta-site/')
    cy.get('#menu-item-5544').should('have.text','Hartă site')

    cy.get('#nav_menu-11 > h3').should('be.visible').should('have.text','Informaţii utile')
    cy.get('#menu-item-937 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/intrebari-frecvente/')
    cy.get('#menu-item-937').should('have.text','Întrebări frecvente')
    cy.get('#menu-item-944 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/reguli-pentru-calatoria-cu-trenul/')
    cy.get('#menu-item-944').should('have.text','Reguli pentru călătoria cu trenul')
    cy.get('#menu-item-6469 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/instructiuni-privind-imbunatatirea-accesibilitatii-paginii-web/')
    cy.get('#menu-item-6469').should('have.text','Îmbunătățirea accesibilității')
    cy.get('#menu-item-27464 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/link-uri-utile-si-parteneri/')
    cy.get('#menu-item-27464').should('have.text','Link-uri utile şi parteneri')
    cy.get('#menu-item-960').should('have.text','Legislaţie\n\n\tContravenţii\n\tCondiţii generale de transport\n\n')
    cy.get('#menu-item-961 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/contraventii/')
    cy.get('#menu-item-961').should('have.text','Contravenţii')
    cy.get('#menu-item-962 > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2021/12/Conditii-generale-de-transport-MT-2021-2022.pdf')
    cy.get('#menu-item-962').should('have.text','Condiţii generale de transport')

    cy.get('#text-3 > h3').should('be.visible').should('have.text','Newsletter')
    cy.get('#text-3 > div.textwidget > p').should('be.visible').should('have.text','Abonează-te la newsletter și fii la curent cu toate noutățile și&nbsp;ofertele noastre!')
    cy.get('.tnp-form > input.tnp-email').should('be.visible')
    cy.get('.tnp-form > input.tnp-submit').should('be.visible')
    cy.get('#custom_html-2 > div.textwidget.custom-html-widget > p').should('be.visible').should('have.text','Instalează-ți aplicația CFR Călători și cumpără-ți biletul direct de pe telefon!')
    cy.get('#custom_html-2 > div > ul > li:nth-child(1) > a').invoke('attr','href').should('eq','https://play.google.com/store/apps/details?id=com.Infofer.ImtMobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1')
    cy.get('#custom_html-2 > div > ul > li:nth-child(2) > a').invoke('attr','href').should('eq','https://apps.apple.com/us/app/cfr-c%C4%83l%C4%83tori-bilete-online/id1600030825')
    cy.get('#custom_html-2 > div > ul > li:nth-child(3) > a').invoke('attr','href').should('eq','https://appgallery.huawei.com/app/C104792137?sharePrepath=ag&channelId=Website&id=27233d70f2fe4870a6a4ae8d2dc95c70&s=08D2D858D0D2C9A2AFCDFCCEFDC16EB06E2DC20E58415E349F41423B0D2FE878&detailType=0&v=&callType=AGDLINK&installType=0000')

    cy.get('#text_icl-3 > h3').should('be.visible').should('have.text','Contact')
    cy.get('#text_icl-3 > div > p:nth-child(1)').should('be.visible').should('have.text',' B-dul Dinicu Golescu, nr. 38, sector 1, cod 010873 Bucureşti – ROMANIA')
    cy.get('#text_icl-3 > div > p:nth-child(2)').should('be.visible').should('have.text',' Telverde – 0800.88.44.44\n(număr apelabil gratuit, prin reţeaua Telekom, zilnic între orele 8:00-20:00)')
    cy.get('#text_icl-3 > div > p:nth-child(3)').should('be.visible').should('have.text',' relpublic.calatori@cfrcalatori.ro')
    cy.get('#text_icl-3 > div > p:nth-child(4)').should('be.visible').should('have.text','021/9521 – tel info trafic local\n')
    cy.get('#text_icl-3 > div > p:nth-child(5) > a').should('be.visible')
    cy.get('#text_icl-3 > div > div > a:nth-child(1)').should('be.visible').invoke('attr','href').should('eq','https://www.facebook.com/CFRCalatori.ro/')
    cy.get('#text_icl-3 > div > div > a:nth-child(2)').should('be.visible').invoke('attr','href').should('eq','https://www.youtube.com/channel/UCMWUZmaArYMBDGhVTvK5zAQ/featured')
    cy.get('#text_icl-3 > div > div > a:nth-child(3)').should('be.visible').invoke('attr','href').should('eq','/blog')
  })

})