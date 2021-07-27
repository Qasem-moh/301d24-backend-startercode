'use strict';
const axios = require('axios');
const { title } = require('process');
const coffeeModel = require('../models/coffee.model');

// Endpoint for testing
const home = (req, res) => {
    // provide your logic here

}
// Call the coffee api here and return the results
const retreiveItemsController = (req, res) => {
    axios.get(`https://coffeepedias.herokuapp.com/coffee-list/`).then(response => {
        const allData = response.data.map((item) => {
            return new coffeeModel(item)
        })
        res.send(allData)
    }).catch(err => console.log(err))
    // provide your logic here
};
// Get favorite coffee from MongoDB
const getFavoriteCoffee = (req, res) => {
    // provide your logic here
    coffeeModel.find({}, (errror, data) => {
        res.send(data)
    })
}
// Create new fav coffee endpoint
const createItemController = (req, res) => {
    // provide logic here
    const {
        title,
        description,
        ingredients,
        image_url,
        id
    }=req.body
    coffeeModel.find({ title: title }, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            let newData = new coffeeModel({
                id: id,
                title: title,
                description: description,
                ingredients: ingredients,
                image_url: image_url
            })
            newData.save()
            console.log(newData);
        }
    })
};

// update coffee from MongoDB
const updateItemController = (req, res) => {
    // provide logic here
    const { idx } = req.params;
    const { title, description, ingredients, image_url, id }=req.body
    coffeeModel.findOne({ _id: idx }, (error, item) => {
        item.title = title;
            item.description = description;
            item.ingredients = ingredients;
        item.image_url = image_url;
            item.id = id

        item.save().then(() => {
            coffeeModel.find({}, (error, data) => {
                res.send(data)
            })
        })
    })


};

// delete coffee from MongoDB
const deleteItemController = (req, res) => {
    // provide your logic here
    const { id } = req.params;
    coffeeModel.remove({ _id: id }, (error, data) => {
        coffeeModel.find({}, (error, data) => {
            res.send(data)
        })
    })
};

module.exports = {
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};