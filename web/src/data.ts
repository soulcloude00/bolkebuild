export type ShopId = "kirana" | "medical" | "garments" | "hardware" | "chai" | "other";
export type SlipId = "stock" | "udhaar" | "supplier" | "closing";
export type WhoId = "me" | "manager" | "both";

export const SHOPS: { id: ShopId; hi: string; en: string; hint: string }[] = [
  { id: "kirana", hi: "किराना", en: "Kirana / general store", hint: "stock, udhaar, suppliers" },
  { id: "medical", hi: "दवाई", en: "Medical shop", hint: "expiry, refills, shifts" },
  { id: "garments", hi: "कपड़ा", en: "Garments", hint: "sizes, colours, orders" },
  { id: "hardware", hi: "औज़ार", en: "Hardware", hint: "stock, quotes, delivery" },
  { id: "chai", hi: "चाय", en: "Chai / food counter", hint: "milk, prep, daily cash" },
  { id: "other", hi: "अपना", en: "Something else", hint: "we learn from your rule" },
];

export const SLIPS: { id: SlipId; label: string; quote: string; fix: string }[] = [
  { id: "stock", label: "Stock", quote: "Last piece bikne ke baad pata chalta hai.", fix: "Know before shelves go empty" },
  { id: "udhaar", label: "Udhaar / khata", quote: "Sunday ko yaad aata hai kisne dena hai.", fix: "Remember credit follow-ups" },
  { id: "supplier", label: "Suppliers", quote: "Rate badla toh mujhe late pata chalta hai.", fix: "See rate changes early" },
  { id: "closing", label: "Shop closing", quote: "Roz ka hisaab WhatsApp mein kho jaata hai.", fix: "Close the day cleanly" },
];

export const WHO: { id: WhoId; label: string }[] = [
  { id: "me", label: "Only me" },
  { id: "manager", label: "My manager" },
  { id: "both", label: "Both of us" },
];

const toWhom: Record<WhoId, string> = {
  me: "mujhe",
  manager: "manager ko",
  both: "mujhe aur manager ko",
};

export const whoText: Record<WhoId, string> = {
  me: "Only you",
  manager: "Your manager",
  both: "You and your manager",
};

export function firstRule(shop: ShopId, slip: SlipId, who: WhoId) {
  const w = toWhom[who];
  if (slip === "stock" && shop === "medical")
    return { text: `Koi dawai expiry se 30 din door ho, ${w} bata dena.`, checks: "Demo medicine list" };
  if (slip === "stock" && shop === "chai")
    return { text: `Doodh ya chai-patti kam ho, ${w} subah bata dena.`, checks: "Demo stock sheet" };
  switch (slip) {
    case "stock":
      return { text: `Stock paanch se kam ho, ${w} bata dena.`, checks: "Demo inventory" };
    case "udhaar":
      return { text: `Har Sunday, jinka udhaar baaki hai, unki list ${w} bhej dena.`, checks: "Demo khata" };
    case "supplier":
      return { text: `Kisi supplier ka rate badle, toh ${w} pehle bata dena.`, checks: "Demo purchase list" };
    case "closing":
      return { text: `Dukaan band hone par aaj ka hisaab ${w} bhej dena.`, checks: "Demo daily sales" };
  }
}

export const PHOTOS = {
  chai: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Street_Food_-_Chai_Walla%2C_Calcutta_-_Nov_2010.jpg/1280px-Street_Food_-_Chai_Walla%2C_Calcutta_-_Nov_2010.jpg",
  auto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Tuk_Tuk_on_streets_of_Delhi%2C_India_%2826661971496%29.jpg/1280px-Tuk_Tuk_on_streets_of_Delhi%2C_India_%2826661971496%29.jpg",
};

export const STEPS = [
  { label: "Number", scene: "chai", caption: "Chai pehle. Kaam uske baad." },
  { label: "Dukaan", scene: "chai", caption: "Har counter ki apni aadat." },
  { label: "Kaam", scene: "auto", caption: "Bheed mein jo bhool jaata hai." },
  { label: "First rule", scene: "auto", caption: "Ek parchi. Pehla faayda." },
] as const;
