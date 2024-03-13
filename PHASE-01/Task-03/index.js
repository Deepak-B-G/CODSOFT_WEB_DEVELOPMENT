document.addEventListener('DOMContentLoaded', function () {
  let display = document.getElementById('inputBox');
  let buttons = document.querySelectorAll('button');
  let buttonsArray = Array.from(buttons);
  let string = '';

  buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.innerHTML == 'DEL') {
        string = string.substring(0, string.length - 1);
        display.value = string;
      } else if (e.target.innerHTML == 'AC') {
        string = '';
        display.value = string;
      } else if (e.target.innerHTML == '=') {
        // Check if the string contains a percentage sign
        if (string.includes('%')) {
          // Extract the number before the percentage sign
          let parts = string.split('%');
          let number = parseFloat(parts[0]);
          // Calculate percentage
          let result = number / 100;
          display.value = result;
          string = result.toString();
        } else {
          // Evaluate the expression
          string = eval(string);
          display.value = string;
        }
      } else {
        string += e.target.innerHTML;
        display.value = string;
      }
    });
  });
});
