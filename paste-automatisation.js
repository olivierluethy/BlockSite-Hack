const input = document.getElementById("block-domain");
const button = document.getElementById("add-domain");

// Array mit URLs
const urls = [
    ["01net.com","1.ivesoccer.sx","1001spiele.de","11freunde.de","1flix.to","1v1.lol","2048game.com","20min.ch","20minutes.fr","3dvf.com"],
    ["3fach.ch","4-4-2.com","6abc.com","90min.com","90min.de","9news.com.au","9to5mac.com","a16z.com","aa.com.tr","aarauer-nachrichten.ch"],
    ["aargauerzeitung.ch","abc.net.au","abcnews.go.com","abendblatt.de","abendzeitung-muenchen.de","actionnews5.com","actu.fr","adnkronos.com","advanced-television.com","advnture.com"],
    ["advocate.com","aerotelegraph.com","afd.de","afr.com","africacheck.org","agar.io","agbrief.com","agenciabrasilia.df.gov.br","aiaffiliatemarket.com","airmail.news"],
    ["ajour.ch","aktiencheck.de","aktion.campact.de","al.com","alfredopedulla.com","aljazeera.com","alle-autos-in.de","alsat.mk","americamagazine.org","ameyawdebrah.com"],
    ["amlintelligence.com","amnesty.de","amnesty.org","analyticsindiamag.com","analyticsinsight.net","android-user.de","annabelle.ch","ansa.it","antenne.de","aol.com"],
    ["ap7am.com","apnews.com","appgefahren.de","arabnews.com","architecturaldigest.com","ardmediathek.de","armyrecognition.com","arsenalinsider.com","arstechnica.com","arte.tv"],
    ["askanews.it","aspistrategist.org.au","athlonsports.com","atptour.com","augsburger-allgemeine.de","augustman.com","autoblog.it","autogpt.net","autoplus.fr","autozeitung.de"],
    ["auvio.rtbf.be","axios.com","azertag.az","azione.it","baike.baidu.com","banned.video","barcablaugranes.com","barcauniversal.com","barrons.com","basket.de"],
    ["basketball-world.news","basketball.de","basketballnews.com","basketnews.com","battledudes.io","bavarianfootballworks.com","bayobserver.ca","bazonline.ch","bbc.co.uk","bbc.com"],
    ["beinsports.com","bellevue.nzz.ch","benzinga.com","berliner-kurier.de","berliner-zeitung.de","bernerzeitung.ch","besoccer.com","beta.deeeep.io","betanews.com","bfmtv.com"],
    ["bgr.com","bild.de","billboard.com","biography.com","bitheroesarena.io","biz.chosun.com","bizjournals.com","bleepingcomputer.com","blick.ch","blinker.de"],
    ["blog-der-republik.de","blognone.com","bloomberg.com","bluewin.ch","boell.de","boerse-online.de","boingboing.net","bolavip.com","borkenerzeitung.de","bote.ch"],
    ["bpb.de","br.de","br.pinterest.com","brides.com","bridge.georgetown.edu","brigitte.de","britannica.com","britishnewspaperarchive.co.uk","britpopnews.com","brookings.edu"],
    ["brusselstimes.com","brutal.io","btc-echo.de","bulinews.com","bundesliga-streams.net","bundesliga.com","bundesregierung.de","bundle.app","bunte.de","business-standard.com"],
    ["businessinsider.com","businessinsider.de","businesstoday.in","butfootballclub.fr","buzzfeed.com","bz-berlin.de","bzbasel.ch","ca.sports.yahoo.com","ca.style.yahoo.com","calciomercato.com"],
    ["calmatters.org","campaignlegal.org","capital.de","capitalfm.com","cash.ch","catalannews.com","catholicnewsagency.com","cbc.ca","cbr.com","cbsnews.com"],
    ["cbssports.com","cdn.totalsportek.space","cdt.ch","cdu.de","cep.eu","cfr.org","ch.fashionnetwork.com","ch.marketscreener.com","ch.pinterest.com","ch.wetter.com"],
    ["channelnewsasia.com","cheatsheet.com","chicagostarmedia.com","chip.de","christianpost.com","cicero.de","cine.to","city-journal.org","cityam.com","closermag.fr"],
    ["closerweekly.com","cloudwards.net","cnbc.com","cnews.fr","cointelegraph.com","cointribune.com","collectspace.com","collider.com","come-on.de","comicbook.com"],
    ["computerworld.com","connexionfrance.com","consequence.net","conservativehome.com","constitutionparty.com","consulting.us","correctiv.org","corriere.it","cosmopolitan.com","cosmopolitan.de"],
    ["courrierinternational.com","courthousenews.com","cracked.com","crazygames.com","cryptopolitan.com","csu.de","ctvnews.ca","curved.de","cyberinsider.com","dailyhodl.com"],
    ["dailymail.co.uk","dailynews.com","dailypost.ng","dailyrecord.co.uk","dailysignal.com","dailytelegraph.com.au","dasinvestment.com","datacenterdynamics.com","daytondailynews.com","dazn.com"],
    ["de-de.facebook.com","de.crazygames.com","de.euronews.com","de.investing.com","de.nachrichten.yahoo.com","de.pornhub.com","de.uefa.com","deadline.com","deavita.com","decrypt.co"],
    ["defence-network.com","defensenews.com","defensescoop.com","defly.io","democrats-appropriations.house.gov","democrats.org","der-farang.com","derbund.ch","derbyderbyderby.it","derstandard.at"],
    ["derstandard.de","derwesten.de","deseret.com","designboom.com","designrush.com","deutschlandfunk.de","deutschlandfunkkultur.de","devclass.com","developer-tech.com","devops.com"],
    ["dezeen.com","dhnet.be","die-linke.de","die-mitte.ch","diep.io","diepresse.com","digit.in","digitallearning.eletsonline.com","digitalzentrum-berlin.de","diretta.it"],
    ["divicast.com","dnaindia.com","dubaieye1038.com","dunyanews.tv","dw.com","dwdl.de","e.vnexpress.net","ebu.ch","ec.europa.eu","ecin.de"],
    ["economictimes.indiatimes.com","economist.com","edition.cnn.com","edu-schweiz.ch","edweek.org","einsiedleranzeiger.ch","ekusports.com","electrek.co","elle.com","elledecor.com"],
    ["empireofthekop.com","en.as.com","en.sflix.ad","englandrugby.com","english.ahram.org.eg","english.elpais.com","english.mathrubhumi.com","enlargement.ec.europa.eu","eonline.com","espn.co.uk"],
    ["espn.com","essentiallysports.com","eu.cantonrep.com","eu.delawareonline.com","eu.floridatoday.com","eu.freep.com","eu.indystar.com","eu.statesman.com","eu.usatoday.com","eunews.it"],
    ["euractiv.com","euractiv.de","euractiv.fr","eurogamer.net","eurohoops.net","eurointegration.com.ua","euromaidanpress.com","euronews.com","europacalcio.it","europe1.fr"],
    ["eurosport.com","eurosport.de","eurosport.fr","eurovision.tv","eurovisionworld.com","euroweeklynews.com","evoke.ie","evowars.io","evoworld.io","evp.ch"],
    ["explorersweb.com","express.co.uk","express.de","eztvx.to","facebook.com","fandomwire.com","fanpage.it","fastcompany.com","faz.net","fcbarcelona.com"],
    ["fcbarcelonanoticias.com","fcbayern.com","fcinter1908.it","fdp.ch","fdp.de","ffh.de","fiba.basketball","fichajes.net","fijivillage.com","film.at"],
    ["filmoviplex.com","filmstarts.de","financialexpress.com","financialounge.com","financialpost.com","finanzmarktwelt.de","finanznachrichten.de","finews.asia","firstpost.com","flashscore.com"],
    ["flashscore.de","flixhd.cc","focus.de","fool.com","foot-anglais.net","foot01.com","foot11.com","football-espana.net","football-italia.net","football.london"],
    ["football365.com","football365.fr","footboom1.com","footmercato.net","forbes.com","forbes.com.au","forbes.it","forbiddenstories.org","foreignaffairs.com","foreignpolicy.com"],
    ["fortune.com","forzaitalia.it","fox59.com","fox8tv.com","foxbusiness.com","foxnews.com","fr-fr.facebook.com","fr.besoccer.com","fr.de","fr.euronews.com"],
    ["fr.hespress.com","france.tv","france24.com","france3-regions.francetvinfo.fr","francetvinfo.fr","frandroid.com","frapp.ch","fratelli-italia.it","fredzone.org","freenet.de"],
    ["freepik.com","freepressjournal.in","freiburger-nachrichten.ch","freiheit.org","freitag.de","ft.com","ftd.de","fupa.net","fussball-wm.pro","fussball.news"],
    ["fussballeuropa.com","fussballtransfers.com","futurezone.at","futurism.com","fuw.ch","ga.de","gadgets360.com","gala.de","gala.fr","gamblinginsider.com"],
    ["gamedeveloper.com","gameforge.com","gamereactor.de","gameshub.com","gamesindustry.biz","gamespot.com","gartic.io","gazzetta.it","gbnews.com","geektyrant.com"],
    ["geekwire.com","genbeta.com","geo.tv","gianlucadimarzio.com","giochi123.net","givemesport.com","gizmodo.com","glamour.de","globalbankingandfinance.com","gluc.mx"],
    ["goal.com","gobattle.io","gobison.com","golem.de","golfpost.de","gomocs.com","gooberdash.winterpixel.io","goodhousekeeping.com","googlewatchblog.de","gop.com"],
    ["gopack.com","goutsa.com","gp.org","gq-magazin.de","grheute.ch","gruene.ch","gruene.de","grunliberale.ch","guardian.ng","gulfnews.com"],
    ["gulftoday.ae","gzeromedia.com","habr.com","hackernoon.com","hackster.io","handelsblatt.com","handelszeitung.ch","hannover96.de","hardwareluxx.de","haz.de"],
    ["healthcaredive.com","heart.co.uk","heidi.news","heise.de","hellomagazine.com","heraldsun.com.au","herodote.net","hessenschau.de","heute.at","hexanaut.io"],
    ["hindustantimes.com","hiphop.de","hna.de","hoefner.ch","hola.com","hole.io","holeio.com","hollywoodreporter.com","home.1und1.de","home.saxo"],
    ["honey.nine.com.au","hongkongfp.com","horizonsleparti.fr","horizont.net","hr-inforadio.de","html5.gamedistribution.com","huffingtonpost.co.uk","huffingtonpost.fr","huffpost.com","humanite.fr"],
    ["hungarianconservative.com","hydraflix.vip","iblnews.org","ibtimes.co.uk","ici.radio-canada.ca","ig.com","iheart.com","ihf.info","il.usembassy.gov","ilfattoquotidiano.it"],
    ["ilmanifesto.it","ilmessaggero.it","ilpost.it","ilromanista.eu","ilsole24ore.com","imdb.com","in-muenchen.de","in.mashable.com","inc.com","inc42.com"],
    ["independent.co.uk","independent.ie","india.com","indianacapitalchronicle.com","indiandefencereview.com","indianexpress.com","indiatimes.com","indiatoday.in","indiatvnews.com","indiewire.com"],
    ["infopetitenation.ca","inforadio.de","information.tv5monde.com","infowars.com","infoworld.com","ingame.de","inkstickmedia.com","inside-digital.de","insidehook.com","insideparadeplatz.ch"],
    ["institutional-money.com","interestingengineering.com","internationalepolitik.de","intouch.wunderweib.de","investopedia.com","investors.com","investrends.ch","iodonna.it","iogames.onl","iogames.space"],
    ["ipg-journal.de","iphone-ticker.de","iphoneincanada.ca","iranintl.com","iris-france.org","irishstar.com","irishtimes.com","it-daily.net","it.crazygames.com","it.mk"],
    ["it.usembassy.gov","italiaoggi.it","italiaviva.it","itopnews.de","itpro.com","itv.com","iupathletics.com","jacobin.com","jang.com.pk","japantimes.co.jp"],
    ["jean-jaures.org","jedinews.com","jezebel.com","jklm.fun","jns.org","journal21.ch","journaldeleconomie.fr","journaldemontreal.com","journaldequebec.com","journalgazette.net"],
    ["jpost.com","juedische-allgemeine.de","jungefreiheit.de","kabinett-online.de","kath.ch","katv.com","kenyans.co.ke","kget.com","kicker.ch","kimatv.com"],
    ["kino.de","kiomet.com","kirka.io","klatsch-tratsch.de","kleinezeitung.at","koha.net","koimoi.com","kosmo.at","kottke.org","kour.io"],
    ["kpmg.com","krebsonsecurity.com","kress.de","krone.at","kronehit.at","krunker.io","ksta.de","ktla.com","kurier.at","kyivindependent.com"],
    ["la.eater.com","la1ere.francetvinfo.fr","la7.it","ladepeche.fr","lafranceinsoumise.fr","laliberte.ch","lalibre.be","laola1.at","lapresse.ca","laregione.ch"],
    ["lastampa.it","latimes.com","lbc.co.uk","leadersnet.at","leadersnet.de","ledevoir.com","lefigaro.fr","lega-dei-ticinesi.ch","legaonline.it","legrandcontinent.eu"],
    ["lejdd.fr","lejournaldureal.fr","lematin.ch","lemonde.fr","lenews.ch","leparisien.fr","lepoint.fr","lequipe.fr","les-transferts.com","lesechos.fr"],
    ["lesecologistes.fr","lesnumeriques.com","lesoir.be","lessentiel.lu","letemps.ch","lexpress.fr","liberation.fr","lifehacker.com","lifestyleasia.com","lifewire.com"],
    ["lindependant.fr","linternaute.com","littlebigsnake.com","live5news.com","livemint.com","liverpoolecho.co.uk","livesport24.net","localmemphis.com","lopinion.fr","lordz.io"],
    ["lowyat.net","lp.org","lto.de","luce.lanazione.it","ludwigshafen24.de","luzernerzeitung.ch","lvz.de","m6.fr","macitynet.it","macrumors.com"],
    ["madame.lefigaro.fr","madriduniversal.com","mailwp01.newsmemory.com","makeuseof.com","mallorcamagazin.com","mallorcazeitung.es","maltatoday.com.mt","mamamia.com.au","manager-magazin.de","manchestercity.news"],
    ["manchestereveningnews.co.uk","mancity.com","marca.com","marktechpost.com","masala.com","mashable.com","mathsisfun.com","mazespin.live","mdr.de","me.usembassy.gov"],
    ["mediapart.fr","meduza.io","meedia.de","mein-mmo.de","mercurynews.com","merkur.de","methstreams.com","metro.co.uk","miamiherald.com","midilibre.fr"],
    ["milanofinanza.it","minigiants.io","minigiochi.com","miniplay.com","mirror.co.uk","mitsloanreview.mx","mixvale.com.br","mk.co.kr","mk48.io","mobiflip.de"],
    ["moneycab.com","moneycontrol.com","monocle.com","moomoo.io","mope.io","morgenpost.de","motherjones.com","motociclismo.pt","motorcyclesports.net","mouvementdemocrate.fr"],
    ["moviebreak.de","moviedb.wiki","moviepilot.de","movieweb.com","movimento5stelle.eu","msn.com","msnbc.com","musikexpress.de","myflixerz.to","mynorthwest.com"],
    ["n-tv.de","nachhaltigleben.ch","nachrichten.at","narwhale.io","nationalcrimeagency.gov.uk","nationalworld.com","nature.com","nau.ch","nba.com","nbc.com"],
    ["nbcnews.com","nbcsports.com","nd-aktuell.de","ndr.de","ndtv.com","nebraska.tv","nebraskaexaminer.com","networkworld.com","netzpolitik.org","netzwelt.de"],
    ["netzwoche.ch","neunzigplus.de","newindianexpress.com","newjerseymonitor.com","newrepublic.com","news.com.au","news.de","news.gallup.com","news.google.com","news.leanderisd.org"],
    ["news.meaww.com","news.sky.com","news.stv.tv","news.ultrasurfing.com","news.yahoo.com","news18.com","newsbreak.com","newsbytesapp.com","newscientist.com","newsdirect.com"],
    ["newsflix.at","newsnationnow.com","newsroom.ucla.edu","newsukraine.rbc.ua","newsweek.com","newsx.com","newvision.co.ug","newyorker.com","next.io","nextmoto.it"],
    ["nickiswift.com","nidwaldnerzeitung.ch","nme.com","noen.at","nordbayern.de","northamptonsaints.co.uk","nouveautes-tele.com","noz.de","npr.org","nydailynews.com"],
    ["nymag.com","nypost.com","nytimes.com","nzherald.co.nz","nzz.ch","observervoice.com","oceanographicmagazine.com","oe24.at","oilprice.com","ok-magazin.de"],
    ["oldjuve.com","olemisssports.com","olympics.com","on-line.mkawlat26.com","onefootball.com","oneworldinformation.com","onvista.de","onzemondial.com","open6emesens.fr","opinione.it"],
    ["oregoncapitalchronicle.com","orf.at","osvnews.com","ouest-france.fr","outnow.ch","outsideonline.com","overtakefans.com","pagesix.com","paper-io.com","parade.com"],
    ["parismatch.com","parliament.uk","parti-socialiste.fr","partitodemocratico.it","pbs.org","pcf.fr","pcgamer.com","pcgames.de","pcgamesinsider.biz","pda.ch"],
    ["pearlanddean.com","people.com","perplexity.ai","persoenlich.com","petapixel.com","petri-heil.ch","pewresearch.org","philomag.com","pillarcatholic.com","pinkvilla.com"],
    ["pinterest.com","planetmountain.com","planetrugby.com","platform.soccerstreams100.io","plattformj.ch","play2048.co","pocketgamer.biz","podnews.net","poki.com","politico.com"],
    ["politico.eu","politifact.com","pomona.ch","pomu.co.it","pravda.com.ua","presseportal.de","pride.com","prnewswire.com","proactiveinvestors.com","profil.at"],
    ["projects.fivethirtyeight.com","promiblick.de","promiflash.de","promipool.de","propublica.org","prospect.org","publicsenat.fr","puls24.at","puntodebreak.com","pymnts.com"],
    ["quotidiano.net","qz.com","r.soccerstreamlinks.com","radaronline.com","radiofrance.fr","radiopilatus.ch","radiopopolare.it","radiotimes.com","radiox.ch","rainews.it"],
    ["ramblinwreck.com","ran.de","ranker.com","rassemblementnational.fr","rbb24.de","rdworldonline.com","real-france.fr","realclearmarkets.com","realmadridconfidencial.com","reason.com"],
    ["regiofussball.ch","renaissance.fr","reporter-ohne-grenzen.de","repubblica.it","republicains.fr","researchprofessionalnews.com","reuters.com","rferl.org","rfi.fr","rheinpfalz.de"],
    ["richmondandtwickenhamtimes.co.uk","rmcsport.bfmtv.com","rnd.de","rocketbotroyale2.winterpixel.io","rollcall.com","rollingstone.com","rollingstone.de","rp-online.de","rsi.ch","rt.com"],
    ["rtbf.be","rte.ie","rtl.de","rts.ch","ru.usembassy.gov","rugbypass.com","rumble.com","s.to","saechsische.de","saharareporters.com"],
    ["salisburyjournal.co.uk","san.com","sat1regional.de","saudigazette.com.sa","schaffhausen24.ch","schieb.de","schwaebische.de","schweizer-illustrierte.ch","sciencebusiness.net","scientificamerican.com"],
    ["scmp.com","screendaily.com","screenrant.com","securities.io","seenews.com","semprebarca.com","sempremilan.it","seniorweb.ch","sensortower.com","serienjunkies.de"],
    ["sfchronicle.com","sflix.is","sflix.lat","sflix.se","sflix.to","sflix.website","sflix2.to","sflixgo.is","sfstandard.com","share.america.gov"],
    ["sharewise.com","shellshock.io","si.com","sifted.eu","siliconangle.com","siliconvalley.com","siuecougars.com","sixcolors.com","sixnationsrugby.com","sjuhawknews.com"],
    ["skiinfo.de","skribbl.io","sky-sport.ch","sky.com","skynews.com.au","skysports.com","slate.com","slither.io","smartdroid.de","smartportal.mk"],
    ["smashkarts.io","snapchat.com","snopes.com","snowball-io.io","snowbrains.com","soccer9.sportshub.stream","socialsamosa.com","sofoot.com","softwaretestinghelp.com","solinger-tageblatt.de"],
    ["solothurnerzeitung.ch","sortiraparis.com","sp-ps.ch","spatial.io","spd.de","spectator.co.uk","spektrum.de","spiegel.de","splix.io","spokesman.com"],
    ["sport.de","sport.fr","sport.quotidiano.net","sport.sky.de","sport.sky.it","sport1.de","sport365.fr","sportal.it","sportbild.bild.de","sportbuzzer.de"],
    ["sportcal.com","sportingnews.com","sportjack.ch","sportmediaset.mediaset.it","sportnews.bz","sports.orange.fr","sports.yahoo.com","sportsbeast.site","sportschau.de","sportsfeed24.com"],
    ["sportshub.stream","sportskeeda.com","sportspro.com","spox.com","spynews.ro","srf.ch","stadt-bremerhaven.de","standard.co.uk","starblast.io","starsunfolded.com"],
    ["startupnews.fyi","stern.de","sterntv.de","stickhook.io","stickman.pro","stickmanhookgame.org","stimme.de","stock3.com","straitstimes.com","streamcloud.my"],
    ["streamworld.co","stuff.co.nz","stuttgarter-nachrichten.de","stuttgarter-zeitung.de","sudouest.fr","sueddeutsche.de","suedkurier.de","suedostschweiz.ch","sunshine.ch","super-hex.io"],
    ["supercarblondie.com","svgeurope.org","svp.ch","svp.eu","swiss.basketball","swissinfo.ch","swp-berlin.org","swp.de","swr.de","t-online.de"],
    ["t3n.de","tachles.ch","tag24.de","tagblatt.ch","tagesanzeiger.ch","tagesschau.de","tagesspiegel.de","talksport.com","taming.io","tarletonsports.com"],
    ["taz.de","tdg.ch","teamfootball.fr","teamtalk.com","techcrunch.com","techi.com","technologyreview.com","techopedia.com","techradar.com","techzine.eu"],
    ["ted.com","teenvogue.com","tele1.ch","telebaern.tv","telecom-handel.de","telegrafi.com","telegraph.co.uk","telestar.fr","telezueri.ch","tennis365.com"],
    ["tennisaktuell.de","tennismagazin.de","tennisnet.com","territorial.io","teslamag.de","teslarati.com","testingcatalog.com","texasstandard.org","tf1.fr","tf1info.fr"],
    ["tg24.sky.it","the-decoder.de","the-sun.com","theafricareport.com","theatlantic.com","theaustralian.com.au","thebulletin.org","thebulwark.com","thecatholicherald.com","theconversation.com"],
    ["thecooldown.com","thecut.com","thedailybeast.com","thedailyeconomy.org","thedp.com","thedriven.io","theflixertv.to","thefp.com","theguardian.com","thehill.com"],
    ["thehindu.com","theinformation.com","theintercept.com","thelist.com","them.us","themirror.com","themoscowtimes.com","thenation.com","thenational.wales","thenationalnews.com"],
    ["thenews.com.pk","thenewstack.io","thenextweb.com","thepinknews.com","theregister.com","therevolvingdoorproject.org","thescottishsun.co.uk","thesportstak.com","thestar.com","thestreet.com"],
    ["thesun.co.uk","thesun.ie","thetab.com","thetablet.co.uk","thetennisgazette.com","thetimes.com","theverge.com","thewrap.com","thisisanfield.com","thurrott.com"],
    ["tiktok.com","time.com","timesnownews.com","timesofindia.indiatimes.com","timesofisrael.com","timesofmalta.com","tio.ch","tmz.com","today.com","toggenburger-zeitung.ch"],
    ["totalprosports.com","totalsportek.to","touteleurope.eu","transfermarkt.ch","travelandleisure.com","travelandtourworld.com","trendmagazin.ch","tribalfootball.com","tribuna.com","tribune.com.pk"],
    ["tribuneindia.com","turkiyetoday.com","tuttomercatoweb.com","tuttosport.com","tv-programme.com","tv47.digital","tvmovie.de","tvpworld.com","tvtonight.com.au","tweaktown.com"],
    ["twoplayergames.org","tyla.com","tz.de","uabsports.com","uefa.com","uhcougars.com","uk.news.yahoo.com","ultimateclassicrock.com","unaids.org","unherd.com"],
    ["unilad.com","unionrayo.com","unite.ai","unn.ua","unoonline.io","unsertirol24.com","usmagazine.com","utamavs.com","uvmathletics.com","v2.sportsurge.net"],
    ["v4.rnbastreams.com","valeursactuelles.com","vanityfair.com","vanityfair.fr","vanityfair.it","variety.com","vaterland.li","vaticannews.va","venturebeat.com","verdict.co.uk"],
    ["vice.com","vidbinge.com","vidsrc.to","vietnam.vn","vietnamnews.vn","vip.de","viply.de","viralmag.fr","visualstudiomagazine.com","voaafrica.com"],
    ["voanews.com","vogue.com","vogue.de","vol.at","volksfreund.de","vox.com","vtv.vn","wa.de","waff.com","walesonline.co.uk"],
    ["wallstreet-online.de","washingtonpost.com","watchtv.click","watchug.com","watson.ch","watson.de","waz-online.de","waz.de","wbur.org","wccftech.com"],
    ["web.de","webcatalog.io","webpronews.com","weekend.at","weforum.org","welovetennis.fr","welt.de","weltwoche.ch","westislandblog.com","whas11.com"],
    ["wienerzeitung.at","windowscentral.com","wings.io","winterthurer-zeitung.ch","wionews.com","wired.com","wishtv.com","wiwo.de","wjla.com","workzeitung.ch"],
    ["worldcargonews.com","wormate.io","wort.lu","woz.ch","wr.de","wset.com","wsj.com","wsws.org","wto.org","wtop.com"],
    ["wtov9.com","wusa9.com","ww1.m4uhd.tv","ww1.streamm4u.ws","wwd.com","www1.wdr.de","www2.movieorca.com","www3.nhk.or.jp","www3.zoechip.com","xcatalunya.cat"],
    ["xperttimes.com","yahoo.com","yardbarker.com","yle.fi","yohoho.io","yop.l-frii.com","yourstory.com","youtube.com","yts.mx","zamin.uz"],
    ["zdf.de","zdnet.com","zeit.de","zenit.org","zentralplus.ch","zhurnal.mk","zofingertagblatt.ch","zombsroyale.io"]
];

// Funktion zum Eingeben und Klicken
function processUrls(arrayIndex = 0, urlIndex = 0) {
    // Prüfen, ob alle Arrays und URLs verarbeitet wurden
    if (arrayIndex >= urls.length) {
        console.log("Alle URLs wurden verarbeitet");
        return;
    }

    // Prüfen, ob das aktuelle Unterarray URLs enthält
    if (urlIndex >= urls[arrayIndex].length) {
        // Zum nächsten Unterarray wechseln
        processUrls(arrayIndex + 1, 0);
        return;
    }

    // Input-Feld leeren und neuen Wert setzen
    input.value = urls[arrayIndex][urlIndex];
    
    // Button klicken
    button.click();
    
    // Nächste URL im aktuellen Unterarray oder nächstes Unterarray verarbeiten
    processUrls(arrayIndex, urlIndex + 1);
}

// Skript starten
processUrls();
