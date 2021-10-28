import {ref, computed} from "vue";

const todo = ref([]);

const useTodos = () => {
    const pending = computed (() => {
        return todo.value.filter((todos) => !todos.done)
      });
      
      const completed = computed (() => {
        return todo.value.filter((todos) => todos.done)
      });
      
      const addTodos = (newTodos) => {
        if (newTodos.trim())
        {
          todo.value.push({
            id: todo.value.length,
            content: newTodos,
            done: false
      
          });
        }
      };
      
      const change = (id) => {
        const todos = todo.value.find(todos => todos.id === id);
        todos.done = !todos.done;
      };

      return {
          todo,
          pending,
          completed,
          addTodos,
          change,

      };
};

export default useTodos;