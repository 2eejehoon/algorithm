const unionParent = (set, a, b) => {
  a = getParent(set, a);
  b = getParent(set, b);
  if (a < b) {
    set[b] = a;
  } else {
    set[a] = b;
  }
};

const hasEquelParent = (set, a, b) => {
  a = getParent(set, a);
  b = getParent(set, b);
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

const getParent = (set, x) => {
  if (set[x] === x) {
    return x;
  }
  return getParent(set, set[x]);
};
