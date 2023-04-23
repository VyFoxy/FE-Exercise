import React, {useState, useEffect}from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Todos(props) {
  const [stores, setStores] = React.useState(props.todos);
  
    
  const handleDragAndDrop = (results) => {
    
    //console.log(stores);
    const { source, destination, type } = results;

    if (!destination) return;

    
    if (type === "group") {
      const reorderedStores = [...stores];
      
      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);
      setStores(reorderedStores);
      //console.log(stores);
      return setStores(reorderedStores);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = stores.findIndex(
      (store) => store.id === source.droppableId
    );
    const storeDestinationIndex = stores.findIndex(
      (store) => store.id === destination.droppableId
    );

    const newSourceItems = [...stores[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems,
    };
    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems,
    };

    setStores(newStores);
  };
    return (
      <div className="task-container">
        <DragDropContext onDragEnd={handleDragAndDrop}>
        
          <Droppable droppableId="todo.id" type="group">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {props.todos.map((todo, index) => (
                  <Draggable index={index} draggableId={todo.id} key={todo.id}>
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <TodoItem
                          key={todo.id}
                          todo={todo}
                          deleteTodo={props.deleteTodo}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }

export default Todos;
