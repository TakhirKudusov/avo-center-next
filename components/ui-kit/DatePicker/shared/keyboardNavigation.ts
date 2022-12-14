const handleArrowKeys = (
  e: KeyboardEvent,
  { allowVerticalArrows }: { allowVerticalArrows: boolean },
) => {
  const { activeElement } = document;
  const getNthChildSafe = (element: any, index: number) =>
    element ? element.children[index] : null;
  const getStandardItem = (item: any) =>
    item && (item.hasAttribute('aria-hidden') ? null : item);
  const { nextSibling: nextRow, previousSibling: previousRow } =
    activeElement?.parentElement as any;
  const nextSibling = getStandardItem(
    activeElement?.nextSibling || getNthChildSafe(nextRow, 0),
  );
  const previousRowLength = previousRow ? previousRow.children.length - 1 : 0;
  const previousSibling = getStandardItem(
    activeElement?.previousSibling ||
      getNthChildSafe(previousRow, previousRowLength),
  );
  const getVerticalSibling = (row: any) =>
    getNthChildSafe(
      row,
      Array.from((activeElement as any)?.parentElement.children).indexOf(
        activeElement,
      ),
    );
  const downSibling = getStandardItem(getVerticalSibling(nextRow));
  const upSibling = getStandardItem(getVerticalSibling(previousRow));
  const isDefaultSelectable =
    (activeElement as any)?.dataset.isDefaultSelectable === 'true';

  if (!isDefaultSelectable) (activeElement as any).tabIndex = '-1';
  const focusIfAvailable = (element: any) => {
    e.preventDefault();
    /* istanbul ignore else */
    if (element) {
      element.setAttribute('tabindex', '0');
      element.focus();
    }
  };
  switch (e.key) {
    case 'ArrowRight':
      focusIfAvailable(nextSibling);
      break;
    case 'ArrowLeft':
      focusIfAvailable(previousSibling);
      break;
    case 'ArrowDown':
      /* istanbul ignore else */
      if (allowVerticalArrows) focusIfAvailable(downSibling);
      break;
    case 'ArrowUp':
      /* istanbul ignore else */
      if (allowVerticalArrows) focusIfAvailable(upSibling);
      break;
  }
};

export default handleArrowKeys;
