// const url = "http://localhost:4000/fileUploade";
const url = "https://uploade.onrender.com";
const uploade = async () => {
  const inputDiv = document.querySelector("#uploadeFile");
  const response = await fetch(url, {
    method: "POST",
    body: inputDiv.files[0],
  });
  const data = await response.json();
  console.log(data);
};
