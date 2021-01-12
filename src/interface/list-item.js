const ListToDo = (toDo) => {
  const toDoList = [];
  for (let i = 0; i < toDo.length; i += 1) {
    const toDoHtml = `
          <div class="text-gray-800 text-xl">
            ${toDo[i].title}
          </div>  
    `;

    toDoList.push(toDoHtml);
  }

  const html = `
      <h2 class="font-black text-2xl my-5">These are your toDo</h2>
      <div class="">
        ${toDoList.join(' ')}
      </div>
    `;

  return html;
};

export default ListToDo;