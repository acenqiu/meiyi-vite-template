const durationTrans = (a: number): string => {
  let b = '',
    h: number | string = Math.floor(a / 3600),
    m: number | string = Math.floor((a % 3600) / 60),
    s: number | string = Math.floor((a % 3600) % 60);
  if (h > 0) {
    h = h < 10 ? '0' + h : h;
    b += h + ':';
  }
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  b += m + ':' + s;
  return b;
};

export { durationTrans };
