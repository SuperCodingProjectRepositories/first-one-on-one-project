class ListItem {
  id = 1
  title = ''
  description = ''
  deadline = new Date();
  category = '';
  checked = false;

  constructor(id,title, description, deadline,category) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.category = category;
    this.checked = false;
  }
}


export default ListItem;