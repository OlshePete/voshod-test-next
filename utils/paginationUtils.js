export function checkIsNavBtnDisabled (active=0, total=0) {
  return  {
    prev: active>1?"":"disabled",
    next: active<total?"":"disabled",
  }
}