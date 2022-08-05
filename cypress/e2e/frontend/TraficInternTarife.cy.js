/// <reference types="cypress" />

describe('Trafic Intern Tarife', () => {
    it('Verify Title', () => {

      // Going there
      cy.visit('https://www.cfrcalatori.ro/')
      cy.get('.wpmm_mobile_menu_btn.show-close-icon').click()
      cy.get('#wp-megamenu-item-727').click()
      cy.get('#wp-megamenu-item-1058 > a').click()

      //Checking Left Nav Menu

    })
  
    it('Verify Header', () => {

      // Checking Header
      cy.get('#page-sub-header > div > h1').should('have.text','\n                    Preţul integral al legitimaţiilor de călătorie                ')

    })
  
    it('Verify Left Nav', () => {

      //Checking Left Nav
      cy.get('#menu-menu-2 > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.menu-item-has-children.menu-item-727.nav-item > a').should('have.text','Trafic intern')
      cy.get('#menu-menu-2 > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.menu-item-has-children.menu-item-727.nav-item > ul > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.current-menu-parent.menu-item-has-children.menu-item-728.nav-item > a').should('have.text','Tarife')

      
    })

    it('Verify Cumpara Bilete Online Button', () => {

      //Checking Cumpara Bilete Online Button

      cy.get('.cumparaBileteOnline').should('be.visible').should('have.text',' Cumpără bilete online').invoke('attr','href').should('eq','https://bilete.cfrcalatori.ro/ro-RO/Itineraries')

    })

    it('Verify Pretul Integral', () => {

      //Checking Pretul integral
      cy.get('#menu-menu-2 > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.menu-item-has-children.menu-item-727.nav-item > ul > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.current-menu-parent.menu-item-has-children.menu-item-728.nav-item > ul > li.menu-item.menu-item-type-post_type.menu-item-object-page.current-menu-item.page_item.page-item-1053.current_page_item.menu-item-1058.nav-item > a').should('have.text','Preţul integral al legitimaţiilor de călătorie')
      cy.get('#post-1053 > div > h4').should('have.text','Preţul integral al legitimaţiilor de călătorie este format din tariful de transport pe rang de tren și clasă comercială (clasa 1, clasa a 2-a), la care se adaugă tariful de rezervare loc pentru trenurile cu regim de rezervare obligatoriu.')
      
      cy.get('#post-1053 > div > div.alert.alert-info > p').should('have.text','Important!')
      cy.get('#post-1053 > div > div.alert.alert-info > ul > li:nth-child(1)').should('have.text','tarifele de transport nu conțin tariful tichetului de rezervare;')
      cy.get('#post-1053 > div > div.alert.alert-info > ul > li:nth-child(2)').should('have.text','la trenurile fără regim de rezervare, în cazul grupurilor de călători, se pot rezerva compartimente întregi, cu achitarea tarifului de rezervare pentru fiecare loc rezervat;')

      cy.get('#post-1053 > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').should('have.text',' Tarif Tren Regio – Regio Expres – valabil din 01 iulie 2022')
      cy.get('#post-1053 > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > a').should('be.visible').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2022/06/tarif-tren-Regio-01iulie2022.pdf')
      cy.get('#post-1053 > div > table > tbody > tr:nth-child(2) > td:nth-child(1)').should('have.text',' Tarif Tren InterRegio – valabil din 01 iulie 2022')
      cy.get('#post-1053 > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').should('be.visible').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2022/06/tarif-tren-InterRegio-01iulie2022.pdf')
      cy.get('#post-1053 > div > table > tbody > tr:nth-child(3) > td:nth-child(1)').should('have.text',' Tarif Tichet Rezervare – valabil din 01 iulie 2022')
      cy.get('#post-1053 > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > a').should('be.visible').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2022/06/TARIF-TICHET-DE-REZERVARE-01-iulie-2022.pdf')

    })

    it('Verify Suplimente', () => {

      //Go to suplimente
      cy.get('#menu-menu-2 > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.menu-item-has-children.menu-item-727.nav-item > ul > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.current-menu-parent.menu-item-has-children.menu-item-728.nav-item > ul > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-1059.nav-item > a').click()

      // Checking Header
      cy.get('#page-sub-header > div > h1').should('have.text',"\n                    Suplimente la vagon de dormit şi cuşetă                ")

      //Checking Suplimente
      cy.get('#post-1049 > div > h5 > span > strong > a').should('have.text','Suplimente de pat pentru călătoria cu trenul la vagonul de dormit sau cuşetă')
      cy.get('#post-1049 > div > p > span').should('have.text','Pentru călătoria cu trenul la vagonul de dormit sau cușetă legitimațiile de călătorie pot fi cumpărate de la:')
      cy.get('#post-1049 > div > ul > li:nth-child(1)').should('have.text','casele de bilete ale stațiilor și agențiilor de voiaj CFR;')
      cy.get('#post-1049 > div > ul > li:nth-child(2)').should('have.text','ONLINE, accesând „Cumpăra Bilete de tren online”;')
      cy.get('#post-1049 > div > ul > li:nth-child(3)').should('have.text','automatele de vânzare aparținând CFR Călători;')
      cy.get('#post-1049 > div > ul > li:nth-child(4)').should('have.text','automatele de vânzare ale distribuitorilor autorizați;')

      cy.get('#post-1049 > div > table > tbody > tr > td:nth-child(1)').should('have.text',' Tarife – Suplimente de pat pentru călătoria cu trenul la vagonul de dormit și cușetă – valabil din 01 iulie 2022')
      cy.get('#post-1049 > div > table > tbody > tr > td:nth-child(2) > a').should('be.visible').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2022/06/TARIFE-SUPLIMENT-VAGON-DORMIT-ŞI-CUŞETĂ-01iulie2022.pdf')

      //Checking Cumpara Bilete Online Button

      cy.get('.cumparaBileteOnline').should('be.visible').should('have.text',' Cumpără bilete online').invoke('attr','href').should('eq','https://bilete.cfrcalatori.ro/ro-RO/Itineraries')
    })
    
    it('Verify Taxare in Tren', () => {

      //Go to Taxare in Tren
      cy.get('#menu-menu-2 > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.menu-item-has-children.menu-item-727.nav-item > ul > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.current-menu-parent.menu-item-has-children.menu-item-728.nav-item > ul > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-1060.nav-item > a').click()

      // Checking Header
      cy.get('#page-sub-header > div > h1').should('have.text','\n                    Taxarea în tren                ')

      //Checking Taxare in Tren
      cy.get('#post-1046 > div > h5 > strong > span').should('have.text','Taxarea în tren')
      cy.get('#post-1046 > div > p:nth-child(2)').should('have.text','Legitimaţiile de călătorie se pot obţine de la personalul de tren la tarif de taxare în tren, dacă, indiferent din ce motive, călătorul nu şi-a procurat legitimaţie de călătorie de la casele de bilete ale staţiilor de cale ferată şi agenţiilor de voiaj CFR, de la agenţi autorizaţi, automate de vânzare, online.')
      cy.get('#post-1046 > div > p:nth-child(2) > a').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2022/06/tarif-taxare-in-tren-01iulie2022.pdf')
      cy.get('#post-1046 > div > p:nth-child(2) > a').should('have.text','tarif de taxare în tren')
      cy.get('#post-1046 > div > div.alert.alert-info > p > strong > em').should('have.text','Important! Tarifele de transport nu conțin tariful tichetului de rezervare.')
      cy.get('#post-1046 > div > p:nth-child(4) > strong').should('have.text','Personalul de tren emite legitimaţii de călătorie la tarif de casă:')
      cy.get('#post-1046 > div > ol > li > strong').should('have.text','pentru călătorii care urcă în tren din puncte de oprire:')
      cy.get('#post-1046 > div > ul:nth-child(6) > li:nth-child(1)').should('have.text','ale trenurilor în care nu există posibilitatea procurării de legitimaţii de călătorie de la personal autorizat sau automate de vânzare,')
      cy.get('#post-1046 > div > ul:nth-child(6) > li:nth-child(2)').should('have.text','deservite de personal autorizat (distribuitor autorizat de CFR Călători, oficiu poştal, etc.) care nu are biroul de emitere în punctul de oprire, cu condiţia solicitării acestora imediat după urcarea în tren')
      cy.get('#post-1046 > div > p:nth-child(7)').should('have.text','în caz contrar aplicându-se tariful de taxare în tren.')
      cy.get('#post-1046 > div > p:nth-child(8)').should('have.text','      2. şi în următoarele situaţii:')
      cy.get('#post-1046 > div > ul:nth-child(9) > li:nth-child(1)').should('have.text','în cazul suspendării pe o perioadă limitată a vânzării de legitimaţii de călătorie (casier cf – vânzător bilete în CO, CM, etc.),')
      cy.get('#post-1046 > div > ul:nth-child(9) > li:nth-child(2)').should('have.text','când personalul autorizat nu emite legitimaţii de călătorie la toate trenurile din program, situaţii avizate prin telegramă şi afişe în punctele de oprire – pentru trenurile InterRegio,')
      cy.get('#post-1046 > div > ul:nth-child(9) > li:nth-child(3)').should('have.text','când călătorul prezintă un bilet eliberat în tren la tarif de casă sau tarif de taxare în tren /un bilet eliberat de distribuitor autorizat sau de IDM, valabil la un tren care a sosit în staţia de îmbarcare pentru noul tren într-un interval de până la 15 minute (oră de sosire conform program sau din cauza întârzierii primului tren).')

      cy.get('#post-1046 > div > table > tbody > tr > td:nth-child(1)').should('have.text',' Tarif taxare în tren – valabil din 01 iulie 2022')
      cy.get('#post-1049 > div > table > tbody > tr > td:nth-child(2) > a').should('be.visible').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2022/06/TARIFE-SUPLIMENT-VAGON-DORMIT-ŞI-CUŞETĂ-01iulie2022.pdf')

      //Checking Cumpara Bilete Online Button

      cy.get('.cumparaBileteOnline').should('be.visible').should('have.text',' Cumpără bilete online').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2022/06/tarif-taxare-in-tren-01iulie2022.pdf')
    })

    it('Verify Tarif Aeroport', () => {

      //Go to Tarif Aeroport
      cy.get('#menu-menu-2 > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.menu-item-has-children.menu-item-727.nav-item > ul > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.current-menu-parent.menu-item-has-children.menu-item-728.nav-item > ul > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-31096.nav-item > a').click()

      // Checking Header
      cy.get('#page-sub-header > div > h1').should('have.text','\n                    Tarif unic pe ruta București Nord – Aeroportul Internațional Henri Coandă                ')

      //Checking Tarif Aeroport
      cy.get('#post-1187 > div > p:nth-child(1) > strong').should('have.text',"ZILNIC, CFR Călători asigură circulația pe ruta București Nord – Aeroportul Internațional Henri Coandă și retur. ")
      cy.get('#post-1187 > div > p:nth-child(2)').should('have.text','Ce trebuie să știi?')
      cy.get('#post-1187 > div > ul:nth-child(3) > li:nth-child(1)').should('have.text','Călătoria durează aproximativ 20 – 25 minute')
      cy.get('#post-1187 > div > ul:nth-child(3) > li:nth-child(2)').should('have.text','Prețul unui bilet este de 5 lei')
      cy.get('#post-1187 > div > ul:nth-child(3) > li:nth-child(3)').should('have.text','Biletul poate fi cumpărat online, direct din tren, de la casa de bilete sau de la automatele de bilete.')
      cy.get('#post-1187 > div > ul:nth-child(3) > li:nth-child(4)').should('have.text','Cei care cumpără bilete online o pot face până la ora plecarii trenului')
      cy.get('#post-1187 > div > ul:nth-child(3) > li:nth-child(5)').should('have.text','Poti sa cumperi bilet direct din tren fiind implementata plata contactless a biletului de călătorie pentru trenurile care circulă pentru acestă rută.')
      cy.get('#post-1187 > div > ul:nth-child(3) > li:nth-child(6)').should('have.text','Trenurile opresc la Parc Mogoșoaia și Patinoar PO, în intervalul orar 06.00 – 23.00')
      cy.get('#post-1187 > div > ul:nth-child(3) > li:nth-child(7)').should('have.text','În cazul în care se dorește rezervarea unui loc, tariful este de 1 leu*')
      cy.get('#post-1187 > div > p:nth-child(4)').should('have.text','Dacă te afli printre cei care călătoresc frecvent, trebuie să știi că poți opta pentru tipul de abonament care ți se potrivește.')
      cy.get('#post-1187 > div > p:nth-child(5)').should('have.text','Călătorești Nelimitat …')
      cy.get('#post-1187 > div > ul:nth-child(6) > li:nth-child(1)').should('have.text','Abonament săptămânal “Nelimitat 7” – doar 30 lei')
      cy.get('#post-1187 > div > ul:nth-child(6) > li:nth-child(2)').should('have.text','Abonament lunar “Nelimitat 30” – doar 110 lei')
      cy.get('#post-1187 > div > p:nth-child(7)').should('have.text','Sau poți alege anumite zile …')
      cy.get('#post-1187 > div > ul:nth-child(8) > li:nth-child(1)').should('have.text','Abonament lunar 5 zile “Flexi 5” – doar 38 lei')
      cy.get('#post-1187 > div > ul:nth-child(8) > li:nth-child(2)').should('have.text','Abonament lunar 10 zile “Flexi 10” – doar 65 lei')
      cy.get('#post-1187 > div > ul:nth-child(8) > li:nth-child(3)').should('have.text','Abonament lunar 15 zile “Flexi 15” – doar 83 lei')
      cy.get('#post-1187 > div > p:nth-child(9)').should('have.text','\nPentru informaţii permanent actualizate accesaţi modulul mersul trenurilor.')
      cy.get('#post-1187 > div > p:nth-child(10) > img').should('be.visible')
      cy.get('#post-1187 > div > p:nth-child(11) > em').should('have.text','Important! Tarifele afișate sunt valabile din 01 iulie 2022')
      cy.get('#post-1187 > div > p:nth-child(12)').should('have.text','Vă dorim călătorie placută!')
      cy.get('#post-1187 > div > p:nth-child(13)').should('have.text',"\n valabil până la 10 decembrie 2022*")

      //Checking Cumpara Bilete Online Button

      cy.get('.cumparaBileteOnline').should('be.visible').should('have.text',' Cumpără bilete online').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2022/06/tarif-taxare-in-tren-01iulie2022.pdf')
    })

    it('Verify Tarif Oravita Anina', () => {

      //Go to Tarif Oravita Anina
      cy.get('#menu-menu-2 > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.menu-item-has-children.menu-item-727.nav-item > ul > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.current-menu-parent.menu-item-has-children.menu-item-728.nav-item > ul > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-10163.nav-item > a').click()
      
      // Checking Header
      cy.get('#page-sub-header > div > h1').should('have.text','\n                    Tarif unic pe secția Oravita – Anina                ')

      //Checking Tarif Oravita Anina
      cy.get('#post-1008 > div > h4 > strong').should('have.text','Tarif unic de călătorie pe secția Oravița – Anina')
      cy.get('#post-1008 > div > h6').should('have.text','valabil din 01 iulie 2022')
      cy.get('#post-1008 > div > p:nth-child(3)').should('have.text','24 lei* pentru o călătorie simplă la clasa a 2-a')
      cy.get('#post-1008 > div > p:nth-child(4)').should('have.text','Călătoriți în timp pe cea mai veche cale ferată din Sud-Estul Europei – 14 tuneluri, 10 viaducte, tăieturi în munte pe o lungime de 21 de kilometri, deci peste două treimi din întregul traseu!')
      cy.get('#post-1008 > div > div.row > div:nth-child(1) > img').should('be.visible')
      cy.get('#post-1008 > div > div.row > div:nth-child(2) > img').should('be.visible')
      cy.get('#post-1008 > div > div.row > div:nth-child(3) > img').should('be.visible')
      cy.get('#post-1008 > div > p:nth-child(7)').should('have.text','Pe ruta Oravița – Anina și retur circulă o pereche de trenuri iar rezervarea locului este obligatorie!')
      cy.get('#post-1008 > div > p:nth-child(8)').should('have.text','– Regio 9695 pe relația Oravița – Anina, cu plecare din Oravița la ora 11.15 și sosire în Anina 13.15')
      cy.get('#post-1008 > div > p:nth-child(9)').should('have.text','– Regio R 9694 pe relația Anina – Oravița, cu plecare din Anina la ora 14.40 și sosire în Oravița 16.40\n\Legitimațiile de călătorie se pot procura în limita locurilor disponibile, cu anticipație de 30 de zile, ONLINE, de la orice casă de bilete cu emitere electronică aflate în stațiile și agențiile de voiaj CFR Călători și de la automatele de bilete.')
      cy.get('#post-1008 > div > p:nth-child(10)').should('have.text','În ziua plecării trenului, biletele se pot procura atât din staţia Oraviţa cât şi de la personalul de tren la același preț ( inclusiv cu rezervarea locurilor) în limita locurilor disponibile.')
      cy.get('#post-1008 > div > p:nth-child(11)').should('have.text','Pe această rută se emit și legitimații de călătorie prin care se acordă ofertele comerciale SNTFC CFR Călători (Bilet dus-întors, Cartea VSD, Biletul de weekend, Reducerea la procurarea cu anticipaţie a legitimaţiilor de călătorie, etc), cât și facilități la călătoria pe calea ferată în baza unor acte normative (elevi, studenți, pensionari, revoluționari, veterani de război, persoane persecutate din motive politice sau etnice, persoane cu handicap, moți).')
      cy.get('#post-1008 > div > p:nth-child(12)').should('have.text','Abonamentele lunare sau săptămânale se eliberează în conformitate cu zona tarifară solicitată.')
      cy.get('#post-1008 > div > p:nth-child(13)').should('have.text','Important!')
      cy.get('#post-1008 > div > p:nth-child(14)').should('have.text','*Tariful de transport nu are inclus tariful tichetului de rezervare.')
      cy.get('#post-1008 > div > p:nth-child(15)').should('have.text','Pentru grupurile de persoane care călătoresc împreună în aceleași condiții (același tren, aceeași dată, relație, clasă), se pot face solicitări pentru rezervări de locuri fără achitarea pe loc a tarifelor de transport aferente.')

      cy.get('#post-1008 > div > table:nth-child(16) > tbody > tr > td:nth-child(1)').should('have.text',' Află care sunt condițiile pentru călătoria grupurilor')
      cy.get('#post-1008 > div > table:nth-child(16) > tbody > tr > td:nth-child(1) > a').should('be.visible').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/rezervari-pentru-grupuri/')
      cy.get('#post-1008 > div > table:nth-child(16) > tbody > tr > td:nth-child(2)').should('have.text',' Cumpără bilete ONLINE')
      cy.get('#post-1008 > div > table:nth-child(16) > tbody > tr > td:nth-child(2) > a').should('be.visible').invoke('attr','href').should('eq','https://bilete.cfrcalatori.ro/ro-RO/Itineraries')

      //Checking Cumpara Bilete Online Button

      cy.get('.cumparaBileteOnline').should('be.visible').should('have.text',' Cumpără bilete online').invoke('attr','href').should('eq','https://www.cfrcalatori.ro/wp-content/uploads/2022/06/tarif-taxare-in-tren-01iulie2022.pdf')
    })

    it('Verify Tarif Rezervare Trenuri Regio', () => {

      //Go to Tarif Rezervare Trenuri Regio
      cy.get('#menu-menu-2 > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.menu-item-has-children.menu-item-727.nav-item > ul > li.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-ancestor.current-menu-parent.menu-item-has-children.menu-item-728.nav-item > ul > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-19293.nav-item > a').invoke('removeAttr', 'target').click()

      
      // Checking Header
      cy.get('#page-sub-header > div > h1').should('have.text',"**\n Tarif de rezervare la trenuri Regio pe anumite relații **")

      //Checking Tarif Rezervare Trenuri Regio
      cy.get('#post-19286 > div > p').should('have.text','La trenurile Regio cu regim de rezervare, biletele pot fi cumpărate şi direct din aplicaţiile online.\n\La trenurile Regio Expres care circulă pe ruta Bucureşti Nord – Aeroport Henri Coandă se poate opta pentru călătoria cu loc rezervat, la tariful de 1 leu.')
      
    })

  })