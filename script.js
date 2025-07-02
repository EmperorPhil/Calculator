function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
  let toggleBtn = document.getElementById('toggle-mode');
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌞';
  } else {
    toggleBtn.textContent = '🌙';
  }
}

// Keyboard Support
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
