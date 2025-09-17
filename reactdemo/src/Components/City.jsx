export default function City({
  name,
  state = "NSW",
  country = "Australia",
  children,
}) {
  // destructuring the props.children property as well
  return (
    <>
      {children}
      <div className="City">
        <strong>{name}</strong> is in {state}, {country}
      </div>
    </>
  );
}
