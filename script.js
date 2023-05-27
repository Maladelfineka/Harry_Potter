function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var mojaZmienna = 10;
var h1Zmienna = document.querySelector(".test");
var buttonZminna = document.querySelector(".przycisk");
var cytaty = ["1.”Nie żałuj umarłych, Harry, żałuj żywych, a przede wszystkim tych, którzy żyją bez miłości.",
"2. „Nigdy nie ufaj niczemu i nikomu, jeśli nie wiesz, gdzie jest jego mózg.",
"3. „Zawsze nazywaj rzeczy po imieniu. Strach przed imieniem wzmaga strach przed samą rzeczą.",
"4. „Jeśli chcesz poznać człowieka, dowiedz się, jak traktuje swoich podwładnych, a nie równych sobie.",
"5. „Trzeba być bardzo dzielnym, by stawić czoło wrogom, ale tyle samo męstwa wymaga stawienie czoła przyjaciołom.",
"6. „Prawda to cudowna i straszliwa rzecz, więc trzeba się z nią obchodzić ostrożnie",
"7. „Ludzie o wiele łatwiej wybaczają innym omyłki niż to, że mieli rację.",
"8. „Szczęście można znaleźć nawet w najciemniejszych czasach, trzeba tylko pamiętać, aby zapalić światło.",
"9. „Ostatecznie, dla należycie zorganizowanego umysłu, śmierć to tylko początek nowej wielkiej przygody",
"10.- Niech mi pan powie jeszcze tylko jedno – odezwał się Harry.<br> – Czy to dzieje się naprawdę, czy tylko w mojej głowie?<br>– Ależ oczywiście to dzieje się w twojej głowie, Harry, tylko skąd, u licha, wniosek, że wobec tego nie dzieje się to naprawdę?",
]

console.log(cytaty)
buttonZminna.onclick = function(){
    h1Zmienna.innerHTML = cytaty[getRandomInt(cytaty.length)]
    
    
}