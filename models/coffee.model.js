'use strict';
const mongoose=require('mongoose');

const coffeeSchema=new mongoose.Schema({
    title:String,
    description:String,
    ingredients:String,
    image_url:String,
    id:String
});

const coffeeModel=mongoose.model('favcofees',coffeeSchema);

// const coffeeSeed=()=>{
//     const coffee=new coffeeModel({
//         title:'Latte',
//         description:'seeded coffee',
//         ingredients:'just coffee',
//         img:'https://www.healthifyme.com/blog/wp-content/uploads/2019/09/Black-coffee-feature-image.jpg'
//     })
//     coffee.save()
//     // console.log(coffee)
// }

module.exports=coffeeModel;
// module.exports={
//                 coffeeModel,
//               coffeeSeed
//             };

