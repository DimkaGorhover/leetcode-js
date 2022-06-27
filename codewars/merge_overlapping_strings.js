// https://www.codewars.com/kata/61c78b57ee4be50035d28d42

function mergeStrings(first, second) {

  if (first === second) {
    return first
  }

  const n = Math.min(first.length, second.length);

  let left = ""
  let right = ""

  function moveFirst() {
    left = left + first[0]
    first = first.substring(1, first.length)
  }

  function moveSecond() {
    right = second[second.length - 1] + right
    second = second.substring(0, second.length - 1)
  }

  while (first.length > second.length) moveFirst()
  while (first.length < second.length) moveSecond()

  for (let i = 0; i < n; i++) {
    if (first === second) {
      break
    }
    moveFirst()
    moveSecond()
  }

  return `${left}${first}${right}`;
}

const Assertions = {
  count: 0,
  assertEquals(expected, actual) {
    const c = ++this.count
    if (expected !== actual) {
      console.error(`
===============================================================================
Test #${c} has been failed
Expected: ${expected}
Actual:   ${actual}
===============================================================================
`.trim())
    } else {
      console.log(`Test #${c}: Success`)
    }
  }
}

const assertEquals = (...args) => Assertions.assertEquals(...args)

assertEquals("dabch", mergeStrings("dabc", "abch"))
assertEquals("gyvdabch", mergeStrings("gyvdab", "abch"))
assertEquals("abcdefgh", mergeStrings('abcde', 'cdefgh'))
assertEquals("abaabab", mergeStrings('abaab', 'aabab'))
