function Tabs({ children, buttons, ButtonsWrapper }) {
  // const ButtonsWrapper = buttonsWrapper;

  return (
    <>
      <ButtonsWrapper>{buttons}</ButtonsWrapper>
      {children}
    </>
  );
}

export default Tabs;
