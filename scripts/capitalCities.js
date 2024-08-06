const capitalCities = [
  {
    name: "Capital City: Kabul, Country: Afghanistan",
    latitude: 34.5289,
    longitude: 69.1725,
  },
  {
    name: "Capital City: TiranÃ« (Tirana), Country: Albania",
    latitude: 41.3275,
    longitude: 19.8189,
  },
  {
    name: "Capital City: El DjazaÃ¯r (Algiers), Country: Algeria",
    latitude: 36.7525,
    longitude: 3.042,
  },
  {
    name: "Capital City: Pago Pago, Country: American Samoa",
    latitude: -14.2781,
    longitude: -170.7025,
  },
  {
    name: "Capital City: Andorra la Vella, Country: Andorra",
    latitude: 42.5078,
    longitude: 1.5211,
  },
  {
    name: "Capital City: Luanda, Country: Angola",
    latitude: -8.8368,
    longitude: 13.2343,
  },
  {
    name: "Capital City: The Valley, Country: Anguilla",
    latitude: 18.217,
    longitude: -63.0578,
  },
  {
    name: "Capital City: St. John's, Country: Antigua and Barbuda",
    latitude: 17.1172,
    longitude: -61.8457,
  },
  {
    name: "Capital City: Buenos Aires, Country: Argentina",
    latitude: -34.6051,
    longitude: -58.4004,
  },
  {
    name: "Capital City: Yerevan, Country: Armenia",
    latitude: 40.182,
    longitude: 44.5146,
  },
  {
    name: "Capital City: Oranjestad, Country: Aruba",
    latitude: 12.524,
    longitude: -70.027,
  },
  {
    name: "Capital City: Canberra, Country: Australia",
    latitude: -35.2835,
    longitude: 149.1281,
  },
  {
    name: "Capital City: Wien (Vienna), Country: Austria",
    latitude: 48.2064,
    longitude: 16.3707,
  },
  {
    name: "Capital City: Baku, Country: Azerbaijan",
    latitude: 40.3777,
    longitude: 49.892,
  },
  {
    name: "Capital City: Nassau, Country: Bahamas",
    latitude: 25.0582,
    longitude: -77.3431,
  },
  {
    name: "Capital City: Al-Manamah (Manama), Country: Bahrain",
    latitude: 26.2154,
    longitude: 50.5832,
  },
  {
    name: "Capital City: Dhaka, Country: Bangladesh",
    latitude: 23.7104,
    longitude: 90.4074,
  },
  {
    name: "Capital City: Bridgetown, Country: Barbados",
    latitude: 13.1,
    longitude: -59.6167,
  },
  {
    name: "Capital City: Minsk, Country: Belarus",
    latitude: 53.9,
    longitude: 27.5667,
  },
  {
    name: "Capital City: Bruxelles-Brussel, Country: Belgium",
    latitude: 50.8467,
    longitude: 4.3499,
  },
  {
    name: "Capital City: Belmopan, Country: Belize",
    latitude: 17.25,
    longitude: -88.7667,
  },
  {
    name: "Capital City: Cotonou, Country: Benin",
    latitude: 6.3654,
    longitude: 2.4183,
  },
  {
    name: "Capital City: Hamilton, Country: Bermuda",
    latitude: 32.2915,
    longitude: -64.778,
  },
  {
    name: "Capital City: Thimphu, Country: Bhutan",
    latitude: 27.4661,
    longitude: 89.6419,
  },
  {
    name: "Capital City: La Paz, Country: Bolivia (Plurinational State of)",
    latitude: -16.5,
    longitude: -68.15,
  },
  {
    name: "Capital City: Sarajevo, Country: Bosnia and Herzegovina",
    latitude: 43.8486,
    longitude: 18.3564,
  },
  {
    name: "Capital City: Gaborone, Country: Botswana",
    latitude: -24.6545,
    longitude: 25.9086,
  },
  {
    name: "Capital City: BrasÃ­lia, Country: Brazil",
    latitude: -15.7797,
    longitude: -47.9297,
  },
  {
    name: "Capital City: Road Town, Country: British Virgin Islands",
    latitude: 18.4167,
    longitude: -64.6167,
  },
  {
    name: "Capital City: Bandar Seri Begawan, Country: Brunei Darussalam",
    latitude: 4.9403,
    longitude: 114.9481,
  },
  {
    name: "Capital City: Sofia, Country: Bulgaria",
    latitude: 42.6975,
    longitude: 23.3242,
  },
  {
    name: "Capital City: Ouagadougou, Country: Burkina Faso",
    latitude: 12.3642,
    longitude: -1.5383,
  },
  {
    name: "Capital City: Bujumbura, Country: Burundi",
    latitude: -3.3822,
    longitude: 29.3644,
  },
  {
    name: "Capital City: Praia, Country: Cabo Verde",
    latitude: 14.9215,
    longitude: -23.5087,
  },
  {
    name: "Capital City: Phnum PÃ©nh (Phnom Penh), Country: Cambodia",
    latitude: 11.5625,
    longitude: 104.916,
  },
  {
    name: "Capital City: YaoundÃ©, Country: Cameroon",
    latitude: 3.8667,
    longitude: 11.5167,
  },
  {
    name: "Capital City: Ottawa-Gatineau, Country: Canada",
    latitude: 45.4166,
    longitude: -75.698,
  },
  {
    name: "Capital City: Kralendijk, Country: Caribbean Netherlands",
    latitude: 12.15,
    longitude: -68.2667,
  },
  {
    name: "Capital City: George Town, Country: Cayman Islands",
    latitude: 19.2866,
    longitude: -81.3744,
  },
  {
    name: "Capital City: Bangui, Country: Central African Republic",
    latitude: 4.3612,
    longitude: 18.555,
  },
  {
    name: "Capital City: N'DjamÃ©na, Country: Chad",
    latitude: 12.1067,
    longitude: 15.0444,
  },
  {
    name: "Capital City: St. Helier, Country: Channel Islands",
    latitude: 49.188,
    longitude: -2.1049,
  },
  {
    name: "Capital City: St. Peter Port, Country: Channel Islands",
    latitude: 49.4598,
    longitude: -2.5353,
  },
  {
    name: "Capital City: Santiago, Country: Chile",
    latitude: -33.4569,
    longitude: -70.6483,
  },
  {
    name: "Capital City: Beijing, Country: China",
    latitude: 39.9075,
    longitude: 116.3972,
  },
  {
    name: "Capital City: Hong Kong, Country: China, Hong Kong SAR",
    latitude: 22.2796,
    longitude: 114.1887,
  },
  {
    name: "Capital City: Macao, Country: China, Macao SAR",
    latitude: 22.2006,
    longitude: 113.5461,
  },
  {
    name: "Capital City: Taibei, Country: China, Taiwan Province of China",
    latitude: 25.047,
    longitude: 121.5457,
  },
  {
    name: "Capital City: BogotÃ¡, Country: Colombia",
    latitude: 4.6097,
    longitude: -74.0818,
  },
  {
    name: "Capital City: Moroni, Country: Comoros",
    latitude: -11.7022,
    longitude: 43.2551,
  },
  {
    name: "Capital City: Brazzaville, Country: Congo",
    latitude: -4.2658,
    longitude: 15.2832,
  },
  {
    name: "Capital City: Rarotonga, Country: Cook Islands",
    latitude: -21.23,
    longitude: -159.76,
  },
  {
    name: "Capital City: San JosÃ©, Country: Costa Rica",
    latitude: 9.9278,
    longitude: -84.0807,
  },
  {
    name: "Capital City: Abidjan, Country: CÃ´te d'Ivoire",
    latitude: 5.3453,
    longitude: -4.0268,
  },
  {
    name: "Capital City: Zagreb, Country: Croatia",
    latitude: 45.8144,
    longitude: 15.978,
  },
  {
    name: "Capital City: La Habana (Havana), Country: Cuba",
    latitude: 23.1195,
    longitude: -82.3785,
  },
  {
    name: "Capital City: Willemstad, Country: CuraÃ§ao",
    latitude: 12.1084,
    longitude: -68.9335,
  },
  {
    name: "Capital City: Lefkosia (Nicosia), Country: Cyprus",
    latitude: 35.1595,
    longitude: 33.3669,
  },
  {
    name: "Capital City: Praha (Prague), Country: Czechia",
    latitude: 50.088,
    longitude: 14.4208,
  },
  {
    name: "Capital City: P'yongyang, Country: Dem. People's Republic of Korea",
    latitude: 39.0339,
    longitude: 125.7543,
  },
  {
    name: "Capital City: Kinshasa, Country: Democratic Republic of the Congo",
    latitude: -4.3276,
    longitude: 15.3136,
  },
  {
    name: "Capital City: KÃ¸benhavn (Copenhagen), Country: Denmark",
    latitude: 55.6759,
    longitude: 12.5655,
  },
  {
    name: "Capital City: Djibouti, Country: Djibouti",
    latitude: 11.5877,
    longitude: 43.1447,
  },
  {
    name: "Capital City: Roseau, Country: Dominica",
    latitude: 15.3017,
    longitude: -61.3881,
  },
  {
    name: "Capital City: Santo Domingo, Country: Dominican Republic",
    latitude: 18.4896,
    longitude: -69.9018,
  },
  {
    name: "Capital City: Quito, Country: Ecuador",
    latitude: -0.2299,
    longitude: -78.525,
  },
  {
    name: "Capital City: Al-Qahirah (Cairo), Country: Egypt",
    latitude: 30.0392,
    longitude: 31.2394,
  },
  {
    name: "Capital City: San Salvador, Country: El Salvador",
    latitude: 13.6894,
    longitude: -89.1872,
  },
  {
    name: "Capital City: Malabo, Country: Equatorial Guinea",
    latitude: 3.75,
    longitude: 8.7833,
  },
  {
    name: "Capital City: Asmara, Country: Eritrea",
    latitude: 15.3333,
    longitude: 38.9333,
  },
  {
    name: "Capital City: Tallinn, Country: Estonia",
    latitude: 59.437,
    longitude: 24.7535,
  },
  {
    name: "Capital City: Addis Ababa, Country: Ethiopia",
    latitude: 9.025,
    longitude: 38.7469,
  },
  {
    name: "Capital City: TÃ³rshavn, Country: Faeroe Islands",
    latitude: 62.0097,
    longitude: -6.7716,
  },
  {
    name: "Capital City: Stanley, Country: Falkland Islands (Malvinas)",
    latitude: -51.7012,
    longitude: -57.8494,
  },
  {
    name: "Capital City: Suva, Country: Fiji",
    latitude: -18.1416,
    longitude: 178.4415,
  },
  {
    name: "Capital City: Helsinki, Country: Finland",
    latitude: 60.1692,
    longitude: 24.9402,
  },
  {
    name: "Capital City: Paris, Country: France",
    latitude: 48.8534,
    longitude: 2.3488,
  },
  {
    name: "Capital City: Cayenne, Country: French Guiana",
    latitude: 4.9333,
    longitude: -52.3333,
  },
  {
    name: "Capital City: Papeete, Country: French Polynesia",
    latitude: -17.5333,
    longitude: -149.5667,
  },
  {
    name: "Capital City: Libreville, Country: Gabon",
    latitude: 0.3925,
    longitude: 9.4537,
  },
  {
    name: "Capital City: Banjul, Country: Gambia",
    latitude: 13.4531,
    longitude: -16.6794,
  },
  {
    name: "Capital City: Tbilisi, Country: Georgia",
    latitude: 41.6941,
    longitude: 44.8337,
  },
  {
    name: "Capital City: Berlin, Country: Germany",
    latitude: 52.5244,
    longitude: 13.4105,
  },
  {
    name: "Capital City: Accra, Country: Ghana",
    latitude: 5.556,
    longitude: -0.1969,
  },
  {
    name: "Capital City: Gibraltar, Country: Gibraltar",
    latitude: 36.1447,
    longitude: -5.3526,
  },
  {
    name: "Capital City: AthÃ­nai (Athens), Country: Greece",
    latitude: 37.9534,
    longitude: 23.749,
  },
  {
    name: "Capital City: Nuuk (GodthÃ¥b), Country: Greenland",
    latitude: 64.1835,
    longitude: -51.7216,
  },
  {
    name: "Capital City: St.George's, Country: Grenada",
    latitude: 12.0564,
    longitude: -61.7485,
  },
  {
    name: "Capital City: Basse-Terre, Country: Guadeloupe",
    latitude: 15.9985,
    longitude: -61.7255,
  },
  {
    name: "Capital City: HagÃ¥tÃ±a, Country: Guam",
    latitude: 13.4757,
    longitude: 144.7489,
  },
  {
    name: "Capital City: Ciudad de Guatemala (Guatemala City), Country: Guatemala",
    latitude: 14.6127,
    longitude: -90.5307,
  },
  {
    name: "Capital City: Conakry, Country: Guinea",
    latitude: 9.5716,
    longitude: -13.6476,
  },
  {
    name: "Capital City: Bissau, Country: Guinea-Bissau",
    latitude: 11.8636,
    longitude: -15.5977,
  },
  {
    name: "Capital City: Georgetown, Country: Guyana",
    latitude: 6.8045,
    longitude: -58.1553,
  },
  {
    name: "Capital City: Port-au-Prince, Country: Haiti",
    latitude: 18.5392,
    longitude: -72.335,
  },
  {
    name: "Capital City: Vatican City, Country: Holy See",
    latitude: 41.9024,
    longitude: 12.4533,
  },
  {
    name: "Capital City: Tegucigalpa, Country: Honduras",
    latitude: 14.0818,
    longitude: -87.2068,
  },
  {
    name: "Capital City: Budapest, Country: Hungary",
    latitude: 47.498,
    longitude: 19.0399,
  },
  {
    name: "Capital City: ReykjavÃ­k, Country: Iceland",
    latitude: 64.1355,
    longitude: -21.8954,
  },
  {
    name: "Capital City: Delhi, Country: India",
    latitude: 28.6667,
    longitude: 77.2167,
  },
  {
    name: "Capital City: Jakarta, Country: Indonesia",
    latitude: -6.2118,
    longitude: 106.8416,
  },
  {
    name: "Capital City: Tehran, Country: Iran (Islamic Republic of)",
    latitude: 35.6944,
    longitude: 51.4215,
  },
  {
    name: "Capital City: Baghdad, Country: Iraq",
    latitude: 33.3406,
    longitude: 44.4009,
  },
  {
    name: "Capital City: Dublin, Country: Ireland",
    latitude: 53.3331,
    longitude: -6.2489,
  },
  {
    name: "Capital City: Douglas, Country: Isle of Man",
    latitude: 54.15,
    longitude: -4.4833,
  },
  {
    name: "Capital City: Jerusalem, Country: Israel",
    latitude: 31.769,
    longitude: 35.2163,
  },
  {
    name: "Capital City: Roma (Rome), Country: Italy",
    latitude: 41.8947,
    longitude: 12.4811,
  },
  {
    name: "Capital City: Kingston, Country: Jamaica",
    latitude: 17.997,
    longitude: -76.7936,
  },
  {
    name: "Capital City: Tokyo, Country: Japan",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    name: "Capital City: Amman, Country: Jordan",
    latitude: 31.9552,
    longitude: 35.945,
  },
  {
    name: "Capital City: Astana, Country: Kazakhstan",
    latitude: 51.1801,
    longitude: 71.446,
  },
  {
    name: "Capital City: Nairobi, Country: Kenya",
    latitude: -1.2833,
    longitude: 36.8167,
  },
  {
    name: "Capital City: Tarawa, Country: Kiribati",
    latitude: 1.3272,
    longitude: 172.9813,
  },
  {
    name: "Capital City: Al Kuwayt (Kuwait City), Country: Kuwait",
    latitude: 29.3697,
    longitude: 47.9783,
  },
  {
    name: "Capital City: Bishkek, Country: Kyrgyzstan",
    latitude: 42.87,
    longitude: 74.59,
  },
  {
    name: "Capital City: Vientiane, Country: Lao People's Democratic Republic",
    latitude: 17.9667,
    longitude: 102.6,
  },
  {
    name: "Capital City: Riga, Country: Latvia",
    latitude: 56.946,
    longitude: 24.1059,
  },
  {
    name: "Capital City: Bayrut (Beirut), Country: Lebanon",
    latitude: 33.9,
    longitude: 35.4833,
  },
  {
    name: "Capital City: Maseru, Country: Lesotho",
    latitude: -29.3167,
    longitude: 27.4833,
  },
  {
    name: "Capital City: Monrovia, Country: Liberia",
    latitude: 6.3005,
    longitude: -10.7969,
  },
  {
    name: "Capital City: Tarabulus (Tripoli), Country: Libya",
    latitude: 32.8752,
    longitude: 13.1875,
  },
  {
    name: "Capital City: Vaduz, Country: Liechtenstein",
    latitude: 47.1415,
    longitude: 9.5215,
  },
  {
    name: "Capital City: Vilnius, Country: Lithuania",
    latitude: 54.6892,
    longitude: 25.2798,
  },
  {
    name: "Capital City: Luxembourg, Country: Luxembourg",
    latitude: 49.6117,
    longitude: 6.13,
  },
  {
    name: "Capital City: Antananarivo, Country: Madagascar",
    latitude: -18.9137,
    longitude: 47.5361,
  },
  {
    name: "Capital City: Lilongwe, Country: Malawi",
    latitude: -13.9669,
    longitude: 33.7873,
  },
  {
    name: "Capital City: Kuala Lumpur, Country: Malaysia",
    latitude: 3.1412,
    longitude: 101.6865,
  },
  {
    name: "Capital City: Male, Country: Maldives",
    latitude: 4.1748,
    longitude: 73.5089,
  },
  {
    name: "Capital City: Bamako, Country: Mali",
    latitude: 12.65,
    longitude: -8,
  },
  {
    name: "Capital City: Valletta, Country: Malta",
    latitude: 35.8997,
    longitude: 14.5147,
  },
  {
    name: "Capital City: Majuro, Country: Marshall Islands",
    latitude: 7.0897,
    longitude: 171.3803,
  },
  {
    name: "Capital City: Fort-de-France, Country: Martinique",
    latitude: 14.6089,
    longitude: -61.0733,
  },
  {
    name: "Capital City: Nouakchott, Country: Mauritania",
    latitude: 18.0858,
    longitude: -15.9785,
  },
  {
    name: "Capital City: Port Louis, Country: Mauritius",
    latitude: -20.1619,
    longitude: 57.4989,
  },
  {
    name: "Capital City: Mamoudzou, Country: Mayotte",
    latitude: -12.7794,
    longitude: 45.2272,
  },
  {
    name: "Capital City: Ciudad de MÃ©xico (Mexico City), Country: Mexico",
    latitude: 19.4273,
    longitude: -99.1419,
  },
  {
    name: "Capital City: Palikir, Country: Micronesia (Fed. States of)",
    latitude: 6.9174,
    longitude: 158.1588,
  },
  {
    name: "Capital City: Monaco, Country: Monaco",
    latitude: 43.7333,
    longitude: 7.4167,
  },
  {
    name: "Capital City: Ulaanbaatar, Country: Mongolia",
    latitude: 47.9077,
    longitude: 106.8832,
  },
  {
    name: "Capital City: Podgorica, Country: Montenegro",
    latitude: 42.4411,
    longitude: 19.2636,
  },
  {
    name: "Capital City: Brades Estate, Country: Montserrat",
    latitude: 16.7918,
    longitude: -62.2106,
  },
  {
    name: "Capital City: Rabat, Country: Morocco",
    latitude: 34.0133,
    longitude: -6.8326,
  },
  {
    name: "Capital City: Maputo, Country: Mozambique",
    latitude: -25.9653,
    longitude: 32.5892,
  },
  {
    name: "Capital City: Nay Pyi Taw, Country: Myanmar",
    latitude: 19.745,
    longitude: 96.1297,
  },
  {
    name: "Capital City: Windhoek, Country: Namibia",
    latitude: -22.5594,
    longitude: 17.0832,
  },
  {
    name: "Capital City: Nauru, Country: Nauru",
    latitude: -0.5308,
    longitude: 166.9112,
  },
  {
    name: "Capital City: Kathmandu, Country: Nepal",
    latitude: 27.7017,
    longitude: 85.3206,
  },
  {
    name: "Capital City: Amsterdam, Country: Netherlands",
    latitude: 52.374,
    longitude: 4.8897,
  },
  {
    name: "Capital City: NoumÃ©a, Country: New Caledonia",
    latitude: -22.2763,
    longitude: 166.4572,
  },
  {
    name: "Capital City: Wellington, Country: New Zealand",
    latitude: -41.2866,
    longitude: 174.7756,
  },
  {
    name: "Capital City: Managua, Country: Nicaragua",
    latitude: 12.1328,
    longitude: -86.2504,
  },
  {
    name: "Capital City: Niamey, Country: Niger",
    latitude: 13.5137,
    longitude: 2.1098,
  },
  {
    name: "Capital City: Abuja, Country: Nigeria",
    latitude: 9.0574,
    longitude: 7.4898,
  },
  {
    name: "Capital City: Alofi, Country: Niue",
    latitude: -19.0585,
    longitude: -169.9213,
  },
  {
    name: "Capital City: Saipan, Country: Northern Mariana Islands",
    latitude: 15.2123,
    longitude: 145.7545,
  },
  {
    name: "Capital City: Oslo, Country: Norway",
    latitude: 59.9127,
    longitude: 10.7461,
  },
  {
    name: "Capital City: Masqat (Muscat), Country: Oman",
    latitude: 23.6139,
    longitude: 58.5922,
  },
  {
    name: "Capital City: Islamabad, Country: Pakistan",
    latitude: 33.7035,
    longitude: 73.0594,
  },
  {
    name: "Capital City: Koror, Country: Palau",
    latitude: 7.3426,
    longitude: 134.4789,
  },
  {
    name: "Capital City: Ciudad de PanamÃ¡ (Panama City), Country: Panama",
    latitude: 8.9958,
    longitude: -79.5196,
  },
  {
    name: "Capital City: Port Moresby, Country: Papua New Guinea",
    latitude: -9.4431,
    longitude: 147.1797,
  },
  {
    name: "Capital City: AsunciÃ³n, Country: Paraguay",
    latitude: -25.3007,
    longitude: -57.6359,
  },
  {
    name: "Capital City: Lima, Country: Peru",
    latitude: -12.0432,
    longitude: -77.0282,
  },
  {
    name: "Capital City: Manila, Country: Philippines",
    latitude: 14.6042,
    longitude: 120.9822,
  },
  {
    name: "Capital City: Warszawa (Warsaw), Country: Poland",
    latitude: 52.2298,
    longitude: 21.0118,
  },
  {
    name: "Capital City: Lisboa (Lisbon), Country: Portugal",
    latitude: 38.7169,
    longitude: -9.1399,
  },
  {
    name: "Capital City: San Juan, Country: Puerto Rico",
    latitude: 18.4663,
    longitude: -66.1057,
  },
  {
    name: "Capital City: Ad-Dawhah (Doha), Country: Qatar",
    latitude: 25.2747,
    longitude: 51.5245,
  },
  {
    name: "Capital City: Seoul, Country: Republic of Korea",
    latitude: 37.5683,
    longitude: 126.9778,
  },
  {
    name: "Capital City: ChiÅŸinÄƒu, Country: Republic of Moldova",
    latitude: 47.0056,
    longitude: 28.8575,
  },
  {
    name: "Capital City: Saint-Denis, Country: RÃ©union",
    latitude: -20.8823,
    longitude: 55.4504,
  },
  {
    name: "Capital City: Bucuresti (Bucharest), Country: Romania",
    latitude: 44.4328,
    longitude: 26.1043,
  },
  {
    name: "Capital City: Moskva (Moscow), Country: Russian Federation",
    latitude: 55.755,
    longitude: 37.6218,
  },
  {
    name: "Capital City: Kigali, Country: Rwanda",
    latitude: -1.9474,
    longitude: 30.0579,
  },
  {
    name: "Capital City: Jamestown, Country: Saint Helena",
    latitude: -15.9387,
    longitude: -5.7168,
  },
  {
    name: "Capital City: Basseterre, Country: Saint Kitts and Nevis",
    latitude: 17.2948,
    longitude: -62.7261,
  },
  {
    name: "Capital City: Castries, Country: Saint Lucia",
    latitude: 14.006,
    longitude: -60.991,
  },
  {
    name: "Capital City: Saint-Pierre, Country: Saint Pierre and Miquelon",
    latitude: 46.7738,
    longitude: -56.1815,
  },
  {
    name: "Capital City: Kingstown, Country: Saint Vincent and the Grenadines",
    latitude: 13.1587,
    longitude: -61.2248,
  },
  {
    name: "Capital City: Apia, Country: Samoa",
    latitude: -13.8333,
    longitude: -171.7667,
  },
  {
    name: "Capital City: San Marino, Country: San Marino",
    latitude: 43.9333,
    longitude: 12.45,
  },
  {
    name: "Capital City: SÃ£o TomÃ©, Country: Sao Tome and Principe",
    latitude: 0.3365,
    longitude: 6.7273,
  },
  {
    name: "Capital City: Ar-Riyadh (Riyadh), Country: Saudi Arabia",
    latitude: 24.6905,
    longitude: 46.7096,
  },
  {
    name: "Capital City: Dakar, Country: Senegal",
    latitude: 14.6937,
    longitude: -17.4441,
  },
  {
    name: "Capital City: Beograd (Belgrade), Country: Serbia",
    latitude: 44.8176,
    longitude: 20.4633,
  },
  {
    name: "Capital City: Victoria, Country: Seychelles",
    latitude: -4.6167,
    longitude: 55.45,
  },
  {
    name: "Capital City: Freetown, Country: Sierra Leone",
    latitude: 8.484,
    longitude: -13.2299,
  },
  {
    name: "Capital City: Singapore, Country: Singapore",
    latitude: 1.2897,
    longitude: 103.8501,
  },
  {
    name: "Capital City: Philipsburg, Country: Sint Maarten (Dutch part)",
    latitude: 18.026,
    longitude: -63.0458,
  },
  {
    name: "Capital City: Bratislava, Country: Slovakia",
    latitude: 48.1482,
    longitude: 17.1067,
  },
  {
    name: "Capital City: Ljubljana, Country: Slovenia",
    latitude: 46.0511,
    longitude: 14.5051,
  },
  {
    name: "Capital City: Honiara, Country: Solomon Islands",
    latitude: -9.4333,
    longitude: 159.95,
  },
  {
    name: "Capital City: Muqdisho (Mogadishu), Country: Somalia",
    latitude: 2.0416,
    longitude: 45.3435,
  },
  {
    name: "Capital City: Cape Town, Country: South Africa",
    latitude: -33.9258,
    longitude: 18.4232,
  },
  {
    name: "Capital City: Juba, Country: South Sudan",
    latitude: 4.8517,
    longitude: 31.5825,
  },
  {
    name: "Capital City: Madrid, Country: Spain",
    latitude: 40.4165,
    longitude: -3.7026,
  },
  {
    name: "Capital City: Colombo, Country: Sri Lanka",
    latitude: 6.9319,
    longitude: 79.8478,
  },
  {
    name: "Capital City: Al-Quds[East Jerusalem], Country: State of Palestine",
    latitude: 31.7834,
    longitude: 35.2339,
  },
  {
    name: "Capital City: Al-Khartum (Khartoum), Country: Sudan",
    latitude: 15.5518,
    longitude: 32.5324,
  },
  {
    name: "Capital City: Paramaribo, Country: Suriname",
    latitude: 5.8664,
    longitude: -55.1668,
  },
  {
    name: "Capital City: Mbabane, Country: Swaziland",
    latitude: -26.3167,
    longitude: 31.1333,
  },
  {
    name: "Capital City: Stockholm, Country: Sweden",
    latitude: 59.3326,
    longitude: 18.0649,
  },
  {
    name: "Capital City: Bern, Country: Switzerland",
    latitude: 46.9481,
    longitude: 7.4474,
  },
  {
    name: "Capital City: Dimashq (Damascus), Country: Syrian Arab Republic",
    latitude: 33.5086,
    longitude: 36.3084,
  },
  {
    name: "Capital City: Dushanbe, Country: Tajikistan",
    latitude: 38.5358,
    longitude: 68.7791,
  },
  {
    name: "Capital City: Skopje, Country: TFYR Macedonia",
    latitude: 42,
    longitude: 21.4333,
  },
  {
    name: "Capital City: Krung Thep (Bangkok), Country: Thailand",
    latitude: 13.722,
    longitude: 100.5252,
  },
  {
    name: "Capital City: Dili, Country: Timor-Leste",
    latitude: -8.5601,
    longitude: 125.5668,
  },
  {
    name: "Capital City: LomÃ©, Country: Togo",
    latitude: 6.1375,
    longitude: 1.2123,
  },
  {
    name: "Capital City: Tokelau, Country: Tokelau",
    latitude: -9.38,
    longitude: -171.25,
  },
  {
    name: "Capital City: Nuku'alofa, Country: Tonga",
    latitude: -21.1394,
    longitude: -175.2032,
  },
  {
    name: "Capital City: Port of Spain, Country: Trinidad and Tobago",
    latitude: 10.6662,
    longitude: -61.5166,
  },
  {
    name: "Capital City: Tunis, Country: Tunisia",
    latitude: 36.819,
    longitude: 10.1658,
  },
  {
    name: "Capital City: Ankara, Country: Turkey",
    latitude: 39.9199,
    longitude: 32.8543,
  },
  {
    name: "Capital City: Ashgabat, Country: Turkmenistan",
    latitude: 37.95,
    longitude: 58.3833,
  },
  {
    name: "Capital City: Cockburn Town, Country: Turks and Caicos Islands",
    latitude: 21.4612,
    longitude: -71.1419,
  },
  {
    name: "Capital City: Funafuti, Country: Tuvalu",
    latitude: -8.5189,
    longitude: 179.1991,
  },
  {
    name: "Capital City: Kampala, Country: Uganda",
    latitude: 0.3163,
    longitude: 32.5822,
  },
  {
    name: "Capital City: Kyiv (Kiev), Country: Ukraine",
    latitude: 50.4454,
    longitude: 30.5186,
  },
  {
    name: "Capital City: Abu Zaby (Abu Dhabi), Country: United Arab Emirates",
    latitude: 24.4648,
    longitude: 54.3618,
  },
  {
    name: "Capital City: London, Country: United Kingdom",
    latitude: 51.5085,
    longitude: -0.1257,
  },
  {
    name: "Capital City: Dodoma, Country: United Republic of Tanzania",
    latitude: -6.1722,
    longitude: 35.7395,
  },
  {
    name: "Capital City: Washington, D.C., Country: United States of America",
    latitude: 38.8951,
    longitude: -77.0364,
  },
  {
    name: "Capital City: Charlotte Amalie, Country: United States Virgin Islands",
    latitude: 18.3419,
    longitude: -64.9307,
  },
  {
    name: "Capital City: Montevideo, Country: Uruguay",
    latitude: -34.8335,
    longitude: -56.1674,
  },
  {
    name: "Capital City: Tashkent, Country: Uzbekistan",
    latitude: 41.2647,
    longitude: 69.2163,
  },
  {
    name: "Capital City: Port Vila, Country: Vanuatu",
    latitude: -17.7338,
    longitude: 168.3219,
  },
  {
    name: "Capital City: Caracas, Country: Venezuela (Bolivarian Republic of)",
    latitude: 10.488,
    longitude: -66.8792,
  },
  {
    name: "Capital City: HÃ  Noi, Country: Viet Nam",
    latitude: 21.0245,
    longitude: 105.8412,
  },
  {
    name: "Capital City: Matu-Utu, Country: Wallis and Futuna Islands",
    latitude: -13.2816,
    longitude: -176.1745,
  },
  {
    name: "Capital City: El AaiÃºn, Country: Western Sahara",
    latitude: 27.1532,
    longitude: -13.2014,
  },
  {
    name: "Capital City: Sana'a', Country: Yemen",
    latitude: 15.3531,
    longitude: 44.2078,
  },
  {
    name: "Capital City: Lusaka, Country: Zambia",
    latitude: -15.4134,
    longitude: 28.2771,
  },
  {
    name: "Capital City: Harare, Country: Zimbabwe",
    latitude: -17.8294,
    longitude: 31.0539,
  },

  // Add more locations as needed
];

export default capitalCities;
