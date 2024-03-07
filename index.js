let data = [
    {
        name: "punnet",
        age: 27,
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg"
    },
    {
        name: "punneta",
        age: 27,
        img: "https://tse1.mm.bing.net/th?id=OIP.jrHpCyLV49L3pZsWR0-NYAHaEK&pid=Api&P=0&h=180"
    },
    {
        name: "punnetai",
        age: 27,
        img: "https://tse1.mm.bing.net/th?id=OIP.Bv23QwiO7nTO6tvLBeGLLwHaHa&pid=Api&P=0&h=180"
    },
    {
        name: "manjot",
        age: 27,
        img: "https://tse4.mm.bing.net/th?id=OIP.k9ecyQ9SXsVkaUibwd2eMAAAAA&pid=Api&P=0&h=180"
    },
    {
        name: "manjota",
        age: 27,
        img: "http://static.demilked.com/wp-content/uploads/2018/03/5aaa1cc4c422b-funny-weird-wtf-stock-photos-28-5a3a5b135f099__700.jpg"
    },
    {
        name: "manjotai",
        age: 27,
        img: "https://tse3.mm.bing.net/th?id=OIP.VUSs8P0wBXmLWfBlAAjWqQHaLH&pid=Api&P=0&h=180"
    },
    {
        name: "krishna",
        age: 27,
        img: "https://www.crushpixel.com/big-static7/preview4/portrait-young-professional-man-suit-258742.jpg"
    },
    {
        name: "manish",
        age: 27,
        img: "http://media.istockphoto.com/photos/handsome-young-man-gesturing-thumbs-up-isolated-picture-id175440771?k=6&m=175440771&s=612x612&w=0&h=mns-Db7OruqEljzCaO1on5Zaems6Jy4_KCzVEP9nlQ4="
    },
    {
        name: "sunny",
        age: 27,
        img: "https://tse1.mm.bing.net/th?id=OIP.zVsxx9pE2k-e6iTe5DMFwAHaGv&pid=Api&P=0&h=180"
    },
]


// let card = document.getElementById('card')
// card.innerHTML = []


// let namevalue = []
// data.forEach(element => {
//     let img = document.createElement('img')
//     let name = document.createElement('p')
//     let seccard = document.createElement('div');
//     seccard.appendChild(img)
//     seccard.appendChild(name)
//     seccard.classList.add("sec_card")
//     name.classList.add('texto')
//     name.innerHTML = element.name
//     namevalue.push(name.innerText)
//     // namevalue = name.innerText // only  the last one is saved in array
//     img.src = element.img
//     img.style.width = "100px"
//     card.appendChild(seccard)
// });

// console.log(card);
// console.log(namevalue);

// let inputValue = '';

// const input = document.getElementById('input');

// input.addEventListener('input', (event) => {
//     inputValue = event.target.value;
//     console.log(inputValue);

//     namevalue.forEach(name => {
//         if (inputValue === name) {
//             console.log(`Input value '${inputValue}' matches namevalue ====> ${name}`);
//             document.querySelector('.sec_card').style.display='block';
   
//         } else {
//             console.log(`Input value '${inputValue}' does not match namevalue `);
//             document.querySelector('.sec_card').style.display='none';
    
//         }
//     });


// });


let card = document.getElementById('card');
card.innerHTML = '';

let namevalue = [];
data.forEach(element => {
    let img = document.createElement('img');
    let name = document.createElement('p');
    let seccard = document.createElement('div');
    seccard.appendChild(img);
    seccard.appendChild(name);
    seccard.classList.add("sec_card");
    name.classList.add('texto');
    name.innerHTML = element.name;
    namevalue.push(name.innerText);
    img.src = element.img;
    img.style.width = "100px";
    card.appendChild(seccard);
});

console.log(card);
console.log(namevalue);

const input = document.getElementById('input');

input.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);

    namevalue.forEach((name, index) => {
        const secCards = document.querySelectorAll('.sec_card');
        if (inputValue === name) {
            console.log(`Input value '${inputValue}' matches namevalue ====> ${name}`);
            secCards[index].style.display = 'block';
        } else {
            console.log(`Input value '${inputValue}' does not match namevalue `);
            secCards[index].style.display = 'none';
        }
    });
});
