const classmates = ["jun", "young", "ji"]
// undefined
classmates
  // (3)["jun", "young", "ji"]
classmates[0]
// "jun"
classmates[1]
// "young"
classmates[2]
// "ji"
classmates.length
// 3
classmates.includes("young")
// true
classmates.includes("m")
// false
classmates.push("m")
// 4
classmates.includes("m")
// true
classmates
  // (4)["jun", "young", "ji", "m"]
classmates.pop()
// "m"
classmates
  // (3)["jun", "young", "ji"]
classmates.includes("m")
// false

