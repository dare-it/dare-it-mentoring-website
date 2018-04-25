function whichTransition() {
  const el = document.createElement('fakeelement');

  const transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
  };

  const t = Object.keys(transitions).find((x) => {
    return el.style[x] !== undefined;
  });

  return transitions[t];
}

export default whichTransition();