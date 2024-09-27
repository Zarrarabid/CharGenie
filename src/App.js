import './App.css';
import Avatar from './components/AvatarCustomization/Avatar';
import Button from './components/Buttons/Button';
import Category from './components/Categories/Category';
import { SelectedStyle } from './components/Store/StateManagement';
import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs';
import { useEffect } from 'react';

function App() {
  const selectedOption = SelectedStyle((state) => state.selectedOption)
  let setRandomView = SelectedStyle((state) => state.setRandomView)
  let maintainView = SelectedStyle((state) => state.maintainView)
  let setScreen = SelectedStyle((state) => state.setScreen)
  let screen = SelectedStyle((state) => state.screen)

  const handleCaptureClick = async () => {
    const pricingTableElmt =
      document.querySelector('.Character_div');
    if (!pricingTableElmt) return;
    const canvas = await html2canvas(pricingTableElmt);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'avatar.png', 'image/png');
  };

  useEffect(() => {
    const handleScreenSize = () => {
      setScreen(window?.outerWidth)
    }
    window.addEventListener("resize", handleScreenSize)

    handleScreenSize()

    return () => {
      window.removeEventListener("resize", handleScreenSize)
    }

  }, [])

  return (
    <>
      <div className='col-12 px-0'>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className='col-12 p-5 container'>
          <div >
            <b>CHARACTER GENERATOR</b>
          </div>
          <div className='row' >
            <div className='col-lg-6 col-md-12 col-sm-12 '>
              <div
                style={{
                  backgroundColor: maintainView?.filter((ele) => ele?.category === "Background")?.length > 0 ?
                    maintainView?.filter((ele) => ele?.category === "Background")[0]?.selectedSvg : "whitesmoke"
                }}
                className='Character_div col-md-12 col-sm-12 col-12 px-0 d-flex justify-content-center'>
                <Avatar />
              </div>
              <div className={screen <= 575 ? "col-12 mt-2 d-flex flex-column justify-content-between" : 'col-12 mt-2 d-flex justify-content-between'}>
                <button className={screen <= 575 ? "OptionBtn rounded-5 col-md-3 col-sm-3 mb-3 col-12" : 'OptionBtn rounded-5 col-md-3 col-sm-3 col-12'} onClick={() => handleCaptureClick()}>download</button>
                <button className='OptionBtn rounded-5 col-md-3 col-sm-3 col-12' onClick={() => {
                  setRandomView()
                }}>random</button>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='row'>
                <div className='col-md-12'>
                  <b>Customize Look</b>
                </div>
                <div className='col-md-12 mt-2'>
                  <Button />
                </div>
                <div className='col-md-12 mt-3'>
                  <b>{selectedOption}</b>
                </div>
                {selectedOption !== "" && <div className='col-md-12 mt-2'>
                  <Category />
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
