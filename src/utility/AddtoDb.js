export const getStoredBook = () => {
  const storedBookStd = localStorage.getItem("readList");

  if (storedBookStd) {
    const storedBookData = JSON.parse(storedBookStd);
    return storedBookData;
  } else {
    return [];
  }
};
export const addToStoredBook = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("already exists");
    return;
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList",data);
    console.log(storedBookData);
  }
};
