function fn() {
  try {
    console.log('====try======')
    return 123;
  } catch (error) {
    console.log('======catch====')
  } finally {
    console.log('====finally======')
  }
}

console.log(fn())