export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;

  const tabs = ["All", "Open", "Completed"];

  const handleKeyNavigation = (direction) => {
    const currentIndex = tabs.indexOf(selectedTab);
    let newIndex;

    if (direction === "right") {
      newIndex = (currentIndex + 1) % tabs.length; // Wrap to the first tab if at the last
    } else if (direction === "left") {
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length; // Wrap to the last tab if at the first
    }

    setSelectedTab(tabs[newIndex]);
  };

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          <button
            tabIndex={0}
            onClick={() => {
              setSelectedTab(tab);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                handleKeyNavigation("right");
              } else if (e.key === "ArrowLeft") {
                handleKeyNavigation("left");
              }
            }}
            key={tabIndex}
            className={
              "tab-button " + (tab === selectedTab ? "tab-selected" : "")
            }
          >
            <h4>
              {tab}
              <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
