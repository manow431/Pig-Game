var john = {
    Name : 'John',
    height : 3,
    mass : 70,
    BMIcal : function(){
        this.BMI = this.mass / (this.height * this.height);
    }
}
//john.BMIcal(); console.log(john());

var mike = {
    Name : 'Mike',
    height : 4,
    mass : 80,
    BMIcal : function(){
        this.BMI = this.mass / (this.height * this.height);
    }
}

 var comp = function(){
    if (john.BMI > mike.BMI)
        console.log ('John has higher BMI than Mike');
    else if(mike.BMI > john.BMI)
        console.log('Mike has higher BMI than John');
    else console.log('john and Mike has the same BMI');
}

console.log(john.Name, john.BMI);
console.log(mike.Name, mike.BMI);
console.log(comp);

