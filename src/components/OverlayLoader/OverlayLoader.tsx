import { useSelector } from "react-redux";
import "./OverlayLoader.css"


const OverlayLoader = () => {
  const loadingState = useSelector((state: any) => state.loading);
  //console.log(loadingState);

  return (
    <>
      {loadingState.requestCount > 0 &&  (
        <div className="overlay">
        <div className="overlay__inner">
          <div className="overlay__content">
          <div className="loader"></div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default OverlayLoader;
