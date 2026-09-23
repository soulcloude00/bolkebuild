*{box-sizing:border-box}
html,body{margin:0;min-height:100%;background:#f2e8d7;color:#211b18;font-family:Arial,sans-serif}
button,textarea{font:inherit}
.topbar{height:84px;background:#ee5c37;padding:18px 34px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;border-bottom:3px solid #211b18}
.brand{font:25px Georgia,serif;color:#211b18;text-decoration:none}
.brand small{display:block;font:8px Arial;letter-spacing:.18em;margin-top:4px}
.demo-mark{font-size:10px;letter-spacing:.14em}
.demo-mark b{display:inline-block;width:8px;height:8px;background:#282147;margin-right:7px}
.back{justify-self:end;color:#211b18;font-size:11px;text-transform:uppercase;letter-spacing:.12em}
.workbench{min-height:calc(100vh - 84px);display:grid;grid-template-columns:260px 1fr}
.steps{background:#282147;color:#f8f0e3;padding:34px 24px;display:flex;flex-direction:column}
.steps>p{font-size:9px;letter-spacing:.14em;color:#e7b85f;margin:0 0 30px}
.step{border:0;border-top:1px solid #ffffff28;background:none;color:#bbb2c7;text-align:left;padding:18px 0;display:grid;grid-template-columns:34px 1fr;cursor:pointer}
.step:last-of-type{border-bottom:1px solid #ffffff28}
.step b{font:11px Arial;color:#e7b85f}
.step span{font:24px Georgia}
.step small{display:block;font:10px Arial;margin-top:5px;letter-spacing:.08em}
.step.active{color:#fff}
.step.active span:after{content:"";display:block;width:52px;height:4px;background:#ee5c37;margin-top:9px}
.honesty{margin-top:auto;background:#211a3a;padding:15px;font-size:8px;letter-spacing:.15em;color:#e7b85f}
.honesty span{display:block;color:#d6cedf;line-height:1.45;letter-spacing:0;margin-top:8px}
.stage{position:relative;overflow:hidden}
.panel{display:none;min-height:calc(100vh - 84px);padding:28px clamp(30px,4vw,70px) 36px;background:#f2e8d7}
.panel.active{display:block}
.stage-head{display:flex;justify-content:space-between;font-size:9px;letter-spacing:.15em;border-bottom:1px solid #211b18;padding-bottom:12px}
.stage-head em{font-style:normal;color:#796d62}
.listen-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:6vw;align-items:center;min-height:calc(100vh - 175px)}
.eyebrow{font-size:10px;font-weight:bold;letter-spacing:.14em;text-transform:uppercase;color:#ee5c37}
.prompt h1,.review-title h2,.why h2,.run-column h2{font:400 clamp(54px,6vw,96px)/.92 Georgia,serif;letter-spacing:-.055em;margin:14px 0 20px}
.prompt>p:last-of-type,.why>p{max-width:480px;line-height:1.55;color:#6c6058}
.languages{display:flex;flex-wrap:wrap;gap:8px;margin-top:25px}
.lang,.samples button{border:1px solid #282147;background:transparent;padding:8px 11px;cursor:pointer}
.lang.active{background:#282147;color:#fff}
.paper{background:#fffaf0;box-shadow:12px 14px 0 #282147;padding:28px;position:relative;transform:rotate(1deg)}
.tape{position:absolute;top:-10px;left:43%;width:78px;height:20px;background:#e7b85f;opacity:.88;transform:rotate(-2deg)}
.recorder label{font-size:9px;color:#ee5c37;letter-spacing:.16em;font-weight:bold}
.recorder textarea{width:100%;min-height:100px;border:0;border-bottom:1px solid #b6aa9d;background:transparent;resize:none;padding:16px 0;font:28px/1.25 Georgia,serif;color:#211b18;outline:none}
.mic{display:grid;grid-template-columns:44px 1fr;grid-template-rows:1fr 1fr;width:100%;border:0;background:#282147;color:#fff;text-align:left;padding:14px;margin:18px 0 6px;cursor:pointer}
.mic span{grid-row:1/3;display:grid;place-items:center;background:#ee5c37;width:36px;height:36px;border-radius:50%;color:#fff}
.mic b{font-size:12px}
.mic small{font-size:9px;color:#cfc6d9}
.mic.listening{background:#ee5c37}
.mic.listening span{background:#fff;color:#ee5c37}
.recorder>p{font-size:9px;color:#796d62;text-align:center}
.primary,.secondary{border:0;padding:14px 18px;text-transform:uppercase;letter-spacing:.1em;font-size:10px;cursor:pointer}
.primary{background:#ee5c37;color:#fff;box-shadow:5px 6px 0 #282147}
.secondary{background:transparent;border:1px solid #282147;color:#282147}
.recorder>.primary{width:100%;margin-top:10px}
.samples{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-top:19px}
.samples span{font-size:8px;letter-spacing:.12em;margin-right:5px}
.samples button{font-size:9px;padding:6px}
.review-title{display:grid;grid-template-columns:.55fr 1.2fr;column-gap:5vw;align-items:end;margin-top:26px}
.review-title .eyebrow{grid-column:1}
.review-title blockquote{grid-column:1;margin:8px 0 0;font:25px/1.3 Georgia;background:#f7b43c;padding:18px;box-shadow:8px 8px 0 #282147;transform:rotate(-2deg)}
.review-title h2{grid-column:2;grid-row:1/3;font-size:clamp(42px,5vw,76px)}
.rule-sheet{display:grid;grid-template-columns:repeat(4,1fr);gap:0;padding:24px;margin-top:24px;transform:rotate(-.4deg)}
.rule-row{padding:10px 20px;border-right:1px solid #cfc2b4;min-height:74px}
.rule-row:last-child{border:0}
.rule-row small{display:block;font-size:8px;letter-spacing:.15em;color:#ee5c37;margin-bottom:9px}
.rule-row strong{font:18px/1.25 Georgia}
.rule-row.warn{background:#fff0c7}
.flow-strip{display:flex;align-items:center;justify-content:space-between;margin-top:34px}
.flow-strip article{background:#282147;color:#fff;padding:14px;min-width:18%;display:flex;gap:10px;align-items:center;box-shadow:5px 6px 0 #e7b85f}
.flow-strip article.locked{background:#ee5c37}
.flow-strip article b{font-size:10px;color:#e7b85f}
.flow-strip article span{font:16px Georgia}
.flow-strip small{display:block;font:8px Arial;margin-top:5px;color:#d3ccdb}
.flow-strip i{font-style:normal;font-size:25px}
.actions{display:flex;justify-content:flex-end;gap:14px;margin-top:32px}
.permission-layout{display:grid;grid-template-columns:.85fr 1.15fr;gap:6vw;align-items:center;min-height:calc(100vh - 175px)}
.why h2{font-size:clamp(54px,6vw,88px)}
.scope-note{background:#282147;color:#e7b85f;padding:18px;font-size:8px;letter-spacing:.15em;margin-top:26px}
.scope-note strong{display:block;color:#fff;font:16px/1.3 Georgia;margin-top:8px;letter-spacing:0}
.permit{transform:rotate(1deg)}
.permit header{display:flex;justify-content:space-between;padding-bottom:15px;border-bottom:1px solid}
.permit header span{font:28px Georgia}
.permit header b{background:#f7b43c;padding:7px 10px;font-size:9px;letter-spacing:.12em}
.permit label{display:grid;grid-template-columns:30px 1fr auto;align-items:center;padding:18px 0;border-bottom:1px solid #d9cec1}
.permit input{width:18px;height:18px;accent-color:#282147}
.permit label strong{display:block;font:18px Georgia}
.permit label small{font-size:9px;color:#74695f}
.permit label em{font-style:normal;font-size:8px;letter-spacing:.12em;color:#61785f}
.permit label.denied{opacity:.6;text-decoration:line-through}
.permit label.denied em{color:#c62828}
.permit-actions{display:flex;justify-content:flex-end;gap:12px;margin-top:22px}
#deniedNote{font-size:10px;color:#c62828;text-align:right}
.run-layout{display:grid;grid-template-columns:1fr 1fr;gap:6vw;align-items:center;min-height:calc(100vh - 235px)}
.run-column h2{font-size:clamp(50px,5.5vw,84px)}
.run-log{list-style:none;padding:0;margin:24px 0}
.run-log li{display:grid;grid-template-columns:40px 1fr;padding:10px 0;border-bottom:1px solid #c6b9aa}
.run-log li>b{background:#d7ead9;color:#25612d;width:27px;height:27px;display:grid;place-items:center}
.run-log span{font:18px Georgia}
.run-log small{display:block;font:9px Arial;color:#75695e;margin-top:3px}
.phone-paper{background:#282147;color:#fff;padding:24px;box-shadow:14px 16px 0 #ee5c37;transform:rotate(1deg)}
.phone-top{font-size:8px;letter-spacing:.15em;border-bottom:1px solid #ffffff33;padding-bottom:14px}
.phone-top b{float:right;color:#f7b43c}
.bubble{background:#d8eadc;color:#211b18;padding:18px;margin:28px 0 20px 15%;border-radius:16px 16px 3px 16px;font-family:Georgia}
.bubble small{font:9px Arial;color:#537058}
.bubble p{line-height:1.5}
.bubble time{display:block;text-align:right;font:9px Arial;color:#537058}
.receipt{background:#fffaf0;color:#211b18;padding:15px;border-left:6px solid #ee5c37}
.receipt span{display:block;font-size:8px;letter-spacing:.14em;color:#ee5c37}
.receipt b{display:block;font:17px Georgia;margin:6px 0}
.receipt small{font-size:8px}
.shake{animation:shake .25s 2}
@keyframes shake{50%{transform:translateX(6px)}
}
@media(max-width:900px){.workbench{grid-template-columns:1fr}
.steps{display:none}
.topbar{grid-template-columns:1fr 1fr}
.demo-mark{display:none}
.panel{min-height:calc(100vh - 84px)}
.listen-grid,.permission-layout,.run-layout{grid-template-columns:1fr;padding-top:30px}
.rule-sheet{grid-template-columns:1fr 1fr}
.flow-strip{overflow:auto;gap:12px}
.flow-strip article{min-width:180px}
.review-title{display:block}
.review-title h2{font-size:50px}
.paper{margin-bottom:28px}
}
