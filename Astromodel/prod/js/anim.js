const _0x2620=['min','color','1472793occwNX','337559HLcQxg','13jULjim','current','39521ZIdaQH','filter','717pYySpC','colors','cos','30759eezPTb','sin','frames','framesCount','objects','getElementById','anim-frame','5MqndUA','push','397034SOwlkD','21iXauOF','objectList','119ZcJSNC','parent','91838tvmRoY'];(function(_0x5de49e,_0x299520){const _0x126cc2=_0x373a;while(!![]){try{const _0xf2a9b6=parseInt(_0x126cc2(0x157))*-parseInt(_0x126cc2(0x162))+parseInt(_0x126cc2(0x154))+parseInt(_0x126cc2(0x165))*-parseInt(_0x126cc2(0x155))+-parseInt(_0x126cc2(0x15d))+parseInt(_0x126cc2(0x15c))+parseInt(_0x126cc2(0x160))*-parseInt(_0x126cc2(0x15e))+-parseInt(_0x126cc2(0x159))*-parseInt(_0x126cc2(0x16c));if(_0xf2a9b6===_0x299520)break;else _0x5de49e['push'](_0x5de49e['shift']());}catch(_0x466eec){_0x5de49e['push'](_0x5de49e['shift']());}}}(_0x2620,0xb63b7));function _0x373a(_0x316241,_0x3d435a){_0x316241=_0x316241-0x154;let _0x26200a=_0x2620[_0x316241];return _0x26200a;}let BALLS={'current':null,'frames':[],'colors':{}};function canvasGetSize(){const _0x8f927b=_0x373a;let _0x231f93,_0x2eda2b=windowHeight-0xa0;return _0x231f93=0x30c<windowWidth?windowWidth-0x190:windowWidth-0x50,Math[_0x8f927b(0x15a)](_0x231f93,_0x2eda2b);}function setup(){const _0x4902d4=_0x373a;let _0x4fa113=document['getElementById'](_0x4902d4(0x16b)),_0x4a2e32=createCanvas(canvasGetSize(),canvasGetSize());_0x4a2e32[_0x4902d4(0x158)](_0x4902d4(0x16b));}function onData(_0x3f3e29){const _0x566d23=_0x373a;BALLS={'current':null,'frames':[],'colors':{},'massCenter':[]};let _0xb71397=_0x3f3e29[_0x566d23(0x167)];for(let _0x37174b,_0x4cc81f=0x0;_0x4cc81f<_0xb71397;_0x4cc81f++){for(id in(_0x37174b={},_0x3f3e29[_0x566d23(0x169)]))_0x37174b[id]=_0x3f3e29[_0x566d23(0x169)][id][_0x4cc81f],_0x4cc81f||(BALLS[_0x566d23(0x163)][id]=vm[_0x566d23(0x156)][_0x566d23(0x161)](_0x48070d=>_0x48070d['id']===id)[0x0][_0x566d23(0x15b)]);BALLS[_0x566d23(0x167)][_0x566d23(0x16d)](_0x37174b);}BALLS[_0x566d23(0x168)]=_0xb71397,BALLS[_0x566d23(0x15f)]=0x0;}function draw(){const _0x35bfdd=_0x373a;push();let _0x55bf41=width;if(noStroke(),fill(0x16),circle(0.5*_0x55bf41,0.5*_0x55bf41,_0x55bf41),fill(0x22),circle(0.5*_0x55bf41,0.5*_0x55bf41,0.8*_0x55bf41),fill(0x37),rectMode('center'),rect(0.95*_0x55bf41,0.5*_0x55bf41,0.08*_0x55bf41,0.02*_0x55bf41,0.02*_0x55bf41),rect(0.05*_0x55bf41,0.5*_0x55bf41,0.08*_0x55bf41,0.02*_0x55bf41,0.02*_0x55bf41),null!==BALLS[_0x35bfdd(0x15f)]){for(id1 in(stroke(0xff,0x46),strokeWeight(0.002*_0x55bf41),BALLS[_0x35bfdd(0x163)]))for(id2 in BALLS['colors']){let _0x51d0a1=BALLS[_0x35bfdd(0x167)][BALLS[_0x35bfdd(0x15f)]][id1],_0x313b3d=BALLS[_0x35bfdd(0x167)][BALLS[_0x35bfdd(0x15f)]][id2],_0x3bf554=0.5*_0x55bf41+0.45*(Math['cos'](_0x51d0a1)*_0x55bf41),_0xa33c92=0.5*_0x55bf41-0.45*(Math['sin'](_0x51d0a1)*_0x55bf41),_0x22d6c0=0.5*_0x55bf41+0.45*(Math[_0x35bfdd(0x164)](_0x313b3d)*_0x55bf41),_0x1bc366=0.5*_0x55bf41-0.45*(Math[_0x35bfdd(0x166)](_0x313b3d)*_0x55bf41);line(_0x3bf554,_0xa33c92,_0x22d6c0,_0x1bc366);}for(id in(noStroke(),BALLS[_0x35bfdd(0x163)])){fill(BALLS['colors'][id]);let _0x576241=BALLS['frames'][BALLS['current']][id],_0x259be3=0.5*_0x55bf41+0.45*(Math['cos'](_0x576241)*_0x55bf41),_0x45ac4f=0.5*_0x55bf41-0.45*(Math[_0x35bfdd(0x166)](_0x576241)*_0x55bf41);circle(_0x259be3,_0x45ac4f,0.07*_0x55bf41);}BALLS[_0x35bfdd(0x15f)]++,BALLS[_0x35bfdd(0x15f)]===BALLS[_0x35bfdd(0x168)]&&(BALLS['current']=null);}pop();}function windowResized(){const _0x558422=_0x373a;document[_0x558422(0x16a)]('anim-frame'),resizeCanvas(canvasGetSize(),canvasGetSize());}