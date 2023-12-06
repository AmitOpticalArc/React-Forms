import { useState } from "react";

function Hooks() {
  const [myName, setMyName] = useState("Amit Kuril");
  const [like, setLike] = useState(1),
    [islike, setIsLike] = useState(false);

  // const changeName = () =>{
  //  setMyName("Amit Raju Kuril")
  // }

  // Below both are used to toggle a button
  const changeName = () => {
    let val = myName;
    if (val === "Amit Kuril") {
      setMyName("Amit Raju Kuril");
    } else {
      setMyName("Amit Kuril");
    }
    // let val = myName;
    // (val === 'Amit Kuril') ? setMyName('Amit R Kuril') : setMyName('Amit Kuril');
  };

  let onLikeButton = () => {
    setLike(like + (islike ? -1 : 1));
    setIsLike(!islike);
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div>
          <div className="flex justify-center">
            <h1 className="text-6xl mb-6 flex justify-center">{myName}</h1>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-sky-500 py-3 px-7 text-white text-4xl font-normal mb-20 flex"
              onClick={changeName}
            >
              Register
            </button>
          </div>
          <div className="flex justify-center">
            <p className={"" + (islike ? "text-blue-600" : "")}>
              <i
                style={{ fontSize: "100px" }}
                className="fa-solid fa-thumbs-up"
                onClick={onLikeButton}
              ></i>
              <p className="text-black">Like {like}</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hooks;
