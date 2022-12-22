import bcrypt from "bcryptjs";

const Data = {

   user : [
    {
    name: 'ayoub',
    email:'ayoubsmirani9@gmail.com',
    password : bcrypt.hashSync('123456',8),
    isAdmin : true
       },
  {
    name: 'khalil',
    email:'khalilsmirani9@gmail.com',
    password : bcrypt.hashSync('123456',8),
    isAdmin:false
        }
    ]

        ,



    products :[
        {
          name : 'nike slim shirt1',
          category : 'shirts',
          image : '/images/p1.jpg',
          price : 120 ,
          brand: 'nike ',
          rate: 5 ,
          countInStock: 10,
          numReviews : 10 ,
          description : 'high quality product'
        }
        ,
        {
            name : 'adidas slim shirt',
            category : 'shirts',
            image : '/images/p2.jpg',
            price : 120 ,
            brand: 'adidas ',
            countInStock: 10,
            rate: 4.5 ,
            numReviews : 10 ,
            description : 'high quality product'
          }
          ,
          {
            name : 'lacoste slim shirt',
            category : 'shirts',
            image : '/images/p3.jpg',
            price : 120 ,
            brand: 'nike ',
            countInStock: 10,
            rate: 3.5 ,
            numReviews : 10 ,
            description : 'high quality product'
          },
          {
            name : 'nike slim shirt5',
            category : 'shirts',
            image : '/images/p4.jpg',
            price : 120 ,
            brand: 'nike ',
            countInStock: 10,
            rate: 2.5 ,
            numReviews : 10 ,
            description : 'high quality product'
          }
          ,     {
            name : 'nike slim shirt4',
            category : 'shirts',
            image : '/images/p5.jpg',
            price : 120 ,
            brand: 'nike ',
            countInStock: 10,
            rate: 3.5 ,
            numReviews : 10 ,
            description : 'high quality product'
          }, 
              {
            name : 'nike slim shirt3',
            category : 'shirts',
            image : '/images/p6.jpg',
            price : 120 ,
            brand: 'nike ',
            countInStock: 10,
            rate: 4 ,
            numReviews : 10 ,
            description : 'high quality product'
          }
          , {
            name : 'nike slim shirt3',
            category : 'shirts',
            image : '/images/p6.jpg',
            price : 120 ,
            brand: 'nike ',
            countInStock: 10,
            rate: 4 ,
            numReviews : 10 ,
            description : 'high quality product'
          }
    ]
}



export default Data;