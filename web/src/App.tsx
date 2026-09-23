import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import {
  PHOTOS, SHOPS, SLIPS, STEPS, WHO, firstRule, whoText,
  type ShopId, type SlipId, type WhoId,
} from "./data";

const DEMO_OTP = "1234";
const APP_URL = "app.html";

export function App() {
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [shop, setShop] = useState<ShopId | null>(null);
  const [shopName, setShopName] = useState("");
  const [slip, setSlip] = useState<SlipId | null>(null);
  const [who, setWho] = useState<WhoId>("me");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step, otpSent]);

  const scene = STEPS[step].scene;

  return (
    <div className="page">
      <aside className="scenery" aria-hidden="true">
        <img className={scene === "chai" ? "on" : ""} src={PHOTOS.chai} alt="" />
        <img className={scene === "auto" ? "on" : ""} src={PHOTOS.auto} alt="" />
        <div className="scenery-shade" />
        <p className="scenery-caption" key={step}>{STEPS[step].caption}</p>
      </aside>

      <main className="panel">
        <header className="top">
          <a className="brand" href="index.html">bol ke <i>build</i></a>
          <a className="skip" href={APP_URL}>Skip for now</a>
        </header>

        <ol className="progress" aria-label="Setup progress">
          {STEPS.map((s, i) => (
            <li key={s.label} className={i === step ? "now" : i < step ? "done" : ""}>
              <span>{s.label}</span>
            </li>
          ))}
        </ol>

        <section className="stage" key={`${step}-${otpSent}`}>
          {step === 0 && !otpSent && (
            <PhoneStep phone={phone} setPhone={setPhone} onNext={() => setOtpSent(true)} />
          )}
          {step === 0 && otpSent && (
            <OtpStep phone={phone} onBack={() => setOtpSent(false)} onNext={() => setStep(1)} />
          )}
          {step === 1 && (
            <ShopStep
              shop={shop} setShop={setShop}
              shopName={shopName} setShopName={setShopName}
              onBack={() => setStep(0)} onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <SlipStep
              slip={slip} setSlip={setSlip} who={who} setWho={setWho}
              onBack={() => setStep(1)} onNext={() => setStep(3)}
            />
          )}
          {step === 3 && shop && slip && (
            <RuleStep
              shop={shop} shopName={shopName} slip={slip} who={who}
              onBack={() => setStep(2)}
            />
          )}
        </section>

        <footer className="credit">
          Art: "Street Scene in India" by Edwin Lord Weeks, CC0 ·
          "Calcutta Nostalgia" by Avanish Trivedi, CC BY-SA 4.0 · Wikimedia Commons
        </footer>
      </main>
    </div>
  );
}

function onEnter(fn: () => void) {
  return (e: KeyboardEvent) => {
    if (e.key === "Enter") fn();
  };
}

function PhoneStep(p: { phone: string; setPhone: (v: string) => void; onNext: () => void }) {
  const [error, setError] = useState("");
  const digits = p.phone.replace(/\D/g, "");
  const valid = /^[6-9]\d{9}$/.test(digits);
  const submit = () => {
    if (valid) p.onNext();
    else setError("Enter a 10-digit mobile number, starting with 6, 7, 8 or 9.");
  };
  return (
    <>
      <p className="eyebrow">Step 1 of 4 · Apna number</p>
      <h1>Start with the number your shop already uses.</h1>
      <p className="lede">No email, no password. Just like UPI. We send a one-time code to check it's you.</p>
      <label className="field">
        <span className="field-label">Mobile number</span>
        <span className={`phone ${error ? "bad" : ""}`}>
          <b>+91</b>
          <input
            autoFocus inputMode="numeric" autoComplete="tel-national" maxLength={11}
            placeholder="98765 43210" value={p.phone}
            onChange={(e) => { p.setPhone(e.target.value.replace(/[^\d ]/g, "")); setError(""); }}
            onKeyDown={onEnter(submit)}
          />
        </span>
      </label>
      {error && <p className="error" role="alert">{error}</p>}
      <div className="actions">
        <button className="primary" onClick={submit}>Send OTP</button>
      </div>
      <p className="note">Demo: no SMS is sent. The code is always 1234.</p>
    </>
  );
}

function OtpStep(p: { phone: string; onBack: () => void; onNext: () => void }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = p.phone.replace(/\D/g, "");

  const verify = (value = code.join("")) => {
    if (value.length < 4) return setError("Enter all 4 digits.");
    if (value !== DEMO_OTP) {
      setError("That code doesn't match. For this demo, use 1234.");
      setCode(["", "", "", ""]);
      refs.current[0]?.focus();
      return;
    }
    p.onNext();
  };

  const type = (i: number, raw: string) => {
    const v = raw.replace(/\D/g, "");
    const next = [...code];
    if (v.length > 1) {
      v.slice(0, 4).split("").forEach((d, j) => { if (i + j < 4) next[i + j] = d; });
    } else {
      next[i] = v;
    }
    setCode(next);
    setError("");
    const filled = next.findIndex((d) => d === "");
    if (filled === -1) verify(next.join(""));
    else if (v) refs.current[Math.min(filled, 3)]?.focus();
  };

  return (
    <>
      <p className="eyebrow">Step 1 of 4 · OTP</p>
      <h1>Enter the 4-digit code.</h1>
      <p className="lede">
        Sent to +91 {digits.slice(0, 5)} {digits.slice(5)}.{" "}
        <button className="link" onClick={p.onBack}>Change number</button>
      </p>
      <div className={`otp ${error ? "bad" : ""}`}>
        {code.map((d, i) => (
          <input
            key={i} ref={(el) => { refs.current[i] = el; }}
            autoFocus={i === 0} inputMode="numeric" autoComplete={i === 0 ? "one-time-code" : "off"}
            aria-label={`Digit ${i + 1}`} value={d}
            onChange={(e) => type(i, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !d && i > 0) refs.current[i - 1]?.focus();
              if (e.key === "Enter") verify();
            }}
          />
        ))}
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      <div className="actions">
        <button className="primary" onClick={() => verify()}>Verify</button>
      </div>
      <p className="note">Demo code: <b>1234</b>. No SMS was sent.</p>
    </>
  );
}

function ShopStep(p: {
  shop: ShopId | null; setShop: (v: ShopId) => void;
  shopName: string; setShopName: (v: string) => void;
  onBack: () => void; onNext: () => void;
}) {
  const ready = p.shop !== null && p.shopName.trim().length > 1;
  return (
    <>
      <p className="eyebrow">Step 2 of 4 · Aapki dukaan</p>
      <h1>Which counter do you stand behind?</h1>
      <p className="lede">Pick the closest one. We only use it to suggest a first rule.</p>
      <div className="tiles" role="radiogroup" aria-label="Shop type">
        {SHOPS.map((s) => (
          <button
            key={s.id} role="radio" aria-checked={p.shop === s.id}
            className={`tile ${p.shop === s.id ? "picked" : ""}`}
            onClick={() => p.setShop(s.id)}
          >
            <span className="tile-hi">{s.hi}</span>
            <span className="tile-en">{s.en}</span>
            <span className="tile-hint">{s.hint}</span>
          </button>
        ))}
      </div>
      <label className="field">
        <span className="field-label">Name on your signboard</span>
        <input
          className="text" placeholder="e.g. Sharma General Store" value={p.shopName}
          onChange={(e) => p.setShopName(e.target.value)}
          onKeyDown={onEnter(() => ready && p.onNext())}
        />
      </label>
      <p className="note">GST details can wait. Add them later if you ever need them.</p>
      <div className="actions">
        <button className="ghost" onClick={p.onBack}>Back</button>
        <button className="primary" disabled={!ready} onClick={p.onNext}>Continue</button>
      </div>
    </>
  );
}

function SlipStep(p: {
  slip: SlipId | null; setSlip: (v: SlipId) => void;
  who: WhoId; setWho: (v: WhoId) => void;
  onBack: () => void; onNext: () => void;
}) {
  return (
    <>
      <p className="eyebrow">Step 3 of 4 · Roz ka kaam</p>
      <h1>Where does kaam usually slip?</h1>
      <p className="lede">Pick the one that sounds most like your shop.</p>
      <div className="slips" role="radiogroup" aria-label="What slips">
        {SLIPS.map((s) => (
          <button
            key={s.id} role="radio" aria-checked={p.slip === s.id}
            className={`slip ${p.slip === s.id ? "picked" : ""}`}
            onClick={() => p.setSlip(s.id)}
          >
            <span className="slip-label">{s.label}</span>
            <span className="slip-quote">"{s.quote}"</span>
            <span className="slip-fix">{s.fix}</span>
          </button>
        ))}
      </div>
      <div className="field">
        <span className="field-label">Who should BolKeBuild tell?</span>
        <div className="segmented" role="radiogroup" aria-label="Who to tell">
          {WHO.map((w) => (
            <button
              key={w.id} role="radio" aria-checked={p.who === w.id}
              className={p.who === w.id ? "on" : ""} onClick={() => p.setWho(w.id)}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>
      <p className="note">Suppliers and customers are never contacted unless a rule names them and you approve it.</p>
      <div className="actions">
        <button className="ghost" onClick={p.onBack}>Back</button>
        <button className="primary" disabled={!p.slip} onClick={p.onNext}>Make my first rule</button>
      </div>
    </>
  );
}

function RuleStep(p: { shop: ShopId; shopName: string; slip: SlipId; who: WhoId; onBack: () => void }) {
  const rule = firstRule(p.shop, p.slip, p.who);
  return (
    <>
      <p className="eyebrow">Step 4 of 4 · Pehla faayda</p>
      <h1>Your first rule is ready.</h1>
      <p className="lede">
        Made for <b>{p.shopName.trim()}</b>. Next you'll say it in your own words, check it, and switch it on.
      </p>
      <article className="parchi">
        <header>
          <span>First rule parchi</span>
          <span className="stamp">Draft · not running</span>
        </header>
        <blockquote>"{rule.text}"</blockquote>
        <dl>
          <div><dt>Checks</dt><dd>{rule.checks}</dd></div>
          <div><dt>Tells</dt><dd>{whoText[p.who]}</dd></div>
          <div><dt>Before acting</dt><dd>Asks you first</dd></div>
        </dl>
        <footer>Nothing runs until you approve it.</footer>
      </article>
      <div className="actions final">
        <a className="primary" href={APP_URL}>Speak it, review it, turn it on</a>
        <button className="ghost" onClick={p.onBack}>Pick a different problem</button>
      </div>
    </>
  );
}
