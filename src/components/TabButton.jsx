function TabButton({ children, onClick }) {
  console.log("Tab component rendering");

  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}

export default TabButton;
