let money,
    time,
    tempBuf,
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

money = prompt("Ваш бюджет на месяц?");
appData.budget = money;
time = prompt("Введите дату в формате YYYY-MM-DD");
appData.timeData = time;

tempBuf = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses[tempBuf] = prompt("Во сколько обойдётся?");
tempBuf = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses[tempBuf] = prompt("Во сколько обойдётся?");

alert("Ваш бюджет на один день: " + (money / 30));

for (let key in appData.expenses) {
    alert(key + ": " + appData.expenses[key]);
    break;
}