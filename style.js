let data=[
    {
      "id": 1,
      "name": "Cheeseburger",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
    },
    {
      "id": 3,
      "name": "Tacos",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
    },
    {
      "id": 4,
      "name": "Sushi",
      "price": 11.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
    },
    {
      "id": 5,
      "name": "Pasta",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
    },
    {
      "id": 6,
      "name": "Fried Chicken",
      "price": 7.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
    },
    {
      "id": 7,
      "name": "Grilled Cheese Sandwich",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
    },
    {
      "id": 8,
      "name": "Steak",
      "price": 15.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
    },
    {
      "id": 9,
      "name": "Caesar Salad",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
    },
    {
      "id": 10,
      "name": "Fish and Chips",
      "price": 8.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
    },
    {
      "id": 11,
      "name": "Ramen",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
    },
    {
      "id": 12,
      "name": "Burrito",
      "price": 7.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
    },
    {
      "id": 13,
      "name": "Pho",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
    },
    {
      "id": 14,
      "name": "Pad Thai",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
    },
    {
      "id": 15,
      "name": "Gyro",
      "price": 6.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
    },
    {
      "id": 16,
      "name": "Ice Cream",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
    },
    {
      "id": 17,
      "name": "Smoothie",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
    },
    {
      "id": "18",
      "name": "Apple Pie",
      "price": 4.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
    },
    {
      "id": 19,
      "name": "Chocolate Cake",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
    },
    {
      "id": 20,
      "name": "Pancakes",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
    },
    {
      "id": 21,
      "name": "Cupcake",
      "price": 2.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
    },
    {
      "id": 22,
      "name": "Crepes",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
    },
    {
      "id": 23,
      "name": "Club Sandwich",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
    },
    {
      "id": 24,
      "name": "Falafel",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
    },
    {
      "id": 25,
      "name": "Curry",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
    }
  ]
let items=document.getElementById("mydata");
function getmenu()

{
    for(let i=0 ;i<data.length;i++)
    { 
    let  container=document.createElement('div');
    event.preventDefault();

      let detailsdiv = document.createElement('div');
      let id=document.createElement('span');
      id.textContent=data[i].id;
      let name=document.createElement('span');
      name.textContent=data[i].name+" ";
      let price=document.createElement('span');
      price.textContent=data[i].price;
      detailsdiv.width=100;
      detailsdiv.height=100;

      detailsdiv.append(id,name,price);

       let imagediv=document.createElement("div");


      let imageElement=document.createElement('img');
      imageElement.src= data[i].imgSrc;
      imageElement.alt="some-image";
      imageElement.width=300;
      imageElement.height=300;
      imagediv.append(imageElement);

      let button =document.createElement('button');
      button.textContent="ADD ME";

        container.style.borderColor='red';
      
      container.append(imagediv,detailsdiv,button);
      items.append(container)
     
    }
}

const order = {
    items: []

};
  
  async function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const burgers = [
                {
                    "id": 23,
                    "name": "Club Sandwich",
                    "price": 6.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
                  },
                  {
                    "id": 24,
                    "name": "Falafel",
                    "price": 5.49,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
                  },
                  {
                    "id": 25,
                    "name": "Curry",
                    "price": 9.49,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
                  }
            ];

           

            // Select 3 random burgers and add them to the order
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * burgers.length);
                order.items.push(burgers[randomIndex]);
            }

            resolve(order);
        }, 2500);
    });
    
}

    async function orderPrep() 
{
    return new Promise((resolve,reject)=>
    {
       setTimeout(()=>{
        order.order_status=true;
        order.paid=false;
       },1500)
    })
    
}
function payOrder() {
    return  new Promise((resolve,reject)=>
    {
       setTimeout(()=>{
        order.order_status=true;
        order.paid=true;
       },1000)
    })
    
    

}
async function alertmsg()
{
    // 
    return  new Promise((resolve,reject)=>
    {
       setTimeout(()=>{
        alert("thankyou for eating with us today!")
       },3000)
    })
}


async function restaurantProcess() {
    try {
        console.log("Welcome to the restaurant!");
        
        // Step 2: Take Order
        console.log("Taking the order...");
        let order = await takeOrder();
        console.log("Order taken:", order);

        

        // step 3:orderPreparartion
        console.log("Order Preparing Please Wait!")
        console.log("Thank you for dining with us!");
        await orderPrep();
   
    

        
    }   catch (error) {
        console.error("An error occurred:", error);
    }
}

// Call the main restaurant process
restaurantProcess();
async function restaurantProcess1()
{
    try{
       
        payOrder();
        console.log("pay order done", order)
        await alertmsg();
        console.log(alertmsg());
    }

    catch(e)
    {
        console.error("An error occurred:", error); 
    }
}
restaurantProcess1()



