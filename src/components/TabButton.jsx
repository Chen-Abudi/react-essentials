function TabButton({ children, isClicked, ...props }) {
  console.log("Tab component rendering");

  return (
    <li>
      <button className={isClicked ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
