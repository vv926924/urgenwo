var hash="yxfu7xxf+Kh1qwGjNSBSPw==";var turlnameindex='wongnai.com';
var _hsv='lvs.truehits.in.th';
var _ht='goggen.php';
var _ctg='stat.php?login=wongnai';
var _hc='t0030876';
var truehitsurl=document.URL;
(function() {
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
})();
var VisitorT;var onSeconds=0;var p_cookie='';if(window.turlnameindex){p_cookie=path_cookie(turlnameindex);}else if(window.turlnameindexa){p_cookie=path_cookie(turlnameindexa);}
function getLogonTime(){var now=new Date();onSeconds=now.getTime();VisitorT=logon_getcookie('visit_time');if(VisitorT==null)VisitorT=0;document.cookie='visit_time=0;path=/;expires='+now.toGMTString()+";"+p_cookie;}
function getLogoffTime(){var PageTimeValue=0,now=new Date();if(onSeconds){PageTimeValue=Math.round((now.getTime()-onSeconds)/1000);now.setTime(now.getTime()+259200000);document.cookie='visit_time='+PageTimeValue+';path=/;expires='+now.toGMTString()+";"+p_cookie;}}
function path_cookie(sd){var _cd="";if(sd&&sd!=""&&document.domain.indexOf(sd)<0)return'';if(sd&&sd!=""&&(sd.indexOf('.')>=0))_cd=" domain="+sd+";";document.cookie="_cbclose=1; path=/;"+_cd;if(document.cookie.indexOf("_cbclose")<0){_cd="";}
return _cd;}
function logon_getcookie(_vn){var _cookie=document.cookie;var i2,i1=_cookie.indexOf(_vn+'=');if(i1<0){return 0;}
i1+=_vn.length+1;i2=_cookie.indexOf(';',i1);if(i2<0)i2=_cookie.length;return _cookie.substring(i1,i2);}
getLogonTime();window.onunload=getLogoffTime;function Tracker(code,sd){var _cookie=document.cookie;var _exp1=" expires=Sun, 18 Jan 2038 00:00:00 GMT;";var _nc=0,_rf="",_uri;var _cd="";if(sd&&sd!=""&&document.domain.indexOf(sd)<0)return'';if(sd&&sd!=""&&(sd.indexOf('.')>=0))_cd=" domain="+sd+";";var _hc=_Hash(sd);var _uid=_gsc(_cookie,"_uid"+_hc,';');if(!_uid||_uid==""||(_uid.lastIndexOf('.')!=8)){_uid=_rdId()+"."+"0";_nc=1;}
if((!_nc)&&(_cookie.indexOf("_ctout"+_hc)<0||_cookie.indexOf("_cbclose"+_hc)<0)){_nc=1;}
if(_nc){document.cookie="_cbclose"+_hc+"=1; path=/;"+_cd;if(document.cookie.indexOf("_cbclose"+_hc)<0){document.cookie="_cbclose"+_hc+"=1; path=/;";if(document.cookie.indexOf("_cbclose"+_hc)<0)return'';_cd="";}
var uid=_uid.substring(0,8);var cn=_uid.substring(9,_uid.length);cn++;_uid=uid+"."+cn;document.cookie="_uid"+_hc+"="+_uid+"; path=/;"+_exp1+_cd;if(document.cookie.indexOf("_uid"+_hc)<0)return'';_rf=_ref();}
var _tObject=new Date();var _exp2=new Date(_tObject.getTime()+1200000);_exp2=" expires="+_exp2.toGMTString()+";";document.cookie="_ctout"+_hc+"=1; path=/;"+_exp2+_cd;if(document.cookie.indexOf("_ctout"+_hc)<0)return'';var je=navigator.javaEnabled()?1:0;var fv=_Flv();return("&vt="+_uid+"&fp="+_rf+"&fv="+fv);}
function _rdId(){var _rand1=Math.round(Math.random()*255),_rand2=Math.round(Math.random()*255),_rand3=Math.round(Math.random()*255),_rand4=Math.round(Math.random()*255);return _toHex(_rand1>>4)+''+_toHex(_rand1%16)+''+
_toHex(_rand2>>4)+''+_toHex(_rand2%16)+''+
_toHex(_rand3>>4)+''+_toHex(_rand3%16)+''+
_toHex(_rand4>>4)+''+_toHex(_rand4%16);}
function _toHex(d){if(d>15||d<0)d=0;switch(d){case 15:return'F';case 14:return'E';case 13:return'D';case 12:return'C';case 11:return'B';case 10:return'A';default:return d;}}
function _gsc(b,s,t){if(!b||b==""||!s||s==""||!t||t=="")return false;var i1,i2,i3,c="-";i1=b.indexOf(s);if(i1<0)return false;i1+=s.length+1;i2=b.indexOf(t,i1);if(i2<0)i2=b.length;return b.substring(i1,i2);}
function _Flv(){var f="-",n=navigator;if(n.plugins&&n.plugins.length){for(var ii=0;ii<n.plugins.length;ii++){if(n.plugins[ii].name.indexOf('Shockwave Flash')!=-1){f=n.plugins[ii].description.split('Shockwave Flash ')[1];break;}}}
else if(window.ActiveXObject){for(var ii=11;ii>=2;ii--){try{var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");if(fl){f=ii+'.0';break;}}catch(e){}}}return f;}
function _Hash(s){var h=0,g=0;if(!s||s=="")return 1;for(var i=s.length-1;i>=0;i--){var c=parseInt(s.charCodeAt(i));h=(((h*64)%268435456)+(c*16385))%268435456;g=(h-(h%2097152))/2097152;h=h^g;}
return(h%65536);}
function _ref(){var h,q,i,j,_rf=top.document.referrer;if(!_rf)return"d";if(((i=_rf.indexOf(document.domain))>0)&&(i<=8))return"d";var _sre=new Array("search","yahoo","altavista","google","lycos","hotbot","msn","netscape","netster","mamma","alltheweb","aol","ask","looksmart","cnn","gigablast","siamguru","sansarn","truehits");var _skw=new Array("q","p","q","q","query","query","q","query","Keyword","query","q","query","q","qt","query","q","q","q","keyword");if((i=_rf.indexOf("://"))<0)return"d";i+=3;if((j=_rf.indexOf("/",i))<0)j=_rf.length;h=_rf.substring(i,j);q=_rf.substring(j,_rf.length);if(h.indexOf("www.")==0)h=h.substring(4,h.length);if(h.length==0)return"d";if(q.length>0){for(i=0;i<_sre.length;i++){if(h.indexOf(_sre[i])>-1){if((j=q.indexOf("?"+_skw[i]+"="))>-1||(j=q.indexOf("&"+_skw[i]+"="))>-1){return"s";}}}}
return"r";}
function collector(){var ja='',ck='';var bn='',sv=1.1,ss='',sc='';bn=navigator.appName;if(bn.substring(0,9)=="Microsoft"){bn="MSIE";};ja=(navigator.javaEnabled()==true)?"y":"n";document.cookie="verify=test;expire="+(new Date()).toGMTString();ck=(document.cookie.length>0)?"y":"n";if(self.screen){ss=screen.width+"*"+screen.height;sc=(bn=='MSIE')?screen.colorDepth:screen.pixelDepth;}else if(self.java){var _j=java.awt.Toolkit.getDefaultToolkit();var _s=_j.getScreenSize();ss=_s.width+"*"+_s.height;}
sv=1.3;return("&bn="+bn+"&ss="+ss+"&sc="+sc+"&sv="+sv+"&ck="+ck+"&ja="+ja);}

function th_ajax_tracker(pagename){ truehitsurl=document.URL; if(!truehitsurl || !truehitsurl_top || !hash) return; if((pagename!=null)&&(pagename.replace != null)) pagename=pagename.replace(/%/g,"%25").replace(/ /g,"%20").replace(/\"/g,"%22").replace(/#/g,"%23").replace(/&/g,"%26").replace(/\'/g,"%27").replace(/\+/g,"%2b").replace(/=/g,"%3d").replace(/\</g,"%3c").replace(/\>/g,"%3e").replace(/\:/g,"%3a"); else __th_page = '';if((domain_cmp(document.domain,turlnameindex))&&(domain_cmp(truehitsurl_top,turlnameindex))){rf='ajax';if(Tracker){ _narg = Tracker(_hc,turlnameindex); }if(VisitorT==null) VisitorT=0;var _th_rand=Math.random(); arg="&rand="+_th_rand+"&bv="+VisitorT+"&rf="+rf+"&web="+hash+collector()+_narg+"&truehitspage="+pagename+"&truehitsurl="+truehitsurl;var _i=new Image();_i.src='//'+_hsv+'/'+_ht+'?hc='+_hc+arg;_i.onload=function(){ return; };arg="";}}
function domain_cmp(url1,url2){if(url1.substring(url1.length-1)==".")url1=url1.substring(0,url1.length-1);if(url1==url2)return 1;else if(url1.length>url2.length)return(url1.substring(url1.length-url2.length-1)==("."+url2));return 0;}var page,__th_page,__thflag,udf="undefined",arg="",truehitsurl,_narg='',rf='',VisitorT,Tracker;hash=escape(hash).replace(/\+/g,"%2b");if((__th_page==null)&&(page!=null))__th_page=page;if((__th_page!=null)&&(__th_page.replace!=null))__th_page=__th_page.replace(/%/g,"%25").replace(/ /g,"%20").replace(/\"/g,"%22").replace(/#/g,"%23").replace(/&/g,"%26").replace(/\'/g,"%27").replace(/\+/g,"%2b").replace(/=/g,"%3d").replace(/\</g,"%3c").replace(/\>/g,"%3e").replace(/\:/g,"%3a");else __th_page='';try{var truehitsurl_top=top.window.document.domain;if(!truehitsurl)truehitsurl=parent.document.URL; var _norec; if(_norec && ( truehitsurl.indexOf(_norec) > 0 ) ){__thflag=1;} if((!__thflag)&&(domain_cmp(document.domain,turlnameindex))&&(domain_cmp(truehitsurl_top,turlnameindex))){rf=escape(top.document.referrer);if((rf==udf)||(rf=="")){rf="bookmark";};if(Tracker){_narg=Tracker(_hc,turlnameindex);}
if(VisitorT==null)VisitorT=0;truehitsurl=truehitsurl.replace(/&/g,"%26").replace(/\"/g,"%22").replace(/\'/g,"%27").replace(/\</g,"%3c").replace(/\>/g,"%3e").replace(/\:/g,"%3a").replace(/#/g,"%23").replace(/!/g,"%21").replace(/=/g,"%3D");arg="&bv="+VisitorT+"&rf="+rf+"&web="+hash+collector()+_narg+"&truehitspage="+__th_page+"&truehitsurl="+truehitsurl;}}catch(e){arg="";}
__thflag=1;
if(arg.length>0){
var th_rand = '&rand=' + Math.floor((Math.random() * 1000000));
arg = th_rand + arg;
var truehits_div = document.getElementById?document.getElementById('truehits_div'):document.all?document.all['truehits_div']:document.layers['truehits_div']; 
if( truehits_div != null ){truehits_div.innerHTML = "<a href='https://truehits.net/"+_ctg+"' target='_blank'>"+"<img src='//"+_hsv+'/'+_ht+'?hc='+_hc+arg+"' width=14 height=17 "+"alt='Thailand Web Stat' border=0></a>";
}else{
var th_img = document.getElementsByName('th_img');
if( th_img[0] != null ){
th_img[0].src = '//'+_hsv+'/'+_ht+'?hc='+_hc+arg + "&async=1";
th_img[0].alt = 'Thailand Web Stat';
th_img[0].border = 0;
}
var th_link = document.getElementsByName('th_link');
if( th_link[0] != null ){
th_link[0].href = '//truehits.net/'+_ctg;
}else{
truehits_div = window.document.createElement("DIV");truehits_div.setAttribute('id','truehits_div');truehits_div.innerHTML = "<a href='https://truehits.net/"+_ctg+"' target='_blank'>"+"<img src='//"+_hsv+'/'+_ht+'?hc='+_hc+arg+"' width=14 height=17 "+"alt='Thailand Web Stat' border=0></a>";window.document.body.appendChild( truehits_div );}
arg="";
}
}
