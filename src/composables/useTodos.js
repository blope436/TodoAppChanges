import {ref, computed} from "vue";
import axios from 'axios'; 

const todo = ref([]);

const api = axios.create({
  baseURL: 'import.meta.env.API_URL',
  params: {
    username: 'import.meta.env.API_USER',
    password: 'import.meta.env.API_PASS'
  },
})

const useTodos = () => {
    const getAll = async () => {
      const {data} = await api.get()
      todo.value = data;
    }
    const pending = computed (() => {
        return todo.value.filter((todos) => !todos.complteted)
      });
      
      const completed = computed (() => {
        return todo.value.filter((todos) => todos.complteted)
      });
      
      const addTodos = async (newTodos) => {
        if (newTodos.trim())
        {
          await api.post('', {
            text: newTodos,
            complteted: false
      
          });
          await getAll();
        }
      };
      
      const change = async (id) => {
        const todos = todo.value.find(todos => todos.id === id);
        todos.complteted = !todos.complteted;
        const {id: _id, ...todoToUpdate} = todo;
        await api.put(`/${id}`, todoToUpdate)
        await getAll();
      };

      getAll();

      return {
          todo,
          pending,
          completed,
          addTodos,
          change,

      };
};

export default useTodos;