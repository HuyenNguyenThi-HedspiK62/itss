import React from 'react';

function Todo(){
    return(
        <div className="panel">
      <div className="panel-heading">
        学生一覧
      </div>
      <div className = "vi tri">単位</div>
      <div className="name">名前</div>
      <Input onAdd={handleAdd} />
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {displayItems.map(item => (
        <TodoItem
          key = {item.key}
          item = {item}
          onCheck={handleCheck}
          />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth">
          次に
        </button>
        <button className="button is-light is-fullwidth">
          前に
        </button>
      </div>
    </div>

    );
}
export default Todo;