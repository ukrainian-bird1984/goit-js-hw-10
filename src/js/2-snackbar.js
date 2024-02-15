import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedRadioButton = document.querySelector('input[name="state"]:checked');
  const state = selectedRadioButton ? selectedRadioButton.value : null;

  if (!state) {
    iziToast.error({
      title: "Error",
      message: 'Please select a state',
      position: 'topRight',
    });

    return;
  }

  const delay = parseInt(this.elements.delay.value);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  promise
    .then((resolvedDelay) => {
      iziToast.success({
        title: "Fulfilled promise",
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
        position: 'topRight',
      });
    })
    .catch((rejectedDelay) => {
      iziToast.error({
        title: "Rejected promise",
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
        position: 'topRight',
      });
    })
    .finally(() => {
      if (selectedRadioButton) {
        selectedRadioButton.checked = false;
      }
      this.reset();
    });
});
