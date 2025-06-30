function r() {
    let Quotes = [
        "Rafale flew, pilot lost way.",
        "Five jets down, zero complaints.",
        "Modi ji, chai zyada pilao!",
        "India’s maps: missing five jets.",
        "Pak Air Force, sky’s kings.",
        "Chai in hand, victory guaranteed.",
        "Lost jets, found excuses again.",
        "Army ready, always first line.",
        "Modi runs, jets don’t follow.",
        "Pak jets roar, India runs."
    ];
    let random = Math.floor(Math.random() * Quotes.length);
    document.getElementById("display").innerText=Quotes[random];
}
let ForcesChiefs=["General Syed Asim Munir" ,"Air Chief Marshal Zaheer Ahmed Baber Sidhu","Admiral Naveed Ashraf"];
let AppointmentDate=["November 29, 2022","March 19, 2021","October 7, 2023"];
let details=[
    "Asim Munir is a distinguished Pakistani military officer known for his strategic acumen and leadership within the Pakistan Army. Throughout his career, he has held several important command and intelligence positions, playing a crucial role in enhancing the country’s security and defense capabilities. Recognized for his dedication and disciplined approach, Munir has earned respect both within the military and among the wider public for his commitment to safeguarding national interests and strengthening Pakistan’s defense infrastructure.",
  "Zaheer Ahmed Baber Sidhu is the current Air Chief Marshal of Pakistan, known for his operational expertise and leadership in the Pakistan Air Force.",
  "Admiral Naveed Ashraf is the Chief of Naval Staff, recognized for modernizing the Pakistan Navy and enhancing maritime security."
];


function chiefdisplay()
{

    let result="";
    for(let i=0; i<ForcesChiefs.length; i++)
    {
        result += `<p onclick="chiefdetails(${i})">${ForcesChiefs[i]} - Appointed on <br> ${AppointmentDate[i]}</p>`;
    }
document.getElementById("id").innerHTML=result;
}

function chiefdetails(index) {
  document.getElementById("de").innerHTML = `<h3>${ForcesChiefs[index]}</h3><p>${details[index]}</p>`;
}



