import "./App.css";
import { useContext, useState } from "react";
import { Button } from "@/components/retroui/Button";
import InputField from "./components/InputField";
import { useLoadingContext } from "./components/LoadingContext";

function App() {
  let { loaded, setLoaded } = useLoadingContext()
  console.log(loaded);
  const [loadedOrder, setLoadedOrder] = useState(false)

  function pageLoaded() {

    // عايز اجرب احط الانبت يفضل موجود في الخلفية
    return (
      <>
        <div className="  w-full h-svh flex flex-col justify-center items-center">
          <div
            className={
              "  bg-red-500 duration-100 transition-all delay-150 -z-10 absolute top-0 left-0 h-full  "
              + (loaded ? " w-0" : "w-1/2")
            }
          ></div>
          <div
            className={
              " origin-right bg-red-800 duration-100 transition-all delay-150 -z-10 absolute top-0 right-0 h-full w-1/2 "
              + (loaded ? " scale-x-0" : "scale-x-100")
            }
          ></div>

          <h1
            className={
              "duration-100 transition-all font-black text-3xl mb-4 " +
              (loaded ? " opacity-0" : null)
            }
          >
            Ready for a day full of Productivity
          </h1>
          <Button
            className={
              "duration-100 transition-all p-2 border border-black " +
              (loaded ? " opacity-0" : null)
            }
            onClick={() => {
              setLoaded(!loaded);
              setTimeout(() => {
                setLoadedOrder(true)
              }, 250);
            }}
          >
            Start
          </Button>
        </div>
      </>
    );
  }

  return <>{loadedOrder?<>
  <div className="">
    <InputField/>
  </div>
  </> : pageLoaded()}</>;
}

export default App;
