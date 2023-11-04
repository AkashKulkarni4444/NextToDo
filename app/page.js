import { ChakraProvider } from "@chakra-ui/react";
import TodoList from '../components/TodoList';
import Auth from '../components/Auth';
import AddTodo from '../components/AddToDo';
export default function Home() {
  return (
    <div className='flex flex-col '>
      <div className='text-[rgba(155,155,155,0.8)] w-full align-middle items-center text-3xl pl-[45%] mb-4 mt-8' >
        To-do List
      </div>
      <div className='w-full ms-auto me-auto ps-12 pe-12' >
        <Auth />
        <AddTodo />
        <ChakraProvider>
          <TodoList />
        </ChakraProvider>
      </div>
    </div>
  )
}
