// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

window.$fxhashFeatures = {
  "Background": "Black",
  "Number of lines": 10,
  "Inverted": true
}

// this code writes the values to the DOM as an example
const words = "abracadabra abracadabra abracadabra abracadabra abracadabra d".split(" ")
const container = document.createElement("div")
const x = fxrand()
// container.innerText = `
//   random hash: ${fxhash}\n
//   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
// `
content = ""

words.forEach((word, i, arr) => {
  const size = fxrand() * 7
  content += `
  <div>
  ${word.split('').map((c) => { return `<font size='${fxrand() * 20}' color='${fxrand() * 0xFFFFFF << 0}'>${c}</font>` }).join('')}
  </div>
  `
})


container.innerHTML = `
<div class = "content">
${content}
</div>
`

document.body.prepend(container)