export default {
  offset: (el) => {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const top = rect.top + scrollTop;
    const left =  rect.left + scrollLeft;
    const bottom = top + el.offsetHeight;

    return { left, top, bottom };
  },
};