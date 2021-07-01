import QuickSpacing from "../QuickSpacing/QuickSpacing";

function SpacingTab(props) {
  const { headers, update, remove } = props;
  return (
    <article role="tabpanel" id="tab-Spacing">
      <QuickSpacing headers={headers} update={update} remove={remove} />
    </article>
  );
}

export default SpacingTab;
