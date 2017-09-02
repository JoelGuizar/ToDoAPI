const {ObjectId} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '59a66f7e46493465d5b49a24';
//ObjectId.isValid//return a boolean dependent is object ID is valid


if (!ObjectId.isValid(id)){
  console.log('ID FUHHH MUH LIFE');
}

let id = '59a5fffa97e6d55c256b5799'

User.find({
  _id:id
}).then((users) => {
  console.log('Users found', users);
})

User.findById(id).then((users) => {
  if (!users) return console.log('User not found');
  console.log(users);
}).catch((e) => console.log(e))

// Todo.find({
//   _id: id //mongoose doesnt require you to pass in new ObjectID unlike mongoose
// }).then((todos) => {
//   console.log('Todos find', todos);
// });
//
// Todo.findOne({ //like find, but finds one document at most
//   _id: id
// }).then((todos) => {
//   console.log('Todos find one', todos);
// })


//
// Todo.findById(id).then((todos) => {
//   if (!todos){
//     return console.log(('ID not found', todos));
//   }
//   console.log('Todos find by ID', todos)
// }).catch((e) => console.log(e))
