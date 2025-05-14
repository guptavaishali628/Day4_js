// template Letrals(` `)
//it support single quotes(' ') and Double(" ")

function template(){
    let str= ` I am 'from' "Bhopal"`
    console.log(str)
    
    // it supports multiline string
    let okk = `Hello P52
    addnf1jadn
    batch from cybrom`
    console.log(okk)
    
    // it supports html tag
    let text = `<h1>Hello World</h1>`
    document.write(str)
    
    let Name = "Vaishali"
    let srname = "Gupta"
    //alert("I am" + Name + "and i am "+ Age)
    alert(`I am ${name} and ${srname} is ${name+srname}`)
}
template()