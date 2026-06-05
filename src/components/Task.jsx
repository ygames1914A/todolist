import { PenLine, Trash2 } from "lucide-react";
import { TodoContext } from "./TodoContext";
import { useContext } from "react";
import { Card } from "@/components/retroui/Card";
export default function Task({ element }) {
  let { setInput, edit, setEdit, setitem , setTask } = useContext(TodoContext);
  // console.log(task);

  return (
    <Card>
      <Card.Header className={"flex"}>
        <Card.Title>{element.todo}</Card.Title>
        <Card.Description className={"flex justify-between"}>
          <PenLine
            onClick={() => {
              setEdit(!edit);
              setitem(element);
              setInput(element.todo);
            }}
          />
          <Trash2 
          onClick= {() => {          
            setTask((prev) => {
              const filtered = prev.filter(item => item.id !== element.id)
              return filtered
            })
          }}
          />
        </Card.Description>
      </Card.Header>
    </Card>
  );
}
