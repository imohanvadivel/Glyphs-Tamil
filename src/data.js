const numbers = [
  ["0BE6", "Zero"],
  ["0BE7", "One"],
  ["0BE8", "Two"],
  ["0BE9", "Three"],
  ["0BEa", "Four"],
  ["0BEb", "Five"],
  ["0BEc", "Six"],
  ["0BEd", "Seven"],
  ["0BEe", "Eight"],
  ["0BEf", "Nine"],
  ["0BF0", "Ten"],
  ["0Bf1", "One Hundred"],
  ["0Bf2", "One Thousand"],
];

const fractions = [
  ["11fc0", "munthiri (1/320)"],
  ["11fc1", "araikkaani (1/160)"],
  ["11fc2", "kaani (1/80)"],
  ["11fc3", "kaal viisam (1/64)"],
  ["11fc4", "arai maa (1/40)"],
  ["11fc5", "arai viisam (1/32)"],
  ["11fc6", "mukkaani (3/8)"],
  ["11fc7", "mukkaal viisam (3/64)"],
  ["11fc8", "maa (1/20)"],
  ["11fc9", "maakaani (1/16)"],
  ["11fca", "maakaani[alt] (1/16)"],
  ["11fcb", "irumaa (1/10)"],
  ["11fcc", "araikkaal (1/8)"],
  ["11fcd", "mummaa (3/20)"],
  ["11fce", "mummaamukkaani (3/16)"],
  ["11fcf", "naangu maa (1/5)"],
  ["11fd0", "kaal (1/4)"],
  ["11fd1", "arai (1/2)"],
  ["11fd2", "arai[alt] (1/2)"],
  ["11fd3", "mukkaal (3/4)"],
  ["11fd4", "kiizh"],
];

const grain = [
  ["11fd5", "Nel (1 grain of paddy)"],
  ["11fd6", "Cevitu (360 Nel)"],
  ["11fd7", "Aazhakku (5 Cevitu)"],
  ["11fd8", "Uzhakku (2 Aazhakku)"],
  ["11fd9", "Muuvuzhakku (3 Uzhakku)"],
  ["11fda", "Kuruni (8 Naazhi/padi)"],
  ["11fdb", "Pathakku (2 kuruni/marakkaal)"],
  ["11fdc", "Mukkuruni (3 kuruni/marakkal)"],
];

const currency = [
  ["11fdd", "kaacu"],
  ["11fde", "Panam"],
  ["11fdf", "Pon (Gold Coin)"],
  ["11fe0", "Varaakan"],
  ["0bf9", "Rupai (Rupee)"],
];

const weight = [
  ["11fe1", "Paaram (227kg)"],
  ["11fe2", "Kuzhi (11 feet)"],
  ["11fe3", "Veli (2000 Kuzhi)"],
];

const agriculture = [
  ["11fe4", "Nansey (Wet Cultivation)"],
  ["11fe5", "Punsey (Dry Cultivation)"],
  ["11fe6", "Nilam"],
  ["11fe7", "Uppalam (salt pan)"],
];
const clerical = [
  ["0bfa", "Niluvai (balance)"],

  ["0bf6", "Patru (Debit)"],
  ["0bf7", "Eduppu (Credit)"],
  ["0bf8", "Merpadi (As Above)"],

  ["11fe8", "Varavu (credit)"],
  ["11fe9", "Enn (Number)"],
  ["11fea", "Naalathu (Current)"],
  ["11feb", "Sillarai"],
  ["11fec", "Pooga (Spent)"],
  ["11fed", "Aaga (Total)"],
];

const calendar = [
  ["0bf3", "Naal (Day)"],
  ["0bf4", "Maatham (Month)"],
  ["0bf5", "Varudam (Year)"],
];

const symbols = [
  ["11fee", "Vasam (Possession)"],
  ["11fef", "Muthal (Starting from)"],
  ["11ff0", "Muthaliya (et cetera"],
  ["11ff1", "Vakaiyaraa (et cetera)"],

  ["0BD0", "OM"],
  ["0B83", "aytham"],
  ["11fff", "End of Text"],
];

const data = [
  {
    name: "Numbers",
    id: "number",
    data: numbers,
  },
  {
    name: "Fractions",
    id: "fraction",
    data: fractions,
  },
  {
    name: "Measure of Grain",
    id: "grain",
    data: grain,
  },
  {
    name: "Currency Symbols",
    id: "currency",
    data: currency,
  },
  {
    name: "Clerical Symbols",
    id: "clerical",
    data: clerical,
  },
  {
    name: "Weight, Length & Area",
    id: "weight",
    data: weight,
  },
  {
    name: "Agriculture Symbols",
    id: "agri",
    data: agriculture,
  },
  {
    name: "Calendrical Symbols",
    id: "calendar",
    data: calendar,
  },
  {
    name: "Other Symbols & Signs",
    id: "symbols",
    data: symbols,
  },
];

export default data;
