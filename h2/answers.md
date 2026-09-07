# ნაწილი 1 — კვლევა: Workshop 2-ის კონცეფციები

### What does prompt() do in JavaScript? What data type does it return?
`prompt()` აგდებს ფანჯარას ტექსტის ჩასაწერად და ყოველთვის აბრუნებს ტექსტს (string-ს).

### If the user types 42 into prompt(), is the result the number 42 or the string "42"? Why?
გამოდის ტექსტი `"42"`, რადგან ეს ფუნქცია ყველაფერს ტექსტად აქცევს.

### Why would we use Number() or parseInt() / parseFloat() after getting input from prompt()?
იმისთვის, რომ `prompt()`-იდან მიღებული ტექსტი ნამდვილ რიცხვად გადავაქციოთ და მათემატიკურად შევკრიბოთ.

### What does typeof tell you? Give an example of when it could be useful for debugging.
გვეუბნება მონაცემის ტიპს (ტექსტია თუ რიცხვი) და გვეხმარება გავიგოთ, რატომ არ იკრიბება ცვლადები.

### What do the string methods .toUpperCase(), .toLowerCase(), and .trim() do? Give a short example of one of them.
`.toUpperCase()` ადიდებს ასოებს, `.toLowerCase()` აპატარავებს, ხოლო `.trim()` აშორებს ზედმეტ სპეისებს (მაგ: `" სს " -> "სს"`).

### What do the escape sequences \n and \t mean inside a string?
`\n` გადადის ახალ ხაზზე, ხოლო `\t` ტოვებს დიდ ცარიელ ადგილს (ტაბულაციას) წინ.

### What is the difference between a string and a number in JavaScript? Why is "10" + 5 different from 10 + 5?
სტრინგი ტექსტია და `"10" + 5` გამოიტანს `"105"`-ს (აწებებს), ხოლო რიცხვების `10 + 5` რეალურად შეკრებს და დასვამს `15`-ს.

### A comparison like age >= 18 produces a value. What data type is that value?
ეს არის ბულიანი (Boolean) — ანუ პასუხი იქნება მხოლოდ `true` (კი) ან `false` (არა).

### What are the two possible values of the Boolean data type?
მხოლოდ ორი: `true` და `false`.

### What is the difference between == and ===?
`==` ადარებს მხოლოდ ციფრებს, ხოლო `===` უფრო მკაცრია და ამოწმებს ტიპსაც (ტექსტია თუ რიცხვი).

### Why is === generally preferred over == in JavaScript?
იმიტომ, რომ `===` ბევრად უფრო ზუსტია და კოდში მოულოდნელ შეცდომებს გვარიდებს.

### What is the difference between != and !==?
`!=` ამოწმებს, რომ მნიშვნელობა არ იყოს ტოლი, ხოლო `!==` უფრო მკაცრად ამოწმებს ტიპსაც და მნიშვნელობასაც.

### What do the logical operators &&, ||, and ! mean?
`&&` ნიშნავს "და"-ს, `||` ნიშნავს "ან"-ს, ხოლო `!` ნიშნავს უარყოფას (ატრიალებს პასუხს).

### What is the result of true && false? What about true || false?
`true && false` არის `false`, ხოლო `true || false` არის `true`.

### What does !true produce?
აბრუნებს `false`-ს.

### Give one real-life example where you could use && and one where you could use ||
`&&` გინდა საიტზე ლოგინისას (სწორი მეილი და პაროლი), `||` კი ფასდაკლებაზე (ხარ სტუდენტი ან პენსიონერი).

### Why can 0.1 + 0.2 === 0.3 produce false in JavaScript?
კომპიუტერული სისტემის გამო, ათწილადებზე მუშაობისას კოდში ჩნდება ძალიან მცირე დამრგვალების უზუსტობა.

### What is Math.round() useful for?
რიცხვების დასამრგვალებლად უახლოეს მთელ ციფრამდე.

### What is the difference between const and let?
`let`-ით შექმნილ ცვლადს მერე შევცვლით, `const` კი მუდმივია და მისი შეცვლა არ შეიძლება.

### Some programmers write names like MAX_SCORE in ALL_CAPS. What does this naming convention usually communicate to other programmers?
ეს ნიშნავს, რომ ეს არის ძალიან მნიშვნელოვანი მუდმივი ციფრი (კონსტანტა), რომელიც კოდში არასდროს შეიცვლება.
