var Hyphenator=function(a){"use strict";var l,t,D,b=a,c=function(){var a={},b=function(b,c,d,e){a[b]={file:c,script:d,prompt:e}};return b("be","be.js",1,"Мова гэтага сайта не можа быць вызначаны аўтаматычна. Калі ласка пакажыце мову:"),b("ca","ca.js",0,""),b("cs","cs.js",0,"Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:"),b("da","da.js",0,"Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:"),b("bn","bn.js",4,""),b("de","de.js",0,"Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:"),b("el","el-monoton.js",6,""),b("el-monoton","el-monoton.js",6,""),b("el-polyton","el-polyton.js",6,""),b("en","en-us.js",0,"The language of this website could not be determined automatically. Please indicate the main language:"),b("en-gb","en-gb.js",0,"The language of this website could not be determined automatically. Please indicate the main language:"),b("en-us","en-us.js",0,"The language of this website could not be determined automatically. Please indicate the main language:"),b("eo","eo.js",0,"La lingvo de ĉi tiu retpaĝo ne rekoneblas aŭtomate. Bonvolu indiki ĝian ĉeflingvon:"),b("es","es.js",0,"El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:"),b("et","et.js",0,"Veebilehe keele tuvastamine ebaõnnestus, palun valige kasutatud keel:"),b("fi","fi.js",0,"Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:"),b("fr","fr.js",0,"La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:"),b("grc","grc.js",6,""),b("gu","gu.js",7,""),b("hi","hi.js",5,""),b("hu","hu.js",0,"A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:"),b("hy","hy.js",3,"Չհաջողվեց հայտնաբերել այս կայքի լեզուն։ Խնդրում ենք նշեք հիմնական լեզուն՝"),b("it","it.js",0,"Lingua del sito sconosciuta. Indicare una lingua, per favore:"),b("kn","kn.js",8,"ಜಾಲ ತಾಣದ ಭಾಷೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಸೂಚಿಸಿ:"),b("la","la.js",0,""),b("lt","lt.js",0,"Nepavyko automatiškai nustatyti šios svetainės kalbos. Prašome įvesti kalbą:"),b("lv","lv.js",0,"Šīs lapas valodu nevarēja noteikt automātiski. Lūdzu norādiet pamata valodu:"),b("ml","ml.js",10,"ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:"),b("nb","nb-no.js",0,"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:"),b("no","nb-no.js",0,"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:"),b("nb-no","nb-no.js",0,"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:"),b("nl","nl.js",0,"De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:"),b("or","or.js",11,""),b("pa","pa.js",13,""),b("pl","pl.js",0,"Języka tej strony nie można ustalić automatycznie. Proszę wskazać język:"),b("pt","pt.js",0,"A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:"),b("ru","ru.js",1,"Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:"),b("sk","sk.js",0,""),b("sl","sl.js",0,"Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:"),b("sr-cyrl","sr-cyrl.js",1,"Језик овог сајта није детектован аутоматски. Молим вас наведите језик:"),b("sr-latn","sr-latn.js",0,"Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:"),b("sv","sv.js",0,"Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:"),b("ta","ta.js",14,""),b("te","te.js",15,""),b("tr","tr.js",0,"Bu web sitesinin dili otomatik olarak tespit edilememiştir. Lütfen dökümanın dilini seçiniz%A0:"),b("uk","uk.js",1,"Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:"),b("ro","ro.js",0,"Limba acestui sit nu a putut fi determinată automat. Alege limba principală:"),a}(),d=function(){for(var d,e,a=b.document.getElementsByTagName("script"),c=0,f=a[c],g="";f;)f.src&&(e=f.src,d=e.indexOf("Hyphenator.js"),-1!==d&&(g=e.substring(0,d))),c+=1,f=a[c];return g?g:"//hyphenator.googlecode.com/svn/trunk/"}(),e=function(){var b=!1;return-1!==a.location.href.indexOf(d)&&(b=!0),b}(),f=!1,g=!1,h=!1,i={video:!0,audio:!0,script:!0,code:!0,pre:!0,img:!0,br:!0,samp:!0,kbd:!0,"var":!0,abbr:!0,acronym:!0,sub:!0,sup:!0,button:!0,option:!0,label:!0,textarea:!0,input:!0,math:!0,svg:!0,style:!0},j=!0,k="local",m=!1,n=!0,o=!1,p=function(b){a.alert("Hyphenator.js says:\n\nAn Error occurred:\n"+b.message)},q=function(b){a.console.log(b.message)},r=function(c,d){d=d||b;var e;return a.document.createElementNS?e=d.document.createElementNS("http://www.w3.org/1999/xhtml",c):a.document.createElement&&(e=d.document.createElement(c)),e},s=!1,u=function(){var b,d=function(b){var d=["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","абвгдеёжзийклмнопрстуфхцчшщъыьэюя","أبتثجحخدذرزسشصضطظعغفقكلمنهوي","աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ","ঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ","ँंःअआइईउऊऋऌएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽािीुूृॄेैोौ्॒॑ॠॡॢॣ","αβγδεζηθικλμνξοπρσςτυφχψω","બહઅઆઇઈઉઊઋૠએઐઓઔાિીુૂૃૄૢૣેૈોૌકખગઘઙચછજઝઞટઠડઢણતથદધનપફસભમયરલળવશષ","ಂಃಅಆಇಈಉಊಋಌಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲಳವಶಷಸಹಽಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖೞೠೡ","ກຂຄງຈຊຍດຕຖທນບປຜຝພຟມຢຣລວສຫອຮະັາິີຶືຸູົຼເແໂໃໄ່້໊໋ໜໝ","ംഃഅആഇഈഉഊഋഌഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരറലളഴവശഷസഹാിീുൂൃെേൈൊോൌ്ൗൠൡൺൻർൽൾൿ","ଁଂଃଅଆଇଈଉଊଋଌଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହାିୀୁୂୃେୈୋୌ୍ୗୠୡ","أبتثجحخدذرزسشصضطظعغفقكلمنهوي","ਁਂਃਅਆਇਈਉਊਏਐਓਔਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਲ਼ਵਸ਼ਸਹਾਿੀੁੂੇੈੋੌ੍ੰੱ","ஃஅஆஇஈஉஊஎஏஐஒஓஔகஙசஜஞடணதநனபமயரறலளழவஷஸஹாிீுூெேைொோௌ்ௗ","ఁంఃఅఆఇఈఉఊఋఌఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలళవశషసహాిీుూృౄెేైొోౌ్ౕౖౠౡ"],e=function(e){var f,g,h,i=!1;return this.supportedBrowserLangs.hasOwnProperty(e)?i=this.supportedBrowserLangs[e]:c.hasOwnProperty(e)?(h=a.document.getElementsByTagName("body")[0],f=r("div",a),f.id="Hyphenator_LanguageChecker",f.style.width="5em",f.style[b]="auto",f.style.hyphens="auto",f.style.fontSize="12px",f.style.lineHeight="12px",f.style.visibility="hidden",f.lang=e,f.style["-webkit-locale"]="'"+e+"'",f.innerHTML=d[c[e].script],h.appendChild(f),g=f.offsetHeight,h.removeChild(f),i=g>12?!0:!1,this.supportedBrowserLangs[e]=i):i=!1,i};return e},e={support:!1,supportedBrowserLangs:{},property:"",checkLangSupport:{}};return a.getComputedStyle?(b=a.getComputedStyle(a.document.getElementsByTagName("body")[0],null),void 0!==b.hyphens?(e.support=!0,e.property="hyphens",e.checkLangSupport=d("hyphens")):void 0!==b["-webkit-hyphens"]?(e.support=!0,e.property="-webkit-hyphens",e.checkLangSupport=d("-webkit-hyphens")):void 0!==b.MozHyphens?(e.support=!0,e.property="-moz-hyphens",e.checkLangSupport=d("MozHyphens")):void 0!==b["-ms-hyphens"]&&(e.support=!0,e.property="-ms-hyphens",e.checkLangSupport=d("-ms-hyphens")),t=e,void 0):(t=e,void 0)},v="hyphenate",w="urlhyphenate",x="Hyphenator"+Math.round(1e3*Math.random()),y=x+"hide",z=new RegExp("\\s?\\b"+y+"\\b","g"),A=x+"unhide",B=new RegExp("\\s?\\b"+A+"\\b","g"),C=x+"css3hyphenate",E="donthyphenate",F=6,G=1,H=function(){for(var a=null,c=!1,d=b.document.getElementsByTagName("script"),e=0,f=d.length;!c&&f>e;)a=d[e].getAttribute("src"),a&&-1!==a.indexOf("Hyphenator.js?bm=true")&&(c=!0),e+=1;return c}(),I=null,J="",K=function(){var a=function(a){this.element=a,this.hyphenated=!1,this.treated=!1},b=function(){this.count=0,this.hyCount=0,this.list={}};return b.prototype={add:function(b,c){var d=new a(b);return this.list.hasOwnProperty(c)||(this.list[c]=[]),this.list[c].push(d),this.count+=1,d},remove:function(a){var b,c,d,e;for(b in this.list)if(this.list.hasOwnProperty(b))for(c=0;c<this.list[b].length;c+=1)if(this.list[b][c].element===a){d=c,e=b;break}this.list[e].splice(d,1),this.count-=1,this.hyCount-=1},each:function(a){var b;for(b in this.list)this.list.hasOwnProperty(b)&&(2===a.length?a(b,this.list[b]):a(this.list[b]))}},new b}(),L={},M={},N="(\\w*://)?((\\w*:)?(\\w*)@)?((([\\d]{1,3}\\.){3}([\\d]{1,3}))|((www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-\\.]+\\.([a-z]{2,4})))(:\\d*)?(/[\\w#!:\\.?\\+=&%@!\\-]*)*",O="[\\w-\\.]+@[\\w\\.]+",P=new RegExp("("+N+")|("+O+")","i"),Q=function(){var b,c=a.navigator.userAgent.toLowerCase();return b=String.fromCharCode(8203),-1!==c.indexOf("msie 6")&&(b=""),-1!==c.indexOf("opera")&&-1!==c.indexOf("version/10.00")&&(b=""),b}(),R=function(a){return a},S=function(a){return a},T=function(a){return a},U=!1,V=function(c){var d,f,g,e=[];if(a.document.getElementsByClassName)e=b.document.getElementsByClassName(c);else if(a.document.querySelectorAll)e=b.document.querySelectorAll("."+c);else for(d=b.document.getElementsByTagName("*"),g=d.length,f=0;g>f;f+=1)-1!==d[f].className.indexOf(c)&&-1===d[f].className.indexOf(E)&&e.push(d[f]);return e},W=function(){var a;return a=U?U():V(v)},X="hidden",Y="wait",Z=[],$=function(b){b=b||a;var c=b.document,d=function(){var a,d,e,b=c.styleSheets.length,f=!1;for(a=0;b>a;a+=1){d=c.styleSheets[a];try{if(d.cssRules){f=d;break}}catch(g){}}return f=!1,f===!1&&(e=c.createElement("style"),e.type="text/css",c.getElementsByTagName("head")[0].appendChild(e),f=c.styleSheets[c.styleSheets.length-1]),f}(),e=[],f=function(a){var c,d,f,g,h,e=b.document.styleSheets,i=!1;for(g=0;g<e.length;g+=1){c=e[g];try{c.cssRules?f=c.cssRules:c.rules&&(f=c.rules)}catch(j){}if(f&&f.length)for(h=0;h<f.length;h+=1)d=f[h],d.selectorText===a&&(i={index:h,rule:d})}return i},g=function(a,b){var c,e;return d.insertRule?(c=d.cssRules?d.cssRules.length:0,e=d.insertRule(a+"{"+b+"}",c)):d.addRule&&(c=d.rules?d.rules.length:0,d.addRule(a,b,c),e=c),e},h=function(a,b){a.deleteRule?a.deleteRule(b):a.removeRule(b)};return{setRule:function(a,b){var c,h,i;h=f(a),h?(i=h.rule.cssText?h.rule.cssText:h.rule.style.cssText.toLowerCase(),i==="."+v+" { visibility: hidden; }"?e.push({sheet:h.rule.parentStyleSheet,index:h.index}):-1!==i.indexOf("visibility: hidden")?(c=g(a,b),e.push({sheet:d,index:c}),h.rule.style.visibility=""):(c=g(a,b),e.push({sheet:d,index:c}))):(c=g(a,b),e.push({sheet:d,index:c}))},clearChanges:function(){for(var a=e.pop();a;)h(a.sheet,a.index),a=e.pop()}}},_=String.fromCharCode(173),ab=Q,bb=function(a){var d,b=a.replace(/([:\/\.\?#&\-_,;!@]+)/gi,"$&"+ab),c=b.split(ab);for(d=0;d<c.length;d+=1)c[d].length>2*F&&(c[d]=c[d].replace(/(\w{3})(\w)/gi,"$1"+ab+"$2"));return""===c[c.length-1]&&c.pop(),c.join(ab)},cb=!0,db={},eb=function(c,d){var e,g=a.document.addEventListener?"addEventListener":"attachEvent",i=a.document.addEventListener?"removeEventListener":"detachEvent",j=a.document.addEventListener?"":"on",k=function(c){db[c.location.href]&&q(new Error("Warning: multiple execution of Hyphenator.run() – This may slow down the script!")),b=c||a,d(),db[b.location.href]=!0},l=function(){try{c.document.documentElement.doScroll("left")}catch(b){return a.setTimeout(l,1),void 0}db[c.location.href]||(f=!0,k(c))},m=function(b){var e,g,l;if(!b||"readystatechange"!==b.type||"interactive"===c.document.readyState||"complete"===c.document.readyState)if(c.document[i](j+"DOMContentLoaded",m,!1),c.document[i](j+"readystatechange",m,!1),g=c.frames.length,0!==g&&h){if(h&&g>0&&b&&"load"===b.type){for(c[i](j+"load",m,!1),e=0;g>e;e+=1){l=void 0;try{l=a.frames[e].document.toString()}catch(n){l=void 0}l&&eb(c.frames[e],d)}k(c)}}else c[i](j+"load",m,!1),f=!0,k(c)};if(f||"complete"===c.document.readyState)f=!0,m({type:"load"});else{c.document[g](j+"DOMContentLoaded",m,!1),c.document[g](j+"readystatechange",m,!1),c[g](j+"load",m,!1),e=!1;try{e=!a.frameElement}catch(n){}e&&c.document.documentElement.doScroll&&l()}},fb=function(a,b){try{return a.getAttribute("lang")?a.getAttribute("lang").toLowerCase():a.getAttribute("xml:lang")?a.getAttribute("xml:lang").toLowerCase():"html"!==a.tagName.toLowerCase()?fb(a.parentNode,b):b?I:null}catch(c){}},gb=function(e){e=e||b;var i,f=e.document.getElementsByTagName("html")[0],g=e.document.getElementsByTagName("meta"),j=function(){var b,l,f="",g=300,h=450,i=Math.floor((e.outerWidth-h)/2)+a.screenX,j=Math.floor((e.outerHeight-g)/2)+a.screenY,k="";return a.showModalDialog&&-1!==e.location.href.indexOf(d)?b=a.showModalDialog(d+"modalLangDialog.html",c,"dialogWidth: "+h+"px; dialogHeight: "+g+"px; dialogtop: "+j+"; dialogleft: "+i+"; center: on; resizable: off; scroll: off;"):(l=function(){var a,b="";for(a in c)c.hasOwnProperty(a)&&(b+=a+", ");return b=b.substring(0,b.length-2)}(),k=a.navigator.language||a.navigator.userLanguage,k=k.substring(0,2),f=c[k]&&""!==c[k].prompt?c[k].prompt:c.en.prompt,f+=" (ISO 639-1)\n\n"+l,b=a.prompt(a.unescape(f),k).toLowerCase()),b};if(I=fb(f,!1),!I)for(i=0;i<g.length;i+=1)g[i].getAttribute("http-equiv")&&"content-language"===g[i].getAttribute("http-equiv").toLowerCase()&&(I=g[i].getAttribute("content").toLowerCase()),g[i].getAttribute("name")&&"dc.language"===g[i].getAttribute("name").toLowerCase()&&(I=g[i].getAttribute("content").toLowerCase()),g[i].getAttribute("name")&&"language"===g[i].getAttribute("name").toLowerCase()&&(I=g[i].getAttribute("content").toLowerCase());!I&&h&&b.frameElement&&gb(a.parent),I||""===J||(I=J),I||(I=j()),f.lang=I},hb=function(){var a,d,e,f=0,g=function(d,e,f){f=f||!1;var h,l,j=0,k=!0,m=function(){D=new $(b),D.setRule("."+C,t.property+": auto;"),D.setRule("."+E,t.property+": manual;"),l!==e&&-1!==t.property.indexOf("webkit")&&D.setRule("."+C,"-webkit-locale : "+l+";"),d.className=d.className+" "+C},n=function(){H&&l!==I||(c.hasOwnProperty(l)?M[l]=!0:c.hasOwnProperty(l.split("-")[0])?(l=l.split("-")[0],M[l]=!0):H||(k=!1,p(new Error('Language "'+l+'" is not yet supported.'))),k&&("hidden"===X&&(d.className=d.className+" "+y),K.add(d,l)))};for(l=d.lang&&"string"==typeof d.lang?d.lang.toLowerCase():e&&""!==e?e.toLowerCase():fb(d,!0),f?l!==e?s&&t.support&&t.checkLangSupport(l)?m():n():s&&t.support&&t.checkLangSupport(l)||n():s&&t.support&&t.checkLangSupport(l)?m():n(),h=d.childNodes[j];h;)1!==h.nodeType||i[h.nodeName.toLowerCase()]||-1!==h.className.indexOf(E)||-1!==h.className.indexOf(w)||a[h]||g(h,l,!0),j+=1,h=d.childNodes[j]},h=function(a){var b,c=0;for(b=a.childNodes[c];b;)1!==b.nodeType||i[b.nodeName.toLowerCase()]||-1!==b.className.indexOf(E)||-1!==b.className.indexOf(v)||d[b]?3===b.nodeType&&(b.data=bb(b.data)):h(b),c+=1,b=a.childNodes[c]};if(s&&u(),H)a=b.document.getElementsByTagName("body")[0],g(a,I,!1);else{for(s||"hidden"!==X||(Z.push(new $(b)),Z[Z.length-1].setRule("."+v,"visibility: hidden;"),Z[Z.length-1].setRule("."+y,"visibility: hidden;"),Z[Z.length-1].setRule("."+A,"visibility: visible;")),a=W(),e=a[f];e;)g(e,"",!1),f+=1,e=a[f];for(d=V(w),f=0,e=d[f];e;)h(e),f+=1,e=d[f]}if(0===K.count){for(f=0;f<Z.length;f+=1)Z[f].clearChanges();T(b.location.href)}},ib=function(a){var b,c={},d=function(a,b){for(var d=0,e=c,f=0,g=[],h=0,i=!1,j=0;d<b.length;)a>j&&(f=b.charCodeAt(d),f>=49&&57>=f?(g[h]=f-48,h+=1,i=!0):(e[f]||(e[f]={}),e=e[f],i||(g[h]=0,h+=1),i=!1),j+=1,d+=1),j===a&&(i||(g[h]=0),e.tpoints=g,e=c,g=[],h=0,i=!1,j=0)};for(b in a.patterns)a.patterns.hasOwnProperty(b)&&d(parseInt(b,10),a.patterns[b]);a.patterns=c},jb=function(a,b){var e,c=[],d=a.split("");for(e=0;e<b.length;e+=1)0!==b[e]&&c.push(b[e]),d[e]&&c.push(d[e]);return c.join("")},kb=function(a){var d,e,f,b=a.split(", "),c={};for(d=0,e=b.length;e>d;d+=1)f=b[d].replace(/-/g,""),c.hasOwnProperty(f)||(c[f]=b[d]);return c},lb=function(b){var f,g,h,i;if(c.hasOwnProperty(b)&&!Hyphenator.languages[b]){if(f=d+"patterns/"+c[b].file,e&&!H){g=null;try{g=new a.XMLHttpRequest}catch(j){try{g=new a.ActiveXObject("Microsoft.XMLHTTP")}catch(k){try{g=new a.ActiveXObject("Msxml2.XMLHTTP")}catch(l){g=null}}}g&&(g.open("HEAD",f,!0),g.setRequestHeader("Cache-Control","no-cache"),g.onreadystatechange=function(){return 4===g.readyState&&404===g.status?(p(new Error("Could not load\n"+f)),delete M[b],void 0):void 0},g.send(null))}r&&(h=a.document.getElementsByTagName("head").item(0),i=r("script",a),i.src=f,i.type="text/javascript",i.charset="utf8",h.appendChild(i))}},mb=function(b){var d,c=Hyphenator.languages[b];c.prepared||(j&&(c.cache={}),m&&(c.redPatSet={}),c.hasOwnProperty("exceptions")&&(Hyphenator.addExceptions(b,c.exceptions),delete c.exceptions),L.hasOwnProperty("global")&&(L.hasOwnProperty(b)?L[b]+=", "+L.global:L[b]=L.global),L.hasOwnProperty(b)?(c.exceptions=kb(L[b]),delete L[b]):c.exceptions={},ib(c),d="[\\w"+c.specialChars+"@"+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+F+",}",c.genRegExp=new RegExp("("+N+")|("+O+")|("+d+")","gi"),c.prepared=!0),l&&l.setItem(b,a.JSON.stringify(c))},nb=function(b){var c,d,e,f,g=function(){var c,a=!0;for(c in M)M.hasOwnProperty(c)&&(a=!1,Hyphenator.languages[c]&&(delete M[c],mb(c),b(c)));return a};if(!n){for(c in Hyphenator.languages)Hyphenator.languages.hasOwnProperty(c)&&mb(c);return b("*"),void 0}for(c in M)if(M.hasOwnProperty(c))if(l&&l.test(c)){if(Hyphenator.languages[c]=a.JSON.parse(l.getItem(c)),L.hasOwnProperty("global")){e=kb(L.global);for(f in e)e.hasOwnProperty(f)&&(Hyphenator.languages[c].exceptions[f]=e[f])}if(L.hasOwnProperty(c)){e=kb(L[c]);for(f in e)e.hasOwnProperty(f)&&(Hyphenator.languages[c].exceptions[f]=e[f]);delete L[c]}e="[\\w"+Hyphenator.languages[c].specialChars+"@"+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+F+",}",Hyphenator.languages[c].genRegExp=new RegExp("("+N+")|("+O+")|("+e+")","gi"),delete M[c],b(c)}else lb(c);g()||(d=a.setInterval(function(){var b=g();b&&a.clearInterval(d)},100))},ob=function(){var a,c,d=Hyphenator.doHyphenation?"Hy-phen-a-tion":"Hyphenation",e=b.document.getElementById("HyphenatorToggleBox");e?e.firstChild.data=d:(a=b.document.getElementsByTagName("body")[0],e=r("div",b),e.setAttribute("id","HyphenatorToggleBox"),e.setAttribute("class",E),c=b.document.createTextNode(d),e.appendChild(c),e.onclick=Hyphenator.toggleHyphenation,e.style.position="absolute",e.style.top="0px",e.style.right="0px",e.style.margin="0",e.style.backgroundColor="#AAAAAA",e.style.color="#FFFFFF",e.style.font="6pt Arial",e.style.letterSpacing="0.2em",e.style.padding="3px",e.style.cursor="pointer",e.style.WebkitBorderBottomLeftRadius="4px",e.style.MozBorderRadiusBottomleft="4px",e.style.borderBottomLeftRadius="4px",a.appendChild(e))},pb=function(a,b,c){var d,e,f,g,h,k,l,o,p,q,i=[],n=a.patterns,r=c.length,s="",t=function(b){var c,d;for(c in a.charSubstitution)a.charSubstitution.hasOwnProperty(c)&&(d=b.replace(new RegExp(c,"g"),a.charSubstitution[c]));return d};if(c=R(c,b),""===c)s="";else if(j&&a.cache.hasOwnProperty(c))s=a.cache[c];else if(-1!==c.indexOf(_))s=c;else if(a.exceptions.hasOwnProperty(c))s=a.exceptions[c].replace(/-/g,_);else if(-1!==c.indexOf("-")){for(d=c.split("-"),e=0;e<d.length;e+=1)d[e]=pb(a,b,d[e]);s=d.join("-")}else{for(g=c.toLowerCase(),a.charSubstitution&&(g=t(g)),-1!==c.indexOf("'")&&(g=g.replace("'","’")),g="_"+g+"_",h=g.length,q=0;h+1>q;q+=1)i[q]=0;for(k=0;h>k;k+=1)for(o=n,f="",l=k;h>l&&(o=o[g.charCodeAt(l)],o);l+=1)if(m&&(f+=g.charAt(l)),p=o.tpoints)for(m&&(a.redPatSet||(a.redPatSet={}),a.redPatSet[f]=jb(f,p)),q=0;q<p.length;q+=1)i[k+q]=Math.max(i[k+q],p[q]);for(q=0;r>q;q+=1)s+=q>=a.leftmin&&q<=r-a.rightmin&&0!==i[q+1]%2?_+c.charAt(q):c.charAt(q)}return s=S(s,b),j&&(a.cache[c]=s),s},qb=function(a){var b,c,e,d=0;switch(_){case"|":b="\\|";break;case"+":b="\\+";break;case"*":b="\\*";break;default:b=_}switch(ab){case"|":c="\\|";break;case"+":c="\\+";break;case"*":c="\\*";break;default:c=ab}for(e=a.childNodes[d];e;)3===e.nodeType?(e.data=e.data.replace(new RegExp(b,"g"),""),e.data=e.data.replace(new RegExp(c,"g"),"")):1===e.nodeType&&qb(e),d+=1,e=a.childNodes[d]},rb=function(){var b=function(){this.oncopyHandler=function(b){b=b||a.event;var c,d,e,f,g,h=b.target||b.srcElement,j=h.ownerDocument,k=j.getElementsByTagName("body")[0],l=j.defaultView||j.parentWindow;h.tagName&&i[h.tagName.toLowerCase()]||(c=j.createElement("div"),c.style.color=a.getComputedStyle?l.getComputedStyle(k,null).backgroundColor:"#FFFFFF",c.style.fontSize="0px",k.appendChild(c),a.getSelection?(b.stopPropagation(),d=l.getSelection(),e=d.getRangeAt(0),c.appendChild(e.cloneContents()),qb(c),d.selectAllChildren(c),g=function(){c.parentNode.removeChild(c),d.removeAllRanges(),d.addRange(e)}):(b.cancelBubble=!0,d=l.document.selection,e=d.createRange(),c.innerHTML=e.htmlText,qb(c),f=k.createTextRange(),f.moveToElementText(c),f.select(),g=function(){c.parentNode.removeChild(c),""!==e.text&&e.select()}),a.setTimeout(g,0))},this.removeOnCopy=function(b){var c=b.ownerDocument.getElementsByTagName("body")[0];c&&(b=b||c,a.removeEventListener?b.removeEventListener("copy",this.oncopyHandler,!0):b.detachEvent("oncopy",this.oncopyHandler))},this.registerOnCopy=function(b){var c=b.ownerDocument.getElementsByTagName("body")[0];c&&(b=b||c,a.addEventListener?b.addEventListener("copy",this.oncopyHandler,!0):b.attachEvent("oncopy",this.oncopyHandler))}};return cb?new b:!1}(),sb=function(){var b,d,a=!0,c={};if(K.each(function(b){var d,e=b.length;for(d=0;e>d;d+=1)a=a&&b[d].hyphenated,c.hasOwnProperty(b[d].element.baseURI)||(c[b[d].element.ownerDocument.location.href]=!0),c[b[d].element.ownerDocument.location.href]=c[b[d].element.ownerDocument.location.href]&&b[d].hyphenated}),a){for("hidden"===X&&"progressive"===Y&&K.each(function(a){var b,d,c=a.length;for(b=0;c>b;b+=1)d=a[b].element,d.className=d.className.replace(B,""),""===d.className&&d.removeAttribute("class")}),b=0;b<Z.length;b+=1)Z[b].clearChanges();for(d in c)c.hasOwnProperty(d)&&T(d)}},tb=function(a,b){var d,e,f,g,c=b.element,h=function(a){var b,c;switch(_){case"|":b="\\|";break;case"+":b="\\+";break;case"*":b="\\*";break;default:b=_}return a=a.replace(/[\s]*$/,""),G>=2&&(c=a.split(" "),c[1]=c[1].replace(new RegExp(b,"g"),""),c[1]=c[1].replace(new RegExp(Q,"g"),""),c=c.join(" ")),3===G&&(c=c.replace(/[ ]+/g,String.fromCharCode(160))),c};if(Hyphenator.languages.hasOwnProperty(a))for(g=Hyphenator.languages[a],d=function(b){var c;return c=Hyphenator.doHyphenation?P.test(b)?bb(b):pb(g,a,b):b},cb&&"body"!==c.tagName.toLowerCase()&&rb.registerOnCopy(c),f=0,e=c.childNodes[f];e;)3===e.nodeType&&e.data.length>=F&&(e.data=e.data.replace(g.genRegExp,d),1!==G&&(e.data=e.data.replace(/[\S]+ [\S]+[\s]*$/,h))),f+=1,e=c.childNodes[f];"hidden"===X&&"wait"===Y&&(c.className=c.className.replace(z,""),""===c.className&&c.removeAttribute("class")),"hidden"===X&&"progressive"===Y&&(c.className=c.className.replace(z," "+A)),b.hyphenated=!0,K.hyCount+=1,K.count<=K.hyCount&&sb()},ub=function(b){function c(a,b,c){return function(){return a(b,c)}}var d,e;if("*"===b)K.each(function(b,d){var e,f=d.length;for(e=0;f>e;e+=1)a.setTimeout(c(tb,b,d[e]),0)});else if(K.list.hasOwnProperty(b))for(e=K.list[b].length,d=0;e>d;d+=1)a.setTimeout(c(tb,b,K.list[b][d]),0)},vb=function(){K.each(function(a){var b,c=a.length;for(b=0;c>b;b+=1)qb(a[b].element),cb&&rb.removeOnCopy(a[b].element),a[b].hyphenated=!1})},wb=function(){var b;try{if("none"!==k&&void 0!==a.localStorage&&void 0!==a.sessionStorage&&void 0!==a.JSON.stringify&&void 0!==a.JSON.parse){switch(k){case"session":b=a.sessionStorage;break;case"local":b=a.localStorage;break;default:b=void 0}b.setItem("storageTest","1"),b.removeItem("storageTest")}}catch(c){b=void 0}l=b?{prefix:"Hyphenator_"+Hyphenator.version+"_",store:b,test:function(a){var b=this.store.getItem(this.prefix+a);return b?!0:!1},getItem:function(a){return this.store.getItem(this.prefix+a)},setItem:function(a,b){try{this.store.setItem(this.prefix+a,b)}catch(c){p(c)}}}:void 0},xb=function(){if(l){var b={STORED:!0,classname:v,urlclassname:w,donthyphenateclassname:E,minwordlength:F,hyphenchar:_,urlhyphenchar:ab,togglebox:ob,displaytogglebox:o,remoteloading:n,enablecache:j,enablereducedpatternset:m,onhyphenationdonecallback:T,onerrorhandler:p,onwarninghandler:q,intermediatestate:X,selectorfunction:U||V,safecopy:cb,doframes:h,storagetype:k,orphancontrol:G,dohyphenation:Hyphenator.doHyphenation,persistentconfig:g,defaultlanguage:J,useCSS3hyphenation:s,unhide:Y,onbeforewordhyphenation:R,onafterwordhyphenation:S};l.setItem("config",a.JSON.stringify(b))}},yb=function(){var b;l.test("config")&&(b=a.JSON.parse(l.getItem("config")),Hyphenator.config(b))};return{version:"4.3.0",doHyphenation:!0,languages:{},config:function(a){var c,b=function(b,c){var d,e;return e=typeof a[b],e===c?d=!0:(p(new Error("Config onError: "+b+" must be of type "+c)),d=!1),d};a.hasOwnProperty("storagetype")&&(b("storagetype","string")&&(k=a.storagetype),l||wb()),!a.hasOwnProperty("STORED")&&l&&a.hasOwnProperty("persistentconfig")&&a.persistentconfig===!0&&yb();for(c in a)if(a.hasOwnProperty(c))switch(c){case"STORED":break;case"classname":b("classname","string")&&(v=a[c]);break;case"urlclassname":b("urlclassname","string")&&(w=a[c]);break;case"donthyphenateclassname":b("donthyphenateclassname","string")&&(E=a[c]);break;case"minwordlength":b("minwordlength","number")&&(F=a[c]);break;case"hyphenchar":b("hyphenchar","string")&&("&shy;"===a.hyphenchar&&(a.hyphenchar=String.fromCharCode(173)),_=a[c]);break;case"urlhyphenchar":a.hasOwnProperty("urlhyphenchar")&&b("urlhyphenchar","string")&&(ab=a[c]);break;case"togglebox":b("togglebox","function")&&(ob=a[c]);break;case"displaytogglebox":b("displaytogglebox","boolean")&&(o=a[c]);break;case"remoteloading":b("remoteloading","boolean")&&(n=a[c]);break;case"enablecache":b("enablecache","boolean")&&(j=a[c]);break;case"enablereducedpatternset":b("enablereducedpatternset","boolean")&&(m=a[c]);break;case"onhyphenationdonecallback":b("onhyphenationdonecallback","function")&&(T=a[c]);break;case"onerrorhandler":b("onerrorhandler","function")&&(p=a[c]);break;case"onwarninghandler":b("onwarninghandler","function")&&(q=a[c]);break;case"intermediatestate":b("intermediatestate","string")&&(X=a[c]);break;case"selectorfunction":b("selectorfunction","function")&&(U=a[c]);break;case"safecopy":b("safecopy","boolean")&&(cb=a[c]);break;case"doframes":b("doframes","boolean")&&(h=a[c]);break;case"storagetype":b("storagetype","string")&&(k=a[c]);break;case"orphancontrol":b("orphancontrol","number")&&(G=a[c]);break;case"dohyphenation":b("dohyphenation","boolean")&&(Hyphenator.doHyphenation=a[c]);break;case"persistentconfig":b("persistentconfig","boolean")&&(g=a[c]);break;case"defaultlanguage":b("defaultlanguage","string")&&(J=a[c]);break;case"useCSS3hyphenation":b("useCSS3hyphenation","boolean")&&(s=a[c]);break;case"unhide":b("unhide","string")&&(Y=a[c]);break;case"onbeforewordhyphenation":b("onbeforewordhyphenation","function")&&(R=a[c]);break;case"onafterwordhyphenation":b("onafterwordhyphenation","function")&&(S=a[c]);break;default:p(new Error("Hyphenator.config: property "+c+" not known."))}l&&g&&xb()},run:function(){var c=function(){try{if(b.document.getElementsByTagName("frameset").length>0)return;gb(void 0),hb(),nb(ub),o&&ob()}catch(a){p(a)}};l||wb(),eb(a,c)},addExceptions:function(a,b){""===a&&(a="global"),L.hasOwnProperty(a)?L[a]+=", "+b:L[a]=b},hyphenate:function(a,b){var c,d,e,f;if(f=Hyphenator.languages[b],Hyphenator.languages.hasOwnProperty(b)){if(f.prepared||mb(b),c=function(a){var c;return c=P.test(a)?bb(a):pb(f,b,a)},"object"==typeof a&&"string"!=typeof a&&a.constructor!==String)for(e=0,d=a.childNodes[e];d;)3===d.nodeType&&d.data.length>=F?d.data=d.data.replace(f.genRegExp,c):1===d.nodeType&&(""!==d.lang?Hyphenator.hyphenate(d,d.lang):Hyphenator.hyphenate(d,b)),e+=1,d=a.childNodes[e];else if("string"==typeof a||a.constructor===String)return a.replace(f.genRegExp,c)}else p(new Error('Language "'+b+'" is not loaded.'))},getRedPatternSet:function(a){return Hyphenator.languages[a].redPatSet},isBookmarklet:function(){return H},getConfigFromURI:function(){var e,f,g,h,i,j,a=null,c={},d=b.document.getElementsByTagName("script");for(e=0,g=d.length;g>e;e+=1)if(d[e].getAttribute("src")&&(a=d[e].getAttribute("src")),a&&-1!==a.indexOf("Hyphenator.js?")){for(h=a.indexOf("Hyphenator.js?"),i=a.substring(h+14).split("&"),f=0;f<i.length;f+=1)j=i[f].split("="),"bm"!==j[0]&&("true"===j[1]?j[1]=!0:"false"===j[1]?j[1]=!1:isFinite(j[1])&&(j[1]=parseInt(j[1],10)),("togglebox"===j[0]||"onhyphenationdonecallback"===j[0]||"onerrorhandler"===j[0]||"selectorfunction"===j[0]||"onbeforewordhyphenation"===j[0]||"onafterwordhyphenation"===j[0])&&(j[1]=new Function("",j[1])),c[j[0]]=j[1]);break}return c},toggleHyphenation:function(){Hyphenator.doHyphenation?(D&&D.setRule("."+C,t.property+": none;"),vb(),Hyphenator.doHyphenation=!1,xb(),ob()):(D&&D.setRule("."+C,t.property+": auto;"),ub("*"),Hyphenator.doHyphenation=!0,xb(),ob())}}}(window);Hyphenator.isBookmarklet()&&(Hyphenator.config({displaytogglebox:!0,intermediatestate:"visible",storagetype:"local",doframes:!0,useCSS3hyphenation:!0}),Hyphenator.config(Hyphenator.getConfigFromURI()),Hyphenator.run());