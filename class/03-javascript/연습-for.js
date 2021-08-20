const classmate2 = [
  { name: "철수", age: 13 },
  { name: "영희", age: 13 }
]
// undefined
for (let i = 0; i <= 1; i++) {
  console.log(classmate2[i].name + "는" + classmate2[i].age + "살 입니다.")

}
// VM235: 2 철수는13살 입니다.
  // VM235: 2 영희는13살 입니다.