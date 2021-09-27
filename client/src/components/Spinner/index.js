const Spinner = ({ spinnerClass, screenReaderClass }) => {
  return (
    <span className={spinnerClass} role="status">
      <span className={screenReaderClass}>Loading</span>
    </span>
  )
}

export default Spinner;