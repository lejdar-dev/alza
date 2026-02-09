export type Product = {
  id: number;

  name: string;
  imageUrl: string;
  spec: string;

  price: {
    vat: string;
    novat: string;
  };

  availability: string;

  rating: number;
};

export type Category = {
  id: string;
  label: string;
};

// {
// "err": 0,
// "msg": null,
// "vzt": 0,
// "user_name": "",
// "basket_cnt": 0,
// "basket_total_cnt": 0,
// "user_id": -1,
// "favCnt": 0,
// "alzaCredit": null,
// "countryID": 0,
// "countryPhonePrefix": "420",
// "serverTime": 1489684095,
// "data_cnt": 25,
// "data": [
// {
// "id": 4051892,
// "code": "ESO2557n4",
// "img": "https://i.alza.cz/Foto/f8/ES/ESO2557n4.jpg",
// "name": "Philips Hue White 8.5W E27 starter kit",
// "spec": "LED žárovka 2x LED 8.5W, A60, patice E27, 25000 hodin, 2700K, stmívatelná,
// ovládání pomocí chytrých zařízení, + Hue Bridge",
// "price": "2&nbsp;199 Kč",
// "cprice": null,
// "priceWithoutVat": "1&nbsp;817 Kč",
// "avail": "Skladem &gt; 5&nbsp;ks",
// "avail_postfix": "a na &lt;span class=\"link\"&gt;11 prodejnách&lt;/span&gt;",
// "availLegend": null,
// "avail_postfix2": null,
// "avail_color": "398000",
// "is_action": false,
// "action_name": null,
// "rating": 4.644,
// "promo_cnt": 0,
// "promos": null,
// "order": 1,
// "is_special_service": false,
// "type": 0,
// "itemType": "Commodity",
// "url": "https://www.alza.cz/philips-hue-9-5w-a60-e27-set-
// d4051892.htm?catid=18855843",
// "minimumAmount": 1,
// "amountInPack": 0,
// "start_time": null,
// "end_time": null,
// "variant_type": 0,
// "advertising": "Tento týden zakoupilo 16 zákazníků",
// "categoryName": null,
// "inBasket": 0
// ]
// }
