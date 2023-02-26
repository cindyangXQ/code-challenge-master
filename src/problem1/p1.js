var sum_to_n_a = function(n) {
    // your code here
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
};

var sum_to_n_b = function(n) {
    // your code here
  if (n <= 1) return n;
  else return sum_to_n_b(n-1) + n;
};

var sum_to_n_c = function(n) {
    // your code here
  if (n<=1) return n;
  else return (1+n) * n / 2;
};

/*
console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
*/