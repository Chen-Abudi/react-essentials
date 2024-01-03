function Tabs({ children, buttons, ButtonsWrapper = "menu" }) {
  // const ButtonsWrapper = buttonsWrapper;

  return (
    <>
      <ButtonsWrapper>{buttons}</ButtonsWrapper>
      {children}
    </>
  );
}

export default Tabs;
