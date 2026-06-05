import Task from "../components/Task";
import { useTodoContext } from "../components/TodoContext";
import { Input } from "@/components/retroui/Input";
import { Button } from "@/components/retroui/Button";

export default function InputField() {
  let { task, setTask, input, setInput, edit, setEdit, item } =
    useTodoContext();
  function show(todo) {
    todo ? setTask([...task, { todo, id: task.length }]) : null;
  }
  return (
    <>
      <div className="flex justify-center h-svh relative transition-all delay-1000">
        <div className="p-4 flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-2">
            <Input
              type="text"
              name="todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border border-black outline-none p-2"
              placeholder="Task"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  show(input);
                }
              }}
            />
            <Button
              className="p-2 border border-black "
              onClick={() => {
                if (edit) {
                  setTask((prev) =>
                    prev.map((element) => {
                      if (element.id === item.id) {
                        console.log(element);
                        console.log(item);

                        return { ...element, todo: input };
                      }
                      return element;
                    }),
                  );
                  setInput("");
                  setEdit(!edit);
                } else {
                  show(input);
                }
              }}
            >
              {edit ? "edit" : "submit"}
            </Button>
            {/* {!edit ? (
            <>
              <button id={"submit"} onClick={() => show(input)}>
                Submit
              </button>
            </>
          ) : null}
          {edit ? (
            <>
              <button
                id={"edit"}
                onClick={() => {
                  setTask((prev) =>
                    prev.map((element) => {
                      if (element.id === item.id) {
                        console.log(element);
                        console.log(item);

                        return { ...element, todo: input };
                      }
                      return element;
                    }),
                  );
                  setInput("");
                  setEdit(!edit);
                }}
              >
                edit
              </button>
            </>
          ) : null} */}
          </div>
          <div className="flex gap-2 flex-col">
            {task.map((element) => (
              <div className="flex gap-2 flex-col w-full" key={element.id}>
                <Task element={element} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
