const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

// console.log(id.id.length) // saving in binary cuts id size in half // 12
// console.log(id.getTimestamp())
// console.log(id.toHexString().length) // 24

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect')
  }

  const db = client.db(databaseName)

  db.collection('tasks')
    .deleteOne({
      description: 'walk dog'
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  // db.collection('users').deleteMany({
  //   age: 27
  // }).then(result => {
  //   console.log(result)
  // }).catch(err => console.log(err))

  // db.collection('tasks')
  //   .updateMany(
  //     {
  //       completed: false
  //     },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     }
  //   )
  //   .then(result => console.log(result.modifiedCount))
  //   .catch(err => console.log(err))

  // db.collection('users')
  //   .updateOne(
  //     {
  //       _id: new ObjectID('5dbf4483c276d818324e9310')
  //     },
  //     {
  //       // $set: {
  //       //   name: 'Mikey'
  //       // }
  //       $inc: {
  //         age: -1
  //       }
  //     }
  //   )
  //   .then(result => {
  //     console.log(result)
  //   })
  //   .catch(err => console.log(err))

  // db.collection('users').findOne({ _id: new ObjectID('5dbf4483c276d818324e930f') }, (error, user) => {
  //   if (error) {
  //     return console.log('unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('users').find({ age: 27 }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').find({ age: 27 }).count((error, count) => {
  //   console.log(count)
  // })

  // db.collection('tasks').findOne({ _id: new ObjectID('5dbf45e1e732cb18f9ac332b') }, (err, result) => {
  //   if (err) return console.log(err)

  //   console.log(result)
  // })

  // find returns a cursor

  // db.collection('tasks').find({ completed: false }).toArray((err, tasks) => {
  //   console.log(tasks)
  // })

  // db.collection('users').insertOne(
  //   {
  //     _id: id,
  //     name: 'Vikram',
  //     age: 32
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('unable to insert user')
  //     }

  //     console.log(result.ops)
  //   }
  // )
  // db.collection('users').insertMany(
  //   [
  //     {
  //       name: 'Jen',
  //       age: 28
  //     },
  //     {
  //       name: 'Gunther',
  //       age: 27
  //     }
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('unable to insert documents')
  //     }

  //     console.log(result.ops)
  //   }
  // )

  // db.collection('tasks').insertMany(
  //   [
  //     {
  //       description: 'walk dog',
  //       completed: true
  //     },
  //     {
  //       description: 'skin dog',
  //       completed: false
  //     },
  //     {
  //       description: 'take bath',
  //       completed: true
  //     }
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('unable to insert')
  //     }

  //     console.log(result.ops)
  //   }
  // )
})
