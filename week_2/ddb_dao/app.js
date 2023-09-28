const uuid = require('uuid');
const groceryItemDao = require('./repository/dao.js');

groceryItemDao.addGroceryItem(uuid.v4(), "Celery", 10, 0.25, "Vegetable")
    .then((data) => {
        console.log('Adding item successful')
    }).catch((err) => {
        console.log("An error occured while adding item");
        console.log(err);
    });

groceryItemDao.retrieveGroceryItemById("e6ce385f-99b0-4e59-8478-5cd5c17293ce")
    .then((data) => {
        console.log(data.Item);
    }).catch((err) => {
        console.log("An error occured while retrieving item");
        console.log(err);
    });

groceryItemDao.retrieveAllGroceryItems()
    .then((data) => {
        console.log(data.Items);
    }).catch((err) => {
        console.log("An error occured while retrieving items");
        console.log(err);
    });

groceryItemDao.retrieveGroceryItemsByCategory("Vegetable")
    .then((data) => {
        console.log(data.Items);
    }).catch((err) => {
        console.log("An error occured while retrieving items");
        console.log(err);
    });

groceryItemDao.updateGroceryNameById("e6ce385f-99b0-4e59-8478-5cd5c17293ce", "Carrot")
    .then((data) => {
        console.log("Update successful");
    }).catch((err) => {
        console.log("An error occured while updating item");
        console.log(err);
    });

groceryItemDao.deleteGroceryItemById("e6ce385f-99b0-4e59-8478-5cd5c17293ce")
    