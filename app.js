const income_input = document.getElementById("income-input");

// Add listener to find the value income_input

const input_value = 0;

const need_target = input_value / 2;
const wants_target = input_value * 0.3;
const savings_target = input_value * 0.2;


function calculateFederalTax(taxableIncome) { 
    let tax = 0;

    if (taxableIncome <= 12400) {
        tax = taxableIncome * 0.10;
    } 
    else if (taxableIncome <= 50400) {
        tax = (12400 * 0.10) +
              ((taxableIncome - 12400) * 0.12);
    } 
    else {
        tax = (12400 * 0.10) +
              ((50400 - 12400) * 0.12) +
              ((taxableIncome - 50400) * 0.22);
    }

    return tax;
}