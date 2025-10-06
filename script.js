 const countries = [{name: "Afghanistan", currency: "AFN", code: "AF", continent: "Asia"},
{name: "Albania", currency: "ALL", code: "AL", continent: "Europe"},
{name: "Algeria", currency: "DZD", code: "DZ", continent: "Africa"},
{name: "Andorra", currency: "EUR", code: "AD", continent: "Europe"},
{name: "Angola", currency: "AOA", code: "AO", continent: "Africa"},
{name: "Antigua and Barbuda", currency: "XCD", code: "AG", continent: "North America"},
{name: "Argentina", currency: "ARS", code: "AR", continent: "South America"},
{name: "Armenia", currency: "AMD", code: "AM", continent: "Asia"},
{name: "Australia", currency: "AUD", code: "AU", continent: "Oceania"},
{name: "Austria", currency: "EUR", code: "AT", continent: "Europe"},
{name: "Azerbaijan", currency: "AZN", code: "AZ", continent: "Asia"},
{name: "Bahamas", currency: "BSD", code: "BS", continent: "North America"},
{name: "Bahrain", currency: "BHD", code: "BH", continent: "Asia"},
{name: "Bangladesh", currency: "BDT", code: "BD", continent: "Asia"},
{name: "Barbados", currency: "BBD", code: "BB", continent: "North America"},
{name: "Belarus", currency: "BYN", code: "BY", continent: "Europe"},
{name: "Belgium", currency: "EUR", code: "BE", continent: "Europe"},
{name: "Belize", currency: "BZD", code: "BZ", continent: "North America"},
{name: "Benin", currency: "XOF", code: "BJ", continent: "Africa"},
{name: "Bhutan", currency: "BTN", code: "BT", continent: "Asia"},
{name: "Bolivia", currency: "BOB", code: "BO", continent: "South America"},
{name: "Bosnia and Herzegovina", currency: "BAM", code: "BA", continent: "Europe"},
{name: "Botswana", currency: "BWP", code: "BW", continent: "Africa"},
{name: "Brazil", currency: "BRL", code: "BR", continent: "South America"},
{name: "Brunei", currency: "BND", code: "BN", continent: "Asia"},
{name: "Bulgaria", currency: "BGN", code: "BG", continent: "Europe"},
{name: "Burkina Faso", currency: "XOF", code: "BF", continent: "Africa"},
{name: "Burundi", currency: "BIF", code: "BI", continent: "Africa"},
{name: "Cabo Verde", currency: "CVE", code: "CV", continent: "Africa"},
{name: "Cambodia", currency: "KHR", code: "KH", continent: "Asia"},
{name: "Cameroon", currency: "XAF", code: "CM", continent: "Africa"},
{name: "Canada", currency: "CAD", code: "CA", continent: "North America"},
{name: "Central African Republic", currency: "XAF", code: "CF", continent: "Africa"},
{name: "Chad", currency: "XAF", code: "TD", continent: "Africa"},
{name: "Chile", currency: "CLP", code: "CL", continent: "South America"},
{name: "China", currency: "CNY", code: "CN", continent: "Asia"},
{name: "Colombia", currency: "COP", code: "CO", continent: "South America"},
{name: "Comoros", currency: "KMF", code: "KM", continent: "Africa"},
{name: "Congo", currency: "XAF", code: "CG", continent: "Africa"},
{name: "Costa Rica", currency: "CRC", code: "CR", continent: "North America"},
{name: "Croatia", currency: "EUR", code: "HR", continent: "Europe"},
{name: "Cuba", currency: "CUP", code: "CU", continent: "North America"},
{name: "Cyprus", currency: "EUR", code: "CY", continent: "Europe"},
{name: "Czech Republic", currency: "CZK", code: "CZ", continent: "Europe"},
{name: "Denmark", currency: "DKK", code: "DK", continent: "Europe"},
{name: "Djibouti", currency: "DJF", code: "DJ", continent: "Africa"},
{name: "Dominica", currency: "XCD", code: "DM", continent: "North America"},
{name: "Dominican Republic", currency: "DOP", code: "DO", continent: "North America"},
{name: "Ecuador", currency: "USD", code: "EC", continent: "South America"},
{name: "Egypt", currency: "EGP", code: "EG", continent: "Africa"},
{name: "El Salvador", currency: "USD", code: "SV", continent: "North America"},
{name: "Equatorial Guinea", currency: "XAF", code: "GQ", continent: "Africa"},
{name: "Eritrea", currency: "ERN", code: "ER", continent: "Africa"},
{name: "Estonia", currency: "EUR", code: "EE", continent: "Europe"},
{name: "Eswatini", currency: "SZL", code: "SZ", continent: "Africa"},
{name: "Ethiopia", currency: "ETB", code: "ET", continent: "Africa"},
{name: "Fiji", currency: "FJD", code: "FJ", continent: "Oceania"},
{name: "Finland", currency: "EUR", code: "FI", continent: "Europe"},
{name: "France", currency: "EUR", code: "FR", continent: "Europe"},
{name: "Gabon", currency: "XAF", code: "GA", continent: "Africa"},
{name: "Gambia", currency: "GMD", code: "GM", continent: "Africa"},
{name: "Georgia", currency: "GEL", code: "GE", continent: "Asia"},
{name: "Germany", currency: "EUR", code: "DE", continent: "Europe"},
{name: "Ghana", currency: "GHS", code: "GH", continent: "Africa"},
{name: "Greece", currency: "EUR", code: "GR", continent: "Europe"},
{name: "Grenada", currency: "XCD", code: "GD", continent: "North America"},
{name: "Guatemala", currency: "GTQ", code: "GT", continent: "North America"},
{name: "Guinea", currency: "GNF", code: "GN", continent: "Africa"},
{name: "Guinea-Bissau", currency: "XOF", code: "GW", continent: "Africa"},
{name: "Guyana", currency: "GYD", code: "GY", continent: "South America"},
{name: "Haiti", currency: "HTG", code: "HT", continent: "North America"},
{name: "Honduras", currency: "HNL", code: "HN", continent: "North America"},
{name: "Hungary", currency: "HUF", code: "HU", continent: "Europe"},
{name: "Iceland", currency: "ISK", code: "IS", continent: "Europe"},
{name: "India", currency: "INR", code: "IN", continent: "Asia"},
{name: "Indonesia", currency: "IDR", code: "ID", continent: "Asia"},
{name: "Iran", currency: "IRR", code: "IR", continent: "Asia"},
{name: "Iraq", currency: "IQD", code: "IQ", continent: "Asia"},
{name: "Ireland", currency: "EUR", code: "IE", continent: "Europe"},
{name: "Israel", currency: "ILS", code: "IL", continent: "Asia"},
{name: "Italy", currency: "EUR", code: "IT", continent: "Europe"},
{name: "Ivory Coast", currency: "XOF", code: "CI", continent: "Africa"},
{name: "Jamaica", currency: "JMD", code: "JM", continent: "North America"},
{name: "Japan", currency: "JPY", code: "JP", continent: "Asia"},
{name: "Jordan", currency: "JOD", code: "JO", continent: "Asia"},
{name: "Kazakhstan", currency: "KZT", code: "KZ", continent: "Asia"},
{name: "Kenya", currency: "KES", code: "KE", continent: "Africa"},
{name: "Kiribati", currency: "AUD", code: "KI", continent: "Oceania"},
{name: "Kuwait", currency: "KWD", code: "KW", continent: "Asia"},
{name: "Kyrgyzstan", currency: "KGS", code: "KG", continent: "Asia"},
{name: "Laos", currency: "LAK", code: "LA", continent: "Asia"},
{name: "Latvia", currency: "EUR", code: "LV", continent: "Europe"},
{name: "Lebanon", currency: "LBP", code: "LB", continent: "Asia"},
{name: "Lesotho", currency: "LSL", code: "LS", continent: "Africa"},
{name: "Liberia", currency: "LRD", code: "LR", continent: "Africa"},
{name: "Libya", currency: "LYD", code: "LY", continent: "Africa"},
{name: "Liechtenstein", currency: "CHF", code: "LI", continent: "Europe"},
{name: "Lithuania", currency: "EUR", code: "LT", continent: "Europe"},
{name: "Luxembourg", currency: "EUR", code: "LU", continent: "Europe"},
{name: "Madagascar", currency: "MGA", code: "MG", continent: "Africa"},
{name: "Malawi", currency: "MWK", code: "MW", continent: "Africa"},
{name: "Malaysia", currency: "MYR", code: "MY", continent: "Asia"},
{name: "Maldives", currency: "MVR", code: "MV", continent: "Asia"},
{name: "Mali", currency: "XOF", code: "ML", continent: "Africa"},
{name: "Malta", currency: "EUR", code: "MT", continent: "Europe"},
{name: "Marshall Islands", currency: "USD", code: "MH", continent: "Oceania"},
{name: "Mauritania", currency: "MRU", code: "MR", continent: "Africa"},
{name: "Mauritius", currency: "MUR", code: "MU", continent: "Africa"},
{name: "Mexico", currency: "MXN", code: "MX", continent: "North America"},
{name: "Micronesia", currency: "USD", code: "FM", continent: "Oceania"},
{name: "Moldova", currency: "MDL", code: "MD", continent: "Europe"},
{name: "Monaco", currency: "EUR", code: "MC", continent: "Europe"},
{name: "Mongolia", currency: "MNT", code: "MN", continent: "Asia"},
{name: "Montenegro", currency: "EUR", code: "ME", continent: "Europe"},
{name: "Morocco", currency: "MAD", code: "MA", continent: "Africa"},
{name: "Mozambique", currency: "MZN", code: "MZ", continent: "Africa"},
{name: "Myanmar", currency: "MMK", code: "MM", continent: "Asia"},
{name: "Namibia", currency: "NAD", code: "NA", continent: "Africa"},
{name: "Nauru", currency: "AUD", code: "NR", continent: "Oceania"},
{name: "Nepal", currency: "NPR", code: "NP", continent: "Asia"},
{name: "Netherlands", currency: "EUR", code: "NL", continent: "Europe"},
{name: "New Zealand", currency: "NZD", code: "NZ", continent: "Oceania"},
{name: "Nicaragua", currency: "NIO", code: "NI", continent: "North America"},
{name: "Niger", currency: "XOF", code: "NE", continent: "Africa"},
{name: "Nigeria", currency: "NGN", code: "NG", continent: "Africa"},
{name: "North Korea", currency: "KPW", code: "KP", continent: "Asia"},
{name: "North Macedonia", currency: "MKD", code: "MK", continent: "Europe"},
{name: "Norway", currency: "NOK", code: "NO", continent: "Europe"},
{name: "Oman", currency: "OMR", code: "OM", continent: "Asia"},
{name: "Pakistan", currency: "PKR", code: "PK", continent: "Asia"},
{name: "Palau", currency: "USD", code: "PW", continent: "Oceania"},
{name: "Palestine", currency: "ILS", code: "PS", continent: "Asia"},
{name: "Panama", currency: "PAB", code: "PA", continent: "North America"},
{name: "Papua New Guinea", currency: "PGK", code: "PG", continent: "Oceania"},
{name: "Paraguay", currency: "PYG", code: "PY", continent: "South America"},
{name: "Peru", currency: "PEN", code: "PE", continent: "South America"},
{name: "Philippines", currency: "PHP", code: "PH", continent: "Asia"},
{name: "Poland", currency: "PLN", code: "PL", continent: "Europe"},
{name: "Portugal", currency: "EUR", code: "PT", continent: "Europe"},
{name: "Qatar", currency: "QAR", code: "QA", continent: "Asia"},
{name: "Romania", currency: "RON", code: "RO", continent: "Europe"},
{name: "Russia", currency: "RUB", code: "RU", continent: "Europe/Asia"},
{name: "Rwanda", currency: "RWF", code: "RW", continent: "Africa"},
{name: "Saint Kitts and Nevis", currency: "XCD", code: "KN", continent: "North America"},
{name: "Saint Lucia", currency: "XCD", code: "LC", continent: "North America"},
{name: "Saint Vincent and the Grenadines", currency: "XCD", code: "VC", continent: "North America"},
{name: "Samoa", currency: "WST", code: "WS", continent: "Oceania"},
{name: "San Marino", currency: "EUR", code: "SM", continent: "Europe"},
{name: "Sao Tome and Principe", currency: "STN", code: "ST", continent: "Africa"},
{name: "Saudi Arabia", currency: "SAR", code: "SA", continent: "Asia"},
{name: "Senegal", currency: "XOF", code: "SN", continent: "Africa"},
{name: "Serbia", currency: "RSD", code: "RS", continent: "Europe"},
{name: "Seychelles", currency: "SCR", code: "SC", continent: "Africa"},
{name: "Sierra Leone", currency: "SLL", code: "SL", continent: "Africa"},
{name: "Singapore", currency: "SGD", code: "SG", continent: "Asia"},
{name: "Slovakia", currency: "EUR", code: "SK", continent: "Europe"},
{name: "Slovenia", currency: "EUR", code: "SI", continent: "Europe"},
{name: "Solomon Islands", currency: "SBD", code: "SB", continent: "Oceania"},
{name: "Somalia", currency: "SOS", code: "SO", continent: "Africa"},
{name: "South Africa", currency: "ZAR", code: "ZA", continent: "Africa"},
{name: "South Korea", currency: "KRW", code: "KR", continent: "Asia"},
{name: "South Sudan", currency: "SSP", code: "SS", continent: "Africa"},
{name: "Spain", currency: "EUR", code: "ES", continent: "Europe"},
{name: "Sri Lanka", currency: "LKR", code: "LK", continent: "Asia"},
{name: "Sudan", currency: "SDG", code: "SD", continent: "Africa"},
{name: "Suriname", currency: "SRD", code: "SR", continent: "South America"},
{name: "Sweden", currency: "SEK", code: "SE", continent: "Europe"},
{name: "Switzerland", currency: "CHF", code: "CH", continent: "Europe"},
{name: "Syria", currency: "SYP", code: "SY", continent: "Asia"},
{name: "Taiwan", currency: "TWD", code: "TW", continent: "Asia"},
{name: "Tajikistan", currency: "TJS", code: "TJ", continent: "Asia"},
{name: "Tanzania", currency: "TZS", code: "TZ", continent: "Africa"},
{name: "Thailand", currency: "THB", code: "TH", continent: "Asia"},
{name: "Timor-Leste", currency: "USD", code: "TL", continent: "Asia"},
{name: "Togo", currency: "XOF", code: "TG", continent: "Africa"},
{name: "Tonga", currency: "TOP", code: "TO", continent: "Oceania"},
{name: "Trinidad and Tobago", currency: "TTD", code: "TT", continent: "North America"},
{name: "Tunisia", currency: "TND", code: "TN", continent: "Africa"},
{name: "Turkey", currency: "TRY", code: "TR", continent: "Asia/Europe"},
{name: "Turkmenistan", currency: "TMT", code: "TM", continent: "Asia"},
{name: "Tuvalu", currency: "AUD", code: "TV", continent: "Oceania"},
{name: "Uganda", currency: "UGX", code: "UG", continent: "Africa"},
{name: "Ukraine", currency: "UAH", code: "UA", continent: "Europe"},
{name: "United Arab Emirates", currency: "AED", code: "AE", continent: "Asia"},
{name: "United Kingdom", currency: "GBP", code: "GB", continent: "Europe"},
{name: "United States", currency: "USD", code: "US", continent: "North America"},
{name: "Uruguay", currency: "UYU", code: "UY", continent: "South America"},
{name: "Uzbekistan", currency: "UZS", code: "UZ", continent: "Asia"},
{name: "Vanuatu", currency: "VUV", code: "VU", continent: "Oceania"},
{name: "Vatican City", currency: "EUR", code: "VA", continent: "Europe"},
{name: "Venezuela", currency: "VES", code: "VE", continent: "South America"},
{name: "Vietnam", currency: "VND", code: "VN", continent: "Asia"},
{name: "Yemen", currency: "YER", code: "YE", continent: "Asia"},
{name: "Zambia", currency: "ZMW", code: "ZM", continent: "Africa"},
{name: "Zimbabwe", currency: "ZWL", code: "ZW", continent: "Africa"}]

let enteredLetter;
let randomCountry;
let limit = 0;
let control = 0;
let count = 0;
let index;

//Reload page
let reset = document.querySelector(".reset");
    reset.addEventListener("click", ()=>{
        location.reload();
    });

//Link play button with playGame()

    let play = document.querySelector(".play");
    play.addEventListener("click", playGame);

 
//Generates a country randomly and call useful functions
function playGame(){
    index = Math.floor(Math.random()*195); 
    randomCountry = countries[index].name.toUpperCase();
    console.log(randomCountry);
    createBoxes(randomCountry);
    getLetter();
    }

//Create space for letters dynamically
function createBoxes(RandomCountry){
    let parentDiv;
    let numberOfBoxes = RandomCountry.length;
    parentDiv = document.querySelector(".container");
     for(let i = 0; i < numberOfBoxes; i++){
         if(RandomCountry[i] === " "){
            count++;
            continue;
         }
             
        let div = document.createElement("div");
        div.textContent = "_";
        div.classList.add(`div${i+1}`);
        parentDiv.appendChild(div);
     }
}


 


//Listens to the letter been entered
function getLetter(){
    let finish = document.querySelector(".reset");
    let text = document.querySelector("#textBox");
    let check = document.querySelector(".check");
    let timeOut = document.querySelector(".timer"); 
    check.addEventListener("click", ()=>{
        enteredLetter = text.value.toUpperCase();
        text.value = "";
        limit++;
        timeOut.textContent = limit;
        if (limit > 20){
            alert(`Game over. You exceeded your trials
The country's name : ${countries[index].name}    
                `);
            finish.click();
        }
        checkMatch();
        
    });
 }

 //Verify if the letter entered is part of the random country
 function checkMatch(){
    let j = 0 ;
        //control variable checks if a choice was wrong
    let finish = document.querySelector(".reset");
    for(let i=0; i<(randomCountry.length);i++){
        if(randomCountry[i] === enteredLetter){
            control++;
            j++;
            updateContent(i);
        }
    }
     
    if(j === 0)
        popUpMessage("I am sorry you guessed wrong. Try again");
    if((count + control) === randomCountry.length){
        // alert("Congratulations. You rightly guessed the country");
        result();
        // finish.click();
    }

}

//update the letters if rightly guessed
function updateContent(num){
    let newLetter = document.querySelector(`.div${num+1}`);
    newLetter.textContent = enteredLetter; 
}

function popUpMessage(message){
    let popup = document.querySelector(".popup");
    let text = document.querySelector(".message");
    let close = document.querySelector(".close");
    text.textContent = message;
    popup.classList.add("show");
    close.addEventListener("click", ()=>{
        popup.classList.remove("show");
    });
} 

 
function showHint(value){
    alert(`The country's currency is : ${countries[value].currency}
The country's code : ${countries[value].code}
The country's continent : ${countries[value].continent}`);
}

let hint = document.querySelector(".hint");
hint.addEventListener("mouseover", ()=>{
      showHint(index);
})

function result(){
    let score = document.createElement("p");
    // score.classList.add(".result");
    score.textContent = "Congtatulations you rightly guessed the country!!!";
    score.classList.add("score")
    parentScore = document.querySelector(".result");
    parentScore.appendChild(score);
}