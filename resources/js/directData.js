export function getSheet(x, y) {
  return window.data_array[x][y];
}

export function getDifference(a, b, c, d){
  return window.data_array[c][d] - window.data_array[a][b];
}

export function numFormat(num){
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});
return dollarUS.format(num);
}

export function regNumFormat(num){
  let numbers = Intl.NumberFormat("en-US");
return numbers.format(num);
}

export function percentChange(num, num2){
  let x = num2 *(1.0) / num;
  return (x - 1)*100;
}

export function round(num){
  let x = num;
  return Math.round(x*100) / 100;
}

export const campaignData = [
];

for(let p = 7; p < window.data_array.length; p++){
  campaignData.push(
    {
      name: getSheet(p, 0),
      "Revenue": getSheet(p, 1),
      "Cost": getSheet(p, 2),
      "Profit": getSheet(p, 3)
    }
  )
  }

export const userRows = [
  {
    id: 1,
    username: "John Snow",
    avatar: "",
    email: "john@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 2,
    username: "John Snow",
    avatar: "",
    email: "john@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 3,
    username: "John Snow",
    avatar: "",
    email: "john@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 4,
    username: "John Snow",
    avatar: "",
    email: "john@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 5,
    username: "John Snow",
    avatar: "",
    email: "john@gmail.com",
    status: "active",
    transaction: "$120.00"
  },

];

export const campaigns = [
  {
    id: 1,
    name: "campaign 1",
    client: "Nike",
    date_begun: "2-15-2016"
  },
  {
    id: 2,
    name: "campaign 2",
    client: "Adidas",
    date_begun: "5-15-2026"
  },
  {
    id: 3,
    name: "campaign 3",
    client: "IDK",
    date_begun: "2-15-2006"
  },

];