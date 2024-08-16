const email = document.getElementById('email');
const error = document.getElementById('error');


email.addEventListener('input', ()=> {
  if(email.value.length == 0) {
    email.style.borderColor = 'hsl(0, 0%, 59%)';
    error.style.display = 'block';
    email.style.borderColor = 'red';
    return false;
  }
  if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    email.style.borderColor = 'hsl(0, 0%, 59%)';
    error.style.display = 'block';
    email.style.borderColor = 'red';
    return false;
  }

  else {
    email.style.borderColor = 'hsl(0, 0%, 59%)';
    error.style.display = 'none';
    return true;
  }
})