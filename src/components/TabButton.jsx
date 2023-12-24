function TabButton({ children }) {
  function handleClick() {
    console.log("Aloha");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

export default TabButton;
