document.addEventListener("DOMContentLoaded", function(event) {
  const transformSlide = new TransformSlide();

  transformSlide.startClocking();
});

class HoverSlide {
  static showHoverStyles() {
    document.querySelector('#hover__hover-styles').classList.add('show');
  }

  static hideHoverStyles() {
    document.querySelector('#hover__hover-styles').classList.remove('show');
  }
}

class TransitionSlide {
  static showTransitionStyles() {
    document.querySelector('#transition__hover-styles').classList.add('show');
  }

  static hideTransitionStyles() {
    document.querySelector('#transition__hover-styles').classList.remove('show');
  }

  static changeDuration() {
    const button = document.querySelector('.slide__transition-duration button');
    const input = document.querySelector('.slide__transition-duration input');

    button.style.transition = `${input.value}s ease-in`;
  }

  static changeDelay() {
    const button = document.querySelector('.slide__transition-delay button');
    const input = document.querySelector('.slide__transition-delay input');

    button.style.transition = `1s ease-in ${input.value}s`;
  }
}

class TransformSlide {
  #intervalId;

  #setHours(hours) {
    const arrow = document.querySelector('.slide__transform-rotate .clock .arrow.arrow_hours');
    arrow.style.transform = `rotate(${360 / 12 * hours + 90}deg)`;
  }

  #setMinutes(minutes) {
    const arrow = document.querySelector('.slide__transform-rotate .clock .arrow.arrow_minutes');
    const minutesBlock = document.querySelector('#minutes');
    const value = 1 / 60 * minutes + 0.25;

    minutesBlock.textContent = String(value.toFixed(2));
    arrow.style.transform = `rotate(${value}turn)`;
  }

  #setSeconds(seconds) {
    const arrow = document.querySelector('.slide__transform-rotate .clock .arrow.arrow_seconds');
    const secondsBlock = document.querySelector('#seconds');
    const value = 360 / 60 * seconds + 90;

    secondsBlock.textContent = String(value);
    arrow.style.transform = `rotate(${value}deg)`;
  }

  #clock() {
    const currentDate = new Date();

    this.#setHours(currentDate.getHours());
    this.#setMinutes(currentDate.getMinutes());
    this.#setSeconds(currentDate.getSeconds());
  }

  startClocking() {
    this.#clock();

    this.#intervalId = setInterval(() => {
      this.#clock();
    }, 1000);
  }

  stopClocking() {
    clearInterval(this.#intervalId);
  }
}