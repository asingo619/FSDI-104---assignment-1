console.log("App");
/*//object literal

const person={
    name:"Andrew",
    city:"San Diego",
    age:"32",
    student:true,
    music:["Coldplay","Oasis","Beatles"],
    address:{
        street:"University",
        number:"262-K"
    }
}
//how to select object. (person."")
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.music[1])//calling array posistion.
console.log(person.address.number)*/

var salon={
    name:"The Fashion Pet",
    telephone:"555-555-5555",
    address:{
        street:"Palm",
        number:"345"
    },
    hour:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Great Dane",
            service:"Full Service",
            ownerName:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Great Dane",
            service:"Nails Cut",
            ownerName:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {
            name:"Bugs B",
            age:60,
            gender:"Male",
            breed:"Rabbit",
            service:"Hair Cut",
            ownerName:"Warner",
            contactPhone:"555-555-5556"
        },
        {
            name:"Daffy",
            age:60,
            gender:"Male",
            breed:"Duck",
            service:"Full Service",
            ownerName:"Warner",
            contactPhone:"555-555-5556"
        }
    ]
}

salon.pets.forEach((pets)=>{
    console.log(pets.name)
});


//console.log(`${salon.name} opens from ${salon.hour.open} to ${salon.hour.close}.`)<--practice

function dispalyInfo(){
    document.getElementById("footer-site").innerHTML=`
        <p>${salon.name}</p>
        <p>${salon.address.street}, ${salon.address.number} telephone number: ${salon.telephone}</p>
        <p>The salon is open frm ${salon.hour.open} to ${salon.hour.close}</p>
`;
}
dispalyInfo();

document.write(`There are ${salon.pets.length} pets in the saloon.`);
for(var i=0;i<salon.pets.length;i++){
document.write(`${salon.pets[i].name}`);
};