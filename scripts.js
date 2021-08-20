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
}