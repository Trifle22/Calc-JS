const keys = document.querySelectorAll('.key');
const expression = document.querySelector('.text');
const reset = document.querySelector('.reset');
const score = document.querySelector('.score');

console.log(expression);

keys.forEach(item => {
  item.addEventListener('click', function() {
    expression.value += this.textContent;
  });
});

reset.addEventListener('click', function() {
  expression.value = '';
});

score.addEventListener('click', function() {
  let str = expression.value;
  let res = eval(str);
  expression.value = res;
});


