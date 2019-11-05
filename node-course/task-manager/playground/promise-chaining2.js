const Task = require('../src/models/task')
require('../src/db/mongoose')

// Task.findByIdAndDelete('5dc0b3555fabef69ed17c4de')
//   .then(delTask => {
//     console.log(delTask)
//   })
//   .then(() => {
//     Task.countDocuments({ completed: false }).then(count => {
//       console.log(count)
//     })
//   })
//   .catch(e => console.log(e))

const findDelete = async id => {
  const delTask = await Task.findByIdAndDelete(id)
  return await Task.countDocuments({ completed: false })
}

findDelete('5dc0b53c2807e36a1b59edea')
  .then(count => {
    console.log(count)
  })
  .catch(e => console.log(e))
