const Dropdown = props => {
  const { isOpen, children } = props;
  return (
    <article className={`${isOpen ? 'slideDrop' : 'slideDropdown'}`}>
      {isOpen && children}
    </article>
  );
};

export default Dropdown;
