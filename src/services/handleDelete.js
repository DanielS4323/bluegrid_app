export const handleDelete = (object, SetState) => {
  SetState((prev) => {
    let copy = [...prev];
    let index = copy.indexOf(object);
    copy.splice(index, 1);
    return copy;
  });
};
