// Initialize the database and populate data

// Log into the db to get started
db = db.getSiblingDB("admin");
db.auth("admin", "secretpassword");

// Create a new database for our app
db = db.getSiblingDB("app");

// Create a collection for storing vendors
db.createCollection("vendors");

// Create a collection for storing users
db.createCollection("users");

// Create a collection for storing vendor ratings
db.createCollection("ratings");

// Create a collection for storing user favorites
db.createCollection("favorites");

// Populate vendor data using the data from the csv that was downloaded and converted to json
var vendors = db.getCollection("vendors")
vendors.insertMany([
  {
      "locationId": "735318",
      "name": "Ziaurehman Amini",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: DRUMM ST intersection",
      "foodItems": "",
      "latitude": "37.794331",
      "longitude": "-122.395811",
      "daysHours": ""
  },
  {
      "locationId": "848184",
      "name": "Reecees Soulicious",
      "facilityType": "truck",
      "locationDescription": "BAY SHORE BLVD: BAY SHORE BLVD to OAKDALE AVE (185 - 299) -- EAST --",
      "foodItems": "Fried Chicken: Fried Fish: Greens: Mac \u0026 Cheese: Peach Cobbler: and String beans",
      "latitude": "37.745309",
      "longitude": "-122.403420",
      "daysHours": "Mo-We:7AM-7PM"
  },
  {
      "locationId": "1047831",
      "name": "The Chef Station",
      "facilityType": "truck",
      "locationDescription": "10TH ST: FELL ST \\ MARKET ST \\ POLK ST to STEVENSON ST (1 - 18)",
      "foodItems": "South American/Peruvian food",
      "latitude": "37.775826",
      "longitude": "-122.417250",
      "daysHours": ""
  },
  {
      "locationId": "934516",
      "name": "Scotch Bonnet",
      "facilityType": "truck",
      "locationDescription": "01ST ST: STEVENSON ST to JESSIE ST (21 - 56)",
      "foodItems": "Jerk chicken: curry chicken: curry goat: curry dhal: Burritos: Fish: Ox tails: rice: beans: veggies.",
      "latitude": "37.790149",
      "longitude": "-122.398658",
      "daysHours": "Mo:6AM-8PM"
  },
  {
      "locationId": "1343454",
      "name": "Esmeli Catering",
      "facilityType": "truck",
      "locationDescription": "HOOPER ST: 07TH ST to 08TH ST (100 - 199)",
      "foodItems": "tacos: burritos: quesadilla: tortas sodas",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1334819",
      "name": "tacos y pupusas los trinos",
      "facilityType": "unknown",
      "locationDescription": "MISSION ST: AVALON AVE to COTTER ST (4368 - 4439)",
      "foodItems": "",
      "latitude": "37.727567",
      "longitude": "-122.432970",
      "daysHours": ""
  },
  {
      "locationId": "755221",
      "name": "Fruteria Serrano",
      "facilityType": "unknown",
      "locationDescription": "MISSION ST: OCEAN AVE to PERSIA AVE (4650 - 4699)",
      "foodItems": "Fruits including mangoes: pineapples: coconuts: watermelon: corn: cucumber: potatoes chips: water: Mexican drinks: sodas: juices: snow cones",
      "latitude": "37.723661",
      "longitude": "-122.435944",
      "daysHours": "Mo/Th/Fr:11AM-6PM"
  },
  {
      "locationId": "1337787",
      "name": "Giant Burrito",
      "facilityType": "truck",
      "locationDescription": "GENEVA AVE: PRAGUE ST to LINDA VISTA STPS (1500 - 1598) -- SOUTH --",
      "foodItems": "Tacos: Burritos: Tostadas: Flautas: Tostadas: Tortas: Pozole Menudo",
      "latitude": "37.712303",
      "longitude": "-122.431644",
      "daysHours": ""
  },
  {
      "locationId": "1367290",
      "name": "Star Taco",
      "facilityType": "unknown",
      "locationDescription": "HOWARD ST: MALDEN ALY to 02ND ST (574 - 599)",
      "foodItems": "Mexican Food",
      "latitude": "37.787304",
      "longitude": "-122.398037",
      "daysHours": ""
  },
  {
      "locationId": "934518",
      "name": "Scotch Bonnet",
      "facilityType": "truck",
      "locationDescription": "SANSOME ST: BUSH ST to PINE ST (100 - 199)",
      "foodItems": "Jerk chicken: curry chicken: curry goat: curry dhal: Burritos: Fish: Ox tails: rice: beans: veggies.",
      "latitude": "37.791427",
      "longitude": "-122.401038",
      "daysHours": "Fr:6AM-8PM"
  },
  {
      "locationId": "812017",
      "name": "SF Street Food",
      "facilityType": "truck",
      "locationDescription": "SUTTER ST: CLAUDE LN to GRANT AVE (216 - 299)",
      "foodItems": "Chicken Tikka Masala: Vegetarian Rice Plate: Burritos: Tacos: Mango Lassi",
      "latitude": "37.789914",
      "longitude": "-122.405233",
      "daysHours": ""
  },
  {
      "locationId": "1344202",
      "name": "Bay Area Dots, LLC",
      "facilityType": "cart",
      "locationDescription": "BEACH ST: HYDE ST to LARKIN ST (700 - 799)",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee:cold beverages: pastries: bakery goods: cookies: icecream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.807743",
      "longitude": "-122.424150",
      "daysHours": ""
  },
  {
      "locationId": "1359707",
      "name": "Union Square Business Improvement District",
      "facilityType": "truck",
      "locationDescription": "MAIDEN LN: GRANT AVE to STOCKTON ST (100 - 199)",
      "foodItems": "All types of food except for BBQ on site per fire safety. Partnership with Off the Grid and their fleet of MFF's",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1265606",
      "name": "San Francisco Carts \u0026 Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "POST ST: STOCKTON ST to POWELL ST (300 - 399)",
      "foodItems": "American Food: Hot dogs: pretzels: ice cream: salads: beverages: sandwiches: soup: coffee: pastries:etc.",
      "latitude": "37.788621",
      "longitude": "-122.408069",
      "daysHours": ""
  },
  {
      "locationId": "955616",
      "name": "Tacos Santo Toribio",
      "facilityType": "truck",
      "locationDescription": "TOLAND ST: NEWCOMB AVE to OAKDALE AVE (900 - 999)",
      "foodItems": "tacos",
      "latitude": "37.741624",
      "longitude": "-122.401547",
      "daysHours": ""
  },
  {
      "locationId": "848185",
      "name": "Reecees Soulicious",
      "facilityType": "truck",
      "locationDescription": "03RD ST: NEWCOMB AVE to OAKDALE AVE (4701 - 4799) -- EAST --",
      "foodItems": "Fried Chicken: Fried Fish: Greens: Mac \u0026 Cheese: Peach Cobbler: and String beans",
      "latitude": "37.735004",
      "longitude": "-122.390172",
      "daysHours": "Th/Fr/Sa:7AM-7PM"
  },
  {
      "locationId": "848080",
      "name": "Taqueria Lolita",
      "facilityType": "truck",
      "locationDescription": "RANKIN ST: DAVIDSON AVE to EVANS AVE (200 - 299)",
      "foodItems": "Tacos: burritos: quesadillas: combination plates: tortas: tostadas",
      "latitude": "37.744889",
      "longitude": "-122.390972",
      "daysHours": "Th/Fr/Sa:7AM-3PM"
  },
  {
      "locationId": "1010174",
      "name": "Julie's Hot Dogs",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 19TH ST to 20TH ST (2300 - 2399)",
      "foodItems": "Hot dogs: bacon-wrapped hot dogs: chicken burgers: energy drinks: water and various other drinks.",
      "latitude": "37.758880",
      "longitude": "-122.419379",
      "daysHours": "Tu/We/Th:12AM-3AM;Mo-We:12PM-12AM"
  },
  {
      "locationId": "1265597",
      "name": "San Francisco Carts \u0026 Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "POST ST: STOCKTON ST to POWELL ST (300 - 399)",
      "foodItems": "American Food: Hot dogs: pretzels: ice cream: salads: beverages: sandwiches: soup: coffee: pastries:etc.",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "627558",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "DAVIS ST: DAVIS CT \\ JACKSON ST to BROADWAY (500 - 699)",
      "foodItems": "varies truck to truck",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": "Tu/Th/Fr:10AM-3PM"
  },
  {
      "locationId": "364218",
      "name": "The Chai Cart",
      "facilityType": "cart",
      "locationDescription": "NEW MONTGOMERY ST: AMBROSE BIERCE ST to MISSION ST (77 - 99)",
      "foodItems": "Hot Indian Chai (Tea)",
      "latitude": "37.787890",
      "longitude": "-122.400535",
      "daysHours": "Mo-Su:7AM-6PM"
  },
  {
      "locationId": "931093",
      "name": "Swell Cream \u0026 Coffee",
      "facilityType": "truck",
      "locationDescription": "TARAVAL ST: 36TH AVE to SUNSET BLVD (2600 - 2649)",
      "foodItems": "Ice cream: coffee: pastries",
      "latitude": "37.741290",
      "longitude": "-122.494378",
      "daysHours": ""
  },
  {
      "locationId": "997504",
      "name": "Munch India",
      "facilityType": "truck",
      "locationDescription": "POST ST: MONTGOMERY ST to LICK PL (1 - 40)",
      "foodItems": "Daily rotating menus consisting of various local \u0026 organic vegetable: poultry: meat: seafood : rice \u0026 bread dishes.",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "773095",
      "name": "Athena SF Gyro",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: 11TH ST intersection",
      "foodItems": "Gyro pita bread (Lamb or chicken): lamb over rice: chicken over rice: chicken biryani rice: soft drinks",
      "latitude": "37.774259",
      "longitude": "-122.419486",
      "daysHours": "We/Th/Fr:6AM-6PM"
  },
  {
      "locationId": "934552",
      "name": "Casey's Pizza, LLC",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: NEW MONTGOMERY ST to ANNIE ST (635 - 664)",
      "foodItems": "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      "latitude": "37.787183",
      "longitude": "-122.401235",
      "daysHours": "Fr:11AM-3PM"
  },
  {
      "locationId": "934517",
      "name": "Scotch Bonnet",
      "facilityType": "truck",
      "locationDescription": "MONTGOMERY ST: POST ST to SUTTER ST (1 - 99)",
      "foodItems": "Jerk chicken: curry chicken: curry goat: curry dhal: Burritos: Fish: Ox tails: rice: beans: veggies.",
      "latitude": "37.789487",
      "longitude": "-122.402467",
      "daysHours": "We:6AM-8PM"
  },
  {
      "locationId": "1089427",
      "name": "Halal Food",
      "facilityType": "cart",
      "locationDescription": "CALIFORNIA ST: DRUMM ST to DAVIS ST (1 - 99)",
      "foodItems": "rice chicken beef hot dogs and sandwich's and coke and water",
      "latitude": "37.794053",
      "longitude": "-122.397348",
      "daysHours": ""
  },
  {
      "locationId": "934554",
      "name": "Casey's Pizza, LLC",
      "facilityType": "truck",
      "locationDescription": "SPEAR ST: MISSION ST to HOWARD ST (100 - 199)",
      "foodItems": "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      "latitude": "37.792151",
      "longitude": "-122.394000",
      "daysHours": "Tu/Th:9AM-3PM"
  },
  {
      "locationId": "934551",
      "name": "Casey's Pizza, LLC",
      "facilityType": "truck",
      "locationDescription": "FELL ST: GOUGH ST to OCTAVIA ST (300 - 399)",
      "foodItems": "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      "latitude": "37.776049",
      "longitude": "-122.423939",
      "daysHours": "Su:12PM-8PM;Fr:3PM-8PM;Sa:4PM-8PM"
  },
  {
      "locationId": "934555",
      "name": "Casey's Pizza, LLC",
      "facilityType": "truck",
      "locationDescription": "SANSOME ST: PINE ST to CALIFORNIA ST (200 - 299)",
      "foodItems": "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      "latitude": "37.792609",
      "longitude": "-122.401315",
      "daysHours": "Mo/We:10AM-2PM"
  },
  {
      "locationId": "773105",
      "name": "Athena SF Gyro",
      "facilityType": "cart",
      "locationDescription": "08TH ST: BRANNAN ST to TOWNSEND ST (600 - 699)",
      "foodItems": "Gyro pita bread (Lamb or chicken): lamb over rice: chicken over rice: chicken biryani rice: soft drinks",
      "latitude": "37.771022",
      "longitude": "-122.403546",
      "daysHours": "Mo-We:6AM-6PM"
  },
  {
      "locationId": "839523",
      "name": "Halal Cart of San Francisco",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: FREMONT ST \\ FRONT ST to 01ST ST \\ BUSH ST (400 - 498) -- NORTH --",
      "foodItems": "Gyro; Chicken over rice; Gyro over rice;",
      "latitude": "37.791757",
      "longitude": "-122.398898",
      "daysHours": ""
  },
  {
      "locationId": "837171",
      "name": "Chilifruit",
      "facilityType": "cart",
      "locationDescription": "24TH ST: MISSION ST to OSAGE ALY (3300 - 3322)",
      "foodItems": "Mangoneadas: Fruit snacks: Chamoyadas: Bionicos",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1265569",
      "name": "San Francisco Carts \u0026 Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "POWELL ST: GEARY ST to POST ST (300 - 399)",
      "foodItems": "American Food: Hot dogs: pretzels: ice cream: salads: beverages: sandwiches: soup: coffee: pastries:etc.",
      "latitude": "37.787755",
      "longitude": "-122.408782",
      "daysHours": ""
  },
  {
      "locationId": "839524",
      "name": "Halal Cart of San Francisco",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: 01ST ST \\ BUSH ST to 02ND ST (501 - 599) -- SOUTH --",
      "foodItems": "Gyro; Chicken over rice; Gyro over rice;",
      "latitude": "37.789890",
      "longitude": "-122.399930",
      "daysHours": ""
  },
  {
      "locationId": "1141511",
      "name": "Khalid M Malik",
      "facilityType": "cart",
      "locationDescription": "BATTERY ST: MARKET ST to BUSH ST (1 - 10)",
      "foodItems": "chicken sandwich: chicken gyro: chicken biryani",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1047771",
      "name": "The Chef Station",
      "facilityType": "unknown",
      "locationDescription": "DIVISADERO ST: OAK ST to FELL ST (401 - 499) -- WEST --",
      "foodItems": "South American Peruvian Food - Ceiches: hot wok dishes: hot pastas: rice dishes: and Tapas.",
      "latitude": "37.773364",
      "longitude": "-122.437875",
      "daysHours": ""
  },
  {
      "locationId": "934519",
      "name": "Scotch Bonnet",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)",
      "foodItems": "Jerk chicken: curry chicken: curry goat: curry dhal: Burritos: Fish: Ox tails: rice: beans: veggies.",
      "latitude": "37.793262",
      "longitude": "-122.401789",
      "daysHours": "Tu/Th:6AM-8PM"
  },
  {
      "locationId": "812018",
      "name": "SF Street Food",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: ANNIE ST to 03RD ST (663 - 699)",
      "foodItems": "Chicken Tikka Masala: Vegetarian Rice Plate: Burritos: Tacos: Mango Lassi",
      "latitude": "37.786558",
      "longitude": "-122.401033",
      "daysHours": ""
  },
  {
      "locationId": "931094",
      "name": "Swell Cream \u0026 Coffee",
      "facilityType": "truck",
      "locationDescription": "TARAVAL ST: 34TH AVE to 35TH AVE (2400 - 2499)",
      "foodItems": "Ice cream: coffee: pastries",
      "latitude": "37.742550",
      "longitude": "-122.492677",
      "daysHours": ""
  },
  {
      "locationId": "1265607",
      "name": "San Francisco Carts \u0026 Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "GEARY ST: STOCKTON ST to POWELL ST (200 - 299)",
      "foodItems": "American Food: Hot dogs: pretzels: ice cream: salads: beverages: sandwiches: soup: coffee: pastries:etc.",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "840504",
      "name": "Taqueria Lolita",
      "facilityType": "truck",
      "locationDescription": "EVANS AVE: QUINT ST to RANKIN ST (1700 - 1799)",
      "foodItems": "Tacos: burritos: quesadillas: combination plates: tortas: tostadas",
      "latitude": "37.739445",
      "longitude": "-122.393015",
      "daysHours": "Mo-We:7AM-3PM"
  },
  {
      "locationId": "735315",
      "name": "Ziaurehman Amini",
      "facilityType": "cart",
      "locationDescription": "DRUMM ST: MARKET ST to CALIFORNIA ST (1 - 6)",
      "foodItems": "",
      "latitude": "37.793214",
      "longitude": "-122.397043",
      "daysHours": ""
  },
  {
      "locationId": "1344203",
      "name": "Bay Area Dots, LLC",
      "facilityType": "cart",
      "locationDescription": "TAYLOR ST: BAY ST intersection",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1400796",
      "name": "El Calamar Perubian Food Truck",
      "facilityType": "truck",
      "locationDescription": "24TH ST: UTAH ST to POTRERO AVE (2600 - 2699)",
      "foodItems": "Lomo Saltado: Jalea: Ceviche: Calamari Tilapia Plates: Chicken: Soda: Water.",
      "latitude": "37.752815",
      "longitude": "-122.405663",
      "daysHours": ""
  },
  {
      "locationId": "934553",
      "name": "Casey's Pizza, LLC",
      "facilityType": "truck",
      "locationDescription": "POST ST: MONTGOMERY ST to LICK PL (1 - 40)",
      "foodItems": "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      "latitude": "37.788779",
      "longitude": "-122.402575",
      "daysHours": "Sa:12PM-4PM;Tu/We/Th:3PM-8PM"
  },
  {
      "locationId": "1337786",
      "name": "Giant Burrito",
      "facilityType": "truck",
      "locationDescription": "BAY SHORE BLVD: FLOWER ST to CORTLAND AVE (341 - 489) -- EAST --",
      "foodItems": "Tacos: Burritos: Tostadas: Flautas: Tostadas: Tortas: Pozole Menudo",
      "latitude": "37.741718",
      "longitude": "-122.405418",
      "daysHours": ""
  },
  {
      "locationId": "1034228",
      "name": "Julie's Hot Dogs",
      "facilityType": "unknown",
      "locationDescription": "MISSION ST: 14TH ST to 15TH ST (1800 - 1899)",
      "foodItems": "Hot dogs: bacon wrap hot dogs: chicken burgers: energy drinks: water \u0026 various drinks",
      "latitude": "37.767355",
      "longitude": "-122.420518",
      "daysHours": "Su/Fr/Sa:7AM-5PM"
  },
  {
      "locationId": "1591997",
      "name": "Lerso",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 10TH ST to 11TH ST (1400 - 1499)",
      "foodItems": "Pernil Asado: Ropa Vieja: Arroz con Pollo: Cuban Sandwich: Croquetas Fritas: Tostones: Platanos Maduros: Yuca Frita",
      "latitude": "37.775228",
      "longitude": "-122.417466",
      "daysHours": ""
  },
  {
      "locationId": "963993",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "SHAFTER AVE: HAWES ST to INGALLS ST (1200 - 1299)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.726708",
      "longitude": "-122.383625",
      "daysHours": "Mo-Fr:3PM-4PM"
  },
  {
      "locationId": "1741557",
      "name": "Philz Coffee Truck",
      "facilityType": "truck",
      "locationDescription": "MONTGOMERY ST: COLUMBUS AVE \\ WASHINGTON ST to JACKSON ST (700 - 799)",
      "foodItems": "Hot coffee: iced coffee: hot chocolate: tea: pastries",
      "latitude": "37.796215",
      "longitude": "-122.403755",
      "daysHours": ""
  },
  {
      "locationId": "963978",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "HOLLISTER AVE: HAWES ST to INGALLS ST (1000 - 1099)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.718940",
      "longitude": "-122.390518",
      "daysHours": "Mo-Fr:12PM-1PM"
  },
  {
      "locationId": "1153604",
      "name": "SPUNBYSS",
      "facilityType": "truck",
      "locationDescription": "02ND ST: TEHAMA ST to CLEMENTINA ST (224 - 273)",
      "foodItems": "American classic slider:  fried chicken slider: fried chicken skin: wedge cut fries: regular cut fries: handcrafted sodas: spring salad",
      "latitude": "37.785940",
      "longitude": "-122.397800",
      "daysHours": "Mo/We/Fr:10AM-2PM"
  },
  {
      "locationId": "1723823",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "ILLINOIS ST: MARIPOSA ST \\ TERRY A FRANCOIS BLVD to 18TH ST (600 - 699)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.764741",
      "longitude": "-122.387125",
      "daysHours": ""
  },
  {
      "locationId": "1741556",
      "name": "Philz Coffee Truck",
      "facilityType": "truck",
      "locationDescription": "MARINA BLVD: LAGUNA ST to BEACH ST \\ BUCHANAN ST \\ LOWER FORT MASON ST (1 - 99)",
      "foodItems": "Hot coffee: iced coffee: hot chocolate: tea: pastries",
      "latitude": "37.804578",
      "longitude": "-122.433011",
      "daysHours": ""
  },
  {
      "locationId": "1658694",
      "name": "Bonito Poke",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)",
      "foodItems": "Bonito Poke Bowls \u0026 Various Drinks",
      "latitude": "37.793262",
      "longitude": "-122.401789",
      "daysHours": ""
  },
  {
      "locationId": "1039786",
      "name": "Julie's Hot Dogs",
      "facilityType": "unknown",
      "locationDescription": "MISSION ST: 17TH ST to CLARION ALY (2100 - 2131)",
      "foodItems": "Hot dogs: bacon wrap hot dogs: chicken burgers: energy drinks: water \u0026 various drinks",
      "latitude": "37.763175",
      "longitude": "-122.419010",
      "daysHours": "Tu/We/Th:10AM-8PM"
  },
  {
      "locationId": "963990",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "JENNINGS ST: VAN DYKE AVE to WALLACE AVE (2100 - 2199)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.726728",
      "longitude": "-122.388658",
      "daysHours": "Mo-Fr:3PM-4PM"
  },
  {
      "locationId": "1738640",
      "name": "Eva's Catering",
      "facilityType": "truck",
      "locationDescription": "ORTEGA ST: 18TH AVE to 19TH AVE (1100 - 1199)",
      "foodItems": "Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages",
      "latitude": "37.752661",
      "longitude": "-122.475474",
      "daysHours": ""
  },
  {
      "locationId": "963984",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "DONNER AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.722794",
      "longitude": "-122.391720",
      "daysHours": "Mo-Fr:1PM-2PM"
  },
  {
      "locationId": "1575177",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "PHELPS ST: FAIRFAX AVE to SAM JORDANS WAY (500 - 599)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.741761",
      "longitude": "-122.389098",
      "daysHours": ""
  },
  {
      "locationId": "1730566",
      "name": "DO UC US Mobile Catering",
      "facilityType": "truck",
      "locationDescription": "MARIN ST: KANSAS ST to HWY 101 N ON RAMP (2500 - 2599)",
      "foodItems": "Cold truck: sandwiches: salads: beverages: chips: candy: cookies: coffee: tea: drinks",
      "latitude": "37.748376",
      "longitude": "-122.403201",
      "daysHours": ""
  },
  {
      "locationId": "1738246",
      "name": "Zuri Food Facilities",
      "facilityType": "truck",
      "locationDescription": "SPEAR ST: MISSION ST to HOWARD ST (100 - 199)",
      "foodItems": "Peruvian Food Served Hot",
      "latitude": "37.792151",
      "longitude": "-122.394000",
      "daysHours": ""
  },
  {
      "locationId": "1723820",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "HARRISON ST: 26TH ST to KAMILLE CT (3000 - 3048)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.748848",
      "longitude": "-122.412619",
      "daysHours": ""
  },
  {
      "locationId": "1340417",
      "name": "Let's Be Frank",
      "facilityType": "cart",
      "locationDescription": "HAYES ST: GOUGH ST to OCTAVIA ST (400 - 499)",
      "foodItems": "Hot dogs and chili",
      "latitude": "37.776567",
      "longitude": "-122.423395",
      "daysHours": ""
  },
  {
      "locationId": "1163799",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "MASONIC AVE: MCALLISTER ST to FULTON ST (500 - 599)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.780723",
      "longitude": "-122.447790",
      "daysHours": "Mo-Fr:9AM-10AM"
  },
  {
      "locationId": "1723810",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "03RD ST: 18TH ST to 19TH ST (2101 - 2199) -- EAST --",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1575194",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "MISSISSIPPI ST: START: 1200-1299 BLOCK to CESAR CHAVEZ ST (1200 - 1299)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.751691",
      "longitude": "-122.394374",
      "daysHours": ""
  },
  {
      "locationId": "934719",
      "name": "Santana ESG, Inc.",
      "facilityType": "truck",
      "locationDescription": "SANSOME ST: SUTTER ST to BUSH ST (1 - 99)",
      "foodItems": "Tacos: Burritos: Tortas: Quesadillas: Mexican Drinks: Aguas Frescas",
      "latitude": "37.790485",
      "longitude": "-122.400940",
      "daysHours": "Mo-Fr:11AM-3PM"
  },
  {
      "locationId": "1732583",
      "name": "Plaza Garibaldy",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: LEIDESDORFF ST to MONTGOMERY ST (449 - 499)",
      "foodItems": "Tacos: burritos: quesadillas",
      "latitude": "37.792346",
      "longitude": "-122.402385",
      "daysHours": ""
  },
  {
      "locationId": "1575179",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "03RD ST: ARTHUR AVE \\ CARGO WAY to BURKE AVE (3400 - 3498) -- WEST --",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.745729",
      "longitude": "-122.387798",
      "daysHours": ""
  },
  {
      "locationId": "1732702",
      "name": "Roadside Rotisserie Corporation / Country Grill",
      "facilityType": "truck",
      "locationDescription": "FRONT ST: BROADWAY to VALLEJO ST (800 - 899)",
      "foodItems": "Rotisserie Chicken: Ribs: Kickass Salad: Potatos w/fat dripping: chicken wrap.",
      "latitude": "37.799260",
      "longitude": "-122.399618",
      "daysHours": ""
  },
  {
      "locationId": "1174530",
      "name": "CC Acquisition LLC",
      "facilityType": "cart",
      "locationDescription": "VALENCIA ST: 16TH ST to 17TH ST (500 - 599)",
      "foodItems": "Chai Tea",
      "latitude": "37.763858",
      "longitude": "-122.422083",
      "daysHours": "Sa-Su:9AM-4PM"
  },
  {
      "locationId": "1514026",
      "name": "F \u0026 C Catering",
      "facilityType": "truck",
      "locationDescription": "TENNESSEE ST: TENNESSEE ST to 26TH ST (1500 - 1599)",
      "foodItems": "Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad",
      "latitude": "37.752242",
      "longitude": "-122.389189",
      "daysHours": ""
  },
  {
      "locationId": "1022810",
      "name": "Serendipity SF",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)",
      "foodItems": "Meatloaf: Grilled Cheese: Chicken Sandwich: Caprese Salad: Kale Salad: Fries: Sweet Potato Fries: Mac and Cheese: Mashed Potatoes",
      "latitude": "37.793304",
      "longitude": "-122.401459",
      "daysHours": "Su/We/Sa:11AM-3PM"
  },
  {
      "locationId": "1340418",
      "name": "Let's Be Frank",
      "facilityType": "cart",
      "locationDescription": "LINDEN ST: GOUGH ST to OCTAVIA ST (300 - 399)",
      "foodItems": "Hot dogs and chili",
      "latitude": "37.776039",
      "longitude": "-122.424176",
      "daysHours": ""
  },
  {
      "locationId": "1213203",
      "name": "Marengo",
      "facilityType": "truck",
      "locationDescription": "WATERLOO ST: MARENGO ST to BAY SHORE BLVD (40 - 99)",
      "foodItems": "Breakfast - egg: cheese: bacon: tomato: english muffin w/ butter: jam: or nutella: hard boiled eggs: fruit medley: water: coffee: milk: carrot juice: orange juice",
      "latitude": "37.738650",
      "longitude": "-122.406186",
      "daysHours": "Mo-We:7AM-7PM"
  },
  {
      "locationId": "1723816",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "CONNECTICUT ST: 17TH ST to MARIPOSA ST (100 - 199)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.764447",
      "longitude": "-122.397987",
      "daysHours": ""
  },
  {
      "locationId": "1332942",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "FREMONT ST: TRANSBAY HUMP to NATOMA ST (116 - 169)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.790186",
      "longitude": "-122.395472",
      "daysHours": ""
  },
  {
      "locationId": "1658394",
      "name": "BH \u0026 MT LLC",
      "facilityType": "truck",
      "locationDescription": "MARKET ST: CHURCH ST to 15TH ST (2101 - 2195) -- SOUTH --",
      "foodItems": "Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages",
      "latitude": "37.766625",
      "longitude": "-122.429511",
      "daysHours": ""
  },
  {
      "locationId": "1730563",
      "name": "DO UC US Mobile Catering",
      "facilityType": "truck",
      "locationDescription": "PARNASSUS AVE: HILLWAY AVE to 03RD AVE (400 - 599)",
      "foodItems": "Cold truck: sandwiches: salads: beverages: chips: candy: cookies: coffee: tea: drinks",
      "latitude": "37.763864",
      "longitude": "-122.458392",
      "daysHours": ""
  },
  {
      "locationId": "1351263",
      "name": "Isidoro Serrano",
      "facilityType": "cart",
      "locationDescription": "21ST ST: CAPP ST to MISSION ST (3150 - 3199)",
      "foodItems": "",
      "latitude": "37.756877",
      "longitude": "-122.418580",
      "daysHours": ""
  },
  {
      "locationId": "1199051",
      "name": "Munch India",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)",
      "foodItems": "Daily rotating menus consisting of various local \u0026 organic vegetable: poultry: meat: seafood : rice \u0026 bread dishes.",
      "latitude": "37.793304",
      "longitude": "-122.401459",
      "daysHours": "Mo/Fr:9AM-3PM"
  },
  {
      "locationId": "1568970",
      "name": "Fillmore Square",
      "facilityType": "truck",
      "locationDescription": "WEBSTER ST: EDDY ST to ELLIS ST (1201 - 1299) -- WEST --",
      "foodItems": "Breakfast and lunch items with a nod to various cultures",
      "latitude": "37.782392",
      "longitude": "-122.431115",
      "daysHours": ""
  },
  {
      "locationId": "1591810",
      "name": "Flavors of Africa",
      "facilityType": "truck",
      "locationDescription": "HOWARD ST: FREMONT ST to 01ST ST (400 - 499)",
      "foodItems": "Meat and vegi rice bowls: meat and vegi salad bowls: meat and vegi wraps: drinks and juices.",
      "latitude": "37.788530",
      "longitude": "-122.395144",
      "daysHours": ""
  },
  {
      "locationId": "1527317",
      "name": "BOWL'D ACAI, LLC.",
      "facilityType": "truck",
      "locationDescription": "NORTH POINT ST: LAGUNA ST to BUCHANAN ST (1500 - 1599)",
      "foodItems": "Acai Bowls: Poke Bowls: Smoothies: Juices",
      "latitude": "37.804578",
      "longitude": "-122.433011",
      "daysHours": ""
  },
  {
      "locationId": "1746284",
      "name": "CARDONA'S FOOD TRUCK",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 14TH ST to 15TH ST (1800 - 1899)",
      "foodItems": "Tacos: Burritos: Quesadillas: Various Drinks",
      "latitude": "37.767817",
      "longitude": "-122.420575",
      "daysHours": ""
  },
  {
      "locationId": "1729534",
      "name": "Senor Sisig",
      "facilityType": "truck",
      "locationDescription": "BROADWAY: DAVIS ST to FRONT ST (50 - 99)",
      "foodItems": "Senor Sisig: Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.Chairman Bao: Vegetable and meat sandwiches filled with Asian-flavored meats and vegetables.",
      "latitude": "37.799260",
      "longitude": "-122.399618",
      "daysHours": ""
  },
  {
      "locationId": "1738646",
      "name": "Eva's Catering",
      "facilityType": "truck",
      "locationDescription": "EVANS AVE: NAPOLEON ST \\ TOLAND ST to MARIN ST (2000 - 2099)",
      "foodItems": "Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages",
      "latitude": "37.747772",
      "longitude": "-122.397032",
      "daysHours": ""
  },
  {
      "locationId": "1163791",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "CLAY ST: BATTERY ST to SANSOME ST (400 - 499)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.795106",
      "longitude": "-122.400877",
      "daysHours": "Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM"
  },
  {
      "locationId": "1568975",
      "name": "California Kahve",
      "facilityType": "truck",
      "locationDescription": "LA PLAYA: LINCOLN WAY \\ MARTIN LUTHER KING JR DR to IRVING ST (1200 - 1299)",
      "foodItems": "Drip Coffee: Espresso Drinks: Matcha Green Tea: Black Teas: Herbal Teas: Crossaints: Savory and Sweet Breads",
      "latitude": "37.763608",
      "longitude": "-122.509596",
      "daysHours": ""
  },
  {
      "locationId": "1732544",
      "name": "Bonito Poke",
      "facilityType": "truck",
      "locationDescription": "ILLINOIS ST: 16TH ST to MARIPOSA ST \\ TERRY A FRANCOIS BLVD (400 - 599)",
      "foodItems": "Bonito Poke Bowls \u0026 Various Drinks",
      "latitude": "37.766245",
      "longitude": "-122.387356",
      "daysHours": ""
  },
  {
      "locationId": "963996",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "KIRKWOOD AVE: NEWHALL ST to PHELPS ST (1600 - 1699)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.739357",
      "longitude": "-122.391523",
      "daysHours": "Mo-Fr:4PM-5PM"
  },
  {
      "locationId": "1585473",
      "name": "San Francisco Street Foods, Inc.",
      "facilityType": "cart",
      "locationDescription": "SACRAMENTO ST: FRONT ST to BATTERY ST (300 - 399)",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.794644",
      "longitude": "-122.399644",
      "daysHours": ""
  },
  {
      "locationId": "1575182",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "BURKE AVE: START: 1500-1599 BLOCK to 03RD ST (1500 - 1599)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.744752",
      "longitude": "-122.385679",
      "daysHours": ""
  },
  {
      "locationId": "1658389",
      "name": "BH \u0026 MT LLC",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages",
      "latitude": "37.755031",
      "longitude": "-122.384531",
      "daysHours": ""
  },
  {
      "locationId": "1733612",
      "name": "Buenafe",
      "facilityType": "truck",
      "locationDescription": "MISSISSIPPI ST: 07TH ST \\ 16TH ST to 17TH ST (1 - 99)",
      "foodItems": "Tacos burritos quesadillas tortas pupusas flautas tamales",
      "latitude": "37.766125",
      "longitude": "-122.395473",
      "daysHours": ""
  },
  {
      "locationId": "1732578",
      "name": "Plaza Garibaldy",
      "facilityType": "truck",
      "locationDescription": "MONTGOMERY ST: POST ST to SUTTER ST (1 - 99)",
      "foodItems": "Tacos: burritos: quesadillas",
      "latitude": "37.789250",
      "longitude": "-122.402419",
      "daysHours": ""
  },
  {
      "locationId": "1575187",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "EVANS AVE: RANKIN ST to SELBY ST (1800 - 1890)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.744591",
      "longitude": "-122.393077",
      "daysHours": ""
  },
  {
      "locationId": "1657804",
      "name": "San Francisco Carts \u0026 Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "GEARY ST: STOCKTON ST to POWELL ST (200 - 299)",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.787243",
      "longitude": "-122.406880",
      "daysHours": ""
  },
  {
      "locationId": "1575185",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "DAVIDSON AVE: RANKIN ST to SELBY ST (1600 - 1699)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.746711",
      "longitude": "-122.392150",
      "daysHours": ""
  },
  {
      "locationId": "1591847",
      "name": "Golden Gate Halal Food",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: 07TH ST \\ CHARLES J BRENHAM PL to 08TH ST \\ GROVE ST \\ HYDE ST (1101 - 1199) -- SOUTH --",
      "foodItems": "Pulao Plates \u0026 Sandwiches: Various Drinks",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1741655",
      "name": "Truly Food \u0026 More",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 02ND ST to NEW MONTGOMERY ST (600 - 634)",
      "foodItems": "Latin Food: Tacos: Pupusas: Vegetables: Salad: Waters: Sodas",
      "latitude": "37.787973",
      "longitude": "-122.400185",
      "daysHours": ""
  },
  {
      "locationId": "1336734",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "ALABAMA ST: TREAT AVE to 15TH ST (201 - 212)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.767798",
      "longitude": "-122.412096",
      "daysHours": ""
  },
  {
      "locationId": "1334599",
      "name": "Tacos El Ojo De Agua",
      "facilityType": "truck",
      "locationDescription": "03RD ST: SOUTH PARK to VARNEY PL (548 - 586)",
      "foodItems": "Tacos: Burritos: Tortas: Quesadillas: Salads: Soup: Fruits: Juices: Soda: Water",
      "latitude": "37.780647",
      "longitude": "-122.394629",
      "daysHours": ""
  },
  {
      "locationId": "1591825",
      "name": "Cochinita",
      "facilityType": "truck",
      "locationDescription": "BEALE ST: BRYANT ST \\ DELANCEY ST to END: 500-501 BLOCK (500 - 599)",
      "foodItems": "Mexican Food: Yucatan Food: Street Food",
      "latitude": "37.786237",
      "longitude": "-122.389066",
      "daysHours": ""
  },
  {
      "locationId": "1591840",
      "name": "Tacos Rodriguez",
      "facilityType": "truck",
      "locationDescription": "EVANS AVE: KEITH ST to MENDELL ST (1201 - 1399) -- SOUTH --",
      "foodItems": "Tacos: burritos: quesadillas: soda \u0026 water",
      "latitude": "37.739111",
      "longitude": "-122.382465",
      "daysHours": ""
  },
  {
      "locationId": "1732695",
      "name": "Roadside Rotisserie Corporation / Country Grill",
      "facilityType": "truck",
      "locationDescription": "BRANNAN ST: STANFORD ST to JACK LONDON ALY (324 - 353)",
      "foodItems": "Rotisserie Chicken; Ribs; Pork Loin; Roasted Potatoes; Chicken Wrap; Kale Salad; Drinks",
      "latitude": "37.780918",
      "longitude": "-122.392417",
      "daysHours": ""
  },
  {
      "locationId": "1723797",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.761183",
      "longitude": "-122.388119",
      "daysHours": ""
  },
  {
      "locationId": "1657805",
      "name": "San Francisco Carts \u0026 Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "POST ST: STOCKTON ST to POWELL ST (300 - 399)",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.788910",
      "longitude": "-122.407196",
      "daysHours": ""
  },
  {
      "locationId": "1591841",
      "name": "Tacos Rodriguez",
      "facilityType": "truck",
      "locationDescription": "MENDELL ST: GALVEZ AVE to HUDSON AVE (600 - 699)",
      "foodItems": "Tacos: burritos: quesadillas: soda \u0026 water",
      "latitude": "37.739679",
      "longitude": "-122.386493",
      "daysHours": ""
  },
  {
      "locationId": "1336739",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "BRANNAN ST: HARRIET ST to LUCERNE ST (715 - 743)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.774449",
      "longitude": "-122.402087",
      "daysHours": ""
  },
  {
      "locationId": "1575196",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "NAPOLEON ST: EVANS AVE \\ TOLAND ST to JERROLD AVE (25 - 299)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.747586",
      "longitude": "-122.398866",
      "daysHours": ""
  },
  {
      "locationId": "1336921",
      "name": "Kettle Corn Star",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: POWELL ST to 05TH ST \\ CYRIL MAGNIN ST (865 - 899) -- SOUTH --",
      "foodItems": "Kettle Corn: Funnel Cakes: Waffles: Lemonade",
      "latitude": "37.783947",
      "longitude": "-122.407158",
      "daysHours": ""
  },
  {
      "locationId": "1723804",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "QUINT ST: ARTHUR AVE to CUSTER AVE (1 - 199)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.746471",
      "longitude": "-122.388991",
      "daysHours": ""
  },
  {
      "locationId": "1332949",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "MENDELL ST: GALVEZ AVE to HUDSON AVE (600 - 699)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.739379",
      "longitude": "-122.386338",
      "daysHours": ""
  },
  {
      "locationId": "1591780",
      "name": "Street Meet",
      "facilityType": "truck",
      "locationDescription": "LARKIN ST: GROVE ST to FULTON ST (100 - 199)",
      "foodItems": "Burritos: Tacos: Quesadillas: Tortas: Carne Asada Fries and various drinks",
      "latitude": "37.779159",
      "longitude": "-122.415808",
      "daysHours": ""
  },
  {
      "locationId": "1535610",
      "name": "Wu Wei LLC dba MoBowl",
      "facilityType": "truck",
      "locationDescription": "HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)",
      "foodItems": "Various types of meat: veggie: and seafood bowls.",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1723818",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "EVANS AVE: NAPOLEON ST \\ TOLAND ST to MARIN ST (2000 - 2099)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.747772",
      "longitude": "-122.397032",
      "daysHours": ""
  },
  {
      "locationId": "1336731",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.743831",
      "longitude": "-122.377797",
      "daysHours": ""
  },
  {
      "locationId": "1163790",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "TREAT AVE: DIVISION ST \\ FLORIDA ST to ALAMEDA ST (1 - 99)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.768307",
      "longitude": "-122.412000",
      "daysHours": "Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM"
  },
  {
      "locationId": "1585472",
      "name": "San Francisco Street Foods, Inc.",
      "facilityType": "cart",
      "locationDescription": "NEW MONTGOMERY ST: MARKET ST \\ MONTGOMERY ST intersection",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.789392",
      "longitude": "-122.401825",
      "daysHours": ""
  },
  {
      "locationId": "1514025",
      "name": "F \u0026 C Catering",
      "facilityType": "truck",
      "locationDescription": "PENNSYLVANIA AVE: 22ND ST to 23RD ST (700 - 899)",
      "foodItems": "Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad",
      "latitude": "37.755534",
      "longitude": "-122.393925",
      "daysHours": ""
  },
  {
      "locationId": "1660691",
      "name": "Halal Cart, LLC",
      "facilityType": "cart",
      "locationDescription": "MONTGOMERY ST: CALIFORNIA ST to SACRAMENTO ST (400 - 499)",
      "foodItems": "kebabs: halal gyro: grilled halal meat: refreshments",
      "latitude": "37.793149",
      "longitude": "-122.402567",
      "daysHours": ""
  },
  {
      "locationId": "1735099",
      "name": "Think is Good Inc.",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)",
      "foodItems": "Lobster rolls: crab rolls: lobster burritos: crab burritos: chicken burritos: fish burritos: chicken burritos: poke bowls: soups: chips \u0026 soda.",
      "latitude": "37.793262",
      "longitude": "-122.401789",
      "daysHours": ""
  },
  {
      "locationId": "1722089",
      "name": "Casita Vegana",
      "facilityType": "truck",
      "locationDescription": "JOHN MUIR DR: LAKE MERCED BLVD to SKYLINE BLVD (200 - 699)",
      "foodItems": "Coffee: Vegan Pastries: Vegan Hot Dogs: Vegan Tamales: Te: Vegan Shakes",
      "latitude": "37.721890",
      "longitude": "-122.492521",
      "daysHours": ""
  },
  {
      "locationId": "1090081",
      "name": "El Tonayanse #4 / #36",
      "facilityType": "truck",
      "locationDescription": "HARRISON ST: 13TH ST to 14TH ST (1700 - 1799)",
      "foodItems": "Tacos: Burritos: Tortas: Quesadillas",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": "Mo-Su:10AM-7PM"
  },
  {
      "locationId": "959619",
      "name": "Kabob Trolley, LLC",
      "facilityType": "cart",
      "locationDescription": "04TH ST: TOWNSEND ST to KING ST (700 - 799)",
      "foodItems": "Gyros: Kebobs: refreshments and dessert",
      "latitude": "37.777642",
      "longitude": "-122.393418",
      "daysHours": "Mo-Su:10AM-8PM"
  },
  {
      "locationId": "963987",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "FITZGERALD AVE: HAWES ST to INGALLS ST (1100 - 1199)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.720175",
      "longitude": "-122.389407",
      "daysHours": "Mo-Fr:2PM-3PM"
  },
  {
      "locationId": "1741512",
      "name": "La Jefa",
      "facilityType": "truck",
      "locationDescription": "BAY SHORE BLVD: WATERLOO ST to MARENGO ST (501 - 559) -- EAST --",
      "foodItems": "Tacos: burritos: quesadillas: tortas: nachos (refried beans: cheese sauce: salsa fresca): carnes (beef: chicken: marinated pork: fried pork): canned beans: rice: sodas: horchata drinks.",
      "latitude": "37.738727",
      "longitude": "-122.406736",
      "daysHours": ""
  },
  {
      "locationId": "1575183",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "BURKE AVE: START: 1500-1599 BLOCK to 03RD ST (1500 - 1599)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.743713",
      "longitude": "-122.385965",
      "daysHours": ""
  },
  {
      "locationId": "1332941",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "FOLSOM ST: 12TH ST to 13TH ST (1600 - 1699)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.770138",
      "longitude": "-122.415983",
      "daysHours": ""
  },
  {
      "locationId": "1552671",
      "name": "Izzy's Cheesesteaks",
      "facilityType": "truck",
      "locationDescription": "BATTERY ST: CALIFORNIA ST to HALLECK ST (200 - 230)",
      "foodItems": "Cheesesteaks: French Fries: and Drinks",
      "latitude": "37.793447",
      "longitude": "-122.400344",
      "daysHours": ""
  },
  {
      "locationId": "1723807",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "MISSION BAY BLVD SOUTH: 03RD ST \\ MISSION BAY BLVD to 04TH ST \\ MISSION BAY BLVD (501 - 599)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.770703",
      "longitude": "-122.390790",
      "daysHours": ""
  },
  {
      "locationId": "1336743",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "ALANA WAY: COUNTY LINE intersection",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1163786",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "02ND ST: FEDERAL ST to SOUTH PARK (519 - 548)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.782424",
      "longitude": "-122.393236",
      "daysHours": "Mo-Fr:7AM-8AM/10AM-11AM/11AM-12PM"
  },
  {
      "locationId": "1723826",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "17TH ST: MISSION ST to HOFF ST (3300 - 3343)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.763156",
      "longitude": "-122.420322",
      "daysHours": ""
  },
  {
      "locationId": "1728067",
      "name": "Leo's Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "MISSION ST: 19TH ST to 20TH ST (2300 - 2399)",
      "foodItems": "Hot dogs and related toppings: non alcoholic beverages",
      "latitude": "37.760087",
      "longitude": "-122.418806",
      "daysHours": ""
  },
  {
      "locationId": "1723824",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "ILLINOIS ST: 25TH ST to ILLINOIS ST (1500 - 1599)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.752405",
      "longitude": "-122.387000",
      "daysHours": ""
  },
  {
      "locationId": "1730564",
      "name": "DO UC US Mobile Catering",
      "facilityType": "truck",
      "locationDescription": "03RD ST: MISSION BAY BLVD to WARRIORS WAY (1401 - 1599) -- EAST --",
      "foodItems": "Cold truck: sandwiches: salads: beverages: chips: candy: cookies: coffee: tea: drinks",
      "latitude": "37.770892",
      "longitude": "-122.389169",
      "daysHours": ""
  },
  {
      "locationId": "1657803",
      "name": "San Francisco Carts \u0026 Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "GEARY ST: GRANT AVE to STOCKTON ST (100 - 199)",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.787914",
      "longitude": "-122.405271",
      "daysHours": ""
  },
  {
      "locationId": "1729508",
      "name": "Senor Sisig",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 05TH ST to MINT ST (900 - 930)",
      "foodItems": "Senor Sisig: Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.",
      "latitude": "37.782154",
      "longitude": "-122.406601",
      "daysHours": ""
  },
  {
      "locationId": "1200178",
      "name": "SF Cart Project",
      "facilityType": "truck",
      "locationDescription": "MISSION BAY BLVD SOUTH: 03RD ST \\ MISSION BAY BLVD to 04TH ST \\ MISSION BAY BLVD (501 - 599)",
      "foodItems": "7 Multiple Trucks on rotation (1 on Mission Bay Blvd South \u0026 6 on 4th St).   Serving everything but hot dogs",
      "latitude": "37.769124",
      "longitude": "-122.391475",
      "daysHours": "Mo-Fr:10AM-3PM"
  },
  {
      "locationId": "1658366",
      "name": "Treats by the Bay LLC",
      "facilityType": "truck",
      "locationDescription": "POST ST: MONTGOMERY ST to LICK PL (1 - 40)",
      "foodItems": "Sandwich: Donuts: Coffee: Soft Serve Ice Cream: Drinks",
      "latitude": "37.789250",
      "longitude": "-122.402419",
      "daysHours": ""
  },
  {
      "locationId": "1163783",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "PINE ST: POLK ST to VAN NESS AVE (1500 - 1599)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.789827",
      "longitude": "-122.421126",
      "daysHours": "Mo-Fr:10AM-11AM"
  },
  {
      "locationId": "1575198",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "NEWHALL ST: MENDELL ST to EVANS AVE (200 - 399)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.743014",
      "longitude": "-122.384460",
      "daysHours": ""
  },
  {
      "locationId": "1332944",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "HARRISON ST: BEALE ST to FREMONT ST \\ I-80 W OFF RAMP (300 - 399)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.787322",
      "longitude": "-122.392224",
      "daysHours": ""
  },
  {
      "locationId": "1723819",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "HARRISON ST: MERLIN ST to OAK GROVE ST (924 - 950)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.778389",
      "longitude": "-122.403192",
      "daysHours": ""
  },
  {
      "locationId": "1733451",
      "name": "Papalote Inc.",
      "facilityType": "truck",
      "locationDescription": "SPEAR ST: MARKET ST to MISSION ST (1 - 99)",
      "foodItems": "Mexican; Burritos: Burrito Bowls: Salads",
      "latitude": "37.792536",
      "longitude": "-122.394593",
      "daysHours": ""
  },
  {
      "locationId": "946047",
      "name": "The Huge Hotdog Concession",
      "facilityType": "truck",
      "locationDescription": "POLK ST: BUSH ST to AUSTIN ST \\ FRANK NORRIS ST (1300 - 1329)",
      "foodItems": "Hotdogs: chips: soda: nuts: crackers",
      "latitude": "37.788877",
      "longitude": "-122.420091",
      "daysHours": "Su/Fr/Sa:8PM-2AM"
  },
  {
      "locationId": "1163784",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "VALENCIA ST: 18TH ST to 19TH ST (700 - 799)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.760957",
      "longitude": "-122.421824",
      "daysHours": "Mo-Fr:11AM-12PM"
  },
  {
      "locationId": "1515717",
      "name": "Treats by the Bay LLC",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: STEUART ST to SPEAR ST (1 - 99) -- SOUTH --",
      "foodItems": "Ice Cream: Donuts",
      "latitude": "37.793872",
      "longitude": "-122.394865",
      "daysHours": ""
  },
  {
      "locationId": "1741654",
      "name": "Truly Food \u0026 More",
      "facilityType": "truck",
      "locationDescription": "SANSOME ST: PINE ST to CALIFORNIA ST (200 - 299)",
      "foodItems": "Latin Food: Tacos: Pupusas: Vegetables: Salad: Waters: Sodas",
      "latitude": "37.792390",
      "longitude": "-122.401270",
      "daysHours": ""
  },
  {
      "locationId": "963979",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "INGERSON AVE: JENNINGS ST to 03RD ST (1100 - 1199)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.720449",
      "longitude": "-122.395915",
      "daysHours": "Mo-Fr:12PM-1PM"
  },
  {
      "locationId": "1658392",
      "name": "BH \u0026 MT LLC",
      "facilityType": "truck",
      "locationDescription": "GROVE ST: BRODERICK ST to BAKER ST (1400 - 1499)",
      "foodItems": "Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages",
      "latitude": "37.775290",
      "longitude": "-122.440731",
      "daysHours": ""
  },
  {
      "locationId": "751253",
      "name": "Pipo's Grill",
      "facilityType": "truck",
      "locationDescription": "FOLSOM ST: 14TH ST to 15TH ST (1800 - 1899)",
      "foodItems": "Tacos: Burritos: Hot Dogs: and Hamburgers",
      "latitude": "37.767852",
      "longitude": "-122.416105",
      "daysHours": ""
  },
  {
      "locationId": "1730565",
      "name": "DO UC US Mobile Catering",
      "facilityType": "truck",
      "locationDescription": "04TH ST: MISSION BAY BLVD to NELSON RISING LN (1400 - 1499)",
      "foodItems": "Cold truck: sandwiches: salads: beverages: chips: candy: cookies: coffee: tea: drinks",
      "latitude": "37.769898",
      "longitude": "-122.391098",
      "daysHours": ""
  },
  {
      "locationId": "1042438",
      "name": "Ruru Juice LLC",
      "facilityType": "truck",
      "locationDescription": "SUTTER ST: SANSOME ST to MONTGOMERY ST (50 - 99)",
      "foodItems": "Smoothies: Juice: Salads: Fruit Bowls: Soup",
      "latitude": "37.790346",
      "longitude": "-122.401850",
      "daysHours": "Mo/We/Fr:9AM-1PM"
  },
  {
      "locationId": "1336738",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "BEALE ST: HARRISON ST to BRYANT ST \\ DELANCEY ST (400 - 499)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.786905",
      "longitude": "-122.390920",
      "daysHours": ""
  },
  {
      "locationId": "1591823",
      "name": "Cochinita",
      "facilityType": "truck",
      "locationDescription": "TOWNSEND ST: LUSK ST to 04TH ST (252 - 299)",
      "foodItems": "Mexican Food: Yucatan Food: Street Food",
      "latitude": "37.777755",
      "longitude": "-122.394808",
      "daysHours": ""
  },
  {
      "locationId": "1297766",
      "name": "Tacos Lol-Tun",
      "facilityType": "truck",
      "locationDescription": "ARMSTRONG AVE: KEITH ST to 03RD ST (1600 - 1699)",
      "foodItems": "Tortas: burritos: tacos: ensaladas: sodas",
      "latitude": "37.726594",
      "longitude": "-122.392356",
      "daysHours": "Mo/We/Fr:7AM-4PM"
  },
  {
      "locationId": "1733788",
      "name": "MOMO INNOVATION LLC",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: DAVIS ST to FRONT ST (100 - 199)",
      "foodItems": "MOMO Spicy Noodle: POPO's Noodle: Spicy Chicken Noodle: Rice Noodles",
      "latitude": "37.792949",
      "longitude": "-122.398099",
      "daysHours": ""
  },
  {
      "locationId": "1336735",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "CESAR CHAVEZ ST: INDIANA ST to IOWA ST (1300 - 1399)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.749256",
      "longitude": "-122.390975",
      "daysHours": ""
  },
  {
      "locationId": "1738308",
      "name": "San Francisco's Hometown Creamery",
      "facilityType": "truck",
      "locationDescription": "GEARY ST: STOCKTON ST to POWELL ST (200 - 299)",
      "foodItems": "Ice Cream \u0026 Waffle Cones",
      "latitude": "37.787136",
      "longitude": "-122.407719",
      "daysHours": ""
  },
  {
      "locationId": "1514030",
      "name": "F \u0026 C Catering",
      "facilityType": "truck",
      "locationDescription": "MINNESOTA ST: 20TH ST to 22ND ST (800 - 999)",
      "foodItems": "Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1723812",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "ALEMANY BLVD: FOLSOM ST to ELLSWORTH ST \\ I-280 S OFF RAMP \\ I-280 S ON RAMP (400 - 498) -- NORTH --",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.733142",
      "longitude": "-122.414569",
      "daysHours": ""
  },
  {
      "locationId": "1591784",
      "name": "FRUITYMANIA",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: 04TH ST \\ ELLIS ST \\ STOCKTON ST to POWELL ST (801 - 863) -- SOUTH --",
      "foodItems": "Fruit Salads: Fruit Drinks: Can Soda: Water",
      "latitude": "37.784990",
      "longitude": "-122.405677",
      "daysHours": ""
  },
  {
      "locationId": "963994",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "INGALLS ST: GEORGE CT to OAKDALE AVE (1350 - 1399)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.730374",
      "longitude": "-122.381862",
      "daysHours": "Mo-Fr:4PM-5PM"
  },
  {
      "locationId": "1729535",
      "name": "Senor Sisig",
      "facilityType": "truck",
      "locationDescription": "10TH ST: FELL ST \\ MARKET ST \\ POLK ST to STEVENSON ST (1 - 18)",
      "foodItems": "Senor Sisig: Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.Chairman Bao: Vegetable and meat sandwiches filled with Asian-flavored meats and vegetables.",
      "latitude": "37.775826",
      "longitude": "-122.417250",
      "daysHours": ""
  },
  {
      "locationId": "1729543",
      "name": "Senor Sisig",
      "facilityType": "truck",
      "locationDescription": "PINE ST: SANSOME ST to CENTURY PL (300 - 340)",
      "foodItems": "Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1723811",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "03RD ST: MARIN ST to ARTHUR AVE \\ CARGO WAY (3201 - 3399) -- EAST --",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.748445",
      "longitude": "-122.386879",
      "daysHours": ""
  },
  {
      "locationId": "1658390",
      "name": "BH \u0026 MT LLC",
      "facilityType": "truck",
      "locationDescription": "DOLORES ST: 14TH ST intersection",
      "foodItems": "Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages",
      "latitude": "37.768320",
      "longitude": "-122.427111",
      "daysHours": ""
  },
  {
      "locationId": "1534033",
      "name": "Off the Grid Services, LLC",
      "facilityType": "unknown",
      "locationDescription": "MINNA ST: SHAW ALY to 02ND ST (44 - 99)",
      "foodItems": "N/A",
      "latitude": "37.787910",
      "longitude": "-122.398361",
      "daysHours": ""
  },
  {
      "locationId": "1723795",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.730004",
      "longitude": "-122.478186",
      "daysHours": ""
  },
  {
      "locationId": "1660695",
      "name": "Halal Cart of San Francisco",
      "facilityType": "cart",
      "locationDescription": "CALIFORNIA ST: LEIDESDORFF ST to MONTGOMERY ST (449 - 499)",
      "foodItems": "Halal Gyro over Rice: Halal Chicken over Rice: Halal Gyro: and Chicken Sandwich",
      "latitude": "37.793149",
      "longitude": "-122.402567",
      "daysHours": ""
  },
  {
      "locationId": "1569152",
      "name": "Datam SF LLC dba Anzu To You",
      "facilityType": "truck",
      "locationDescription": "TAYLOR ST: BAY ST to NORTH POINT ST (2500 - 2599)",
      "foodItems": "Asian Fusion - Japanese Sandwiches/Sliders/Misubi",
      "latitude": "37.805885",
      "longitude": "-122.415945",
      "daysHours": ""
  },
  {
      "locationId": "1730231",
      "name": "Rita's Catering",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 06TH ST to 07TH ST (1000 - 1099)",
      "foodItems": "Filipino Food",
      "latitude": "37.780694",
      "longitude": "-122.409669",
      "daysHours": ""
  },
  {
      "locationId": "1090089",
      "name": "Tacos El Primo",
      "facilityType": "truck",
      "locationDescription": "QUINT ST: DAVIDSON AVE to EVANS AVE (300 - 399)",
      "foodItems": "Mexican food: tacos: burritos: tortas: various meat and chicken and fish plate: chile relleno plate: fish plate: bread: flan: rice pudding: bread: fruit juice: vegetable juice: coffee: tea",
      "latitude": "37.744889",
      "longitude": "-122.390972",
      "daysHours": "Mo-Fr:10AM-4PM"
  },
  {
      "locationId": "1089698",
      "name": "El Tonayense #60",
      "facilityType": "truck",
      "locationDescription": "HARRISON ST: MISTRAL ST to 20TH ST (2345 - 2399)",
      "foodItems": "Tacos: Burritos: Tortas: Quesadillas: Drinks",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": "Mo-Su:4PM-10PM"
  },
  {
      "locationId": "1163792",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "THOMAS MORE WAY: BROTHERHOOD WAY \\ CHUMASERO DR to SAN FRANCISCO GOLF CLUB RD (1 - 99)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.710003",
      "longitude": "-122.471412",
      "daysHours": "Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM"
  },
  {
      "locationId": "1735062",
      "name": "Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's",
      "facilityType": "truck",
      "locationDescription": "25TH ST: ALABAMA ST to HARRISON ST (3042 - 3099)",
      "foodItems": "Tacos: burritos: soda \u0026 juice",
      "latitude": "37.750932",
      "longitude": "-122.411420",
      "daysHours": ""
  },
  {
      "locationId": "1575190",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "INNES AVE: EARL ST to ARELIOUS WALKER DR (700 - 799)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.730906",
      "longitude": "-122.373303",
      "daysHours": ""
  },
  {
      "locationId": "1738647",
      "name": "Eva's Catering",
      "facilityType": "truck",
      "locationDescription": "INGALLS ST: CARROLL AVE to DONNER AVE (2600 - 2699)",
      "foodItems": "Corndogs: fried burrito: rice placet: soda: water: sandwiches: soup: noodle plates",
      "latitude": "37.722629",
      "longitude": "-122.390062",
      "daysHours": ""
  },
  {
      "locationId": "1163788",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: ANNIE ST to 03RD ST (663 - 699)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": "Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM"
  },
  {
      "locationId": "1585476",
      "name": "San Francisco Street Foods, Inc.",
      "facilityType": "cart",
      "locationDescription": "POST ST: KEARNY ST to ROBERT KIRK LN (100 - 140)",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.789233",
      "longitude": "-122.405579",
      "daysHours": ""
  },
  {
      "locationId": "963983",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "JENNINGS ST: KEY AVE to LE CONTE AVE (3400 - 3499)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.718522",
      "longitude": "-122.396661",
      "daysHours": "Mo-Fr:1PM-2PM"
  },
  {
      "locationId": "1723794",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.740304",
      "longitude": "-122.406060",
      "daysHours": ""
  },
  {
      "locationId": "1591842",
      "name": "Tacos Rodriguez",
      "facilityType": "truck",
      "locationDescription": "OAKDALE AVE: INDUSTRIAL ST \\ SELBY ST to TOLAND ST (2100 - 2199)",
      "foodItems": "Tacos: burritos: quesadillas: soda \u0026 water",
      "latitude": "37.740995",
      "longitude": "-122.401172",
      "daysHours": ""
  },
  {
      "locationId": "1723800",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.762008",
      "longitude": "-122.385442",
      "daysHours": ""
  },
  {
      "locationId": "1723829",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "MISSOURI ST: 20TH ST to SIERRA ST (500 - 630)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.759304",
      "longitude": "-122.395902",
      "daysHours": ""
  },
  {
      "locationId": "1660696",
      "name": "Halal Cart of San Francisco",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: STEUART ST to SPEAR ST (1 - 99) -- SOUTH --",
      "foodItems": "Halal Gyro over Rice: Halal Chicken over Rice: Halal Gyro: and Chicken Sandwich",
      "latitude": "37.793872",
      "longitude": "-122.394865",
      "daysHours": ""
  },
  {
      "locationId": "1738310",
      "name": "San Francisco's Hometown Creamery",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)",
      "foodItems": "Ice Cream: Waffle Cones",
      "latitude": "37.792796",
      "longitude": "-122.401353",
      "daysHours": ""
  },
  {
      "locationId": "1336744",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "LANE ST: VAN DYKE AVE to 03RD ST (2100 - 2199)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.728788",
      "longitude": "-122.392295",
      "daysHours": ""
  },
  {
      "locationId": "1744303",
      "name": "BOWL'D ACAI, LLC.",
      "facilityType": "truck",
      "locationDescription": "LARKIN ST: FULTON ST to MCALLISTER ST (200 - 299)",
      "foodItems": "Acai Bowls: Smoothies: Juices",
      "latitude": "37.780215",
      "longitude": "-122.416026",
      "daysHours": ""
  },
  {
      "locationId": "1733798",
      "name": "MOMO INNOVATION LLC",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: ANNIE ST to 03RD ST (663 - 699)",
      "foodItems": "Noodles: Meat \u0026 Drinks",
      "latitude": "37.786558",
      "longitude": "-122.401033",
      "daysHours": ""
  },
  {
      "locationId": "1585966",
      "name": "Curry Up Now",
      "facilityType": "truck",
      "locationDescription": "SANSOME ST: GOLD ST to PACIFIC AVE (705 - 799)",
      "foodItems": "Indian Street Food: Tikka Masala Burritos; Samosas; Sexy Fries (Indian-inspired poutine); Naughty Naans; Deconstructed Samosas; Kathi Rolls; Lassis and Lemonades",
      "latitude": "37.796949",
      "longitude": "-122.402183",
      "daysHours": ""
  },
  {
      "locationId": "1738245",
      "name": "Zuri Food Facilities",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: LEIDESDORFF ST to MONTGOMERY ST (449 - 499)",
      "foodItems": "Peruvian Food Served Hot",
      "latitude": "37.792346",
      "longitude": "-122.402385",
      "daysHours": ""
  },
  {
      "locationId": "1744305",
      "name": "BOWL'D ACAI, LLC.",
      "facilityType": "truck",
      "locationDescription": "MONTGOMERY ST: CALIFORNIA ST to SACRAMENTO ST (400 - 499)",
      "foodItems": "Acai Bowls: Smoothies: Juices",
      "latitude": "37.793577",
      "longitude": "-122.403230",
      "daysHours": ""
  },
  {
      "locationId": "1741752",
      "name": "San Pancho's Tacos",
      "facilityType": "truck",
      "locationDescription": "CAPITOL AVE: DE MONTFORT AVE to OCEAN AVE (1200 - 1299)",
      "foodItems": "Tacos: Burritos: Quesadillas: Tortas: Nachos: Hot Dogs:Soda: Water: Fruit Drinks",
      "latitude": "37.724298",
      "longitude": "-122.459377",
      "daysHours": ""
  },
  {
      "locationId": "1514031",
      "name": "F \u0026 C Catering",
      "facilityType": "truck",
      "locationDescription": "MINNESOTA ST: 23RD ST to 24TH ST (1200 - 1299)",
      "foodItems": "Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad",
      "latitude": "37.754252",
      "longitude": "-122.389381",
      "daysHours": ""
  },
  {
      "locationId": "1585967",
      "name": "Curry Up Now",
      "facilityType": "truck",
      "locationDescription": "03RD ST: BRANNAN ST to TOWNSEND ST (600 - 699)",
      "foodItems": "Indian Street Food: Tikka Masala Burritos; Samosas; Sexy Fries (Indian-inspired poutine); Naughty Naans; Deconstructed Samosas; Kathi Rolls; Lassis and Lemonades",
      "latitude": "37.780077",
      "longitude": "-122.393767",
      "daysHours": ""
  },
  {
      "locationId": "1660642",
      "name": "The Geez Freeze",
      "facilityType": "truck",
      "locationDescription": "18TH ST: DOLORES ST to CHURCH ST (3700 - 3799)",
      "foodItems": "Snow Cones: Soft Serve Ice Cream \u0026 Frozen Virgin Daiquiris",
      "latitude": "37.762019",
      "longitude": "-122.427306",
      "daysHours": ""
  },
  {
      "locationId": "1735064",
      "name": "Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 10TH ST to 11TH ST (1400 - 1499)",
      "foodItems": "Tacos: burritos: soda \u0026 juice",
      "latitude": "37.775228",
      "longitude": "-122.417466",
      "daysHours": ""
  },
  {
      "locationId": "1750911",
      "name": "The New York Frankfurter Co. of CA, Inc. DBA: Annie's Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "STOCKTON ST: OFARRELL ST to GEARY ST (100 - 199)",
      "foodItems": "Soft Pretzels: hot dogs: sausage: chips: popcorn: soda: espresso: cappucino: pastries: ice cream: italian sausages: shish-ka-bob: churros: juice: water: various drinks",
      "latitude": "37.786856",
      "longitude": "-122.406892",
      "daysHours": ""
  },
  {
      "locationId": "1741554",
      "name": "Philz Coffee Truck",
      "facilityType": "truck",
      "locationDescription": "SUTTER ST: POWELL ST to MASON ST (500 - 599)",
      "foodItems": "Hot coffee: iced coffee: hot chocolate: tea: pastries",
      "latitude": "37.789385",
      "longitude": "-122.409591",
      "daysHours": ""
  },
  {
      "locationId": "1509787",
      "name": "El Gallo Jiro",
      "facilityType": "truck",
      "locationDescription": "23RD ST: TREAT AVE to FOLSOM ST (3052 - 3099)",
      "foodItems": "Burritos: Giros: Tortas: Quesadillas: Tacos \u0026 Various Beverages",
      "latitude": "37.753928",
      "longitude": "-122.413323",
      "daysHours": ""
  },
  {
      "locationId": "1568971",
      "name": "Fillmore Square",
      "facilityType": "truck",
      "locationDescription": "EDDY ST: WEBSTER ST to FILLMORE ST (1400 - 1499)",
      "foodItems": "Breakfast and lunch items with a nod to various cultures",
      "latitude": "37.781276",
      "longitude": "-122.431840",
      "daysHours": ""
  },
  {
      "locationId": "1341056",
      "name": "Kettle Corn Star",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: YERBA BUENA LN to 04TH ST \\ ELLIS ST \\ STOCKTON ST (767 - 799) -- SOUTH --",
      "foodItems": "Kettle Corn: Funnel Cakes: Lemonade: Beverages: Flan: Hot Dogs: Falafel: Hot and Cold Sandwiches: French Fries: Baklava and Pastries",
      "latitude": "37.785396",
      "longitude": "-122.404391",
      "daysHours": ""
  },
  {
      "locationId": "1514027",
      "name": "F \u0026 C Catering",
      "facilityType": "truck",
      "locationDescription": "25TH ST: MICHIGAN ST to ILLINOIS ST (700 - 799)",
      "foodItems": "Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad",
      "latitude": "37.753381",
      "longitude": "-122.386368",
      "daysHours": ""
  },
  {
      "locationId": "963989",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "YOSEMITE AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.725182",
      "longitude": "-122.388193",
      "daysHours": "Mo-Fr:2PM-3PM"
  },
  {
      "locationId": "1089697",
      "name": "El Tonayense #60",
      "facilityType": "truck",
      "locationDescription": "HARRISON ST: 17TH ST to MARIPOSA ST (2050 - 2149)",
      "foodItems": "Tacos: Burritos: Tortas: Quesadillas: Drinks",
      "latitude": "37.763108",
      "longitude": "-122.413455",
      "daysHours": "Mo-Su:10AM-4PM"
  },
  {
      "locationId": "1733610",
      "name": "Buenafe",
      "facilityType": "truck",
      "locationDescription": "RANKIN ST: DAVIDSON AVE to EVANS AVE (200 - 299)",
      "foodItems": "Tacos: Burritos: Quesadillas: Tortas",
      "latitude": "37.745749",
      "longitude": "-122.392481",
      "daysHours": ""
  },
  {
      "locationId": "1587393",
      "name": "Truly Food \u0026 More",
      "facilityType": "truck",
      "locationDescription": "GENEVA AVE: PRAGUE ST to LINDA VISTA STPS (1500 - 1598) -- SOUTH --",
      "foodItems": "Latin Food: Tacos: Pupusas: Vegetables: Salad: Water: Sodas",
      "latitude": "37.712303",
      "longitude": "-122.431644",
      "daysHours": ""
  },
  {
      "locationId": "1585475",
      "name": "San Francisco Street Foods, Inc.",
      "facilityType": "cart",
      "locationDescription": "DRUMM ST: CALIFORNIA ST intersection",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.794331",
      "longitude": "-122.395811",
      "daysHours": ""
  },
  {
      "locationId": "953001",
      "name": "Wonder Philly",
      "facilityType": "cart",
      "locationDescription": "04TH ST: BERRY ST to MISSION CREEK (900 - 999)",
      "foodItems": "Hot dogs: sausages: cheesesteaks: chips: drinks",
      "latitude": "37.774338",
      "longitude": "-122.394053",
      "daysHours": "Mo-We:9AM-5PM"
  },
  {
      "locationId": "1332935",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "01ST ST: CLEMENTINA ST to FOLSOM ST (245 - 299)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.787900",
      "longitude": "-122.394594",
      "daysHours": ""
  },
  {
      "locationId": "1723802",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.758303",
      "longitude": "-122.393514",
      "daysHours": ""
  },
  {
      "locationId": "1591839",
      "name": "Tacos Rodriguez",
      "facilityType": "truck",
      "locationDescription": "SANSOME ST: SUTTER ST to BUSH ST (1 - 99)",
      "foodItems": "Tacos: burritos: quesadillas: soda \u0026 water",
      "latitude": "37.790485",
      "longitude": "-122.400940",
      "daysHours": ""
  },
  {
      "locationId": "1744376",
      "name": "HalalCartSF LLC",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: FREMONT ST \\ FRONT ST to 01ST ST \\ BUSH ST (401 - 499) -- SOUTH --",
      "foodItems": "Gyros: Kebabs: soft drinks: and water",
      "latitude": "37.790947",
      "longitude": "-122.398634",
      "daysHours": ""
  },
  {
      "locationId": "1575193",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "MARIN ST: KANSAS ST to HWY 101 N ON RAMP (2500 - 2599)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.747616",
      "longitude": "-122.401977",
      "daysHours": ""
  },
  {
      "locationId": "1591824",
      "name": "Cochinita",
      "facilityType": "truck",
      "locationDescription": "02ND ST: BRYANT ST to TABER PL (500 - 518)",
      "foodItems": "Mexican Food: Yucatan Food: Street Food",
      "latitude": "37.783171",
      "longitude": "-122.392901",
      "daysHours": ""
  },
  {
      "locationId": "1735284",
      "name": "El Alambre",
      "facilityType": "truck",
      "locationDescription": "SHOTWELL ST: 14TH ST to 15TH ST (1 - 99)",
      "foodItems": "Tacos: Burritos: Quesadillas: Tortas",
      "latitude": "37.767852",
      "longitude": "-122.416105",
      "daysHours": ""
  },
  {
      "locationId": "1732700",
      "name": "Roadside Rotisserie Corporation / Country Grill",
      "facilityType": "truck",
      "locationDescription": "BUSH ST: 01ST ST \\ MARKET ST to BATTERY ST (1 - 99)",
      "foodItems": "Rotisserie Chicken: Ribs: Kickass Salad: Potatos w/fat dripping: chicken wrap.",
      "latitude": "37.790922",
      "longitude": "-122.400100",
      "daysHours": ""
  },
  {
      "locationId": "1738247",
      "name": "Zuri Food Facilities",
      "facilityType": "truck",
      "locationDescription": "MARIPOSA ST: ARKANSAS ST to CAROLINA ST (1500 - 1699)",
      "foodItems": "Peruvian Food Served Hot",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1658693",
      "name": "Bonito Poke",
      "facilityType": "truck",
      "locationDescription": "01ST ST: HOWARD ST to TEHAMA ST (200 - 231)",
      "foodItems": "Bonito Poke Bowls \u0026 Various Drinks",
      "latitude": "37.787989",
      "longitude": "-122.396101",
      "daysHours": ""
  },
  {
      "locationId": "1336736",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "CESAR CHAVEZ ST: CONNECTICUT ST to EVANS AVE (1900 - 2099)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.750237",
      "longitude": "-122.397818",
      "daysHours": ""
  },
  {
      "locationId": "1729512",
      "name": "Senor Sisig",
      "facilityType": "truck",
      "locationDescription": "ELLIS ST: POWELL ST to CYRIL MAGNIN ST (100 - 148)",
      "foodItems": "Filipino fusion food: taco: burrito: nachos: rice plates",
      "latitude": "37.785610",
      "longitude": "-122.408155",
      "daysHours": ""
  },
  {
      "locationId": "1621287",
      "name": "Street Meet",
      "facilityType": "truck",
      "locationDescription": "VALENCIA ST: 14TH ST to ROSA PARKS LN (300 - 337)",
      "foodItems": "Burritos: Tacos: Tortas: Quesadillas \u0026 Various Drinks.",
      "latitude": "37.767855",
      "longitude": "-122.422484",
      "daysHours": ""
  },
  {
      "locationId": "1738641",
      "name": "Eva's Catering",
      "facilityType": "truck",
      "locationDescription": "ORTEGA ST: 18TH AVE to 19TH AVE (1100 - 1199)",
      "foodItems": "Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages",
      "latitude": "37.752124",
      "longitude": "-122.475872",
      "daysHours": ""
  },
  {
      "locationId": "1163795",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "MINNESOTA ST: 23RD ST to 24TH ST (1200 - 1299)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.754615",
      "longitude": "-122.390388",
      "daysHours": "Mo-Fr:1PM-2PM"
  },
  {
      "locationId": "1163405",
      "name": "Julie's Hot Dogs",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 19TH ST to 20TH ST (2300 - 2399)",
      "foodItems": "Hot dogs: Bacon wrapped hot dogs: soda: water: sports drinks: energy drinks: chips",
      "latitude": "37.759240",
      "longitude": "-122.418544",
      "daysHours": "Su/Fr/Sa:12AM-3AM;Th/Fr/Sa:10PM-12AM"
  },
  {
      "locationId": "1163798",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": "Mo-Fr:6AM-7AM"
  },
  {
      "locationId": "1575195",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "NAPOLEON ST: EVANS AVE \\ TOLAND ST to JERROLD AVE (25 - 299)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.746756",
      "longitude": "-122.400906",
      "daysHours": ""
  },
  {
      "locationId": "1733611",
      "name": "Buenafe",
      "facilityType": "truck",
      "locationDescription": "EVANS AVE: PHELPS ST to QUINT ST (1600 - 1699)",
      "foodItems": "Tacos: Burritos: Quesadillas: Tortas",
      "latitude": "37.739445",
      "longitude": "-122.393015",
      "daysHours": ""
  },
  {
      "locationId": "1660690",
      "name": "Halal Cart, LLC",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: STEUART ST to SPEAR ST (1 - 99) -- SOUTH --",
      "foodItems": "kebabs: halal gyro: grilled halal meat: refreshments",
      "latitude": "37.793872",
      "longitude": "-122.394865",
      "daysHours": ""
  },
  {
      "locationId": "1723815",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "07TH ST: HOOPER ST to IRWIN ST (1100 - 1199)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.768249",
      "longitude": "-122.398431",
      "daysHours": ""
  },
  {
      "locationId": "1587523",
      "name": "Chairman SF, LLC",
      "facilityType": "truck",
      "locationDescription": "ELLIS ST: 04TH ST \\ MARKET ST \\ STOCKTON ST to POWELL ST (1 - 99)",
      "foodItems": "Baos: bowls \u0026 drinks",
      "latitude": "37.787565",
      "longitude": "-122.409593",
      "daysHours": ""
  },
  {
      "locationId": "1336742",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: DRUMM ST to DAVIS ST (1 - 99)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.794053",
      "longitude": "-122.397348",
      "daysHours": ""
  },
  {
      "locationId": "1658696",
      "name": "Bonito Poke",
      "facilityType": "truck",
      "locationDescription": "ILLINOIS ST: 16TH ST to MARIPOSA ST \\ TERRY A FRANCOIS BLVD (400 - 599)",
      "foodItems": "Bonito Poke Bowls \u0026 Various Drinks",
      "latitude": "37.766245",
      "longitude": "-122.387356",
      "daysHours": ""
  },
  {
      "locationId": "1611739",
      "name": "Kid Abelha - Brazilian Hamburgers",
      "facilityType": "truck",
      "locationDescription": "NAPOLEON ST: EVANS AVE \\ TOLAND ST to JERROLD AVE (25 - 299)",
      "foodItems": "Brazilian Hamburgers",
      "latitude": "37.747772",
      "longitude": "-122.397032",
      "daysHours": ""
  },
  {
      "locationId": "1535607",
      "name": "Wu Wei LLC dba MoBowl",
      "facilityType": "truck",
      "locationDescription": "WASHINGTON ST: THE EMBARCADERO to DRUMM ST (1 - 99)",
      "foodItems": "Various types of meat: veggie: and seafood bowls.",
      "latitude": "37.796914",
      "longitude": "-122.396651",
      "daysHours": ""
  },
  {
      "locationId": "1741653",
      "name": "Truly Food \u0026 More",
      "facilityType": "truck",
      "locationDescription": "01ST ST: HOWARD ST to TEHAMA ST (200 - 231)",
      "foodItems": "Latin Food: Tacos: Pupusas: Vegetables: Salad: Waters: Sodas",
      "latitude": "37.787989",
      "longitude": "-122.396101",
      "daysHours": ""
  },
  {
      "locationId": "1514024",
      "name": "F \u0026 C Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1738240",
      "name": "Zuri Food Facilities",
      "facilityType": "truck",
      "locationDescription": "02ND ST: STILLMAN ST to BRYANT ST (454 - 499)",
      "foodItems": "Peruvian Food Served Hot",
      "latitude": "37.783046",
      "longitude": "-122.394067",
      "daysHours": ""
  },
  {
      "locationId": "1174517",
      "name": "CC Acquisition LLC",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: MAIN ST to BEALE ST \\ DAVIS ST \\ PINE ST (214 - 298) -- NORTH --",
      "foodItems": "Indian Chai (Tea)",
      "latitude": "37.793214",
      "longitude": "-122.397043",
      "daysHours": "Mo-Su:7AM-6PM"
  },
  {
      "locationId": "1568973",
      "name": "Fillmore Square",
      "facilityType": "truck",
      "locationDescription": "FILLMORE ST: TURK ST to EDDY ST (1200 - 1299)",
      "foodItems": "Breakfast and lunch items with a nod to various cultures",
      "latitude": "37.780858",
      "longitude": "-122.433057",
      "daysHours": ""
  },
  {
      "locationId": "1658387",
      "name": "BH \u0026 MT LLC",
      "facilityType": "truck",
      "locationDescription": "OTIS ST: GOUGH ST \\ MCCOPPIN ST to 13TH ST \\ DUBOCE AVE \\ HWY 101 NORTHBOUND RAMP \\ MISSION ST (100 - 199)",
      "foodItems": "Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1723809",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.769124",
      "longitude": "-122.391475",
      "daysHours": ""
  },
  {
      "locationId": "1591827",
      "name": "Cochinita",
      "facilityType": "truck",
      "locationDescription": "BRYANT ST: 04TH ST \\ I-80 E OFF RAMP to 05TH ST \\ I-80 E ON RAMP (600 - 699)",
      "foodItems": "Mexican Food: Yucatan Food: Street Food",
      "latitude": "37.779051",
      "longitude": "-122.398304",
      "daysHours": ""
  },
  {
      "locationId": "963992",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "QUESADA AVE: CRISP RD to HAWES ST (1170 - 1199)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.727744",
      "longitude": "-122.382107",
      "daysHours": "Mo-Fr:3PM-4PM"
  },
  {
      "locationId": "1591779",
      "name": "Street Meet",
      "facilityType": "truck",
      "locationDescription": "GROVE ST: 08TH ST \\ HYDE ST \\ MARKET ST to LARKIN ST (1 - 55)",
      "foodItems": "Burritos: Tacos: Quesadillas: Tortas: Carne Asada Fries and various drinks",
      "latitude": "37.779159",
      "longitude": "-122.415808",
      "daysHours": ""
  },
  {
      "locationId": "1332936",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "ALAMEDA ST: HAMPSHIRE ST to BRYANT ST (2400 - 2599)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.768557",
      "longitude": "-122.409610",
      "daysHours": ""
  },
  {
      "locationId": "1575181",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "CESAR CHAVEZ ST: EVANS AVE to KANSAS ST (2100 - 2550)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.748801",
      "longitude": "-122.400552",
      "daysHours": ""
  },
  {
      "locationId": "1611740",
      "name": "Kid Abelha - Brazilian Hamburgers",
      "facilityType": "truck",
      "locationDescription": "NAPOLEON ST: EVANS AVE \\ TOLAND ST to JERROLD AVE (25 - 299)",
      "foodItems": "Brazilian Hamburgers",
      "latitude": "37.746856",
      "longitude": "-122.397150",
      "daysHours": ""
  },
  {
      "locationId": "1090090",
      "name": "Tacos El Primo",
      "facilityType": "truck",
      "locationDescription": "WILLIAMS AVE: APOLLO ST to PHELPS ST \\ VESTA ST (300 - 399)",
      "foodItems": "Mexican food: tacos: burritos: tortas: various meat and chicken and fish plate: chile relleno plate: fish plate: bread: flan: rice pudding: bread: fruit juice: vegetable juice: coffee: tea",
      "latitude": "37.729805",
      "longitude": "-122.399247",
      "daysHours": "Su:8AM-10PM;Mo/Tu/We/Th/Fr:4PM-10PM"
  },
  {
      "locationId": "1591822",
      "name": "Cochinita",
      "facilityType": "truck",
      "locationDescription": "24TH ST: UTAH ST to POTRERO AVE (2600 - 2699)",
      "foodItems": "Panushos: Salbutes: Salad: Rice: Beans: Cochinita: etc.",
      "latitude": "37.752822",
      "longitude": "-122.405532",
      "daysHours": ""
  },
  {
      "locationId": "1591783",
      "name": "FRUITYMANIA",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: 04TH ST \\ ELLIS ST \\ STOCKTON ST to POWELL ST (800 - 890) -- NORTH --",
      "foodItems": "Fruit Salads: Fruit Drinks: Can Soda: Water",
      "latitude": "37.785111",
      "longitude": "-122.407423",
      "daysHours": ""
  },
  {
      "locationId": "1723798",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.753155",
      "longitude": "-122.391174",
      "daysHours": ""
  },
  {
      "locationId": "1657809",
      "name": "San Francisco Carts \u0026 Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "GEARY ST: STOCKTON ST to POWELL ST (200 - 299)",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.787176",
      "longitude": "-122.407398",
      "daysHours": ""
  },
  {
      "locationId": "1733786",
      "name": "MOMO INNOVATION LLC",
      "facilityType": "truck",
      "locationDescription": "BUSH ST: BATTERY ST to SANSOME ST (100 - 199)",
      "foodItems": "Noodles",
      "latitude": "37.790922",
      "longitude": "-122.400100",
      "daysHours": ""
  },
  {
      "locationId": "1746285",
      "name": "CARDONA'S FOOD TRUCK",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 14TH ST to 15TH ST (1800 - 1899)",
      "foodItems": "Tacos: Burritos: Quesadillas: Various Drinks",
      "latitude": "37.766898",
      "longitude": "-122.420322",
      "daysHours": ""
  },
  {
      "locationId": "963981",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "JAMESTOWN AVE: GRIFFITH ST to CORONADO ST (800 - 850)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.716443",
      "longitude": "-122.389938",
      "daysHours": "Mo-Fr:12PM-1PM"
  },
  {
      "locationId": "1735063",
      "name": "Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's",
      "facilityType": "truck",
      "locationDescription": "FOLSOM ST: 11TH ST to NORFOLK ST (1500 - 1548)",
      "foodItems": "Tacos: burritos: soda \u0026 juice",
      "latitude": "37.771587",
      "longitude": "-122.414007",
      "daysHours": ""
  },
  {
      "locationId": "1750910",
      "name": "The New York Frankfurter Co. of CA, Inc. DBA: Annie's Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: 04TH ST \\ ELLIS ST \\ STOCKTON ST to POWELL ST (800 - 890) -- NORTH --",
      "foodItems": "Soft pretzels: hot dogs: sausages: chips: popcorn: soda: espresso: cappucino: pastry: ica cream: ices: italian sausage: shish-ka-bob: churros: juice: water: various drinks",
      "latitude": "37.785111",
      "longitude": "-122.407423",
      "daysHours": ""
  },
  {
      "locationId": "1591811",
      "name": "Flavors of Africa",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)",
      "foodItems": "Meat and vegi rice bowls: meat and vegi salad bowls: meat and vegi wraps: drinks and juices.",
      "latitude": "37.788446",
      "longitude": "-122.398641",
      "daysHours": ""
  },
  {
      "locationId": "1575186",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "EVANS AVE: HUNTERS POINT BLVD to JENNINGS ST \\ MIDDLE POINT RD (1031 - 1099)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.737727",
      "longitude": "-122.376573",
      "daysHours": ""
  },
  {
      "locationId": "1723801",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.745406",
      "longitude": "-122.390081",
      "daysHours": ""
  },
  {
      "locationId": "1514028",
      "name": "F \u0026 C Catering",
      "facilityType": "truck",
      "locationDescription": "03RD ST: 24TH ST to 25TH ST (2800 - 2898) -- WEST --",
      "foodItems": "Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad",
      "latitude": "37.753109",
      "longitude": "-122.388170",
      "daysHours": ""
  },
  {
      "locationId": "1732542",
      "name": "Bonito Poke",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)",
      "foodItems": "Bonito Poke Bowls \u0026 Various Drinks",
      "latitude": "37.793262",
      "longitude": "-122.401789",
      "daysHours": ""
  },
  {
      "locationId": "1733787",
      "name": "MOMO INNOVATION LLC",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)",
      "foodItems": "Noodles",
      "latitude": "37.788446",
      "longitude": "-122.398641",
      "daysHours": ""
  },
  {
      "locationId": "1552373",
      "name": "Breakfast Embed",
      "facilityType": "truck",
      "locationDescription": "MISSION ROCK ST: 04TH ST intersection",
      "foodItems": "Coffee: Pastries: Bagels: Sandwiches: Other Items",
      "latitude": "37.772484",
      "longitude": "-122.391812",
      "daysHours": ""
  },
  {
      "locationId": "1738645",
      "name": "Eva's Catering",
      "facilityType": "truck",
      "locationDescription": "BRANNAN ST: 05TH ST to 06TH ST \\ I-280 NORTHBOUND \\ I-280 SOUTHBOUND (600 - 699)",
      "foodItems": "Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages",
      "latitude": "37.776099",
      "longitude": "-122.400287",
      "daysHours": ""
  },
  {
      "locationId": "949952",
      "name": "Santana ESG, Inc.",
      "facilityType": "truck",
      "locationDescription": "HARRISON ST: 21ST ST to 22ND ST (2500 - 2599)",
      "foodItems": "Tacos: Burritos: Tortas: Quesadillas: Mexican Drinks: Aguas Frescas",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": "Mo-Su:9AM-10PM"
  },
  {
      "locationId": "1585474",
      "name": "San Francisco Street Foods, Inc.",
      "facilityType": "cart",
      "locationDescription": "HOWARD ST: 03RD ST to 04TH ST (700 - 799)",
      "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
      "latitude": "37.783513",
      "longitude": "-122.400813",
      "daysHours": ""
  },
  {
      "locationId": "1729507",
      "name": "Senor Sisig",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: DAVIS ST to FRONT ST (100 - 199)",
      "foodItems": "Senor Sisig: Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.",
      "latitude": "37.792949",
      "longitude": "-122.398099",
      "daysHours": ""
  },
  {
      "locationId": "1738643",
      "name": "Eva's Catering",
      "facilityType": "truck",
      "locationDescription": "20TH AVE: LAWTON ST to MORAGA ST (1600 - 1699)",
      "foodItems": "Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages",
      "latitude": "37.757984",
      "longitude": "-122.433466",
      "daysHours": ""
  },
  {
      "locationId": "1723808",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "26TH ST: RHODE ISLAND ST to KANSAS ST (2200 - 2299)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.750761",
      "longitude": "-122.401540",
      "daysHours": ""
  },
  {
      "locationId": "1747911",
      "name": "El Alambre",
      "facilityType": "truck",
      "locationDescription": "FRANKLIN ST: MYRTLE ST to GEARY BLVD (1150 - 1199)",
      "foodItems": "Tacos: Burritos: Quesadillas: Nachos Alambres: Choice of Meat: Carne Asada: Carnitas: Pollo: Al Pastor Camarones",
      "latitude": "37.785272",
      "longitude": "-122.422604",
      "daysHours": ""
  },
  {
      "locationId": "1723825",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "KANSAS ST: 16TH ST to 17TH ST (300 - 399)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.765371",
      "longitude": "-122.403908",
      "daysHours": ""
  },
  {
      "locationId": "1552372",
      "name": "Breakfast Embed",
      "facilityType": "truck",
      "locationDescription": "01ST ST: TEHAMA ST to CLEMENTINA ST (232 - 274)",
      "foodItems": "Coffee: Pastries: Bagels: Sandwiches: Other Items",
      "latitude": "37.787733",
      "longitude": "-122.395663",
      "daysHours": ""
  },
  {
      "locationId": "1612654",
      "name": "Sunset Mercantile/Outer Sunset Farmers Market \u0026 Mercantile",
      "facilityType": "truck",
      "locationDescription": "37TH AVE: QUINTARA ST to RIVERA ST (2100 - 2199)",
      "foodItems": "Multiple Food Trucks \u0026 Food Types",
      "latitude": "37.747327",
      "longitude": "-122.496281",
      "daysHours": ""
  },
  {
      "locationId": "1658363",
      "name": "Treats by the Bay LLC",
      "facilityType": "truck",
      "locationDescription": "HOWARD ST: MALDEN ALY to 02ND ST (574 - 599)",
      "foodItems": "Prepackaged Kettlecorn",
      "latitude": "37.786802",
      "longitude": "-122.397872",
      "daysHours": ""
  },
  {
      "locationId": "963986",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "WALLACE AVE: JENNINGS ST to KEITH ST (1500 - 1599)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.727168",
      "longitude": "-122.390029",
      "daysHours": "Mo-Fr:2PM-3PM"
  },
  {
      "locationId": "1723828",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "MENDELL ST: CARGO WAY to NEWHALL ST (1 - 199)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.742820",
      "longitude": "-122.382847",
      "daysHours": ""
  },
  {
      "locationId": "1336732",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "03RD ST: 25TH ST to 26TH ST (2900 - 2998) -- WEST --",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.751972",
      "longitude": "-122.387965",
      "daysHours": ""
  },
  {
      "locationId": "1336741",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "BURKE AVE: START: 1500-1599 BLOCK to 03RD ST (1500 - 1599)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.744178",
      "longitude": "-122.386716",
      "daysHours": ""
  },
  {
      "locationId": "1721249",
      "name": "El Calamar Perubian Food Truck",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: ANTHONY ST to 02ND ST (573 - 599)",
      "foodItems": "Lomo Saltado: Jalea: Ceviche: Calamar: Tilapia plate: chicken special. Soda: Water.",
      "latitude": "37.788457",
      "longitude": "-122.399884",
      "daysHours": ""
  },
  {
      "locationId": "1163789",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "02ND ST: JESSIE ST to MISSION ST (69 - 99)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.788457",
      "longitude": "-122.399884",
      "daysHours": "Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM"
  },
  {
      "locationId": "1729521",
      "name": "Senor Sisig",
      "facilityType": "truck",
      "locationDescription": "FRONT ST: BROADWAY to VALLEJO ST (800 - 899)",
      "foodItems": "Various menu items \u0026 drinks",
      "latitude": "37.799260",
      "longitude": "-122.399618",
      "daysHours": ""
  },
  {
      "locationId": "1723813",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "CESAR CHAVEZ ST: 03RD ST to TENNESSEE ST (1000 - 1099)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1738644",
      "name": "Eva's Catering",
      "facilityType": "truck",
      "locationDescription": "05TH ST: WELSH ST to BRANNAN ST (530 - 599)",
      "foodItems": "Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages",
      "latitude": "37.776876",
      "longitude": "-122.400260",
      "daysHours": ""
  },
  {
      "locationId": "1447794",
      "name": "Street Meet",
      "facilityType": "truck",
      "locationDescription": "HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)",
      "foodItems": "Tortas: Burritos: Tacos: Churros: Nachos: Asada Fries",
      "latitude": "37.787540",
      "longitude": "-122.397727",
      "daysHours": ""
  },
  {
      "locationId": "1332948",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "LOOMIS ST: FLOWER ST to WATERLOO ST (120 - 255)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1163800",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "22ND ST: SAN BRUNO AVE to UTAH ST (2400 - 2449)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.755637",
      "longitude": "-122.405102",
      "daysHours": "Mo-Fr:10AM-11AM"
  },
  {
      "locationId": "1738313",
      "name": "San Francisco's Hometown Creamery",
      "facilityType": "truck",
      "locationDescription": "PINE ST: SANSOME ST to CENTURY PL (300 - 340)",
      "foodItems": "Ice cream \u0026 Waffle cones",
      "latitude": "37.791834",
      "longitude": "-122.401280",
      "daysHours": ""
  },
  {
      "locationId": "1163793",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "CESAR CHAVEZ ST: SOUTH VAN NESS AVE to CAPP ST \\ MISSION ST (3300 - 3398) -- NORTH --",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.748550",
      "longitude": "-122.416171",
      "daysHours": "Mo-Fr:8AM-9AM/11AM-12PM"
  },
  {
      "locationId": "1163796",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "DAVIDSON AVE: QUINT ST to RANKIN ST (1500 - 1599)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.745693",
      "longitude": "-122.390715",
      "daysHours": "Mo-Fr:2PM-3PM"
  },
  {
      "locationId": "1544281",
      "name": "Boulangerie La Camionnette",
      "facilityType": "unknown",
      "locationDescription": "FLORIDA ST: MARIPOSA ST to 18TH ST (500 - 599)",
      "foodItems": "Bread: Pastries: Coffee: Pizza",
      "latitude": "37.762590",
      "longitude": "-122.411484",
      "daysHours": ""
  },
  {
      "locationId": "1723796",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.757125",
      "longitude": "-122.388530",
      "daysHours": ""
  },
  {
      "locationId": "1591826",
      "name": "Cochinita",
      "facilityType": "truck",
      "locationDescription": "BRANNAN ST: ZOE ST to 04TH ST (440 - 499)",
      "foodItems": "Mexican Food: Yucatan Food: Street Food",
      "latitude": "37.778863",
      "longitude": "-122.396444",
      "daysHours": ""
  },
  {
      "locationId": "1723793",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.767433",
      "longitude": "-122.392149",
      "daysHours": ""
  },
  {
      "locationId": "1723806",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "25TH ST: MARYLAND ST to MICHIGAN ST (400 - 699)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.753340",
      "longitude": "-122.384128",
      "daysHours": ""
  },
  {
      "locationId": "1741555",
      "name": "Philz Coffee Truck",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)",
      "foodItems": "Hot coffee: iced coffee: hot chocolate: tea: pastries",
      "latitude": "37.792796",
      "longitude": "-122.401353",
      "daysHours": ""
  },
  {
      "locationId": "1723803",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "POTRERO AVE: 10TH ST \\ BRANNAN ST \\ DIVISION ST to ALAMEDA ST (1 - 99)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.768543",
      "longitude": "-122.408493",
      "daysHours": ""
  },
  {
      "locationId": "1575189",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "ARELIOUS WALKER DR: PALOU AVE to QUESADA AVE (1300 - 1399)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.726383",
      "longitude": "-122.378435",
      "daysHours": ""
  },
  {
      "locationId": "1416733",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "SANSOME ST: SUTTER ST to BUSH ST (1 - 99)",
      "foodItems": "",
      "latitude": "37.790922",
      "longitude": "-122.400100",
      "daysHours": ""
  },
  {
      "locationId": "963982",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "KEY AVE: JENNINGS ST to 03RD ST (1000 - 1068)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.719200",
      "longitude": "-122.395977",
      "daysHours": "Mo-Fr:1PM-2PM"
  },
  {
      "locationId": "948140",
      "name": "Eli's Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "JERROLD AVE: BARNEVELD AVE to JERROLD AVE (2351 - 2369)",
      "foodItems": "various styles of hot dogs \u0026 sausages: chips: breakfast sandwiches: chili: soda: water:",
      "latitude": "37.746948",
      "longitude": "-122.403391",
      "daysHours": "Mo/Tu/We/Th/Fr:9AM-5PM"
  },
  {
      "locationId": "1336740",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "BRYANT ST: 04TH ST \\ I-80 E OFF RAMP to 05TH ST \\ I-80 E ON RAMP (600 - 699)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.778267",
      "longitude": "-122.398836",
      "daysHours": ""
  },
  {
      "locationId": "1585965",
      "name": "Curry Up Now",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Chicken Tiki Masala Burritos: Paneer Tiki Masala Burritos: Samosas: Mango Lassi",
      "latitude": "37.790838",
      "longitude": "-122.401160",
      "daysHours": ""
  },
  {
      "locationId": "1332946",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "16TH ST: OWENS ST to 07TH ST \\ MISSISSIPPI ST (700 - 899)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1733728",
      "name": "MOMO INNOVATION LLC",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: BATTERY ST to SANSOME ST (300 - 399)",
      "foodItems": "Noodles: Meat \u0026 Drinks",
      "latitude": "37.792871",
      "longitude": "-122.400747",
      "daysHours": ""
  },
  {
      "locationId": "1735100",
      "name": "Think is Good Inc.",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)",
      "foodItems": "Lobster rolls: crab rolls: lobster burritos: crab burritos: chicken burritos: fish burritos: chicken burritos: poke bowls: soups: chips \u0026 soda.",
      "latitude": "37.788865",
      "longitude": "-122.399359",
      "daysHours": ""
  },
  {
      "locationId": "1591812",
      "name": "Flavors of Africa",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)",
      "foodItems": "Meat and vegi rice bowls: meat and vegi salad bowls: meat and vegi wraps: drinks and juices.",
      "latitude": "37.788865",
      "longitude": "-122.399359",
      "daysHours": ""
  },
  {
      "locationId": "1723821",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "16TH ST: 04TH ST to OWENS ST (600 - 699)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.767466",
      "longitude": "-122.390860",
      "daysHours": ""
  },
  {
      "locationId": "963991",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "HARBOR RD: NORTHRIDGE RD to INGALLS ST (1 - 299)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.733439",
      "longitude": "-122.380468",
      "daysHours": "Mo-Fr:3PM-4PM"
  },
  {
      "locationId": "1336733",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "03RD ST: ARTHUR AVE \\ CARGO WAY to BURKE AVE (3401 - 3499) -- EAST --",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1733450",
      "name": "Papalote Inc.",
      "facilityType": "truck",
      "locationDescription": "01ST ST: HOWARD ST to TEHAMA ST (200 - 231)",
      "foodItems": "Mexican; Burritos: Burrito Bowls: Salads",
      "latitude": "37.787989",
      "longitude": "-122.396101",
      "daysHours": ""
  },
  {
      "locationId": "1332945",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "HARRISON ST: FREMONT ST \\ I-80 W OFF RAMP to 01ST ST \\ I-80 E ON RAMP (400 - 499)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1163797",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "BURKE AVE: START: 1500-1599 BLOCK to 03RD ST (1500 - 1599)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.744752",
      "longitude": "-122.385679",
      "daysHours": "Mo-Fr:2PM-3PM"
  },
  {
      "locationId": "1723814",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "BURKE AVE: START: 1500-1599 BLOCK to 03RD ST (1500 - 1599)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.744752",
      "longitude": "-122.385679",
      "daysHours": ""
  },
  {
      "locationId": "1336730",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "02ND ST: HOWARD ST to TEHAMA ST (200 - 227)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.786320",
      "longitude": "-122.398235",
      "daysHours": ""
  },
  {
      "locationId": "1219753",
      "name": "Kabob Trolley, LLC",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 07TH ST to ANGELOS ALY \\ JULIA ST (1100 - 1165)",
      "foodItems": "Halal Gyro and Cheesesteaks",
      "latitude": "37.778330",
      "longitude": "-122.411516",
      "daysHours": "Mo/Tu/Fr:9AM-4PM"
  },
  {
      "locationId": "1575178",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "RANKIN ST: DAVIDSON AVE to EVANS AVE (200 - 299)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.746470",
      "longitude": "-122.391515",
      "daysHours": ""
  },
  {
      "locationId": "1575199",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "NEWHALL ST: MENDELL ST to EVANS AVE (200 - 399)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.743225",
      "longitude": "-122.385343",
      "daysHours": ""
  },
  {
      "locationId": "1732705",
      "name": "Roadside Rotisserie Corporation / Country Grill",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: BATTERY ST to SANSOME ST (300 - 399)",
      "foodItems": "Rotisserie Chicken; Ribs; Pork Loin; Roasted Potatoes; Chicken Wrap; Kale Salad; Drinks",
      "latitude": "37.793447",
      "longitude": "-122.400344",
      "daysHours": ""
  },
  {
      "locationId": "963995",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "KISKA RD: DORMITORY RD \\ KIRKWOOD AVE to REARDON RD (141 - 199)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.729438",
      "longitude": "-122.376658",
      "daysHours": "Mo-Fr:4PM-5PM"
  },
  {
      "locationId": "1723827",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "MARIN ST: START: 800-949 BLOCK to MICHIGAN ST (800 - 899)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.749458",
      "longitude": "-122.385081",
      "daysHours": ""
  },
  {
      "locationId": "1723799",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.738118",
      "longitude": "-122.404418",
      "daysHours": ""
  },
  {
      "locationId": "1535608",
      "name": "Wu Wei LLC dba MoBowl",
      "facilityType": "truck",
      "locationDescription": "DRUMM ST: CLAY ST to WASHINGTON ST (200 - 299)",
      "foodItems": "Various types of meat: veggie: and seafood bowls.",
      "latitude": "37.796123",
      "longitude": "-122.397273",
      "daysHours": ""
  },
  {
      "locationId": "1587522",
      "name": "Chairman SF, LLC",
      "facilityType": "truck",
      "locationDescription": "CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)",
      "foodItems": "Baos: bowls \u0026 drinks",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1336729",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "SELBY ST: HUDSON AVE to INNES AVE (500 - 599)",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.744498",
      "longitude": "-122.396955",
      "daysHours": ""
  },
  {
      "locationId": "1575188",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "EVANS AVE: NAPOLEON ST \\ TOLAND ST to MARIN ST (2000 - 2099)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1591781",
      "name": "Street Meet",
      "facilityType": "truck",
      "locationDescription": "MINNESOTA ST: 04TH ST \\ MARIPOSA ST to 18TH ST (500 - 599)",
      "foodItems": "Tacos: burritos: quesadillas: tortas: asada fries: nachos",
      "latitude": "37.763811",
      "longitude": "-122.391265",
      "daysHours": ""
  },
  {
      "locationId": "1738309",
      "name": "San Francisco's Hometown Creamery",
      "facilityType": "truck",
      "locationDescription": "POST ST: MONTGOMERY ST to LICK PL (1 - 40)",
      "foodItems": "Ice Cream: Waffle Cones",
      "latitude": "37.789250",
      "longitude": "-122.402419",
      "daysHours": ""
  },
  {
      "locationId": "1332939",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "08TH ST: HERON ST to HARRISON ST (350 - 399)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.773694",
      "longitude": "-122.409658",
      "daysHours": ""
  },
  {
      "locationId": "1591787",
      "name": "Faith Sandwich",
      "facilityType": "cart",
      "locationDescription": "MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)",
      "foodItems": "BBQ PORK SANDWICHGRILL CHICKEN SANDWICHSHIRMP SPRING ROLLSBBQ PORK OVER RICEGRILL CHICKEN OVER RICEBBQ PORK VERMICELLIGRILL CHICKEN VERMICELLIBBQ PORK GARLIC NOODLEGRILL CHICKEN GARLIC NOODLENEW ITEMS:MASALA DOSAPANNER DOSACHICKEN CURRY \u0026 RICECHICKEN STEWRICE OR DOSAADD CHEESEADD GHEE",
      "latitude": "37.788865",
      "longitude": "-122.399359",
      "daysHours": ""
  },
  {
      "locationId": "1163801",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "ELLIS ST: LARKIN ST to POLK ST (700 - 799)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.784421",
      "longitude": "-122.418405",
      "daysHours": "Mo-Fr:10AM-11AM"
  },
  {
      "locationId": "1738642",
      "name": "Eva's Catering",
      "facilityType": "truck",
      "locationDescription": "ORTEGA ST: 18TH AVE to 19TH AVE (1100 - 1199)",
      "foodItems": "Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages",
      "latitude": "37.783509",
      "longitude": "-122.490071",
      "daysHours": ""
  },
  {
      "locationId": "1332937",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "BERRY ST: 05TH ST to 06TH ST (300 - 399)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.772364",
      "longitude": "-122.397041",
      "daysHours": ""
  },
  {
      "locationId": "1585964",
      "name": "Curry Up Now",
      "facilityType": "truck",
      "locationDescription": "WASHINGTON ST: DRUMM ST intersection",
      "foodItems": "Chicken Tiki Masala Burritos: Paneer Tiki Masala Burritos: Samosas: Mango Lassi",
      "latitude": "37.796914",
      "longitude": "-122.396651",
      "daysHours": ""
  },
  {
      "locationId": "963985",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "BANCROFT AVE: JENNINGS ST to KEITH ST (1500 - 1599)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.725451",
      "longitude": "-122.391992",
      "daysHours": "Mo-Fr:1PM-2PM"
  },
  {
      "locationId": "1568972",
      "name": "Fillmore Square",
      "facilityType": "truck",
      "locationDescription": "FILLMORE ST: TURK ST to EDDY ST (1200 - 1299)",
      "foodItems": "Breakfast and lunch items with a nod to various cultures",
      "latitude": "37.781276",
      "longitude": "-122.431840",
      "daysHours": ""
  },
  {
      "locationId": "1090091",
      "name": "Tacos El Primo",
      "facilityType": "truck",
      "locationDescription": "JENNINGS ST: WALLACE AVE to YOSEMITE AVE (2200 - 2299)",
      "foodItems": "Mexican food: tacos: burritos: tortas: various meat and chicken and fish plate: chile relleno plate: fish plate: bread: flan: rice pudding: bread: fruit juice: vegetable juice: coffee: tea",
      "latitude": "37.725930",
      "longitude": "-122.389216",
      "daysHours": "Tu/Sa:8AM-3PM;Mo/Tu/We/Th/Fr:10AM-2PM"
  },
  {
      "locationId": "953198",
      "name": "Santana ESG, Inc.",
      "facilityType": "truck",
      "locationDescription": "SHOTWELL ST: 16TH ST to 17TH ST (200 - 299)",
      "foodItems": "Tacos: Burritos: Tortas: Quesadillas: Mexican Drinks: Aguas Frescas",
      "latitude": "37.764745",
      "longitude": "-122.416562",
      "daysHours": "Sa-Su:10AM-6PM;Mo-Fr:10AM-10PM"
  },
  {
      "locationId": "1658388",
      "name": "BH \u0026 MT LLC",
      "facilityType": "truck",
      "locationDescription": "PRESIDIO AVE: POST ST to GEARY BLVD (900 - 999)",
      "foodItems": "Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages",
      "latitude": "37.783922",
      "longitude": "-122.446722",
      "daysHours": ""
  },
  {
      "locationId": "1332947",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "KANSAS ST: CESAR CHAVEZ ST to MARIN ST (1600 - 1699)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.748950",
      "longitude": "-122.401493",
      "daysHours": ""
  },
  {
      "locationId": "1591786",
      "name": "Faith Sandwich",
      "facilityType": "cart",
      "locationDescription": "MAIN ST: MARKET ST to MISSION ST (1 - 99)",
      "foodItems": "BBQ PORK SANDWICHGRILL CHICKEN SANDWICHSHIRMP SPRING ROLLSBBQ PORK OVER RICEGRILL CHICKEN OVER RICEBBQ PORK VERMICELLIGRILL CHICKEN VERMICELLIBBQ PORK GARLIC NOODLEGRILL CHICKEN GARLIC NOODLENEW ITEMS:MASALA DOSAPANNER DOSACHICKEN CURRY \u0026 RICECHICKEN STEWRICE OR DOSAADD CHEESEADD GHEE",
      "latitude": "37.792109",
      "longitude": "-122.395804",
      "daysHours": ""
  },
  {
      "locationId": "1744302",
      "name": "BOWL'D ACAI, LLC.",
      "facilityType": "truck",
      "locationDescription": "BATTERY ST: PINE ST to CALIFORNIA ST (100 - 199)",
      "foodItems": "Acai Bowls: Smoothies: Juices",
      "latitude": "37.792367",
      "longitude": "-122.400148",
      "daysHours": ""
  },
  {
      "locationId": "1575184",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "BURKE AVE: START: 1500-1599 BLOCK to 03RD ST (1500 - 1599)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.744178",
      "longitude": "-122.386716",
      "daysHours": ""
  },
  {
      "locationId": "1174531",
      "name": "CC Acquisition LLC",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: 01ST ST \\ BUSH ST to 02ND ST (501 - 599) -- SOUTH --",
      "foodItems": "Chai Tea",
      "latitude": "37.790407",
      "longitude": "-122.399276",
      "daysHours": "Mo-Fr:8AM-4PM"
  },
  {
      "locationId": "1741750",
      "name": "San Pancho's Tacos",
      "facilityType": "truck",
      "locationDescription": "ALEMANY BLVD: SICKLES AVE to I-280 N ON RAMP \\ REGENT ST \\ SAN JOSE AVE (3101 - 3155) -- SOUTH --",
      "foodItems": "Tacos: Burritos: Quesadillas: Tortas: Nachos: Hot Dogs:Soda: Water: Fruit Drinks",
      "latitude": "37.710193",
      "longitude": "-122.455222",
      "daysHours": ""
  },
  {
      "locationId": "1732543",
      "name": "Bonito Poke",
      "facilityType": "truck",
      "locationDescription": "HOWARD ST: FREMONT ST to 01ST ST (400 - 499)",
      "foodItems": "Bonito Poke Bowls \u0026 Various Drinks",
      "latitude": "37.789119",
      "longitude": "-122.395881",
      "daysHours": ""
  },
  {
      "locationId": "1591828",
      "name": "Cochinita",
      "facilityType": "truck",
      "locationDescription": "07TH AVE: LINCOLN WAY to HUGO ST (1200 - 1246)",
      "foodItems": "Mexican Food: Yucatan Food: Street Food",
      "latitude": "37.765497",
      "longitude": "-122.464598",
      "daysHours": ""
  },
  {
      "locationId": "1744307",
      "name": "BOWL'D ACAI, LLC.",
      "facilityType": "truck",
      "locationDescription": "BUCHANAN ST: NORTH POINT ST to BEACH ST \\ LOWER FORT MASON ST \\ MARINA BLVD (3700 - 3799)",
      "foodItems": "Acai Bowls: Poke Bowls: Smoothies: Juices",
      "latitude": "37.804578",
      "longitude": "-122.433011",
      "daysHours": ""
  },
  {
      "locationId": "1332938",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "BERRY ST: 06TH ST to KING ST (400 - 431)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.772009",
      "longitude": "-122.399084",
      "daysHours": ""
  },
  {
      "locationId": "1658391",
      "name": "BH \u0026 MT LLC",
      "facilityType": "truck",
      "locationDescription": "GROVE ST: SCOTT ST to DIVISADERO ST (1200 - 1299)",
      "foodItems": "Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages",
      "latitude": "37.775774",
      "longitude": "-122.437332",
      "daysHours": ""
  },
  {
      "locationId": "1735061",
      "name": "Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's",
      "facilityType": "truck",
      "locationDescription": "CESAR CHAVEZ ST: INDIANA ST to IOWA ST (1300 - 1399)",
      "foodItems": "Tacos: Burritos: Tortas: Quesadillas: Sodas: Chips: Candy",
      "latitude": "37.749256",
      "longitude": "-122.390975",
      "daysHours": ""
  },
  {
      "locationId": "1575192",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "LOOMIS ST: BARNEVELD AVE \\ MCKINNON AVE to OAKDALE AVE (1 - 99)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.743784",
      "longitude": "-122.403789",
      "daysHours": ""
  },
  {
      "locationId": "1723805",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.755031",
      "longitude": "-122.384531",
      "daysHours": ""
  },
  {
      "locationId": "1741553",
      "name": "Philz Coffee Truck",
      "facilityType": "truck",
      "locationDescription": "PINE ST: BATTERY ST to SANSOME ST (200 - 299)",
      "foodItems": "Hot coffee: iced coffee: hot chocolate: tea: pastries",
      "latitude": "37.792296",
      "longitude": "-122.400707",
      "daysHours": ""
  },
  {
      "locationId": "1741751",
      "name": "San Pancho's Tacos",
      "facilityType": "truck",
      "locationDescription": "BAY SHORE BLVD: CORTLAND AVE to WATERLOO ST (491 - 499) -- EAST --",
      "foodItems": "Tacos: Burritos: Quesadillas: Tortas: Nachos: Hot Dogs:Soda: Water: Fruit Drinks",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1735285",
      "name": "El Alambre",
      "facilityType": "truck",
      "locationDescription": "14TH ST: FOLSOM ST to SHOTWELL ST (100 - 150)",
      "foodItems": "Tacos: Burritos: Quesadillas: Tortas",
      "latitude": "37.767852",
      "longitude": "-122.416105",
      "daysHours": ""
  },
  {
      "locationId": "963980",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "GRIFFITH ST: INGERSON AVE to JAMESTOWN AVE (2900 - 2999)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.716991",
      "longitude": "-122.389599",
      "daysHours": "Mo-Fr:12PM-1PM"
  },
  {
      "locationId": "1163785",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "EDDY ST: STEINER ST to PIERCE ST (1600 - 1699)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.781597",
      "longitude": "-122.434858",
      "daysHours": "Mo-Fr:11AM-12PM"
  },
  {
      "locationId": "1732692",
      "name": "Roadside Rotisserie Corporation / Country Grill",
      "facilityType": "truck",
      "locationDescription": "POST ST: MONTGOMERY ST to LICK PL (1 - 40)",
      "foodItems": "Rotisserie chicken: pork loin: ribs: chicken salad wrap: potatoes: roasted seasonal vegetables kale salad: beverages.",
      "latitude": "37.788779",
      "longitude": "-122.402575",
      "daysHours": ""
  },
  {
      "locationId": "963997",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "NIBBI CT: GILLETTE AVE to END: 1-99 BLOCK (1 - 99)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.710452",
      "longitude": "-122.396149",
      "daysHours": "Mo-Fr:4PM-5PM"
  },
  {
      "locationId": "1535606",
      "name": "Wu Wei LLC dba MoBowl",
      "facilityType": "truck",
      "locationDescription": "STEUART LN: HOWARD ST \\ STEUART ST to END: 200-249 BLOCK (1 - 99)",
      "foodItems": "Various types of meat: veggie: and seafood bowls.",
      "latitude": "37.791558",
      "longitude": "-122.391671",
      "daysHours": ""
  },
  {
      "locationId": "963988",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "PALOU AVE: HAWES ST to INGALLS ST (1100 - 1199)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.728671",
      "longitude": "-122.381865",
      "daysHours": "Mo-Fr:2PM-3PM"
  },
  {
      "locationId": "1336737",
      "name": "Quan Catering",
      "facilityType": "truck",
      "locationDescription": "BAY SHORE BLVD: VISITACION AVE to SUNNYDALE AVE (2501 - 2599) -- EAST --",
      "foodItems": "Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot \u0026 cold): peanuts: muffins: coff (hot \u0026 cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies",
      "latitude": "37.709375",
      "longitude": "-122.404154",
      "daysHours": ""
  },
  {
      "locationId": "1591846",
      "name": "Golden Gate Halal Food",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: MASON ST \\ TURK ST to 06TH ST \\ GOLDEN GATE AVE \\ TAYLOR ST (943 - 999) -- SOUTH --",
      "foodItems": "Pulao Plates \u0026 Sandwiches: Various Drinks",
      "latitude": "37.782281",
      "longitude": "-122.409531",
      "daysHours": ""
  },
  {
      "locationId": "1163787",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "MASONIC AVE: MCALLISTER ST to FULTON ST (500 - 599)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.776550",
      "longitude": "-122.446308",
      "daysHours": "Mo-Fr:6AM-7AM/11AM-12PM"
  },
  {
      "locationId": "1058991",
      "name": "Ruru Juice LLC",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 02ND ST to NEW MONTGOMERY ST (600 - 634)",
      "foodItems": "Smoothies: Juice: Salads: Fruit Bowls: Soup",
      "latitude": "37.787672",
      "longitude": "-122.399763",
      "daysHours": "Tu/Th/Fr:9AM-1PM"
  },
  {
      "locationId": "1587521",
      "name": "Chairman SF, LLC",
      "facilityType": "truck",
      "locationDescription": "02ND ST: BRANNAN ST to TOWNSEND ST (600 - 699)",
      "foodItems": "Baos: bowls \u0026 drinks",
      "latitude": "37.781689",
      "longitude": "-122.391062",
      "daysHours": ""
  },
  {
      "locationId": "1535609",
      "name": "Wu Wei LLC dba MoBowl",
      "facilityType": "truck",
      "locationDescription": "FRONT ST: VALLEJO ST to GREEN ST (900 - 999)",
      "foodItems": "Various types of meat: veggie: and seafood bowls.",
      "latitude": "37.800221",
      "longitude": "-122.399569",
      "daysHours": ""
  },
  {
      "locationId": "1658364",
      "name": "Treats by the Bay LLC",
      "facilityType": "truck",
      "locationDescription": "ELLIS ST: POWELL ST to CYRIL MAGNIN ST (100 - 148)",
      "foodItems": "Prepackaged Kettlecorn",
      "latitude": "37.785610",
      "longitude": "-122.408155",
      "daysHours": ""
  },
  {
      "locationId": "1163794",
      "name": "SOHOMEI, LLC",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: 07TH ST to ANGELOS ALY \\ JULIA ST (1100 - 1165)",
      "foodItems": "COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.",
      "latitude": "37.779157",
      "longitude": "-122.411615",
      "daysHours": "Mo-Fr:12PM-1PM"
  },
  {
      "locationId": "1729511",
      "name": "Senor Sisig",
      "facilityType": "truck",
      "locationDescription": "02ND ST: MISSION ST to MINNA ST (100 - 130)",
      "foodItems": "Filipino fusion food: taco: burrito: nachos: rice plates",
      "latitude": "37.787514",
      "longitude": "-122.399566",
      "daysHours": ""
  },
  {
      "locationId": "1747910",
      "name": "El Alambre",
      "facilityType": "truck",
      "locationDescription": "FRANKLIN ST: OFARRELL ST \\ STARR KING WAY to MYRTLE ST (1100 - 1149)",
      "foodItems": "Tacos: Burritos: Quesadillas: Nachos Alambres: Choice of Meat: Carne Asada: Carnitas: Pollo: Al Pastor Camarones",
      "latitude": "37.784846",
      "longitude": "-122.422568",
      "daysHours": ""
  },
  {
      "locationId": "1658695",
      "name": "Bonito Poke",
      "facilityType": "truck",
      "locationDescription": "HOWARD ST: FREMONT ST to 01ST ST (400 - 499)",
      "foodItems": "Bonito Poke Bowls \u0026 Various Drinks",
      "latitude": "37.789119",
      "longitude": "-122.395881",
      "daysHours": ""
  },
  {
      "locationId": "1750909",
      "name": "The New York Frankfurter Co. of CA, Inc. DBA: Annie's Hot Dogs",
      "facilityType": "cart",
      "locationDescription": "STOCKTON ST: 04TH ST \\ ELLIS ST \\ MARKET ST intersection",
      "foodItems": "Soft pretzels: hot dogs: sausages: chips: popcorn: sodea: coffee: espresso: cappucino: pastries: ice cream: Italian sausages: shish-ka-bob: churros: juice: water: various drinks.",
      "latitude": "37.785470",
      "longitude": "-122.406616",
      "daysHours": ""
  },
  {
      "locationId": "1723822",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.767996",
      "longitude": "-122.387549",
      "daysHours": ""
  },
  {
      "locationId": "1575180",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "03RD ST: EVANS AVE to FAIRFAX AVE (3801 - 3899) -- EAST --",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.741026",
      "longitude": "-122.387793",
      "daysHours": ""
  },
  {
      "locationId": "1575191",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "INNES AVE: ARELIOUS WALKER DR to GRIFFITH ST (800 - 899)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.732135",
      "longitude": "-122.375398",
      "daysHours": ""
  },
  {
      "locationId": "1735098",
      "name": "Think is Good Inc.",
      "facilityType": "truck",
      "locationDescription": "PINE ST: FRONT ST to BATTERY ST (100 - 199)",
      "foodItems": "Lobster rolls: crab rolls: lobster burritos: crab burritos: chicken burritos: fish burritos: chicken burritos: poke bowls: soups: chips \u0026 soda.",
      "latitude": "37.792641",
      "longitude": "-122.398970",
      "daysHours": ""
  },
  {
      "locationId": "1732541",
      "name": "Bonito Poke",
      "facilityType": "truck",
      "locationDescription": "01ST ST: HOWARD ST to TEHAMA ST (200 - 231)",
      "foodItems": "Bonito Poke Bowls \u0026 Various Drinks",
      "latitude": "37.787989",
      "longitude": "-122.396101",
      "daysHours": ""
  },
  {
      "locationId": "1658393",
      "name": "BH \u0026 MT LLC",
      "facilityType": "truck",
      "locationDescription": "16TH ST: SPENCER ST to DOLORES ST (3220 - 3299)",
      "foodItems": "Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages",
      "latitude": "37.764460",
      "longitude": "-122.425161",
      "daysHours": ""
  },
  {
      "locationId": "1575197",
      "name": "Park's Catering",
      "facilityType": "truck",
      "locationDescription": "NEWHALL ST: MENDELL ST to EVANS AVE (200 - 399)",
      "foodItems": "Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins",
      "latitude": "37.742990",
      "longitude": "-122.386773",
      "daysHours": ""
  },
  {
      "locationId": "1332943",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "FREMONT ST: FOLSOM ST to HARRISON ST \\ I-80 W OFF RAMP (300 - 399)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.787077",
      "longitude": "-122.392983",
      "daysHours": ""
  },
  {
      "locationId": "1732577",
      "name": "Plaza Garibaldy",
      "facilityType": "truck",
      "locationDescription": "HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)",
      "foodItems": "Tacos: burritos: quesadillas",
      "latitude": "37.787955",
      "longitude": "-122.397237",
      "daysHours": ""
  },
  {
      "locationId": "1591829",
      "name": "Cochinita",
      "facilityType": "truck",
      "locationDescription": "DIVISADERO ST: MCALLISTER ST to GOLDEN GATE AVE (901 - 999) -- WEST --",
      "foodItems": "Mexican Food: Yucatan Food: Street Food",
      "latitude": "37.778384",
      "longitude": "-122.438782",
      "daysHours": ""
  },
  {
      "locationId": "1332940",
      "name": "Mini Mobile Food Catering",
      "facilityType": "truck",
      "locationDescription": "11TH ST: FOLSOM ST to HARRISON ST (300 - 399)",
      "foodItems": "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages",
      "latitude": "37.771467",
      "longitude": "-122.412872",
      "daysHours": ""
  },
  {
      "locationId": "963998",
      "name": "Singh Brothers Ice Cream",
      "facilityType": "truck",
      "locationDescription": "PENINSULA AVE: BLANKEN AVE to LATHROP AVE (300 - 399)",
      "foodItems": "Ice Cream: Pre-Packaged Chips: Candies: Bottled Water \u0026 Canned SODA",
      "latitude": "37.710841",
      "longitude": "-122.399643",
      "daysHours": "Mo-Fr:5PM-6PM"
  },
  {
      "locationId": "1723817",
      "name": "Natan's Catering",
      "facilityType": "truck",
      "locationDescription": "EVANS AVE: RANKIN ST to SELBY ST (1800 - 1890)",
      "foodItems": "Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks",
      "latitude": "37.744591",
      "longitude": "-122.393077",
      "daysHours": ""
  },
  {
      "locationId": "1738315",
      "name": "San Francisco's Hometown Creamery",
      "facilityType": "truck",
      "locationDescription": "POST ST: STOCKTON ST to POWELL ST (300 - 399)",
      "foodItems": "Ice Cream: Waffle Cones",
      "latitude": "37.788697",
      "longitude": "-122.407470",
      "daysHours": ""
  },
  {
      "locationId": "1587524",
      "name": "Chairman SF, LLC",
      "facilityType": "truck",
      "locationDescription": "MISSION ST: ECKER ST to SHAW ALY (521 - 548)",
      "foodItems": "Baos: bowls \u0026 drinks",
      "latitude": "37.789249",
      "longitude": "-122.398893",
      "daysHours": ""
  },
  {
      "locationId": "1591832",
      "name": "Shah's Halal Food",
      "facilityType": "cart",
      "locationDescription": "MARKET ST: BATTERY ST to SUTTER ST (540 - 558) -- NORTH --",
      "foodItems": "Chicken Gyro: Lamb Gyro: Chiken Gyro Plate: Lamb Gyro Plate: Combination Gyro Plate.",
      "latitude": "37.790548",
      "longitude": "-122.400334",
      "daysHours": ""
  },
  {
      "locationId": "1514029",
      "name": "F \u0026 C Catering",
      "facilityType": "truck",
      "locationDescription": "03RD ST: 24TH ST to 25TH ST (2800 - 2898) -- WEST --",
      "foodItems": "Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad",
      "latitude": "37.753717",
      "longitude": "-122.388359",
      "daysHours": ""
  },
  {
      "locationId": "1757022",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "04TH ST: HOWARD ST to CLEMENTINA ST (200 - 267)",
      "foodItems": "everything except for hot dogs",
      "latitude": "37.782360",
      "longitude": "-122.402096",
      "daysHours": ""
  },
  {
      "locationId": "1757019",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "BERRY ST: 03RD ST to 04TH ST (100 - 199)",
      "foodItems": "everything except for hot dogs",
      "latitude": "37.776327",
      "longitude": "-122.391797",
      "daysHours": ""
  },
  {
      "locationId": "1757028",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "BRANNAN ST: 04TH ST to 05TH ST (500 - 599)",
      "foodItems": "Everything",
      "latitude": "37.777513",
      "longitude": "-122.397044",
      "daysHours": ""
  },
  {
      "locationId": "1757023",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "BERRY ST: 03RD ST to 04TH ST (100 - 199)",
      "foodItems": "everything except for hot dogs",
      "latitude": "37.776327",
      "longitude": "-122.391797",
      "daysHours": ""
  },
  {
      "locationId": "1757018",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "BROADWAY: DAVIS ST to FRONT ST (50 - 99)",
      "foodItems": "everything except for hot dogs",
      "latitude": "37.799260",
      "longitude": "-122.399618",
      "daysHours": ""
  },
  {
      "locationId": "1757029",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "MARY ST: MINNA ST to NATOMA ST (24 - 69)",
      "foodItems": "Multiple Food Trucks \u0026 Food Types",
      "latitude": "37.781372",
      "longitude": "-122.406619",
      "daysHours": ""
  },
  {
      "locationId": "1757024",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "BROADWAY: DAVIS ST to FRONT ST (50 - 99)",
      "foodItems": "everything except for hot dogs",
      "latitude": "37.799260",
      "longitude": "-122.399618",
      "daysHours": ""
  },
  {
      "locationId": "1757027",
      "name": "Off the Grid Services, LLC",
      "facilityType": "truck",
      "locationDescription": "BRANNAN ST: STANFORD ST to JACK LONDON ALY (324 - 353)",
      "foodItems": "Everything",
      "latitude": "37.781265",
      "longitude": "-122.393229",
      "daysHours": ""
  },
  {
      "locationId": "1764689",
      "name": "Tacos El Flaco",
      "facilityType": "truck",
      "locationDescription": "03RD ST: 25TH ST to 26TH ST (2901 - 2999) -- EAST --",
      "foodItems": "Tacos: Burritos: Tortas: Quesadillas: Chips \u0026 Salsa \u0026 Various Beverages",
      "latitude": "37.752405",
      "longitude": "-122.387000",
      "daysHours": ""
  },
  {
      "locationId": "1723905",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "MARKET ST: 10TH ST \\ FELL ST \\ POLK ST to 11TH ST (1401 - 1455) -- SOUTH --",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.775826",
      "longitude": "-122.417250",
      "daysHours": ""
  },
  {
      "locationId": "1723895",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "DONNER AVE: HAWES ST to INGALLS ST (1300 - 1399)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.721451",
      "longitude": "-122.389353",
      "daysHours": ""
  },
  {
      "locationId": "1723875",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "SHIPLEY ST: 04TH ST to 05TH ST (100 - 199)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.780724",
      "longitude": "-122.401235",
      "daysHours": ""
  },
  {
      "locationId": "1723876",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "SHOTWELL ST: 15TH ST to 16TH ST (100 - 199)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.747931",
      "longitude": "-122.415193",
      "daysHours": ""
  },
  {
      "locationId": "1723889",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "03RD ST: MARIN ST to ARTHUR AVE \\ CARGO WAY (3201 - 3399) -- EAST --",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.748445",
      "longitude": "-122.386879",
      "daysHours": ""
  },
  {
      "locationId": "1723870",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "OTIS ST: GOUGH ST \\ MCCOPPIN ST to 13TH ST \\ DUBOCE AVE \\ HWY 101 NORTHBOUND RAMP \\ MISSION ST (100 - 199)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.770683",
      "longitude": "-122.420880",
      "daysHours": ""
  },
  {
      "locationId": "1723878",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "TENNESSEE ST: MARIPOSA ST to 18TH ST (600 - 699)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.763540",
      "longitude": "-122.390097",
      "daysHours": ""
  },
  {
      "locationId": "1723872",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "PENNSYLVANIA AVE: 22ND ST to 23RD ST (700 - 899)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.756924",
      "longitude": "-122.393550",
      "daysHours": ""
  },
  {
      "locationId": "1723903",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "MARIPOSA ST: TENNESSEE ST to 04TH ST \\ MINNESOTA ST (600 - 699)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.764052",
      "longitude": "-122.390144",
      "daysHours": ""
  },
  {
      "locationId": "1723907",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "NEWHALL ST: BITTING AVE to EGBERT AVE (2660 - 2899)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.727212",
      "longitude": "-122.399636",
      "daysHours": ""
  },
  {
      "locationId": "1723906",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "MINNESOTA ST: MINNESOTA ST to 26TH ST (1400 - 1499)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.752075",
      "longitude": "-122.390145",
      "daysHours": ""
  },
  {
      "locationId": "1723893",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "CARROLL AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.723577",
      "longitude": "-122.390059",
      "daysHours": ""
  },
  {
      "locationId": "1723886",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "03RD ST: 26TH ST to CESAR CHAVEZ ST (3000 - 3098) -- WEST --",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.750464",
      "longitude": "-122.387908",
      "daysHours": ""
  },
  {
      "locationId": "1723880",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "TENNESSEE ST: 19TH ST to 20TH ST (800 - 899)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.761502",
      "longitude": "-122.389277",
      "daysHours": ""
  },
  {
      "locationId": "1723887",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "03RD ST: CESAR CHAVEZ ST to MARIN ST (3100 - 3199)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.749443",
      "longitude": "-122.387986",
      "daysHours": ""
  },
  {
      "locationId": "1723877",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.755031",
      "longitude": "-122.384531",
      "daysHours": ""
  },
  {
      "locationId": "1723890",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "03RD ST: EGBERT AVE to FITZGERALD AVE (6000 - 6170) -- WEST --",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.723980",
      "longitude": "-122.395903",
      "daysHours": ""
  },
  {
      "locationId": "1723874",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "22ND ST: MISSISSIPPI ST to TEXAS ST (1255 - 1399)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.757016",
      "longitude": "-122.394063",
      "daysHours": ""
  },
  {
      "locationId": "1723882",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "26TH ST: MINNESOTA ST to INDIANA ST (1000 - 1099)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.751269",
      "longitude": "-122.389894",
      "daysHours": ""
  },
  {
      "locationId": "1723904",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "MARIPOSA ST: PENNSYLVANIA AVE to MISSISSIPPI ST (1000 - 1099)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.764202",
      "longitude": "-122.394285",
      "daysHours": ""
  },
  {
      "locationId": "1723897",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "ELM ST: FRANKLIN ST to GOUGH ST (300 - 399)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.781380",
      "longitude": "-122.423144",
      "daysHours": ""
  },
  {
      "locationId": "1723883",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "26TH ST: MINNESOTA ST to INDIANA ST (1000 - 1099)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.751608",
      "longitude": "-122.390309",
      "daysHours": ""
  },
  {
      "locationId": "1723879",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "TENNESSEE ST: 18TH ST to 19TH ST (700 - 799)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.761852",
      "longitude": "-122.389932",
      "daysHours": ""
  },
  {
      "locationId": "1723884",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "03RD ST: MARIPOSA ST to 18TH ST (2001 - 2099) -- EAST --",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.763299",
      "longitude": "-122.388482",
      "daysHours": ""
  },
  {
      "locationId": "1723888",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "03RD ST: MARIN ST to ARTHUR AVE \\ CARGO WAY (3201 - 3399) -- EAST --",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.743831",
      "longitude": "-122.377797",
      "daysHours": ""
  },
  {
      "locationId": "1723871",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "PENNSYLVANIA AVE: MARIPOSA ST to I-280 S OFF RAMP (200 - 256)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.763463",
      "longitude": "-122.394013",
      "daysHours": ""
  },
  {
      "locationId": "1723894",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "10TH ST: SHERIDAN ST to HARRISON ST (350 - 399)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.771654",
      "longitude": "-122.411809",
      "daysHours": ""
  },
  {
      "locationId": "1723881",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "TEXAS ST: SIERRA ST to 22ND ST (632 - 699)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.757917",
      "longitude": "-122.395476",
      "daysHours": ""
  },
  {
      "locationId": "1723873",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "PENNSYLVANIA AVE: I-280 S OFF RAMP to 25TH ST (1050 - 1099)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.753361",
      "longitude": "-122.393046",
      "daysHours": ""
  },
  {
      "locationId": "1723902",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "INDIANA ST: 26TH ST to CESAR CHAVEZ ST (1500 - 1599)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.750850",
      "longitude": "-122.390028",
      "daysHours": ""
  },
  {
      "locationId": "1723896",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "EDDY ST: BUCHANAN ST to WEBSTER ST (1300 - 1399)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.781867",
      "longitude": "-122.429885",
      "daysHours": ""
  },
  {
      "locationId": "1723900",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "INDIANA ST: 20TH ST to 22ND ST (800 - 999)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.758037",
      "longitude": "-122.391672",
      "daysHours": ""
  },
  {
      "locationId": "1723891",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "ARMSTRONG AVE: HAWES ST to INGALLS ST (1300 - 1399)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.723079",
      "longitude": "-122.387526",
      "daysHours": ""
  },
  {
      "locationId": "1723892",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "CESAR CHAVEZ ST: EVANS AVE to KANSAS ST (2100 - 2550)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.750237",
      "longitude": "-122.397818",
      "daysHours": ""
  },
  {
      "locationId": "1723899",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "FRANCISCO ST: MASON ST to TAYLOR ST (500 - 599)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.805050",
      "longitude": "-122.414334",
      "daysHours": ""
  },
  {
      "locationId": "1723885",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "03RD ST: MARIPOSA ST to 18TH ST (2000 - 2098) -- WEST --",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.763660",
      "longitude": "-122.389134",
      "daysHours": ""
  },
  {
      "locationId": "1723901",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "INDIANA ST: 20TH ST to 22ND ST (800 - 999)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.758786",
      "longitude": "-122.390958",
      "daysHours": ""
  },
  {
      "locationId": "1723898",
      "name": "Brazuca Grill",
      "facilityType": "truck",
      "locationDescription": "FOLSOM ST: ERIE ST to 14TH ST (1718 - 1799)",
      "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
      "latitude": "37.768904",
      "longitude": "-122.415981",
      "daysHours": ""
  },
  {
      "locationId": "1750843",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "THOMAS AVE: HAWES ST to INGALLS ST (1200 - 1299)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726665",
      "longitude": "-122.384144",
      "daysHours": ""
  },
  {
      "locationId": "1750837",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "QUESADA AVE: ARELIOUS WALKER DR to GRIFFITH ST (1000 - 1099)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.725789",
      "longitude": "-122.378973",
      "daysHours": ""
  },
  {
      "locationId": "1750842",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "THOMAS AVE: GRIFFITH ST to HAWES ST (1100 - 1199)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726125",
      "longitude": "-122.383199",
      "daysHours": ""
  },
  {
      "locationId": "1750854",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "BANCROFT AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.724173",
      "longitude": "-122.389735",
      "daysHours": ""
  },
  {
      "locationId": "1750866",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "MAIN ST: FOLSOM ST to HARRISON ST (300 - 399)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.788145",
      "longitude": "-122.391182",
      "daysHours": ""
  },
  {
      "locationId": "1750848",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "VAN DYKE AVE: INGALLS ST to JENNINGS ST (1300 - 1399)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726249",
      "longitude": "-122.387815",
      "daysHours": ""
  },
  {
      "locationId": "1750845",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "UNDERWOOD AVE: INGALLS ST to JENNINGS ST (1300 - 1399)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.727110",
      "longitude": "-122.388261",
      "daysHours": ""
  },
  {
      "locationId": "1750863",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "GRIFFITH ST: SHAFTER AVE to THOMAS AVE (1500 - 1599)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.725319",
      "longitude": "-122.381389",
      "daysHours": ""
  },
  {
      "locationId": "1750846",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "UNDERWOOD AVE: INGALLS ST to JENNINGS ST (1300 - 1399)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.727015",
      "longitude": "-122.387497",
      "daysHours": ""
  },
  {
      "locationId": "1750836",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "PALOU AVE: PALOU AVE to GRIFFITH ST (904 - 999)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1750840",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "REVERE AVE: GRIFFITH ST to CRISP RD (1100 - 1188)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726471",
      "longitude": "-122.381541",
      "daysHours": ""
  },
  {
      "locationId": "1750858",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "DONNER AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.723260",
      "longitude": "-122.391173",
      "daysHours": ""
  },
  {
      "locationId": "1750838",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "REVERE AVE: GRIFFITH ST to CRISP RD (1100 - 1188)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726590",
      "longitude": "-122.381752",
      "daysHours": ""
  },
  {
      "locationId": "1750844",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "THOMAS AVE: HAWES ST to INGALLS ST (1200 - 1299)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726710",
      "longitude": "-122.385295",
      "daysHours": ""
  },
  {
      "locationId": "1750841",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "SHAFTER AVE: GRIFFITH ST to HAWES ST (1100 - 1199)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.725946",
      "longitude": "-122.382281",
      "daysHours": ""
  },
  {
      "locationId": "1750851",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "YOSEMITE AVE: HAWES ST to INGALLS ST (1300 - 1399)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.723879",
      "longitude": "-122.387011",
      "daysHours": ""
  },
  {
      "locationId": "1750865",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "JENNINGS ST: VAN DYKE AVE to WALLACE AVE (2100 - 2199)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726728",
      "longitude": "-122.388658",
      "daysHours": ""
  },
  {
      "locationId": "1750859",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "DONNER AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.723057",
      "longitude": "-122.391112",
      "daysHours": ""
  },
  {
      "locationId": "1750849",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "WALLACE AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726146",
      "longitude": "-122.388228",
      "daysHours": ""
  },
  {
      "locationId": "1750852",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "YOSEMITE AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.725182",
      "longitude": "-122.388193",
      "daysHours": ""
  },
  {
      "locationId": "1750839",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "REVERE AVE: GRIFFITH ST to CRISP RD (1100 - 1188)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.727234",
      "longitude": "-122.381816",
      "daysHours": ""
  },
  {
      "locationId": "1750855",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "BANCROFT AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.724413",
      "longitude": "-122.390157",
      "daysHours": ""
  },
  {
      "locationId": "1750862",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "GRIFFITH ST: QUESADA AVE to REVERE AVE (1300 - 1399)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.727087",
      "longitude": "-122.381074",
      "daysHours": ""
  },
  {
      "locationId": "1750847",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "VAN DYKE AVE: INGALLS ST to JENNINGS ST (1300 - 1399)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726951",
      "longitude": "-122.387980",
      "daysHours": ""
  },
  {
      "locationId": "1750867",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "OFARRELL ST: BRODERICK ST to SAINT JOSEPHS AVE (2200 - 2299)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "0.000000",
      "longitude": "0.000000",
      "daysHours": ""
  },
  {
      "locationId": "1750850",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "WALLACE AVE: JENNINGS ST to KEITH ST (1500 - 1599)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726726",
      "longitude": "-122.389250",
      "daysHours": ""
  },
  {
      "locationId": "1750853",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "YOSEMITE AVE: INGALLS ST to JENNINGS ST (1400 - 1499)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.725498",
      "longitude": "-122.388369",
      "daysHours": ""
  },
  {
      "locationId": "1750857",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "BEALE ST: FOLSOM ST to HARRISON ST (300 - 399)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.788139",
      "longitude": "-122.392580",
      "daysHours": ""
  },
  {
      "locationId": "1750856",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "BANCROFT AVE: JENNINGS ST to KEITH ST (1500 - 1599)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.724398",
      "longitude": "-122.391505",
      "daysHours": ""
  },
  {
      "locationId": "1750860",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "FELL ST: BRODERICK ST to BAKER ST (1300 - 1399)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.773288",
      "longitude": "-122.440032",
      "daysHours": ""
  },
  {
      "locationId": "1750861",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "FREMONT ST: NATOMA ST to HOWARD ST (170 - 199)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.789691",
      "longitude": "-122.396596",
      "daysHours": ""
  },
  {
      "locationId": "1750835",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "PALOU AVE: PALOU AVE to GRIFFITH ST (904 - 999)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726734",
      "longitude": "-122.378972",
      "daysHours": ""
  },
  {
      "locationId": "1750864",
      "name": "TING TING MINI MOBILE DELI",
      "facilityType": "truck",
      "locationDescription": "HAWES ST: SHAFTER AVE to THOMAS AVE (1500 - 1599)",
      "foodItems": "Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages",
      "latitude": "37.726485",
      "longitude": "-122.383232",
      "daysHours": ""
  },
  {
      "locationId": "1343831",
      "name": "Got Snacks",
      "facilityType": "cart",
      "locationDescription": "",
      "foodItems": "sunflower seeds: crackerjacks: bottled water: peanuts: candy",
      "latitude": "37.775510",
      "longitude": "-122.390999",
      "daysHours": ""
  },
  {
      "locationId": "1656382",
      "name": "San Francisco Taco Truck",
      "facilityType": "truck",
      "locationDescription": "WILLIAMS AVE: APOLLO ST to PHELPS ST \\ VESTA ST (300 - 399)",
      "foodItems": "Tacos: Tortas: Burritos",
      "latitude": "37.729805",
      "longitude": "-122.399247",
      "daysHours": ""
  },
  {
      "locationId": "1656405",
      "name": "San Francisco Taco Truck",
      "facilityType": "truck",
      "locationDescription": "WILLIAMS AVE: VENUS ST to APOLLO ST (250 - 331)",
      "foodItems": "Tacos: Tortas: Burritos",
      "latitude": "37.729805",
      "longitude": "-122.399247",
      "daysHours": ""
  }
])