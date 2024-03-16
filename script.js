document.addEventListener('DOMContentLoaded', function() {
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const clearBtn = document.getElementById('clear');
    const counterDisplay = document.querySelector('.counter');
    const errorDisplay = document.querySelector('.error');
  
    let count = 0;
  
    // Function to update counter display and manage buttons
    function updateCounter() {
      counterDisplay.textContent = count;
      if (count === 0) {
        clearBtn.style.display = 'none';
        decrementBtn.disabled = true;
        errorDisplay.style.display = 'block';
      } else {
        clearBtn.style.display = 'block';
        decrementBtn.disabled = false;
        errorDisplay.style.display = 'none';
      }
    }
  
    // Increment button click event
    incrementBtn.addEventListener('click', function() {
      count++;
      updateCounter();
    });
  
    // Decrement button click event
    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        updateCounter();
      }
    });
  
    // Clear button click event
    clearBtn.addEventListener('click', function() {
      count = 0;
      updateCounter();
    });
  
    // Initial update
    updateCounter();
  });  