const _0x1e8d=['length','cos','colors','massCenter','253182jMhyFm','244509aqHEIo','5794ziRqed','8705aMRvsa','getElementById','framesCount','725300NwpNTY','3ybqmqz','anim-frame','frames','54OdaDTb','sin','1505QHnzdt','push','18PsSrwo','current','color','617LYRYuW','1109125HClruK','reduce','objects'];(function(_0x592f4d,_0x5ea2f6){const _0x3da8b1=_0x1742;while(!![]){try{const _0x49ce13=-parseInt(_0x3da8b1(0x1d9))*parseInt(_0x3da8b1(0x1cb))+-parseInt(_0x3da8b1(0x1c3))+-parseInt(_0x3da8b1(0x1d8))*-parseInt(_0x3da8b1(0x1c7))+parseInt(_0x3da8b1(0x1cf))+parseInt(_0x3da8b1(0x1d7))+parseInt(_0x3da8b1(0x1d6))*parseInt(_0x3da8b1(0x1c4))+parseInt(_0x3da8b1(0x1ce))*-parseInt(_0x3da8b1(0x1c9));if(_0x49ce13===_0x5ea2f6)break;else _0x592f4d['push'](_0x592f4d['shift']());}catch(_0x58938c){_0x592f4d['push'](_0x592f4d['shift']());}}}(_0x1e8d,0x96439));function _0x1742(_0x2a1f62,_0x438337){_0x2a1f62=_0x2a1f62-0x1c2;let _0x1e8dc6=_0x1e8d[_0x2a1f62];return _0x1e8dc6;}let BALLS={'current':null,'frames':[],'colors':{},'massCenter':[]};function canvasGetSize(){let _0x4b6f97,_0xb054c5=windowHeight-0xa0;return _0x4b6f97=0x30c<windowWidth?windowWidth-0x190:windowWidth-0x154,Math['min'](_0x4b6f97,_0xb054c5);}function setup(){const _0x166599=_0x1742;let _0x264fbb=document[_0x166599(0x1da)](_0x166599(0x1c5)),_0x58bdd2=createCanvas(canvasGetSize(),canvasGetSize());_0x58bdd2['parent'](_0x166599(0x1c5));}function onData(_0x9081e3){const _0x28add0=_0x1742;BALLS={'current':null,'frames':[],'colors':{},'massCenter':[]};let _0x16b30c=_0x9081e3[_0x28add0(0x1c6)];for(let _0x33970f,_0x7ecde1=0x0;_0x7ecde1<_0x16b30c;_0x7ecde1++){for(id in(_0x33970f={},_0x9081e3['objects']))_0x33970f[id]=_0x9081e3[_0x28add0(0x1d1)][id][_0x7ecde1],_0x7ecde1||(BALLS[_0x28add0(0x1d4)][id]=vm['objectList']['filter'](_0x333ee4=>_0x333ee4['id']===id)[0x0][_0x28add0(0x1cd)]);BALLS[_0x28add0(0x1c6)][_0x28add0(0x1ca)](_0x33970f);}BALLS[_0x28add0(0x1c2)]=_0x16b30c,BALLS[_0x28add0(0x1cc)]=0x0;}function draw(){const _0x4d582e=_0x1742;push();let _0x256535=width;if(noStroke(),fill(0x22),rect(0x0,0x0,_0x256535,_0x256535,0.04*_0x256535),fill(0x16),circle(0.5*_0x256535,0.5*_0x256535,0.9*_0x256535),fill(0x22),circle(0.5*_0x256535,0.5*_0x256535,0.7*_0x256535),fill(0x37),rectMode('center'),rect(0.9*_0x256535,0.5*_0x256535,0.08*_0x256535,0.02*_0x256535,0.02*_0x256535),rect(0.1*_0x256535,0.5*_0x256535,0.08*_0x256535,0.02*_0x256535,0.02*_0x256535),null!==BALLS['current']){let _0x58f857=[],_0x27a474=[];for(id in BALLS[_0x4d582e(0x1d4)]){fill(BALLS['colors'][id]);let _0x31ce1e=BALLS[_0x4d582e(0x1c6)][BALLS[_0x4d582e(0x1cc)]][id],_0x4f9c40=0.5*_0x256535+0.4*(Math[_0x4d582e(0x1d3)](_0x31ce1e)*_0x256535),_0xb2f143=0.5*_0x256535-0.4*(Math[_0x4d582e(0x1c8)](_0x31ce1e)*_0x256535);_0x58f857['push'](_0x4f9c40),_0x27a474[_0x4d582e(0x1ca)](_0xb2f143),circle(_0x4f9c40,_0xb2f143,0.07*_0x256535);}if(massCenterX=_0x58f857['reduce']((_0x59e44a,_0x1f9260)=>_0x59e44a+_0x1f9260)/_0x58f857[_0x4d582e(0x1d2)],massCenterY=_0x27a474[_0x4d582e(0x1d0)]((_0x223d53,_0xff687)=>_0x223d53+_0xff687)/_0x27a474[_0x4d582e(0x1d2)],0x1<BALLS[_0x4d582e(0x1cc)]){noFill(),strokeWeight(0.01*_0x256535);for(let _0x75e81d,_0x1878ae=0x0;0x100>_0x1878ae;_0x1878ae++)_0x75e81d=_0x1878ae-0x100-0x1+BALLS[_0x4d582e(0x1cc)],0x0<_0x75e81d&&(stroke(0xff,_0x1878ae/0x1/2.55),line(...BALLS[_0x4d582e(0x1d5)][_0x75e81d-0x1],...BALLS[_0x4d582e(0x1d5)][_0x75e81d]));noStroke();}fill(0xff,0xc8),circle(massCenterX,massCenterY,0.04*_0x256535),BALLS[_0x4d582e(0x1d5)][_0x4d582e(0x1ca)]([massCenterX,massCenterY]),BALLS['current']++,BALLS['current']===BALLS[_0x4d582e(0x1c2)]&&(BALLS[_0x4d582e(0x1cc)]=null);}pop();}function windowResized(){const _0x53cda4=_0x1742;document[_0x53cda4(0x1da)]('anim-frame'),resizeCanvas(canvasGetSize(),canvasGetSize());}