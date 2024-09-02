import './App.css';
import Avatar from './AvatarCustomization/Avatar';
import Button from './Buttons/Button';
import Category from './Categories/Category';
import { SelectedStyle } from './Store/StateManagement';
import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs';

function App() {
  const selectedOption = SelectedStyle((state) => state.selectedOption)

  const handleCaptureClick = async () => {
    const pricingTableElmt =
      document.querySelector('.Character_div');
    if (!pricingTableElmt) return;
    const canvas = await html2canvas(pricingTableElmt);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };

  return (
    <main className='col-12 p-5 container'>
      <div >
        <b>CHARACTER GENERATOR</b>
      </div>
      <div className='row' >
        {/* <div className=" col-md-6 d-flex justify-content-center">
          <Avatar />
        </div> */}
        <div className='col-md-6'>
          <div style={{ backgroundColor: "whitesmoke" }} className='Character_div col-md-12 px-0 d-flex justify-content-center'>
            <Avatar />
          </div>
          <div className='col-6'>
            <button onClick={() => handleCaptureClick()}>download</button>
          </div>
        </div>
        <div className='col-md-6'>
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
    </main>
  );
}

export default App;
