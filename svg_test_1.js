let xs = []
for (var i = 0; i <= 500; i++) {
  xs.push(i)
}

let t = 0

function animate() {
    let points = xs.map(x => {
      let y = 50 + 20 * Math.sin((x + t) / 10)
    return [x, y]
  })
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")
  document.querySelector("path").setAttribute("d", path)
  t += 0.5
  requestAnimationFrame(animate)
}

animate()
