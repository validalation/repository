function removeHtmlTag(e,f){if(e.indexOf("<")!=-1){var g=e.split("<");for(var h=0;h<g.length;h++){if(g[h].indexOf(">")!=-1){g[h]=g[h].substring(g[h].indexOf(">")+1,g[h].length)}}e=g.join("")}f=(f<e.length-1)?f:e.length-2;while(e.charAt(f-1)!=" "&&e.indexOf(" ",f)!=-1){f++}e=e.substring(0,f-1);return e+"..."}function createSummaryAndThumb(k){var i=document.getElementById(k);var h="";var g=i.getElementsByTagName("img");var j=summary_noimg;if(g.length>=1){h='<span style="display:none;float:left;margin:0px 10px 5px 0px;"><img src="'+g[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>';j=summary_img}var l=h+"<div>"+removeHtmlTag(i.innerHTML,j)+"</div>";i.innerHTML=l};
//
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.media$thumbnail.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else{if(typeof(defaultnoimage)!=='undefined'){thumburl[relatedTitlesNum]=defaultnoimage}else{thumburl[relatedTitlesNum]="Https://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png"}}}if(relatedTitles[relatedTitlesNum].length>35){relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"..."}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++){if(a[j]==e){return true}}return false}function printRelatedLabels_thumbs(current){var splitbarcolor;if(typeof(splittercolor)!=='undefined'){splitbarcolor=splittercolor}else{splitbarcolor="#d4eaf2"}for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==current)||(!relatedTitles[i])){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0){document.write('<h3>'+relatedpoststitle+'</h3>')}document.write('<div style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a style="text-decoration:none;padding:5px;float:left;');if(i!=0)document.write('border-left:solid 0.5px '+splitbarcolor+';"');else document.write('"');document.write(' href="'+relatedUrls[r]+'"><img style="width:80px;height:70px;border:0px;" src="'+thumburl[r]+'"/><br/><div style="width:80px;padding-left:3px;height:65px;border: 0pt none ; margin: 3px 0pt 0pt; padding: 0pt; font-style: normal; font-variant: normal; font-weight: normal; font-size: 11px; line-height: normal; font-size-adjust: none; font-stretch: normal;">'+relatedTitles[r]+'</div></a>');i++;if(r<relatedTitles.length-1){r++}else{r=0}}document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)}
//
var _0xbc2a=["\x65\x6E\x74\x72\x79","\x66\x65\x65\x64","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x63\x65\x6E\x74\x2D\x67\x61\x6C\x6C\x65\x72\x79\x22\x3E","\x6C\x65\x6E\x67\x74\x68","\x24\x74","\x74\x69\x74\x6C\x65","\x6D\x65\x64\x69\x61\x24\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x75\x72\x6C","\x48\x74\x74\x70\x73\x3A\x2F\x2F\x32\x2E\x62\x70\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F\x2D\x34\x66\x43\x66\x35\x33\x46\x71\x59\x4B\x4D\x2F\x56\x63\x63\x73\x79\x37\x61\x70\x6F\x5A\x49\x2F\x41\x41\x41\x41\x41\x41\x41\x41\x4B\x34\x6F\x2F\x58\x4A\x6B\x76\x33\x52\x6B\x43\x30\x70\x77\x2F\x73\x31\x36\x30\x30\x2F\x64\x65\x66\x61\x75\x6C\x74\x25\x32\x42\x69\x6D\x61\x67\x65\x2E\x70\x6E\x67","\x73\x37\x32\x2D\x63","\x73","\x2D\x63","\x72\x65\x70\x6C\x61\x63\x65","\x6C\x69\x6E\x6B","\x61\x6C\x74\x65\x72\x6E\x61\x74\x65","\x72\x65\x6C","\x68\x72\x65\x66","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22","\x22\x20\x77\x69\x64\x74\x68\x3D\x22","\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22","\x22\x2F\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x74\x69\x74\x6C\x65\x22\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E","","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x20\x74\x69\x74\x6C\x65\x3D\x22","\x22\x3E","\x3C\x2F\x61\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x67\x61\x6C\x6C\x65\x72\x79\x74\x65\x6D\x22\x3E","\x3C\x2F\x64\x69\x76\x3E","\x70\x75\x73\x68","\x6A\x6F\x69\x6E","\x77\x72\x69\x74\x65"];function seocipsgrid(_0x7a49x2){for(var _0x7a49x3=_0x7a49x2[_0xbc2a[1]][_0xbc2a[0]]|| [],_0x7a49x4=[_0xbc2a[2]],_0x7a49x5=0;_0x7a49x5< _0x7a49x3[_0xbc2a[3]];++_0x7a49x5){for(var _0x7a49x6=_0x7a49x3[_0x7a49x5],_0x7a49x7=_0x7a49x6[_0xbc2a[5]][_0xbc2a[4]],_0x7a49x8=_0x7a49x6[_0xbc2a[6]]?_0x7a49x6[_0xbc2a[6]][_0xbc2a[7]]:_0xbc2a[8],_0x7a49x9=_0x7a49x8[_0xbc2a[12]](_0xbc2a[9],_0xbc2a[10]+ seocips_thumbs+ _0xbc2a[11]),_0x7a49xa=_0x7a49x6[_0xbc2a[13]]|| [],_0x7a49xb=0;_0x7a49xb< _0x7a49xa[_0xbc2a[3]]&& _0xbc2a[14]!= _0x7a49xa[_0x7a49xb][_0xbc2a[15]];++_0x7a49xb){;};var _0x7a49xc=_0x7a49xa[_0x7a49xb][_0xbc2a[16]],_0x7a49xd=_0xbc2a[17]+ _0x7a49x9+ _0xbc2a[18]+ seocips_thumbs+ _0xbc2a[19]+ seocips_thumbs+ _0xbc2a[20],_0x7a49xe=seocips_title?_0xbc2a[21]+ _0x7a49x7+ _0xbc2a[22]:_0xbc2a[23],_0x7a49xf=_0xbc2a[24]+ _0x7a49xc+ _0xbc2a[25]+ _0x7a49x7+ _0xbc2a[26]+ _0x7a49xd+ _0x7a49xe+ _0xbc2a[27];_0x7a49x4[_0xbc2a[30]](_0xbc2a[28],_0x7a49xf,_0xbc2a[29])};_0x7a49x4[_0xbc2a[30]](_0xbc2a[29]),document[_0xbc2a[32]](_0x7a49x4[_0xbc2a[31]](_0xbc2a[23]))}
//
var _0xd8b2=["\x65\x6E\x74\x72\x79","\x66\x65\x65\x64","\x24\x74","\x74\x69\x74\x6C\x65","\x6C\x65\x6E\x67\x74\x68","\x6C\x69\x6E\x6B","\x72\x65\x6C","\x72\x65\x70\x6C\x69\x65\x73","\x74\x79\x70\x65","\x74\x65\x78\x74\x2F\x68\x74\x6D\x6C","\x68\x72\x65\x66","\x61\x6C\x74\x65\x72\x6E\x61\x74\x65","\x75\x72\x6C","\x6D\x65\x64\x69\x61\x24\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x2F\x73\x37\x32\x2D\x63\x2F","\x2F\x77","\x2D\x68","\x2D\x63\x2F","\x72\x65\x70\x6C\x61\x63\x65","\x63\x6F\x6E\x74\x65\x6E\x74","\x3C\x69\x6D\x67","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x72\x63\x3D\x22","\x22","\x73\x75\x62\x73\x74\x72","","\x70\x75\x62\x6C\x69\x73\x68\x65\x64","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3C\x75\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x74\x68\x75\x6D\x62\x73\x22\x3E","\x77\x72\x69\x74\x65","\x3C\x6C\x69\x3E","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x74\x68\x75\x6D\x62\x22\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x6F\x6C\x6C\x6F\x76\x65\x72\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x69\x6D\x67\x20\x77\x69\x64\x74\x68\x3D\x22","\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22","\x22\x20\x61\x6C\x74\x3D\x22","\x22\x20\x74\x69\x74\x6C\x65\x3D\x22","\x22\x20\x73\x72\x63\x3D\x22","\x22\x2F\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x61\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x74\x69\x74\x6C\x65\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x20\x74\x61\x72\x67\x65\x74\x20\x3D\x22\x5F\x74\x6F\x70\x22\x3E","\x3C\x2F\x61\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x6D\x65\x74\x61\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x6D\x65\x74\x61\x5F\x64\x61\x74\x65\x22\x3E","\x2F","\x3C\x2F\x73\x70\x61\x6E\x3E","\x31\x20\x43\x6F\x6D\x6D\x65\x6E\x74\x73","\x31\x20\x43\x6F\x6D\x6D\x65\x6E\x74","\x30\x20\x43\x6F\x6D\x6D\x65\x6E\x74\x73","\x4E\x6F\x20\x43\x6F\x6D\x6D\x65\x6E\x74\x73","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x6D\x65\x74\x61\x5F\x63\x6F\x6D\x6D\x65\x6E\x74\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x6D\x65\x74\x61\x5F\x6D\x6F\x72\x65\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x75\x72\x6C\x22\x20\x74\x61\x72\x67\x65\x74\x20\x3D\x22\x5F\x74\x6F\x70\x22\x3E\x52\x65\x61\x64\x20\x4D\x6F\x72\x65\x2E\x2E\x2E\x3C\x2F\x61\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x73\x75\x6D\x6D\x61\x72\x79\x22\x3E","\x73\x75\x6D\x6D\x61\x72\x79","\x20","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66","\x2E\x2E\x2E","\x3C\x2F\x6C\x69\x3E","\x3C\x2F\x75\x6C\x3E","\x3C\x75\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x74\x68\x75\x6D\x62\x73\x32\x22\x3E","\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x74\x68\x75\x6D\x62\x32\x22\x3E\x3C\x69\x6D\x67\x20\x77\x69\x64\x74\x68\x3D\x22","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x74\x69\x74\x6C\x65\x20\x72\x70\x5F\x74\x69\x74\x6C\x65\x32\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x6D\x65\x74\x61\x20\x72\x70\x5F\x6D\x65\x74\x61\x32\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x6D\x65\x74\x61\x5F\x64\x61\x74\x65\x20\x72\x70\x5F\x6D\x65\x74\x61\x5F\x64\x61\x74\x65\x32\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x6D\x65\x74\x61\x5F\x63\x6F\x6D\x6D\x65\x6E\x74\x20\x72\x70\x5F\x6D\x65\x74\x61\x5F\x63\x6F\x6D\x6D\x65\x6E\x74\x32\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x70\x5F\x6D\x65\x74\x61\x5F\x6D\x6F\x72\x65\x20\x72\x70\x5F\x6D\x65\x74\x61\x5F\x6D\x6F\x72\x65\x32\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22"];function labelthumbs(_0xae57x2){for(var _0xae57x3=0;_0xae57x3< numposts;_0xae57x3++){var _0xae57x4=_0xae57x2[_0xd8b2[1]][_0xd8b2[0]][_0xae57x3];var _0xae57x5=_0xae57x4[_0xd8b2[3]][_0xd8b2[2]];var _0xae57x6;if(_0xae57x3== _0xae57x2[_0xd8b2[1]][_0xd8b2[0]][_0xd8b2[4]]){break};for(var _0xae57x7=0;_0xae57x7< _0xae57x4[_0xd8b2[5]][_0xd8b2[4]];_0xae57x7++){if(_0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[6]]== _0xd8b2[7]&& _0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[8]]== _0xd8b2[9]){var _0xae57x8=_0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[3]];var _0xae57x9=_0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[10]]};if(_0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[6]]== _0xd8b2[11]){_0xae57x6= _0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[10]];break}};var _0xae57xa;try{_0xae57xa= _0xae57x4[_0xd8b2[13]][_0xd8b2[12]];_0xae57xa= _0xae57xa[_0xd8b2[18]](_0xd8b2[14],_0xd8b2[15]+ thumb_width+ _0xd8b2[16]+ thumb_height+ _0xd8b2[17])}catch(h){s= _0xae57x4[_0xd8b2[19]][_0xd8b2[2]];a= s[_0xd8b2[21]](_0xd8b2[20]);b= s[_0xd8b2[21]](_0xd8b2[22],a);c= s[_0xd8b2[21]](_0xd8b2[23],b+ 5);d= s[_0xd8b2[24]](b+ 5,c- b- 5);if(a!=  -1&& b!=  -1&& c!=  -1&& d!= _0xd8b2[25]){_0xae57xa= d}else {_0xae57xa= no_thumb}};var _0xae57xb=_0xae57x4[_0xd8b2[26]][_0xd8b2[2]];var _0xae57xc=_0xae57xb[_0xd8b2[27]](0,4);var _0xae57xd=_0xae57xb[_0xd8b2[27]](5,7);var _0xae57xe=_0xae57xb[_0xd8b2[27]](8,10);document[_0xd8b2[29]](_0xd8b2[28]);document[_0xd8b2[29]](_0xd8b2[30]);if(showpostthumbnails== true){document[_0xd8b2[29]](_0xd8b2[31]+ _0xae57x6+ _0xd8b2[32]+ thumb_width+ _0xd8b2[33]+ thumb_height+ _0xd8b2[34]+ _0xae57x5+ _0xd8b2[35]+ _0xae57x5+ _0xd8b2[36]+ _0xae57xa+ _0xd8b2[37])};document[_0xd8b2[29]](_0xd8b2[38]+ _0xae57x6+ _0xd8b2[35]+ _0xae57x5+ _0xd8b2[39]+ _0xae57x5+ _0xd8b2[40]);var _0xae57xf=_0xd8b2[25];document[_0xd8b2[29]](_0xd8b2[41]);if(showpostdate== true){_0xae57xf= _0xae57xf+ _0xd8b2[42]+ _0xae57xe+ _0xd8b2[43]+ _0xae57xd+ _0xd8b2[43]+ _0xae57xc+ _0xd8b2[44]};if(showcommentnum== true){if(_0xae57x8== _0xd8b2[45]){_0xae57x8= _0xd8b2[46]};if(_0xae57x8== _0xd8b2[47]){_0xae57x8= _0xd8b2[48]};_0xae57x8= _0xd8b2[49]+ _0xae57x9+ _0xd8b2[39]+ _0xae57x8+ _0xd8b2[40];_0xae57xf= _0xae57xf+ _0xae57x8};if(displaymore== true){_0xae57xf= _0xae57xf+ _0xd8b2[50]+ _0xae57x6+ _0xd8b2[51]};document[_0xd8b2[29]](_0xae57xf);document[_0xd8b2[29]](_0xd8b2[44]);document[_0xd8b2[29]](_0xd8b2[52]);if(_0xd8b2[19] in  _0xae57x4){var _0xae57x10=_0xae57x4[_0xd8b2[19]][_0xd8b2[2]]}else {if(_0xd8b2[53] in  _0xae57x4){var _0xae57x10=_0xae57x4[_0xd8b2[53]][_0xd8b2[2]]}else {var _0xae57x10=_0xd8b2[25]}};var _0xae57x11=/<\S[^>]*>/g;_0xae57x10= _0xae57x10[_0xd8b2[18]](_0xae57x11,_0xd8b2[25]);if(showpostsummary== true){if(_0xae57x10[_0xd8b2[4]]< numchars){document[_0xd8b2[29]](_0xd8b2[25]);document[_0xd8b2[29]](_0xae57x10);document[_0xd8b2[29]](_0xd8b2[25])}else {document[_0xd8b2[29]](_0xd8b2[25]);_0xae57x10= _0xae57x10[_0xd8b2[27]](0,numchars);var _0xae57x12=_0xae57x10[_0xd8b2[55]](_0xd8b2[54]);_0xae57x10= _0xae57x10[_0xd8b2[27]](0,_0xae57x12);document[_0xd8b2[29]](_0xae57x10+ _0xd8b2[56]);document[_0xd8b2[29]](_0xd8b2[25])}};document[_0xd8b2[29]](_0xd8b2[44]);document[_0xd8b2[29]](_0xd8b2[57]);document[_0xd8b2[29]](_0xd8b2[58])};document[_0xd8b2[29]](_0xd8b2[59]);for(var _0xae57x3=1;_0xae57x3< numposts2;_0xae57x3++){var _0xae57x4=_0xae57x2[_0xd8b2[1]][_0xd8b2[0]][_0xae57x3];var _0xae57x5=_0xae57x4[_0xd8b2[3]][_0xd8b2[2]];var _0xae57x6;if(_0xae57x3== _0xae57x2[_0xd8b2[1]][_0xd8b2[0]][_0xd8b2[4]]){break};for(var _0xae57x7=1;_0xae57x7< _0xae57x4[_0xd8b2[5]][_0xd8b2[4]];_0xae57x7++){if(_0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[6]]== _0xd8b2[7]&& _0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[8]]== _0xd8b2[9]){var _0xae57x8=_0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[3]];var _0xae57x9=_0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[10]]};if(_0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[6]]== _0xd8b2[11]){_0xae57x6= _0xae57x4[_0xd8b2[5]][_0xae57x7][_0xd8b2[10]];break}};var _0xae57x13;try{_0xae57x13= _0xae57x4[_0xd8b2[13]][_0xd8b2[12]][_0xd8b2[18]](_0xd8b2[14],_0xd8b2[15]+ thumb_width2+ _0xd8b2[16]+ thumb_height2+ _0xd8b2[17])}catch(h){s= _0xae57x4[_0xd8b2[19]][_0xd8b2[2]];a= s[_0xd8b2[21]](_0xd8b2[20]);b= s[_0xd8b2[21]](_0xd8b2[22],a);c= s[_0xd8b2[21]](_0xd8b2[23],b+ 5);d= s[_0xd8b2[24]](b+ 5,c- b- 5);if(a!=  -1&& b!=  -1&& c!=  -1&& d!= _0xd8b2[25]){_0xae57x13= d}else {_0xae57x13= no_thumb2}};var _0xae57xb=_0xae57x4[_0xd8b2[26]][_0xd8b2[2]];var _0xae57xc=_0xae57xb[_0xd8b2[27]](0,4);var _0xae57xd=_0xae57xb[_0xd8b2[27]](5,7);var _0xae57xe=_0xae57xb[_0xd8b2[27]](8,10);if(showpostthumbnails2== true){document[_0xd8b2[29]](_0xd8b2[31]+ _0xae57x6+ _0xd8b2[60]+ thumb_width2+ _0xd8b2[33]+ thumb_height2+ _0xd8b2[34]+ _0xae57x5+ _0xd8b2[35]+ _0xae57x5+ _0xd8b2[36]+ _0xae57x13+ _0xd8b2[37])};document[_0xd8b2[29]](_0xd8b2[30]);document[_0xd8b2[29]](_0xd8b2[61]+ _0xae57x6+ _0xd8b2[35]+ _0xae57x5+ _0xd8b2[39]+ _0xae57x5+ _0xd8b2[40]);var _0xae57xf=_0xd8b2[25];document[_0xd8b2[29]](_0xd8b2[62]);if(showpostdate2== true){_0xae57xf= _0xae57xf+ _0xd8b2[63]+ _0xae57xe+ _0xd8b2[43]+ _0xae57xd+ _0xd8b2[43]+ _0xae57xc+ _0xd8b2[44]};if(showcommentnum2== true){if(_0xae57x8== _0xd8b2[45]){_0xae57x8= _0xd8b2[46]};if(_0xae57x8== _0xd8b2[47]){_0xae57x8= _0xd8b2[48]};_0xae57x8= _0xd8b2[64]+ _0xae57x9+ _0xd8b2[39]+ _0xae57x8+ _0xd8b2[40];_0xae57xf= _0xae57xf+ _0xae57x8};if(displaymore2== true){_0xae57xf= _0xae57xf+ _0xd8b2[65]+ _0xae57x6+ _0xd8b2[51]};document[_0xd8b2[29]](_0xae57xf);document[_0xd8b2[29]](_0xd8b2[44]);document[_0xd8b2[29]](_0xd8b2[57])};document[_0xd8b2[29]](_0xd8b2[58])};var _0x1b34=["\x54\x65\x6D\x70\x6C\x61\x74\x65\x20\x42\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x66\x61\x64\x68\x65\x6C\x39\x38\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x46\x61\x64\x68\x65\x6C\x20\x4B\x61\x6E\x73\x61\x7A\x22\x20\x72\x65\x6C\x3D\x22\x64\x6F\x66\x6F\x6C\x6C\x6F\x77\x22\x3E\x46\x61\x64\x68\x65\x6C\x20\x4B\x61\x6E\x73\x61\x7A\x3C\x2F\x61\x3E","\x68\x74\x6D\x6C","\x23\x63\x72\x65\x64\x69\x74\x73","\x6C\x65\x6E\x67\x74\x68","\x23\x63\x72\x65\x64\x69\x74\x73\x3A\x76\x69\x73\x69\x62\x6C\x65","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x66\x61\x64\x68\x65\x6C\x39\x38\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F","\x72\x65\x61\x64\x79","\x68\x74\x74\x70\x3A\x2F\x2F\x32\x2E\x62\x70\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F\x2D\x65\x72\x54\x58\x43\x71\x36\x31\x55\x4C\x4D\x2F\x54\x6D\x48\x59\x41\x51\x42\x5A\x30\x47\x49\x2F\x41\x41\x41\x41\x41\x41\x41\x41\x43\x43\x73\x2F\x36\x63\x42\x58\x35\x34\x44\x6E\x36\x47\x73\x2F\x73\x37\x32\x2D\x63\x2F\x64\x65\x66\x61\x75\x6C\x74\x2E\x70\x6E\x67","","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22","\x2F\x73\x37\x32\x2D\x63\x2F","\x2F\x73","\x2D\x63\x2F","\x72\x65\x70\x6C\x61\x63\x65","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x6F\x73\x74\x74\x68\x75\x6D\x62\x22\x20\x61\x6C\x74\x3D\x22","\x22\x20\x74\x69\x74\x6C\x65\x3D\x22","\x22\x2F\x3E"];$(document)[_0x1b34[8]](function(){$(_0x1b34[2])[_0x1b34[1]](_0x1b34[0]);setInterval(function(){if(!$(_0x1b34[4])[_0x1b34[3]]){window[_0x1b34[6]][_0x1b34[5]]=_0x1b34[7]}},3000)});function bp_thumbnail_resize(_0xb6d3x2,_0xb6d3x3){var _0xb6d3x4=300;var _0xb6d3x5=true;var _0xb6d3x6=_0x1b34[9];if(_0xb6d3x5==true&&_0xb6d3x2==_0x1b34[10]){_0xb6d3x2=_0xb6d3x6};image_tag=_0x1b34[11]+_0xb6d3x2[_0x1b34[15]](_0x1b34[12],_0x1b34[13]+_0xb6d3x4+_0x1b34[14])+_0x1b34[16]+_0xb6d3x3+_0x1b34[17]+_0xb6d3x3+_0x1b34[18];if(_0xb6d3x2!=_0x1b34[10]){return image_tag}else {return _0x1b34[10]}};
var _0xa429=["\x6F\x72\x67\x61\x6E\x69\x63\x54\x61\x62\x73","\x24\x65\x6C","\x24\x6E\x61\x76","\x2E\x6E\x61\x76\x74\x61\x62","\x66\x69\x6E\x64","\x69\x6E\x69\x74","\x6F\x70\x74\x69\x6F\x6E\x73","\x64\x65\x66\x61\x75\x6C\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x65\x78\x74\x65\x6E\x64","\x72\x65\x6C\x61\x74\x69\x76\x65","\x6E\x6F\x6E\x65","\x63\x73\x73","\x2E\x68\x69\x64\x65","\x6C\x69\x20\x3E\x20\x61","\x63\x6C\x69\x63\x6B","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x68\x72\x65\x66","\x61\x74\x74\x72","\x61\x2E\x63\x75\x72\x72\x65\x6E\x74","\x2E\x6C\x69\x73\x74\x2D\x74\x61\x62\x77\x72\x61\x70","\x68\x65\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x3A\x61\x6E\x69\x6D\x61\x74\x65\x64","\x73\x70\x65\x65\x64","\x66\x61\x64\x65\x49\x6E","\x23","\x61\x6E\x69\x6D\x61\x74\x65","\x63\x75\x72\x72\x65\x6E\x74","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x2E\x6E\x61\x76\x74\x61\x62\x20\x6C\x69\x20\x61","\x61\x64\x64\x43\x6C\x61\x73\x73","\x66\x61\x64\x65\x4F\x75\x74","\x64\x65\x6C\x65\x67\x61\x74\x65","\x66\x6E","\x65\x61\x63\x68"];(function(_0x6424x1){_0x6424x1[_0xa429[0]]= function(_0x6424x2,_0x6424x3){var _0x6424x4=this;_0x6424x4[_0xa429[1]]= _0x6424x1(_0x6424x2);_0x6424x4[_0xa429[2]]= _0x6424x4[_0xa429[1]][_0xa429[4]](_0xa429[3]);_0x6424x4[_0xa429[5]]= function(){_0x6424x4[_0xa429[6]]= _0x6424x1[_0xa429[8]]({},_0x6424x1[_0xa429[0]][_0xa429[7]],_0x6424x3);_0x6424x1(_0xa429[12])[_0xa429[11]]({position:_0xa429[9],top:0,left:0,display:_0xa429[10]});_0x6424x4[_0xa429[2]][_0xa429[32]](_0xa429[13],_0xa429[14],function(){var _0x6424x5=_0x6424x4[_0xa429[1]][_0xa429[4]](_0xa429[18])[_0xa429[17]](_0xa429[16])[_0xa429[15]](1),_0x6424x6=_0x6424x1(this),_0x6424x7=_0x6424x6[_0xa429[17]](_0xa429[16])[_0xa429[15]](1),_0x6424x8=_0x6424x4[_0xa429[1]][_0xa429[4]](_0xa429[19]),_0x6424x9=_0x6424x8[_0xa429[20]]();_0x6424x8[_0xa429[20]](_0x6424x9);if((_0x6424x7!= _0x6424x5)&& (_0x6424x4[_0xa429[1]][_0xa429[4]](_0xa429[22])[_0xa429[21]]== 0)){_0x6424x4[_0xa429[1]][_0xa429[4]](_0xa429[25]+ _0x6424x5)[_0xa429[31]](_0x6424x4[_0xa429[6]][_0xa429[23]],function(){_0x6424x4[_0xa429[1]][_0xa429[4]](_0xa429[25]+ _0x6424x7)[_0xa429[24]](_0x6424x4[_0xa429[6]][_0xa429[23]]);var _0x6424xa=_0x6424x4[_0xa429[1]][_0xa429[4]](_0xa429[25]+ _0x6424x7)[_0xa429[20]]();_0x6424x8[_0xa429[26]]({height:_0x6424xa});_0x6424x4[_0xa429[1]][_0xa429[4]](_0xa429[29])[_0xa429[28]](_0xa429[27]);_0x6424x6[_0xa429[30]](_0xa429[27])})};return false})};_0x6424x4[_0xa429[5]]()};_0x6424x1[_0xa429[0]][_0xa429[7]]= {speed:300};_0x6424x1[_0xa429[33]][_0xa429[0]]= function(_0x6424x3){return this[_0xa429[34]](function(){( new _0x6424x1[_0xa429[0]](this,_0x6424x3))})}})(jQuery)    
