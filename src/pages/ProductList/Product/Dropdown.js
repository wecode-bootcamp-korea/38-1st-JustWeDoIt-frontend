const Dropdown = props => {
  // eslint-disable-next-line react/destructuring-assignment
  return (
    <article className={`${props.state ? 'slideDrop' : 'slideDropdown'}`}>
      {props.state && props.children}
    </article>
  );
};

export default Dropdown;
