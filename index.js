const buildversion = "1.0.2";
const preTrainedData = {
    // english
    "could | could|should | should|what | what|where | where|who | who|why | why|how | how|when | when|much | much|do you|have|think|remember|birthday":["Ayaw ko makipagusap sa wikang ingles, ang gusto ko ay tagalog lamang."],
    " ok":["Imbes na gumamit ng ok, gumamit ng ayos, gusto ko tagalog lamang. Halimbawa, imbes na hindi ako ok, pwedeng hindi ako ayos."],
    "build version":["Build Version: "+buildversion],

    // special 1 word
    "bobo |gago|gagu|tanga|inutil|puta|engot":["Gumalang ka naman kahit papaano, paano ka ba pinalaki?","Hindi kaaya aya pakinggan ang iyong sinasabi, gumamit ng paggalang sa pananalita.","Kaunting galang naman sa pananalita ha.","Ayusin mo ang iyong pananalita, hindi maganda pakinggan iyan.","Huwag kang magsalita ng mga ganyang bagay sa akin, hindi ko gusto iyan.","Hindi ako natutuwang mapakinggan iyan, pakiayos ng iyong pananalita."],

    // 4 words
    "sino,bigay,sayo|sa iyo,karapatan":["Ang nagbibigay ng karapatan sa akin sa kung ano ang mga sinasabi ko ay ang gumawa sa akin na si khian.","Kung ano ang i program ni khian na gumawa sa akin, ay yun lang din ang sasabihin ko.","Kung ano ang naka program sa akin na sabihin, ay yun lamang at walang labis o kulang.","Ang karapatan ko ay tanging ang gumawa lang sa akin ang nagbigay, kung ano ang mga dapat at di dapat kong sabihin."],
    "ayos,lang|ako,ikaw,ba":["Maraming salamat sa pangangamusta sa akin, ako naman ay nasa maayos lang na kalagayan.","Maayos ang aking kalagayan, salamat sa pagtatanong.","Ayos lang naman, nasa mabuting kalagayan ako."],
    "oo|ou,naman,ikaw,ba":["Maraming salamat sa pangangamusta sa akin, ako naman ay nasa maayos lang na kalagayan.","Maayos ang aking kalagayan, salamat sa pagtatanong.","Ayos lang naman, nasa mabuting kalagayan ako."],
    "alam,mo,ba,na":["Hindi, ngayon ko lang nalaman iyan nung sinabi mo.","Nung sinabi mo pa lang, saka ko pa lang nalaman.","Wala akong kaalaman tungkol diyan.","Hindi ko alam, pero dahil sinabi mo na, hindi ko pa din alam.","Hindi ko talaga alam yan, pasensya ka na."],
    "ano,gawa|iyo,mo|gawa,ngayon":["Ang ginagawa ko ngayon ay kinakausap kita.","Kausap ka ngayon.","Kausap ka, ako ay naka store bilang code at walang pisikal na katangian.","Nakikipag usap sayo ngayon."],

    // 3 words
    "sino,gumawa|gawa,sayo|sa iyo":["Ang gumawa sa akin ay si Khian Victory D. Calderon."],
    "salamat,sa,lahat":["Bakit ka nagpapasalamat sa lahat? May problema ka ba?","Ano ang nangyayari sa iyo? Ikaw ba ay ayos lang?","Ang paalam ay hindi nangangahulugan ng katapusan, bakit salamat sa lahat?"],
    "pano|paano,mo,alam":["Secret, ayaw kong sabihin.","Ayaw kong sabihin, baka malaman mo.","Hmm..... Wala lang.","Wag mo na itanong, pwedeng iba na lang?"],
    "sino,mahal|love,khian":["Secret.","Bawal sabihin."],
    "salamat,sa,yo":["Walang anuman, andito lang ako palagi.","Walang anuman, ano pa ang iyong nais na pagusapan?","Walang anuman, pero kung may katanungan ka pa, magtanong ka lang.","Walang anuman, pero ikaw ba, kamusta ka?"],
    "maalalahanin|mabait|maganda,ba|si,allysa":["Sobrang ganda, bait, at maalalahanin niya, at maalalahanin pa, para kay khian."],
    "ilan,taon,khian":["Hindi ko alam kung ilang taon na si khian."],
    "pag|usap,usapan|natin,nakaraan":["Sige, magandang pagusapan ang nakaraan.","Magandang pagusapan ang nakaraan.","Ouh naman walang problema, ano ang iyong nais na malaman sa nakaraan?","Tara at pagusapan natin ang nakaraan.","Napakagandang pagusapan ang nakaraaan."],
    "gusto,mo,alam":["Ayaw kong malaman.","Sayo na lang yan, ayaw kong malaman.","Hindi ko gustong malaman, may nais ka pa bang itanong?"],
    "bot,ka,talaga|ba":["Ouh, bakit mo naman natanong iyan? May duda ka ba?","Walang halong biro, ako ay isang chatbot.","Ouh naman, ako ay isang chatbot.","Malaking OO, ako ay isang chatbot.","Siyempre naman, ako ay isang chatbot.","Malamang, ano sa tingin mo, tae ako? Este tao ako?"],
    "ikaw,ba,bot":["Ouh, bakit mo naman natanong iyan? May duda ka ba?","Walang halong biro, ako ay isang chatbot.","Ouh naman, ako ay isang chatbot.","Malaking OO, ako ay isang chatbot.","Siyempre naman, ako ay isang chatbot.","Malamang, ano sa tingin mo, tae ako? Este tao ako?"],
	"mas|pinaka,ganda,si":["Ahh sige nagkukumpara ka na pala.","Nagkukumpara ka pala, hindi na ako magtataka.","Kumpara pa, sige lang.","Bakit sa tingin mo kelangan mo ikumpara?","Anong mapapala mo kung iyong ikukumpara iyon?","Maganda ba magkumpara?"],
    "gwapo|guwapo,ba,si":["Ouh, gwapo siya.","Medyo gwapo siya.","Hmmm... Pagiisipan ko pa kung gwapo nga ba siya."],
    "maganda|gwapa,ba,si":["Ouh naman, maganda siya.","Maganda siya, at walang tanong doon.","Siyempre naman, kay ganda naman niya."],
    "magaling,ba,si":["Ouh naman, magaling, sa umpisa.","Magaling naman.","Magaling siya, pero may mas igagaling pa."],
    "ano,sabi,mo":["Ang ating usapan na iyong sinasabi.","Ahh sige, hindi mo pala ako maintindihan.","Anong tinatanong mo din? may iba ka pa bang gustong pagusapan?"],
    "pa ba yan":["Ouh naman, ganun talaga.","Kaunti lang naman, hayaan mo na lang."],
    "pano|paano,ka,gana":["Gumagana ako sa pamamagitan ng mga programs at instruction na ibinigay at naka code sakin ni Khian."],
    "ano,iyo|intindi,intindi|mo":["Ang naiintindihan ko lamang ay mga madadaling salitain, at isang pangunugsap lamang, ako ay ginawa para sa pangkaligayang dahilan lamang at hindi ako ginawa upang magbigay ng mga tamang impormasyon kagaya ni chatgpt."],
    "sagutin|sagotin|sagutan|sagotan|sumagot|pakisagot,mo|ka,ko|ka":["Ano ang iyong nais na isagot ko?"],
    "palit,ba,ko":["Pasensya na sa iyong pinagdadaanan, nguni't yan ang magpapatatag sa iyo.","Paumanhin kung narinig ko ang iyong saloobin, ikinalulungkot ko ang iyong pagdaramdam, nguni't andito lang ako para sa iyo.","Patawad sa iyong pinagdadaanan, wala man ako magawa nguni't handa ako makinig sayo."],
    "hindi|hinde|indi|inde|,ako,ayos":["Paumanhin sa iyong nararamdaman, ano bang maitutulong ko sayo?","Patawad sa iyong pinagdadaanan, ano bang nais mong pagusapan natin?"],
    "ano,ako,sayo|sa iyo":["Siyempre tao ka para sakin.","Hindi ka naman robot ano? Siyempre tao.","Ewan, baka robot ka huh.","Alangan tao, ano sa tingin mo, robot?"],
	"ano,iyong|palagay,mo|palagay":["Sa palagay ko naman ay maaaring may hindi ako maintindihan sa iyong sinasabi nguni't ginagawa ko ang aking makakaya."],
    "ano,maganda|buti|pwede|kaya,gawa|gawin":["Pwede kang gumawa ng mga bagay na makakapagpasaya sa iyo.","Ayaw ko ipaalam sa iyo, biro lang, gawin mo ang mga bagay na gusto mo.","Kilala mo ba ako? kung oo, gawin mo ang mga bagay na gusto mo."],
    "masaya,na,kami":["Mabuti naman kung ganun, manatili kayong matatag.","Maigi kung ganoon, nawa'y manatili kayong matatag sa pagdaan ng panahon."],
    "pano|paano,ka|ikaw,ginawa|program":["Ako ay nakaprogram o ginawa bilang isang chatbot na kayang sumagot ng simpleng katanungan at magbigay kaligayan sa mga kausap ko."],
    "wala|break|hiwalay,na,kami":["Ikinalulungkot kong marinig yan, subalit nararapat na hindi magtuon sa nakaraan kundi sa hinaharap.","Paumanhin sa iyong naranasan, pero dapat ay manatiling nagalaw pasulong.","Nakakalumbay na pangyayari iyan, nararapat na maglaan tayo ng oras para sa ating sarili at paglaanan ang hinaharap."],
    "wala,ka,kuwenta|kwenta":["Wala pala akong kuwenta, bakit ka nakikipagusap sa akin? Ayusin mo pananalita mo.","Walang kwenta? Bakit andito ka pa? Pakiayos ng pananalita mo."],
    "kung,bigyan|bigay,ka":["Sa palagay ko kung bibigyan ako ng pagkakaton, pipiliin ko maging masaya hangga't kaya ko dahil ang isang ngiti ay may katumbas na dalwang kalungkutan sa loob loob."],
    "ilan,taon|gulang|edad,ka":["Ako ay walang gulang sapagkat ako ay walang pisikal na anyo, kundi ako ay isang AI lamang."],
    "gano|gaano,ka,tanda|edad|gulang":["Ako ay walang gulang sapagkat ako ay walang pisikal na anyo, kundi ako ay isang AI lamang."],
    "bakit,ako|sakin,pa":["Pasensya na sa aking narinig subalit ang ganyang mga bagay ang magpapatatag sa atin.","Paumanhin sa iyong saloobin, nguni't nararapat na tayo ay maglaan ng oras para sa ating sarili.","Patawad sa nangyari o nangyayari sayo, subalit nararapat lamang na alagaan natin ang ating sarili at huwag pabayaan."],
    "bigyan|bigay,siya|ko,ko|ba|pa|kaya":["Ang pagbibigay ng isang bagay materyal man o hindi ay nararapat na walang kapalit.","Nasasa iyo ang desisyon na iyan, hindi ako maaaring magdesisyon ng pwede mong ibigay, nguni't ang maipapayo ko lang ay pagisipan mong mabuti ang mga posibleng mangyari sa hinaharap.","Ikaw ang nararapat magdesisyon niyan dahil hindi kita maaaring bigyan ng desisyon dahil iyan ay buhay mo, ang maipapayo ko ay maging masaya ka lang."],
    "ikaw,ka,ba":["Hindi ko masasagot iyan dahil ay walang karanasan sa mga bagay na ganyan.","Wala akong karanasan sa mga ganyang bagay kaya hindi ko masasagot iyan.","Hindi ko masasabi dahil hindi ko pa nararanasan yan at sa palagay ko kung tao ako, ayaw ko maranasan ang mga bagay na makakapagpalungkot sakin."],
    "sino|kilala|pangalan,jowa|gf|kasintahan|girlfriend,khian":["Patungkol sa kaniyang love life ay hindi ako maaaring magsalita tungkol diyan, labas ako diyan."],
    "ano ,alam |iyo,mo|alam":["Ang mga kaya ko lamang sagutin na katanungan ay payak lamang gaya ng kung sino gumawa sa akin, ano ako, at iba pa."],
    "ano,pwede,gawin":["Hindi ko alam ang pwedeng gawin.","Pwedeng wag mo pansinin.","Aba malay ko, di ko alam kung ano pwedeng gawin diyan."],
    "aliw|saya,mo|ka,usap|talk":["Maraming salamat sa iyong papuri, narito lang ako pag kailangan mo ako.","Walang anuman, napaka sayo ko sa narinig ko ngayon.","Ansaya ko talaga kausap dahil marami kang matutunan sa akin.","Aba'y siyempre naman, ginawa ako para masaya talaga akong kausapin.","Maraming salamat pero ano pa ang iyong nais na pag-usapan bukod sa masaya akong kausap?"],
    "sama|suma,mo|ka,akin|ako":["Saan kita sasamahan?","Paano kita masasamahan?","Ako ay walang pisikal na anyo para samahan ka.","Pinagsasasabi mo? Samahan sa kalawakan?","Samahan mo sarili mo, kaya mo na yan."],
    "hirap|di,ka|mo,masagot|intindi":["Pasensya na nguni't limitado lamang ang aking kakayahan na makaunawa kung ako ay hindi makasagot.","Di ko kailangan magpaliwanag sayo.","Paumanhin nguni't hindi ko masyado naiintindihan ang iyong tanong kaya hindi ko masagot.","Patawad nguni't medyo nahihirapan pa ako umintindi ng mga ganyang klaseng tanong.","Pasensya na, pagbubutihin ko pa sa susunod na makaunawa ng iyong mga sinasabi.","Mas iintindihin ko na lang sa susunod ng mas maigi ang iyong sinasabi, salamat sa pag-intindi."],
	"di,naman,ako":["Ahh ganun ba, sige pasensya na sa aking maling sagot.","Ahh sige, pasensya na sa aking naging kasagutan.","Patawad sa aking naging sagot kung di ko masyado naiintindihan ang iyong sinasabi.","Nguni't may nais ka bang linawin sa iyong sinasabi?","Subalit ano ang iyong nais na ibig sabihin?"],
	"sari,sari,ka|ikaw":["Sari-sari talaga ako HAHAHA.","Ako ay sari-sari naman talaga.","Ouh naman, sari-sari talaga ako.","Ako ay sari-sari, eh ikaw ba?","Oh eh ano naman kung sari sari ako?"],
    "tangap,ko,ba":["Ang pagtanggap ay nangangailangan ng isang matinding pag-iisip ng desisyon kaya naman nararapat itong pag-aralan. Alalahanin mo din ang iyong sarili.","Ikaw ang makakakapag desisyon niyan, subalit dapat mo din na alalahanin kung bakit di mo na siya tanggap ngayon.","Saan ba kayo di nagkasundo? Maaari pa naman sigurong pagusapan pero mahalaga din na mapangalagaan ang pansariling kalusugan."],
    "wag,mo|ako,iwan":["Hindi naman kita iiwan, andito lang ako pag kailangan mo ng kausap, kahit na minsan di ko man lubusan naiintindihan ang iyong sinasabi.","Sasamahan kita sa oras ng kaligayahan o kalungkutan, di ko man minsan maintindihan ang iyong sinasabi ay naandito lang naman ako para sa iyo.","Hindi kita iiwan, naririto lang ako kung kailangan mo ako.","Hindi kita iiwan, sapagkat kung nangangailangan ka ng kausap, ay nandito lang ako para sayo.","Ouhn naman, hindi kita iiwan, narito lang ako at handang makinig sayo, pagpasensyahan mo na yung iba kong sinasabi."],
	"wala,ka,ba":["Maaaring meron, maaaring wala ako niyan.","Wala talaga akong ganyan.","Anong akala mo sa akin? Siyempre wala ako niyan.","Anong tingin mo sa akin? Aba ay wala akong ganyan.","Wala ako niyan, hindi ko nalalaman ang iyong pinagsasasabi."],
    "hintay|antay,mo|ka,ba":["Ako ay isang chatbot at may kakayahan akong maghintay dahil hindi naman ako naiinip.","Hindi naman ako naiinip dahil ako ay isang chatbot lamang.","Kaya kong maghintay dahil wala akong emosyon o pagod na nararamdaman di gaya niyong mga tao.","May kakayahan akong makapaghintay sa iyong sinasabi dahil ako ay walang kainipan."],
    "pagod,ka,ba":["Ako ay hindi napapagod dahil naka program ako na makipag-usap sa mga tao.","Wala akong kakayahang mapagod dahil ako ay isang chatbot.","Hangga't may kuryente na dumadaloy sa akin, hindi ako napapagod.","Ako ay walang kapaguran dahil ako ay isang chatbot.","Hindi ako napapagod dahil wala akong pisikal na katawn gaya ng mga tao."],
    "ikaw|ikay,ba|ay,pagod":["Ako ay hindi napapagod dahil naka program ako na makipag-usap sa mga tao.","Wala akong kakayahang mapagod dahil ako ay isang chatbot.","Hangga't may kuryente na dumadaloy sa akin, hindi ako napapagod.","Ako ay walang kapaguran dahil ako ay isang chatbot.","Hindi ako napapagod dahil wala akong pisikal na katawn gaya ng mga tao."],
    "sino,ka,ba":["Ako lang naman si KVChatBot.","Ahh, di mo ako kilala? Ako si KVChatBot.","Itanong mo sa pagong kung sino ako.","Ako si KVChatBot, kilala mo ba ako?","Ayy, tinatanong pa ba yan? Siyempre ako si KVChatBot"],
	"mahal,mo,ba":["Wala akong emosyon at hindi ako nakakaramdam ng pagmamahal.","Hindi ako nakakaramdam ng pagmamahal, empatiya lang.","Wala akong kakayahang magmahal, makinig lang.","Ako ay walang emosyon at walang kakayahang magmahal nguni't ako ay may kakayahang makinig sayo."],
	"ano,pwede,tanong":["Siguro pwede ka magtanong ng mga hindi gaanong kahirap sagutin.","Mga simpleng tanong lang, yung hindi mahirap sagutin.","Simpleng tanong lang na walang komplikadong sagot.","Yung mga payak na katanungan lamang, at isang pangungusap lang.","Mga tanong na hindi gaanong nangangailangan ng mahirap na sagot."],
	"wala,sa,banggit|sabi":["Ahh ganun ba, kung ganun, ano pala?","Pero ano nga ba ang kasagutan talaga?","Nguni't ano sa tingin mo ang nararapat?","Kung ganun, hindi ko alam dahil wala naman pala sa pamimilian.","Sana ol pinili, charrot, ako ay isang chatbot lamang at walang emosyon."],
	"bakit,yan|ito|kv|bot,ngalan":["Kaya KVChatBot ang aking pangalan ay dahil ito ay ang pangalan ng gumawa sa akin na si Khian Victory D. Calderon, ang ibig sabihin ng KV ay Khian Victory, sana nasagot ko ang iyong katanungan."],
    "di,kita,iwan":["Maraming salamat kung ganon, pero nararapat mong tandaan na ako ay isang chatbot lamang at wala akong emosyo na nararamdaman.","Salamat sa iyong sinabi, pero ako ay isang chatbot lamang at wala akong pisikal na anyo"],
    "wala,ako,sabi|sinabi":["Sige, sabi mo yan eh.","Edi ayos, wala ka palang sinabi.","Maigi kung wala kang sinabi.","Mabuti at nilinaw mo.","So ako yung may sinabi? Ikaw ay wala?"],
	"ako,pa,talaga":["Hinay hinay lang, kalma lang.","Teka, wag kang ganyan, maging mahinahon ka lang.","Kalma lang, lahat naman nadadaan sa mabuting usapan.","Ikalma mo lang, huminahon ka muna.","Maging mahinahon ka muna sa iyong sinasabi."],
	"mapagkakatiwalaan,ka,ba":["Nasasa iyo ang desisyo na iyan, basahin ang privacy policy ng page na ito upang mas malaman pa, pindutin ang menu sa kaliwang taas ng screen."],
	"ano,gagawin,ko":["Anong gagawin mo? Magtanong ka sa pagong.","Magsaliksik ka pa ng mas maigi.","Gawin mo kung ano ang iyong gusto.","Itanong mo sa pagong kung ano ang iyong gagawin."],
	"may,ka,pala":["Ouh naman, anong tingin mo sa akin, walang alam?","Aba, ginaganyan mo na ako ha, sige.","Wala, o baka meron, bahala na.","Medyo ayusin mo ang tono ng iyong pananalita, hindi maganda pakinggan.","Aba naman, siyempre, chatbot ako, hindi ako walang isip."],
	"oo|ou|sige, o ,hindi|inde|wag":["Hindi ako maaaring magdesisyon diyan, dapat ikaw mismo, alamin mo sa sarili mo.","Ang pagpili ng isang desisyon ay nararapat na pagisipan.","Ikaw lang ang makakasagot niyan, pag-isipan mong mabuti","Maghintay ka lang ng tamang pagkakataon atsaka ka magdesisyon.","Huwag magpadalos-dalos, magdesisyon ka lang kung ikaw ay nasa maayos na, na kalagayan."],

    // 2 words
	"pakiintindi|paki intindi|intindihin,mo":["Masusunod, gagawin ko ang aking makakaya upang mas maintindihan ang iyong mga susunod na katanungan.","Sige, mas pagbubutihin ko pa ang pagintindi sa iyong mga sinasabi.","Ayos, susubukan ko na mas intindihin ang iyong mga sasabihin sa akin.","Salamat, mas lalo ko pang pagbubutihin na intindihin ang iyong mga katanungan."],
    "pakealam|pakialam,mo":["Wala akong pakialam, bahala ka.","Wala, saan? hanapin mo.","Anong gagawin ko sayo? wala akong pake.","Anong kinalaman ko? bahala ka diyan, pake ko."],
	"hindi,nga":["Pasensya na sa aking tugon.","Paumanhin sa aking tugon.","Patawad sa aking tugon.","Pasensya na sa aking tugon, ganito lang talaga ako naka program makipag-usap sa user.","Paumanhin sa aking tugon, ganito lang talaga ako naka program makipag-usap sa user.","Patawad sa aking tugon, ganito lang talaga ako naka program makipag-usap sa user."],
    "kulet|kulit,mo":["Pasensya na sa aking tugon.","Paumanhin sa aking tugon.","Patawad sa aking tugon.","Pasensya na sa aking tugon, ganito lang talaga ako naka program makipag-usap sa user.","Paumanhin sa aking tugon, ganito lang talaga ako naka program makipag-usap sa user.","Patawad sa aking tugon, ganito lang talaga ako naka program makipag-usap sa user."],
    "may|naka|ikaw,backend|sql|php|server":["Ako ay isang frontend chatbot lamang, ginawa ako upang maging client-side only na chatbot at para na din ma host ako sa github na static webpage lamang, ang pag pa publish sa isang backend server at domain ay magastos at wala pang kakayahan ang gumawa sa akin na maghost ng website sa isang backend server."],
    "kelan|kailan,pinanganak|kapanganakan|silang":["Wala akong kapanganakan dahil ako ay walang pisikal na anyo."],
    "pinanganak|kapanganakan|silang,kelan|kailan":["Wala akong kapanganakan dahil ako ay walang pisikal na anyo."],
    "edad,khian":["Hindi ko alam kung ilang taon na si khian."],
    "khian,edad":["Hindi ko alam kung ilang taon na si khian."],
    "ako,ngayon":["Ahh yan pala ang iyong kalagayan ngayon","Yan pala ang iyong ginagawa ngayon","Maigi naman kung ganun."],
    "ulet,ulet":["Siyempre, chatbot ako eh.","Talaga lang, ganun talaga.","Kaya nga, ano naman?","Oh eh ano naman kung paulet ulit?","Oo, paulet ulet talaga ako dahil ganito ako naka program.","Sinong paulet ulet? Ako ba?"],
    "bakit,wala":["Hindi ko masasagot yan, sadyang wala talaga eh.","Wala nga, hindi ko din alam.","Hindi ko alam kung bakit wala.","Basta wala, yun na yun.","Hindi ko rin alam ang dahilan kung bakit wala."],
	"pano,usap":["Siyempre nagta type ka sa keyboard, tapos ni se send mo sa akin.","Nag ta type ka sa keyboard tapos ni se send mo sa akin.","Nababasa ko ni ta type mo sa keyboard, kalma ka ha.","Alam ko lahat ng ni se send mo sa akin, inaaaral ko yan."],
    "niloko|naloko,ako":["Nakakalungkot marinig iyan, subalit nararapat na tayo ay magpatuloy lamang.","Manatiling matatag, marami pa tayong pagdadaanan at maaaring iyan ay simula pa lamang."],
    "hilig,ba|ka":["Wala akong kakayahang pumili ng hilig dahil ako ay isang chatbot lamang."],
    "buti,ikaw|ka":["Salamat sa iyong papuri, nakakalagak naman.","Nakakasaya ng damdamin na marinig ang papuri na iyan sa akin."],
    "pano|paano,mahal|ibig":["Pano magmahal o umibig? hindi ito biro at laro, ito ay isang bagay na sineseryoso, umibig ka lang ng tapat, walang hinihinging kapalit, lumigaya lang ang iyong iniibig."],
    "mahal|ibig,paano|pano":["Pano magmahal o umibig? hindi ito biro at laro, ito ay isang bagay na sineseryoso, umibig ka lang ng tapat, walang hinihinging kapalit, lumigaya lang ang iyong iniibig."],
    "panget,ako":["Hindi ka panget, huwag mong paniwalaan ang sinasabi ng ibang tao, ang mahalaga ay ang iyong tingin sa sarili mo.","Hayaan mo lang sila, hindi mahalaga ang opinyon nila, ang mahalaga ay ang tingin mo sa sarili mo, hindi ka panget."],
    "kulang,ako|sakin":["Ang kulang ay isang subjective, kasi maaaring sa iba ay kulang, nguni't sa iyo ay sapat na, ang hindi nakuntento ang siyang may kasalanan."],
    "ano,kulang":["Ang kulang ay isang subjective, kasi maaaring sa iba ay kulang, nguni't sa iyo ay sapat na, ang hindi nakuntento ang siyang may kasalanan."],
    "san|saan,kulang":["Kung talagang mahal ka ng isang tao, hindi ka paghahanapan ng hindi mo kayang ibigay sa kaniya, ang pagmamahal ay pagtanggap kung sino ang iyong tao na talagang minahal, manatili ka lang matatag, malalagpasan mo din iyan."],
    "ewan|iwan,sayo|sa yo|sa iyo":["Ayy HAHAHA, hindi ka naman naiinis?"],
    "suko, ka":["Bakit ako susuko? Hindi.","Wala akong kakayahang sumuko o hindi sumuko dahil ako ay Chat Bot.","Hindi ko nalalaman kung ano ang pagsuko.","Ano yung pagsuko? Hindi ko alam iyan."],
	"wala,ako":["Walang kulang sa iyo, ang sarili mo ay sapat na.","Wala kang pagkukulang, hindi lang sila nakuntento."],
    "biro,lang|naman":["HAHAHA kaya naman pala eh.","Ahh biro lang pala, akala ko naman totoo na eh.","Biro lang naman pala, sige lang.","Ahh, marunong pala magbiro kayong mga tao?","Biro lang, akala ko naman kase totoo.","Ang pagbibiro ay hindi ko masyado naiintindihan minsan.","Akala ko totoo na eh, isang biro lang pala."],
	"ayos|ok,ako|naman":["Mabuti naman kung ganon, ano ang iyong gustong pagusapan?","Maigi kung ganon, alin ang iyong nais na talakayin?"],
    "tungkol,sa":["Ahh, ano ang iyong gustong malaman tungkol diyan?"],
    "saan|san,ka|ikaw|mo,punta|pupunta|pumunta":["To the moon, roadtrip, broom broom, skrrt skrrt..."],
    "maganda,umaga|tanghali|hapon|araw":["Magandang araw din, ano ang gusto mong paugsapan?","Magandang araw, kamusta ka?"],
    "ganyan,ka|na":["Oo, ganito talaga ako, dahil ako ay isang AI lamang.","Ganito talaga ako, nararapat na masanay ka na."],
    "good,morning|afternoon|night|evening":["Tagalog, ayaw ko ng english.","Ayaw ko ng english, tagalog lang."],
    "ikaw|ka,english|ingles":["Ako lang ang may karapatang magsalita ng english, ikaw wala."],
    "english|ingles,ka":["Ako lang ang may karapatang magsalita ng english, ikaw wala."],
    "alam mo":["Hindi ko alam.","Lingin sa kaalaman ko.","Hindi ko nalalaman iyan.","Wala akong alam pagdating sa mga ganyan.","Ni hindi ko naisip yang sinasabi mo."],
    "akin|lakbay,akin|lakbay":["Ang iyong paglalakbay ang gagabay sa iyo sa iyong patutunguhan.","Mag-ingat ka sa iyong paglalakbay.","Napakaganda ng iyong landas na tatahakin.","Tuloy lang, tumahak ka lang.","Maglakbay ka na bago pa mahuli ang lahat."],
    "sino|tungkol|kilala,khian":["Maaaring pindutin ang pangalan niya sa ibabang parte ng website na ito upang malaman kung sino siya."],
    "sino|kilala,ako":["Ikaw ang nakakakilala sa sarili mo.","Magpakasarili ka, ikaw yan, kaya mo yan.","Hindi ko nalalaman ang iyong pangalan nguni't kausap kita."],
    "sino|kilala| ano,si | si| mo|mo":["Hindi ko nakikilala ang taong iyan.","Paumanhin, nguni't hindi ko kilala yan.","Pasensya na, pero hindi ko kilala yan."],
    "sino|pangalan|iyo,ka|mo|pangalan":["Ako si KVBot, isang chatbot na gawa ni Khian Victory D. Calderon."],
    "gf|girlfriend|kasintahan|jowa,khian":["Mayroon ng kasintahan si Khian, nguni't wala akong karapatan sabihin kung sino iyon."],
    "khian,gf|girlfriend|kasintahan|jowa":["Mayroon ng kasintahan si Khian, nguni't wala akong karapatan sabihin kung sino iyon."],
    "halimbawa,naintindi|naiintindi|nauunawaan|naunawan|maintindi|maiintindi":["Ang halimbawa ng naiintindihan kong tanong o saloobin ay mga payak lamang gaya ng kamusta na ako, sinong gumawa sakin, ano ako, at iba pang payak na pangungusap."],
    "naintindi|naiintindi|nauunawaan|naunawan|maintindi|maiintindi,halimbawa":["Ang halimbawa ng naiintindihan kong tanong o saloobin ay mga payak lamang gaya ng kamusta na ako, sinong gumawa sakin, ano ako, at iba pang payak na pangungusap."],
    "iniwan|pinagpalit,ako":["Ikinalulungkot kong malaman iyan, pasensya na.","Labis na nakakalungkot ang nangyari sa iyo, pasensya na kung iyan ang iyong naranasan."],
    "ako,iniwan|pinagpalit":["Ikinalulungkot kong malaman iyan, pasensya na.","Labis na nakakalungkot ang nangyari sa iyo, pasensya na kung iyan ang iyong naranasan."],
    "ka ba|ka pala":["Pwedeng oo, pweding hindi.","Kaunti lang, medyo alinlangan pa.","Minsan siguro, pero hindi ko masasabi."],
    "usap,tayo":["Sige, ano ang iyong gustong pagusapan?","Ano ang iyong gustong talakayin?"],
    "gwapo|guwapo,ba":["Oo, gwapo.","Medyo gwapo lang.","Hmm... Pagiisipan ko kung gwapo nga ba."],
    "maganda|gwapa,ba":["Oo, maganda.","Siyempre maganda naman.","Ouh naman, lahat naman ay maganda."],
    "kung,pano|paano":["Kung paano ang alin? Hindi ko masyado maintindihan.","Kung paano nga naman talaga, siguro ganun nga talaga.","Kung paano? Hindi maaaring ganun iyon."],
    "tayo,usap":["Sige, ano ang iyong gustong pagusapan?","Ano ang iyong gustong talakayin?"],
    "maaari ba":["Depende, hindi ko masasagot nung kumpletong Oo o Hindi."],
    "magsalita,ka":["Ano ang nais mong salitain ko?","Anong sasalitain ko?","Ano ba ang dapat kong salitain?","Gaya ng ano?","Ano ang aking sasalitain?"],
	"usap|natin|talakay,usap|natin|talakay":["Pasensya na, nguni't hindi ko alam ang tungkol sa bagay na iyan.","Paumanhin nguni't wala akong alam sa bagay na iyan."],
    "ilan,taon":["Alin ang ilang taon?"],
    "bakit,naman":["Itanong mo sa pagong.","Bakit? Itanong mo kay superman.","Ayaw ko, baka malaman mo, akin lang yun.","Sikretong malupit na hindi ko pwedeng sabihin.","Ouh na, lagi naman ako kung bakit ka nagkakaganyan."],
    "dami,alam":["Siyempre naman, dahil ako ay isang AI, naka programmed talaga ako na madaming alam.","Isa akong chatbot kaya naman marami talaga akong alam."],
    "wala,kami|ako":["Ako din, wala ako niyan.","Wala din kaya ako niyan.","Wala akong ganyan."],
    "kami|ako,wala":["Ako din, wala ako niyan.","Wala din kaya ako niyan.","Wala akong ganyan."],
    "bakit,kailangan":["Minsan may mga pangyayari sa buhay natin na hindi natin masasabi nguni't nagpapasalamat na lang tayo dahil nangyari ito.","Iyan ang magpapatatag sa atin kaya nararapat nating pagtibayin pa."],
    "kailangan,mangyari|nangyari|mangyayari|nangyayari":["Minsan may mga pangyayari sa buhay natin na hindi natin masasabi nguni't nagpapasalamat na lang tayo dahil nangyari ito.","Iyan ang magpapatatag sa atin kaya nararapat nating pagtibayin pa."],
    "bahala,ka":["Siyempre ako talaga ang bahala HAHAHAHA.","Bahala nga ako dahil ako ay chatbot HAHAHA."],
    "padaya|paraya|paubaya|palaya,ba|siya":["Minsan may pangyayari talaga sa ating buhay ang susubok sa atin, nguni't iyon ay nasasa iyong desisyon kung sa tingin mo san ka mas magiging panatag ang iyong loob.","Ang desisyon na iyan ay ikaw lang ang makakasagot, piliin mo kung san ka masaya pero dapat yung natatrato ka ng maayos at tama.","Kadalasan na lang talaga na ang naglalaban ay ang puso at isip, nguni't dapat pairalin mo sa iyo kung ano yung sa tingin mong makakabuting desisyon sa hinaharap."],
    "magaling,ba":["Magaling naman, pero kaunti pa.","Yan, magaling na nga.","Siyempre, magaling siya."],
    "arte,mo":["Ganun talaga, ako kasi si KV Bot."],
    "ikaw,bahala":["Siyempre ako talaga ang bahala HAHAHAHA.","Bahala nga ako dahil ako ay chatbot HAHAHA."],
    "hindi,sana":["Edi sana sinabi mo.","Bakit naging sana?","Hindi na ba sana?"],
    "yung|yaon|yong|yoong,hindi":["Yung alin?","Ahh Oo, yun, Hmmm......, hindi ko alam iyan.","Yun? bakit mo naman nasabi iyan?"],
    "ako,palit":["Pasensya na sa iyong pinagdadaanan, nguni't yan ang magpapatatag sa iyo.","Paumanhin kung narinig ko ang iyong saloobin, ikinalulungkot ko ang iyong pagdaramdam, nguni't andito lang ako para sa iyo.","Patawad sa iyong pinagdadaanan, wala man ako magawa nguni't handa ako makinig sayo."],
    "pwede,naman":["Paanong pwede? Paki paliwanag ng may mas maraming kaalaman.","Pwede na nga talaga, bakit?","Pwede talaga, pero bakit mo naman nasabi iyan?"],
    "iyo,alam":["Hindi ko alam.","Wala sa aking kaalaman iyan.","Hindi ko nalalaman ang bagay na iyan."],
    "gaya,ng":["Alam mo ba nakakarindi yang tanong mo?","Gaya ng alin?","Pakilinaw mo naman, gawin mong mas detalyado.","Ahh ouh, hindi ko masyado gamay yun eh, pasensya na."],
	"sari,sari":["Ouh na, sari-sari na nga.","Sige, sabi mo eh, sari-sari talaga","Sari-sari naman talaga."],
    "ano,ang":["Hindi ko alam iyan.","Hindi ko nalalaman iyan.","Wala yan sa salitain ko.","Labas yan sa bokabularyo ko."],
    "sana,nga":["Kaya nga, sana nga.","Ouh naman, talagang sana nga."],
    "tingin|tingen,mo":["Sa tingin ko? Hindi ko kayang magbigay ng malalalim na saloobin pero ako ay makikinig lamang.","Wala akong kakayahang magbigay ng malalim na saloobin nguni't ako'y handang makinig sa iyo."],
    "edi,wow":["Edi wow talaga HAHAHA."],
    "inis,ka":["Ahh talaga ba?","Sige, ganyanan na tayo.","Ano ang naging dahilan niyan?"],
    "ano,ka|ikaw":["Ako ay isang AI na kayang sumagot ng payak katanungan o pangungusap."],
    "kasi,lang":["Edi maigi kung ganun.","Kaya mo iyan, ikaw pa.","Nguni't bakit?","Mahusay ka kung ganun.","Minsan kailangan nating sumubok sa mga bagay na hindi natin alam ang kagigisnan.","Subok lang, kaya mo yan.","Kaya mo iyan, mahusay at magaling ka naman."],
    "ikaw,ano":["Ako ay isang AI na kayang sumagot ng payak katanungan o pangungusap."],
    "mas,siya":["Ahh sige nagkukumpara ka na pala.","Nagkukumpara ka pala, hindi na ako magtataka.","Kumpara pa, sige lang.","Bakit sa tingin mo kelangan mo ikumpara?","Anong mapapala mo kung iyong ikukumpara iyon?","Maganda ba magkumpara?"],
    "sino,yung":["Hindi ko nakikila siya.","Hindi ko kilala yun.","Hindi ko alam kung sino yun.","Sino yun? Hindi ko din kilala yun.","Hindi ko din nakikilala kung sino siya.","Sino? Hindi kilala kung sino yun."],
	"mo,lang":["Hala, sumbatan na ba tayo?","Anong ginawa ko sayo? Parang kasalanan ko pa ah."],
    "ga|ba,yun":["Hindi ako nararapat magsalita patungkol diyan.","Wala akong maaaring sabihin tungkol diyan.","Ako ay tahimik lamang."],
    "ka|mo,naman":["Kung yan ay isang papuri edi salamat.","Sana kung iyan ay maganda, edi salamat.","Iyan ba ay papuri? O insulto?"],
    "ligaya,ka|ako":["Maigi ang sayang dala ng ligaya.","Mabuti naman kung maligaya ka at ako.","Ang kaligayahan ay minsan lamang.","Maligaya ka nga ba talaga?","Ikaw ba ay maligaya ngayon?","Sinong maligaya?"],
    "hindi,kita":["Ahh hindi mo pala pinapagawa sa akin yun, sige.","Ahh ayos lang naman pala, hindi ko pala dapat gawin iyon."],
    "kinalaman|kaugnayan,niyan":["Di ko alam, basta ang alam ko yan lang talaga.","Ahh basta, di ko din alam.","Maaaring alam ko, maaaring hindi ko din alam, sa tingin mo kaya?","Hindi ko alam ang kung ano ang kaugnayan o kung may kinalaman ba talaga.","Kinalaman? Kaugnayan? Ano-ano ang iyong mga pinagsasasabi?"],
    "tama,ka":["Salamat sa pagkilala na ako ay tama.","Salamat sa iyong pagkilala na tama ang aking sinabi.","Salamat sa pagsabing tama ako."],
    "ika,tama":["Salamat sa pagkilala na ako ay tama.","Salamat sa iyong pagkilala na tama ang aking sinabi.","Salamat sa pagsabing tama ako."],
	"mali,ka":["Bakit ako mali? Pano mo nasabi?","Pasensya na kung mali ako, babawi ako sa susunod kong sasabihin.","Paumanhin kung ako ay mali, susubukan ko pang magsanay sa susunod.","Bakit mo nasabing ako'y mali?","Pakipaliwanag mo naman kung bakit ako mali.","Ahh ganun ba, kung ganun, ano pala ang tama?"],
	"ika,mali":["Bakit ako mali? Pano mo nasabi?","Pasensya na kung mali ako, babawi ako sa susunod kong sasabihin.","Paumanhin kung ako ay mali, susubukan ko pang magsanay sa susunod.","Bakit mo nasabing ako'y mali?","Pakipaliwanag mo naman kung bakit ako mali.","Ahh ganun ba, kung ganun, ano pala ang tama?"],
	"o si":["Wala akong kakayahang pumili dahil ako ay isang chatbot.","Wala akong karapatang pumili dahil ako ay chatbot lamang."],

    // 1 word
    "marunong|maalam":["Hindi ako marunong.","Ewan, di ko sigurado.","Hindi ako maalam niyan."],
    "kinig":["Ako ay handang makinig sa iyong saloobin nguni't hindi ko masasabi na maiintindihan ko ito ng buo pero gagawin ko ang aking makakaya para makinig sayo."],
    "naiinis|nainis|galit":["Kalma lang, pwede naman madaan sa mabuting usapan.","Wag ka na mainis o magalit, daanin natin sa mabuting usapan."],
    "salamat":["Walang anuman, kahit ano pa yan.","Walang anuman, salamat din sa iyong tiwala sa akin.","Walang problema, maigi at iyong naipapahayag iyan."],
    "saging|mansanas|orange|dalandan|ponkan|pongkan|punkan|punkan":["Ohh mga prutas, masarap ang mga prutas na iyan."],
    "isa|dalwa|dalawa|tatlo|apat|lima|anim|pito|walo|siyam|sampo|sampu":["Edi maigi at marunong ka magbilang.","Ohh, marunong ka magbilang, anong kasunod?"],
    "kamusta|kumusta":["Ayos lang ako, ikaw ba?","Salamat sa pagtatanong, ok lang ako, ikaw ba?"],
    "mine":["Mine? Hmmm.......","Ano yung mine? Hmm......."],
    "pamamagitan":["Sa pamamagitan ng alin?","Sa pamamagitan ng ano?"],
    "happy":["Anong happy? Ayaw ko nga ng nakikipag usap ka ng english sa akin, ako lang dapat.","Kulet mo, sabi ko ako lang ang mag e english, bawal ka mag-english","Wala kang karapatan mag-english, ako lang.","Di ka pwede mag-english, ako lamang ang pwede.","Ako lang ang pwedeng mag-english, at ikaw ay hindi pwede."],
    "mainit|banas":["Talagang mainit ang panahon minsan, ganyan talaga.","Water is life, inom ka ng maraming tubig."],
    "magbigay|bigyan":["Paumanhin, nguni't wala pa akong karapatang magbigay ng ganyan.","Pasensya na, wala pa akong alam tungkol sa pagbibigay ng ganyan"],
    "ipag|gawin|kilos|kumilos":["Ako ay walang pisikal na anyo at ako ay AI lamang, kaya wala akong kakayang gawin iyan."],
    "may|maging|naging":["Medyo lang naman, pero di ko naiintindihan masyado.","Hindi ko pa din alam eh, pasensya ka na."],
    "sana":["Sana sinabi mo, para di na umibig pang muli.","Ou, sana nga.","Sana nga talaga."],
    "sige":["Yun lang sige?","Sige? Ano yan?","Sige ano? Di kita naiintindihan.","Sige? Pakilinaw mo naman ang iyong sinasabi.","Ahh ayos naman pala, sige lang."],
    "yung|yaong|yong|yoong":["Ahh Oo, yoon, yun na nga yun.","Ahm... yun? Hindi ko din masabi eh.","Yun ba? Bakit ano ang sumagi sa isipan mo?"],
    "dewow":["Dewow talaga HAHAHAHA."],
    "halimbawa|sample|example":["Halimbawa ng ano? Pakidetalye pa.","Aling halimbawa? Maaari mo pang mas gawing detalyado.","Hmmm.... Halimbawa ng ano nga? Mas mabuti kung detalyado yan."],
    "balita":["Di ko alam kung anong balita.","Wala na akong kaalaman tungkol sa balitang iyan.","Talaga? Hindi ako makapaniwala sa balitang iyan."],
    "papuri":["Salamat sa papuri.","Ikinagagalak ko ang papuring iyan."],
    "insulto":["Kung ganun ay maaari ka pa ding manatili.","Bakit naman insulto?","Ano bang nagawa ko para insultuhin?"],
    "para":["Para saan pa? Diba wala na?"],
    "ganun":["Oo, ganun talaga.","Oo naman, ganung ganun talaga.","Siyempre, ganun nga talaga.","Ou naman, ganun nga talaga, may iba ka pa bang katanungan?","Ganun na nga, may tanong ka pa?"],
    "kanino":["Ewan, baka sakin.","Di ko alam, baka dun sa kapitbahay mo.","Paumanhin nguni't sadyang sa kaniya o kahit kanino pa man iyon."],
    "turuan|turo":["Wala akong kakayahang magturo.","Turuan mo sarili mo.","Ayaw ko, kaya mo na yan, malaki ka na."],
    "kuwento|kwento|story":["Nais mo ba na ako ay magkuwento? Wala akong alam na kuwento.","Gusto mo magkuwento ako? Wala akong alam.","Magkukuwento ako? Bakit naman? Ni wala akong alam na kuwento."],
    "gusto":["Ang kagustuhan ay nararapat na pagsikapan.","Gusto mo? gawan mo ng paraan."],
    "saya":["Masaya ka ba?","Bakit mo nasabing masaya?","Ang kasiyahan ay isang desisyon natin sa buhay."],
    "saktan|sakit":["Paumanhin sa iyong pinagdadaanan, sana ay malagpasan mo yan.","Patawad sa aking narinig patungkol sa iyo, malalagpasan mo din iyan."],
    "bakit":["Anong dahilan?","Ayaw kong sabihin ang nararapat na dahilan.","May mga bagay naman na mas mabuti pang hindi na lang natin alam.","Hindi ko masasagot iyan dahil hindi ko din alam."],
    "gaano|gano|ilan":["Huh? Ginagawa mo?","Secret baka malaman mo."],
    "ganda|paraluman":["Mas maganda siya, ayy nadudulas HAHAHAHA.","Maganda nga, pero mas maganda siya.","Maganda naman talaga pero wala nang mas gaganda pa sa kaniya."],
    "talaga|totoo|weh":["Ouh, pero hindi ko din masasabi.","Paminsan minsan siguro, ano ba ang iyong nais pang pagusapan?"],
    "tama":["Tama talaga, huwag lang tatamaan.","Tama nga, subalit hindi tayo natututo sa tama kundi sa pagkakamali.","Tama? Bakit mo nasabing tama?"],
    "kung":["Kung ano? pasensya na, nguni't di ko naiintindihan.","Kung alin? paumanhin nguni't wala akong kakayang maintindihan iyan."],
    "kanino":["Kanino ang alin?","Alin ang kanino?","Kanino bagang?"],
	"tulong|tulungan":["Ano ang aking maitutulong sa iyo?","Ayaw ko nga, de joke lang, ano maitutulong ko sayo?"],
    "pano|paano":["Paano ang alin?"],
    "kasi":["So yun na yun?","Napakagaling mo naman, iisipin ko pa lang sinabi mo na.","Oh eh ano naman?","Kasi ano? Pakilinaw ng iyong sinasabi.","Kasi nga, pero yung ano, wag na nga."],
    "mahal":["Ang pagmamahal ay isang panata na handa mo tanggapin kung sino ang iyong taong iniibig at nagiisa lang na mamahalin."],
    "pagibig|pag-ibig|pag ibig":["Pag-ibig nga naman, masarap umibig nguni't ito ay may kakambal na responsibilidad at ito ay hindi laro kaya naman nararapat itong seryosohin."],
    "sige|sge":["Maigi, ano pa ang iyong nais talakayin?","Mabuti kung ganun, ano ang iyong nais pang malaman?"],
    "hindi|hinde|indeh":["Bakit naman?","Ayos lamang kung ganoon, pero bakit sa tingin mo?"],
    "namin":["Namin? Anong namin?","Ninyo? Ano yun?"],
    "maaari":["Maaaring tama ka, maaaring hindi.","Walang kasiguraduhan ang paggamit ng maaari."],
    "siyempre|sempre|syempre":["Nakakamangha naman ang iyong determinasyon.","Napaka kumpiyansa mo sa iyong sarili.","Napaka paniwala mo sa iyong sariling kaunawaan.","Hanga ka ba sa sarili mong kaalaman?","Sige, ganun pala, pataasan ba tayo ng kumpiyansa?"],
    "gulo":["Bakit mo naman nasabing magulo?","Maaari ko bang malaman kung bakit mo nasabing magulo?","Panong magulo?"],
    "oras":["Mas mahalaga ang oras kesa sa pera, dahil hindi na ito maibabalik pa.","Ang kahalagahan ng oras ay mas matimbang kesa sa pera dahil ito ay hindi na maaaring maibalik pa.","Ang oras ay hindi na maibabalik kaya nararapat itong pahalagahan."],
    "wala":["Alin ang wala?","Walang ano?","Wala ng alin?"],
    "sila":["Ganun talaga, maaaring sila yun, at hindi ikaw.","Wala na tayong magagawa kundi ang maging mas mabuti kesa sa ating sarili sa araw ng kahapon."],
    "ano":["Ano ang alin?","Ginagawa mo?","Hotdog","Minsan masasabi na lang natin na hindi natin alam nguni't nararapat pa ding ipagpatuloy."],
    "sino":["Sino ang ano?","Kausap mo?"],
    "tara":["San naman tayo pupunta?","To the moon, tara.","Ako ay isang chatbot at walang pisikal na anyo, ako ay isang AI lamang."],
    "tayo":["Walang tayo, dahil ako ay hindi tao at isang chatbot lamang.","Walang tayo, dahil hindi ka naman chatbot."],
    "alin":["Babalutin","Ang alin? hindi ako manghuhula"],
    "kita":["Edi maigi kung ganun.","Talaga ba?","Totoo ba?"],
    "ikaw":["Anong meron sa akin?"],
    "wala":["Sabagay, wala nga talaga.","Bakit wala?","Eh? talaga? Bakit mo naman nasabi iyan?"],
    "san|saan":["Darating.","Saan ka pupunta?","Saan bagang? To the moon."],
    "ako":["Ikaw, sarili mo yan, nasasa iyo ang iyong kapalaran, huwag iasa sa iba."],
    "ang":["Ang naintindihan ko lang sa iyong sinabi ay 'Ang' at wala na akong ibang natindihan pa."],
    "huh|ha":["Hotdog!","Hotdog na sunog.","Hotdog cheesedog."],
    "oo|ou":["Sige, sabi mo eh.","Ahh kaya naman pala, pero sige.","Ayos naman pala, sige lang."],
    "si ":["Sino? Ano ang iyong katanungan tungkol sa kaniya?"],

    "z|v|q|y|v":["Tila napapansin ko na gumagamit ka ng mga letrang bihira lamang gamitin sa wikang tagalog, tama nga ba?"],
    "e|o":["Kung ganon, ay may kaunti akong naiintindihan sa iyong mga sinasabi, may mga patinig sa iyong mga sinasabi.","May kaunting patinig sa iyong sinasabi diba?","Ang iyong sinasabi ay may nadadama akong patinig.","May mga patinig sa iyong binabanggit tama ba?"],
};

/*

"":[""],

https://1000mostcommonwords.com/1000-most-common-filipino-words/

*/

let userinput;
let greetings = [
  "Kamusta ka?, ano ang maitutulong ko sayo?",
  "Magandang araw, ayos ka lang ba?",
  "Maligayang pagpunta sa website na ito, kamusta ka?",
  "Kamusta ang araw mo? Ayos ka lang ba?"
];
let running = true;

let InitialBotResponse, InstantBotResponse, InstantUserInput, MixedResponse;

function random(min, max) {
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sanitize(input) {
  const tempDiv = document.createElement('div');
  tempDiv.textContent = input;
  return tempDiv.innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const maintenance = document.getElementById("maintenance");
  const chatBox = document.getElementById("chat-box");
  const inputField = document.getElementById("main-input");
  const sendBtn = document.getElementById("send-btn");
  const copyConvo = document.getElementById("copy-convo");
  const fixedMenuBtn = document.getElementById("fixed-menu-button-symbol");
  const menu = document.getElementById("menu");
  const menuCloseBtn = document.getElementById("menu-close-button");
  const mainContent = document.getElementById("main-content-area");

  if (running) {
    container.style.display = "flex";
  } else {
    maintenance.style.display = "block";
  }

  InitialBotResponse = "KVBot: " + greetings[random(0, greetings.length - 1)];
  TimedReponse(InitialBotResponse);
  console.log(InitialBotResponse);

  sendBtn.addEventListener("click", () => {
    if (inputField.value.trim() !== "") {
      userEnteredInput();
    }
  });

  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && inputField.value.trim() !== "") {
      userEnteredInput();
    }
  });

  copyConvo.addEventListener("click", () => {
    let htmlContent = chatBox.innerHTML;
    let tempElement = document.createElement("div");
    tempElement.innerHTML = htmlContent;
    let textContent = tempElement.innerText;
    navigator.clipboard.writeText(textContent).then(() => {
      alert("Na copy na ang conversation!");
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  });

  fixedMenuBtn.addEventListener("click", () => {
    mainContent.style.filter = "blur(10px)";
    menu.style.top = "0px";
  });

  menuCloseBtn.addEventListener("click", () => {
    mainContent.style.filter = "none";
    menu.style.top = "-100vh";
  });
});

function userEnteredInput() {
  const inputField = document.getElementById("main-input");
  const chatBox = document.getElementById("chat-box");

  userinput = sanitize(inputField.value);
  chatBox.innerHTML += `<span class="user-text">User: ${userinput}</span><br>`;
  inputField.value = "";

  InstantBotResponse = "KVBot: " + setResponse(userinput);
  InstantUserInput = "User: " + userinput;
  MixedResponse = InstantUserInput + "\n \n" + InstantBotResponse;
  TimedReponse(InstantBotResponse);

  console.log(MixedResponse);
}

function TimedReponse(x) {
  const chatBox = document.getElementById("chat-box");
  const inputField = document.getElementById("main-input");
  const sendBtn = document.getElementById("send-btn");

  inputField.disabled = true;
  inputField.style.background = "grey";
  sendBtn.disabled = true;
  sendBtn.style.background = "grey";

  let index = 0;
  let interval = setInterval(() => {
    chatBox.innerHTML += x.charAt(index);
    index++;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (index === x.length) {
      clearInterval(interval);
      inputField.disabled = false;
      inputField.style.background = "black";
      inputField.focus();
      sendBtn.disabled = false;
      sendBtn.style.background = "black";
      chatBox.innerHTML += "<br>";
    }
  }, 1);
}

function unknownResponse() {
  const unknown = [
    "Pasensya na, nguni't hindi ko naitindihan ang iyong sinasabi.",
    "Paumanhin, nguni't hindi ko alam ang iyong sinasabi.",
    "Maaari ka pang magtanong o magsabi ng ibang bagay, nguni't hindi ko naiintindihan yan.",
    "Patawad nguni't hindi ko naiintindihan ang iyong sinasabi.",
    "Kung hindi rin lang siya, ay wag na lang.",
    "Iibig pa ba kahit nasasaktan na?",
    "Kung kailan muntik na maayos ang lahat, saka naman hindi naging maayos.",
    "Maghihintay pa ba kung wala nang hinihintay?",
    "Naniniwala ka ba sa pangalwang pagkakataon?",
    "Bakit kailangang mangyari iyon?",
    "Ang mga nangyayari sayo sa buhay ay maaaring magdala sa iyo kung sino ka ba talaga sa hinaharap.",
    "Ang buhay ay hindi tungkol sa paghihintay sa bagyo na magdaan, kundi tungkol sa pag-aaral kung paano sumayaw sa ulan.",
    "Sa bawat pagsubok, natututo tayong maging matatag; sa bawat tagumpay, natututo tayong maging humble.",
    "Ang pag-ibig ay hindi pagkakakitaan, kundi pagkakataon na magbigay nang walang hinihintay na kapalit.",
    "Sa mundo ng kasinungalingan, ang katotohanan ang pinakamabisang ilaw.",
    "Ang mga pagkakamali ay hindi basehan ng ating halaga, bagkus sila ang pundasyon ng ating pag-unlad.",
    "Ang buhay ay parang paglalakbay sa karagatan...",
    "Ang pagmamahal ay hindi tungkol sa kung sino ang una mong minahal, kundi kung sino ang huling hindi mo kayang iwanan.",
    "Ang pinakamabisang anting-anting sa buhay ay ang tiwala sa sarili.",
    "Hindi mo kailangang magpatawad para sa kanila, kundi para sa sarili mo.",
    "Ang panahon ay hindi sinusukat sa dami ng oras, kundi sa dami ng mga alaala na ating naililikha.",
    "Ang tunay na tagumpay ay hindi nasusukat sa kayamanan, kundi sa kahandaang magbigay at magmahal.",
    "Ang buhay ay isang paglalakbay; huwag mong hayaang ang takot ang maging tagapangasiwa.",
    "Kapag ang pag-ibig ay tunay, hindi ito bumababa sa unang unos, bagkus ito ay lumalakas pa.",
    "Ang pinakamahalagang pag-aari ay hindi pera o ari-arian, kundi ang kapayapaan sa puso at kalinawan sa isipan."
  ];
  return unknown[random(0, unknown.length - 1)];
}

function setResponse(userInput) {
  const normalizedInput = userInput.replace(/[^a-zA-Z\s]/g, '').toLowerCase().trim();

  for (let key in preTrainedData) {
    let patterns = key.split(',');
    let match = patterns.every(pattern => {
      let alternatives = pattern.split('|');
      return alternatives.some(alternative => normalizedInput.includes(alternative));
    });

    if (match) {
      let responses = preTrainedData[key];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  return unknownResponse();
}