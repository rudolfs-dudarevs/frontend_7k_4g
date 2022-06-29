//Gaisas - tumsas temas parsledzejs

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
console.log(toggleSwitch);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
};

toggleSwitch.addEventListener('change', switchTheme, false);

//Local storage parbaude par temas saglabasanu
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
};

//Kalkulators

class Calculator {
    constructor(screen1Text, screen2Text) {
        this.screen1Text = screen1Text;
        this.screen2Text = screen2Text;
        this.buttonListener();
        this.clear();
    };

    clear() {
        this.screen1 = '';
        this.screen2 = '';
        this.operation = undefined;

    };

    delete() {
        this.screen2 = this.screen2.toString().slice(0, -1);
    };

    appendNumber(number) {
        //Velamies pievienot ciparus nevis, saskaitīt.
        if(number === '.' && this.screen2.includes('.'))
        return;
        this.screen2 = this.screen2.toString() + number.toString();
    };

//Operatora izvele izmantojot peli
    chooseOperator(operation) {
        if(this.screen2 === '') return
        if(this.screen1 === ''){
            this.compute()
        };
        this.operation = operation
        this.screen1 = this.screen2;
        this.screen2 = '';
    };

//skaitlosanas funkcijas
    compute(){
        let computation
        const previous = parseFloat(this.screen1)
        const current = parseFloat(this.screen2)
        if (isNaN(previous) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = previous + current
                break
            case '-':
                computation = previous - current
                break
            case '*':
                computation = previous * current
                break
            case '/':
                computation = previous / current
                break
            default:
                return
        }
        this.screen2 = computation;
        this.operation = none;
        this.screen1 = '';
    }

    buttonListener() {
        let allowed_keys = ['1','2','3','4','5','6','7','8','9','+','-','0','.','/','*','%','Backspace','=']
        console.log('Listening buttons')
        document.addEventListener('keyup', ev => {
            console.log(ev)
            if (allowed_keys.includes(ev.key)){
                console.log(ev.key, 'Pressed')
                switch(ev.key){
                    case '1':
                        console.log('is number')
                    break
                    case '2':
                        console.log('is number')
                    break
                    case '3':
                        console.log('is number')
                    break
                    case '4':
                        console.log('is number')
                    break
                    case '5':
                        console.log('is number')
                    break
                    case '6':
                        console.log('is number')
                    break
                    case '7':
                        console.log('is number')
                    break
                    case '8':
                        console.log('is number')
                    break
                    case '9':
                        console.log('is number')
                    break
                    case '0':
                        console.log('is number')
                    break
                    case '.':
                        console.log('not a number')
                    break
                    case '+':
                        console.log('not a number')
                    break
                    case '-':
                        console.log('not a number')
                    break
                    case '/':
                        console.log('not a number')
                    break
                    case '*':
                        console.log('not a number')
                    break
                    case '=':
                        console.log('not a number')
                    break
                }
                this.appendNumber(ev.key);
                this.updateScreen();
            }
           
        })
    };

//attesana uz
    getDislayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.') [0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        }
        else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        }
        else{
            return integerDisplay;
        }
    }
//attelosana uz ekraniem
    updateScreen() {
        this.screen2Text.innerText = this.getDislayNumber(this.screen2)
        if(this.operation != null) {
            this.screen1Text.innerText = this.screen1;
            `${this.screen2} ${this.operation}`;
        }
        else {
            this.screen1Text.innerText = '';
        }
    }

};

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('[data-equal]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const screen1Text = document.querySelector('[data-screen1]');
const screen2Text = document.querySelector('[data-screen2]');

const calculator = new Calculator(screen1Text, screen2Text);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateScreen();
    })
});

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText);
        calculator.updateScreen();
    })
});

equalBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateScreen();
});

allClearBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateScreen();
});

deleteBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateScreen();
});
