export function Header(props) {
  const { todos } = props;

  const todoLength = todos.length;

  const isTasksPural = todos.length != 1;

  const taskOrTasks = isTasksPural ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
        You have {todoLength} open {taskOrTasks}.
      </h1>
    </header>
  );
}
