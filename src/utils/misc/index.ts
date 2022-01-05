export function cloneDeep<T>(a: T): T {
  return JSON.parse(JSON.stringify(a));
}

export function cloneObject(a: object, ...p: Array<string>): object {
  const r = {};
  p?.forEach((element) => {
    // @ts-ignore
    r[element] = a[element];
  });

  return r;
}

/**
 * use this function to check whether the input data is empty or not
 *
 * @param obj Array || Object
 * @returns boolean - return true if the input data is empty othewise false
 *
 * Ex:
 *  isEmpty([])         -> true
 *  isEmpty({})         -> true
 *  isEmpty()           -> false
 *  isEmpty([1])        -> false
 *  isEmpty({test: 1})  -> false
 *  isEmpty(null)       -> false
 *  isEmpty(0)          -> false
 *  isEmpty("")         -> false
 *  isEmpty(true)       -> false
 *  isEmpty(false)      -> false
 */
export function isEmpty(obj: Array<any> | object): boolean {
  if (!obj || typeof obj !== 'object') return false;

  if (Array.isArray(obj)) {
    return !obj.length;
  }

  return !Object.keys(obj).length;
}

export function isMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

export function iOS() {
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
}
