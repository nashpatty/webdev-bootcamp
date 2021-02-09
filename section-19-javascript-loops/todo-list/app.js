let todo_list = [];
let quit_app = false;

while (!quit_app) {
  let selection = prompt('what would you like todo?');

  switch (selection) {
    case 'new':
      console.log('new');
      let todo_item = prompt('enter a todo item');
      todo_list.push(todo_item);
      break;
    case 'list':
      console.log('list');
      let index = 1;
      for (let todo_item of todo_list) {
        console.log(`${index} : ${todo_item}`);
      }
      break;
    case 'delete':
      console.log('delete');
      let delete_index = prompt('which item would you like to delete');
      delete_index = parseInt(delete_index) - 1;
      todo_list.splice(delete_index, 1);
      break;
    case 'quit':
      quit_app = true;
      console.log('quit');
      break;
    default:
      console.log('invalid input');
      break;
  }
}
