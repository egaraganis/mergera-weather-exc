const countries = [
   { value: "afghanistan", label: "Afghanistan", coords: [33.0, 65.0] },
   { value: "albania", label: "Albania", coords: [41.0, 20.0] },
   { value: "algeria", label: "Algeria", coords: [28.0, 3.0] },
   {
      value: "american-samoa",
      label: "American Samoa",
      coords: [-14.3333, -170.0],
   },
   { value: "andorra", label: "Andorra", coords: [42.5, 1.6] },
   { value: "angola", label: "Angola", coords: [-12.5, 18.5] },
   { value: "anguilla", label: "Anguilla", coords: [18.25, -63.1667] },
   { value: "antarctica", label: "Antarctica", coords: [-90.0, 0.0] },
   {
      value: "antigua-and-barbuda",
      label: "Antigua and Barbuda",
      coords: [17.05, -61.8],
   },
   { value: "argentina", label: "Argentina", coords: [-34.0, -64.0] },
   { value: "armenia", label: "Armenia", coords: [40.0, 45.0] },
   { value: "aruba", label: "Aruba", coords: [12.5, -69.9667] },
   { value: "australia", label: "Australia", coords: [-27.0, 133.0] },
   { value: "austria", label: "Austria", coords: [47.3333, 13.3333] },
   { value: "azerbaijan", label: "Azerbaijan", coords: [40.5, 47.5] },
   { value: "bahamas", label: "Bahamas", coords: [24.25, -76.0] },
   { value: "bahrain", label: "Bahrain", coords: [26.0, 50.55] },
   { value: "bangladesh", label: "Bangladesh", coords: [24.0, 90.0] },
   { value: "barbados", label: "Barbados", coords: [13.1667, -59.5333] },
   { value: "belarus", label: "Belarus", coords: [53.0, 28.0] },
   { value: "belgium", label: "Belgium", coords: [50.8333, 4.0] },
   { value: "belize", label: "Belize", coords: [17.25, -88.75] },
   { value: "benin", label: "Benin", coords: [9.5, 2.25] },
   { value: "bermuda", label: "Bermuda", coords: [32.3333, -64.75] },
   { value: "bhutan", label: "Bhutan", coords: [27.5, 90.5] },
   { value: "bolivia", label: "Bolivia", coords: [-17.0, -65.0] },
   {
      value: "bosnia-and-herzegovina",
      label: "Bosnia and Herzegovina",
      coords: [44.0, 18.0],
   },
   { value: "botswana", label: "Botswana", coords: [-22.0, 24.0] },
   { value: "bouvet-island", label: "Bouvet Island", coords: [-54.4333, 3.4] },
   { value: "brazil", label: "Brazil", coords: [-10.0, -55.0] },
   {
      value: "british-indian-ocean-territory",
      label: "British Indian Ocean Territory",
      coords: [-6.0, 71.5],
   },
   { value: "brunei", label: "Brunei", coords: [4.5, 114.6667] },
   { value: "bulgaria", label: "Bulgaria", coords: [43.0, 25.0] },
   { value: "burkina-faso", label: "Burkina Faso", coords: [13.0, -2.0] },
   { value: "burundi", label: "Burundi", coords: [-3.5, 30.0] },
   { value: "cambodia", label: "Cambodia", coords: [13.0, 105.0] },
   { value: "cameroon", label: "Cameroon", coords: [6.0, 12.0] },
   { value: "canada", label: "Canada", coords: [60.0, -95.0] },
   { value: "cape-verde", label: "Cape Verde", coords: [16.0, -24.0] },
   { value: "cayman-islands", label: "Cayman Islands", coords: [19.5, -80.5] },
   {
      value: "central-african-republic",
      label: "Central African Republic",
      coords: [7.0, 21.0],
   },
   { value: "chad", label: "Chad", coords: [15.0, 19.0] },
   { value: "chile", label: "Chile", coords: [-30.0, -71.0] },
   { value: "china", label: "China", coords: [35.0, 105.0] },
   {
      value: "christmas-island",
      label: "Christmas Island",
      coords: [-10.5, 105.6667],
   },
   {
      value: "cocos-islands",
      label: "Cocos (Keeling) Islands",
      coords: [-12.5, 96.8333],
   },
   { value: "colombia", label: "Colombia", coords: [4.0, -72.0] },
   { value: "comoros", label: "Comoros", coords: [-12.1667, 44.25] },
   { value: "congo", label: "Congo", coords: [-1.0, 15.0] },
   {
      value: "democratic-republic-of-the-congo",
      label: "Democratic Republic of the Congo",
      coords: [0.0, 25.0],
   },
   {
      value: "cook-islands",
      label: "Cook Islands",
      coords: [-21.2333, -159.7667],
   },
   { value: "costa-rica", label: "Costa Rica", coords: [10.0, -84.0] },
   { value: "ivory-coast", label: "Ivory Coast", coords: [8.0, -5.0] },
   { value: "croatia", label: "Croatia", coords: [45.1667, 15.5] },
   { value: "cuba", label: "Cuba", coords: [21.5, -80.0] },
   { value: "cyprus", label: "Cyprus", coords: [35.0, 33.0] },
   { value: "czech-republic", label: "Czech Republic", coords: [49.75, 15.5] },
   { value: "denmark", label: "Denmark", coords: [56.0, 10.0] },
   { value: "djibouti", label: "Djibouti", coords: [11.5, 43.0] },
   { value: "dominica", label: "Dominica", coords: [15.4167, -61.3333] },
   {
      value: "dominican-republic",
      label: "Dominican Republic",
      coords: [19.0, -70.6667],
   },
   { value: "ecuador", label: "Ecuador", coords: [-2.0, -77.5] },
   { value: "egypt", label: "Egypt", coords: [27.0, 30.0] },
   { value: "el-salvador", label: "El Salvador", coords: [13.8333, -88.9167] },
   {
      value: "equatorial-guinea",
      label: "Equatorial Guinea",
      coords: [2.0, 10.0],
   },
   { value: "eritrea", label: "Eritrea", coords: [15.0, 39.0] },
   { value: "estonia", label: "Estonia", coords: [59.0, 26.0] },
   { value: "ethiopia", label: "Ethiopia", coords: [8.0, 38.0] },
   {
      value: "falkland-islands",
      label: "Falkland Islands (Malvinas)",
      coords: [-51.75, -59.0],
   },
   { value: "faroe-islands", label: "Faroe Islands", coords: [62.0, -7.0] },
   { value: "fiji", label: "Fiji", coords: [-18.0, 175.0] },
   { value: "finland", label: "Finland", coords: [64.0, 26.0] },
   { value: "france", label: "France", coords: [46.0, 2.0] },
   { value: "french-guiana", label: "French Guiana", coords: [4.0, -53.0] },
   {
      value: "french-polynesia",
      label: "French Polynesia",
      coords: [-15.0, -140.0],
   },
   {
      value: "french-southern-territories",
      label: "French Southern Territories",
      coords: [-49.25, 69.167],
   },
   { value: "gabon", label: "Gabon", coords: [-1.0, 11.75] },
   { value: "gambia", label: "Gambia", coords: [13.4667, -16.5667] },
   { value: "georgia", label: "Georgia", coords: [42.0, 43.5] },
   { value: "germany", label: "Germany", coords: [51.0, 9.0] },
   { value: "ghana", label: "Ghana", coords: [8.0, -2.0] },
   { value: "gibraltar", label: "Gibraltar", coords: [36.1833, -5.3667] },
   { value: "greece", label: "Greece", coords: [39.0, 22.0] },
   { value: "greenland", label: "Greenland", coords: [72.0, -40.0] },
   { value: "grenada", label: "Grenada", coords: [12.1167, -61.6667] },
   { value: "guadeloupe", label: "Guadeloupe", coords: [16.25, -61.5833] },
   { value: "guam", label: "Guam", coords: [13.4667, 144.7833] },
   { value: "guatemala", label: "Guatemala", coords: [15.5, -90.25] },
   { value: "guernsey", label: "Guernsey", coords: [49.4667, -2.5833] },
   { value: "guinea", label: "Guinea", coords: [11.0, -10.0] },
   { value: "guinea-bissau", label: "Guinea-Bissau", coords: [12.0, -15.0] },
   { value: "guyana", label: "Guyana", coords: [5.0, -59.0] },
   { value: "haiti", label: "Haiti", coords: [19.0, -72.4167] },
   {
      value: "heard-island-and-mcdonald-islands",
      label: "Heard Island and McDonald Islands",
      coords: [-53.1, 72.5167],
   },
   {
      value: "holy-see",
      label: "Holy See (Vatican City State)",
      coords: [41.9, 12.45],
   },
   { value: "honduras", label: "Honduras", coords: [15.0, -86.5] },
   { value: "hong-kong", label: "Hong Kong", coords: [22.25, 114.1667] },
   { value: "hungary", label: "Hungary", coords: [47.0, 20.0] },
   { value: "iceland", label: "Iceland", coords: [65.0, -18.0] },
   { value: "india", label: "India", coords: [20.0, 77.0] },
   { value: "indonesia", label: "Indonesia", coords: [-5.0, 120.0] },
   { value: "iran", label: "Iran", coords: [32.0, 53.0] },
   { value: "iraq", label: "Iraq", coords: [33.0, 44.0] },
   { value: "ireland", label: "Ireland", coords: [53.0, -8.0] },
   { value: "isle-of-man", label: "Isle of Man", coords: [54.25, -4.5] },
   { value: "israel", label: "Israel", coords: [31.5, 34.75] },
   { value: "italy", label: "Italy", coords: [42.8333, 12.8333] },
   { value: "jamaica", label: "Jamaica", coords: [18.25, -77.5] },
   { value: "japan", label: "Japan", coords: [36.0, 138.0] },
   { value: "jersey", label: "Jersey", coords: [49.21, -2.13] },
   { value: "jordan", label: "Jordan", coords: [31.0, 36.0] },
   { value: "kazakhstan", label: "Kazakhstan", coords: [48.0, 68.0] },
   { value: "kenya", label: "Kenya", coords: [1.0, 38.0] },
   { value: "kiribati", label: "Kiribati", coords: [1.4167, 173.0] },
   { value: "north-korea", label: "Korea (North)", coords: [40.0, 127.0] },
   { value: "south-korea", label: "Korea (South)", coords: [37.0, 127.5] },
   { value: "kuwait", label: "Kuwait", coords: [29.5, 47.75] },
   { value: "kyrgyzstan", label: "Kyrgyzstan", coords: [41.0, 75.0] },
   { value: "laos", label: "Laos", coords: [18.0, 105.0] },
   { value: "latvia", label: "Latvia", coords: [57.0, 25.0] },
   { value: "lebanon", label: "Lebanon", coords: [33.8333, 35.8333] },
   { value: "lesotho", label: "Lesotho", coords: [-29.5, 28.5] },
   { value: "liberia", label: "Liberia", coords: [6.5, -9.5] },
   { value: "libya", label: "Libya", coords: [25.0, 17.0] },
   {
      value: "liechtenstein",
      label: "Liechtenstein",
      coords: [47.1667, 9.5333],
   },
   { value: "lithuania", label: "Lithuania", coords: [56.0, 24.0] },
   { value: "luxembourg", label: "Luxembourg", coords: [49.75, 6.1667] },
   { value: "macau", label: "Macau", coords: [22.1667, 113.55] },
   { value: "madagascar", label: "Madagascar", coords: [-20.0, 47.0] },
   { value: "malawi", label: "Malawi", coords: [-13.5, 34.0] },
   { value: "malaysia", label: "Malaysia", coords: [2.5, 112.5] },
   { value: "maldives", label: "Maldives", coords: [3.25, 73.0] },
   { value: "mali", label: "Mali", coords: [17.0, -4.0] },
   { value: "malta", label: "Malta", coords: [35.8333, 14.5833] },
   {
      value: "marshall-islands",
      label: "Marshall Islands",
      coords: [9.0, 168.0],
   },
   { value: "martinique", label: "Martinique", coords: [14.6667, -61.0] },
   { value: "mauritania", label: "Mauritania", coords: [20.0, -12.0] },
   { value: "mauritius", label: "Mauritius", coords: [-20.2833, 57.55] },
   { value: "mayotte", label: "Mayotte", coords: [-12.8333, 45.1667] },
   { value: "mexico", label: "Mexico", coords: [23.0, -102.0] },
   { value: "micronesia", label: "Micronesia", coords: [6.9167, 158.25] },
   { value: "moldova", label: "Moldova", coords: [47.0, 29.0] },
   { value: "monaco", label: "Monaco", coords: [43.7333, 7.4] },
   { value: "mongolia", label: "Mongolia", coords: [46.0, 105.0] },
   { value: "montenegro", label: "Montenegro", coords: [42.5, 19.3] },
   { value: "montserrat", label: "Montserrat", coords: [16.75, -62.2] },
   { value: "morocco", label: "Morocco", coords: [32.0, -5.0] },
   { value: "mozambique", label: "Mozambique", coords: [-18.25, 35.0] },
   { value: "myanmar", label: "Myanmar", coords: [22.0, 98.0] },
   { value: "namibia", label: "Namibia", coords: [-22.0, 17.0] },
   { value: "nauru", label: "Nauru", coords: [-0.5333, 166.9167] },
   { value: "nepal", label: "Nepal", coords: [28.0, 84.0] },
   { value: "netherlands", label: "Netherlands", coords: [52.5, 5.75] },
   { value: "new-caledonia", label: "New Caledonia", coords: [-21.5, 165.5] },
   { value: "new-zealand", label: "New Zealand", coords: [-41.0, 174.0] },
   { value: "nicaragua", label: "Nicaragua", coords: [13.0, -85.0] },
   { value: "niger", label: "Niger", coords: [16.0, 8.0] },
   { value: "nigeria", label: "Nigeria", coords: [10.0, 8.0] },
   { value: "niue", label: "Niue", coords: [-19.0333, -169.8667] },
   {
      value: "norfolk-island",
      label: "Norfolk Island",
      coords: [-29.0333, 167.95],
   },
   {
      value: "north-macedonia",
      label: "North Macedonia",
      coords: [41.8333, 22.0],
   },
   {
      value: "northern-mariana-islands",
      label: "Northern Mariana Islands",
      coords: [15.2, 145.75],
   },
   { value: "norway", label: "Norway", coords: [62.0, 10.0] },
   { value: "oman", label: "Oman", coords: [21.0, 57.0] },
   { value: "pakistan", label: "Pakistan", coords: [30.0, 70.0] },
   { value: "palau", label: "Palau", coords: [7.5, 134.5] },
   { value: "palestine", label: "Palestine", coords: [31.9, 35.2] },
   { value: "panama", label: "Panama", coords: [9.0, -80.0] },
   {
      value: "papua-new-guinea",
      label: "Papua New Guinea",
      coords: [-6.0, 147.0],
   },
   { value: "paraguay", label: "Paraguay", coords: [-23.0, -58.0] },
   { value: "peru", label: "Peru", coords: [-10.0, -76.0] },
   { value: "philippines", label: "Philippines", coords: [13.0, 122.0] },
   { value: "pitcairn", label: "Pitcairn", coords: [-24.7036, -127.4394] },
   { value: "poland", label: "Poland", coords: [52.0, 20.0] },
   { value: "portugal", label: "Portugal", coords: [39.5, -8.0] },
   { value: "puerto-rico", label: "Puerto Rico", coords: [18.25, -66.5] },
   { value: "qatar", label: "Qatar", coords: [25.5, 51.25] },
   { value: "reunion", label: "Réunion", coords: [-21.1, 55.6] },
   { value: "romania", label: "Romania", coords: [46.0, 25.0] },
   { value: "russia", label: "Russia", coords: [60.0, 100.0] },
   { value: "rwanda", label: "Rwanda", coords: [-2.0, 30.0] },
   {
      value: "saint-barthelemy",
      label: "Saint Barthélemy",
      coords: [17.9, -62.8333],
   },
   { value: "saint-helena", label: "Saint Helena", coords: [-15.9333, -5.7] },
   {
      value: "saint-kitts-and-nevis",
      label: "Saint Kitts and Nevis",
      coords: [17.3333, -62.75],
   },
   { value: "saint-lucia", label: "Saint Lucia", coords: [13.8833, -60.9667] },
   { value: "saint-martin", label: "Saint Martin", coords: [18.0833, -63.05] },
   {
      value: "saint-pierre-and-miquelon",
      label: "Saint Pierre and Miquelon",
      coords: [46.8333, -56.3333],
   },
   {
      value: "saint-vincent-and-the-grenadines",
      label: "Saint Vincent and the Grenadines",
      coords: [13.25, -61.2],
   },
   { value: "samoa", label: "Samoa", coords: [-13.5833, -172.3333] },
   { value: "san-marino", label: "San Marino", coords: [43.9333, 12.45] },
   {
      value: "sao-tome-and-principe",
      label: "Sao Tome and Principe",
      coords: [1.0, 7.0],
   },
   { value: "saudi-arabia", label: "Saudi Arabia", coords: [25.0, 45.0] },
   { value: "senegal", label: "Senegal", coords: [14.0, -14.0] },
   { value: "serbia", label: "Serbia", coords: [44.0, 21.0] },
   { value: "seychelles", label: "Seychelles", coords: [-4.5833, 55.6667] },
   { value: "sierra-leone", label: "Sierra Leone", coords: [8.5, -11.5] },
   { value: "singapore", label: "Singapore", coords: [1.3667, 103.8] },
   { value: "sint-maarten", label: "Sint Maarten", coords: [18.05, -63.05] },
   { value: "slovakia", label: "Slovakia", coords: [48.6667, 19.5] },
   { value: "slovenia", label: "Slovenia", coords: [46.0, 15.0] },
   {
      value: "solomon-islands",
      label: "Solomon Islands",
      coords: [-8.0, 159.0],
   },
   { value: "somalia", label: "Somalia", coords: [10.0, 49.0] },
   { value: "south-africa", label: "South Africa", coords: [-29.0, 24.0] },
   { value: "south-sudan", label: "South Sudan", coords: [7.0, 30.0] },
   { value: "spain", label: "Spain", coords: [40.0, -4.0] },
   { value: "sri-lanka", label: "Sri Lanka", coords: [7.0, 81.0] },
   { value: "sudan", label: "Sudan", coords: [15.0, 30.0] },
   { value: "suriname", label: "Suriname", coords: [4.0, -56.0] },
   { value: "sweden", label: "Sweden", coords: [62.0, 15.0] },
   { value: "switzerland", label: "Switzerland", coords: [47.0, 8.0] },
   { value: "syria", label: "Syria", coords: [35.0, 38.0] },
   { value: "taiwan", label: "Taiwan", coords: [23.5, 121.0] },
   { value: "tajikistan", label: "Tajikistan", coords: [39.0, 71.0] },
   { value: "tanzania", label: "Tanzania", coords: [-6.0, 35.0] },
   { value: "thailand", label: "Thailand", coords: [15.0, 100.0] },
   { value: "timor-leste", label: "Timor-Leste", coords: [-8.8333, 125.9167] },
   { value: "togo", label: "Togo", coords: [8.0, 1.1667] },
   { value: "tokelau", label: "Tokelau", coords: [-9.0, -172.0] },
   { value: "tonga", label: "Tonga", coords: [-20.0, -175.0] },
   {
      value: "trinidad-and-tobago",
      label: "Trinidad and Tobago",
      coords: [11.0, -61.0],
   },
   { value: "tunisia", label: "Tunisia", coords: [34.0, 9.0] },
   { value: "turkey", label: "Turkey", coords: [39.0, 35.0] },
   { value: "turkmenistan", label: "Turkmenistan", coords: [40.0, 60.0] },
   { value: "tuvalu", label: "Tuvalu", coords: [-8.0, 178.0] },
   { value: "uganda", label: "Uganda", coords: [1.0, 32.0] },
   { value: "ukraine", label: "Ukraine", coords: [49.0, 32.0] },
   {
      value: "united-arab-emirates",
      label: "United Arab Emirates",
      coords: [24.0, 54.0],
   },
   { value: "united-kingdom", label: "United Kingdom", coords: [54.0, -2.0] },
   { value: "united-states", label: "United States", coords: [38.0, -97.0] },
   { value: "uruguay", label: "Uruguay", coords: [-33.0, -56.0] },
   { value: "uzbekistan", label: "Uzbekistan", coords: [41.0, 64.0] },
   { value: "vanuatu", label: "Vanuatu", coords: [-16.0, 167.0] },
   { value: "vatican-city", label: "Vatican City", coords: [41.9, 12.45] },
   { value: "venezuela", label: "Venezuela", coords: [8.0, -66.0] },
   { value: "vietnam", label: "Vietnam", coords: [16.0, 108.0] },
   {
      value: "wallis-and-futuna",
      label: "Wallis and Futuna",
      coords: [-13.3, -176.2],
   },
   { value: "western-sahara", label: "Western Sahara", coords: [24.5, -13.0] },
   { value: "yemen", label: "Yemen", coords: [15.0, 48.0] },
   { value: "zambia", label: "Zambia", coords: [-15.0, 30.0] },
   { value: "zimbabwe", label: "Zimbabwe", coords: [-20.0, 30.0] },
];

export default countries;
