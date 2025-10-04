import Swal from "sweetalert2";

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
    
    Swal.fire({
      icon: "error",
      title: "already exists",
      text: "Something went wrong!",
     
    });
    return;
  } else {
    Swal.fire({
      title: "Readlist added Successfull",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
    rgba(0,0,123,0.4)
    url("/vite.svg")
    left top
    no-repeat
  `,
    });
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList",data);
    console.log(storedBookData);
  }
};
