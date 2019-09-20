let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ваш бюджет на один день: " + (appData.moneyPerDay));
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("У вас низкий уровень дохода :(");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 500) {
        alert("У вас средний уровень дохода");
    } else if (appData.moneyPerDay >= 500) {
        alert("У вас высокий уровень дохода");
    } else {
        alert("Что-то не так в if...");
    }
}

detectLevel();

function checkOptExpenses() {
    let optionalExpenses = {
        1: 0,
        2: 0,
        3: 0
    };
    for (let i = 1; i < 4; ++i) {
        optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
    }
    return optionalExpenses;
}

checkOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

/* for (let key in appData.expenses) {
    alert(key + ": " + appData.expenses[key]);
    break;
} */