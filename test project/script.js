let money,
    time,
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

money = +prompt("Ваш бюджет на месяц?", "");
appData.budget = money;
time = prompt("Введите дату в формате YYYY-MM-DD", "");
appData.timeData = time;

for (let i = 0; i < 2; ++i) {
    let keyName = prompt("Введите обязательную статью расходов в этом месяце", ""),
        cost = +prompt("Во сколько обойдётся?", "");
    if (typeof (keyName) != null && typeof (cost) != null &&
        keyName != "" && cost != "") {
        appData.expenses[keyName] = cost;
    } else {
        alert("Cтроки пустые...");
        --i;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на один день: " + (appData.moneyPerDay));

if (appData.moneyPerDay < 100) {
    alert("У вас низкий уровень дохода :(");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 500) {
    alert("У вас средний уровень дохода");
} else if (appData.moneyPerDay >= 500) {
    alert("У вас высокий уровень дохода");
} else {
    alert("Что-то не так в if...");
}

/* for (let key in appData.expenses) {
    alert(key + ": " + appData.expenses[key]);
    break;
} */