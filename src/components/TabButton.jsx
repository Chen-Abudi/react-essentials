function TabButton({ children, onClick, isClicked }) {
  console.log("Tab component rendering");

  return (
    <li>
      <button className={isClicked ? "active" : undefined} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
