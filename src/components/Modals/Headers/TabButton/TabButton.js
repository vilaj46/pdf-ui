function TabButton(props) {
  const { tab, label, text, onClick } = props;
  return (
    <button
      role="tab"
      aria-selected={tab === label ? "true" : false}
      aria-controls={label}
      onClick={() => onClick(label)}
    >
      {text}
    </button>
  );
}

export default TabButton;
