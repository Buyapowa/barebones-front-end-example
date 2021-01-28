import React from "react";
import Popup from '../dialogs/popup'
import { IMGSRC } from '../../redux/static';
import { CopyToClipboard } from "../helpers/utils";



const ShareLink = (props) => {
  const inputRef = React.createRef();
  const [popupOpen, setPopupOpen] = React.useState(null);

  const handleClick = () => {
    CopyToClipboard(inputRef.current)
    setPopupOpen(true)
    setTimeout(function () {
      setPopupOpen(false)
    }, 3000);
  }

  return (
    <div>
      <div>Your unique sharing link</div>
      <div class="input-group mb-3 mt-1">
        <input ref={inputRef} type="url" readonly value={props.link} class="form-control b-grey" placeholder="" aria-label="" aria-describedby="basic-addon1" />
        <div class="input-group-prepend bg-green">
          <button
            class="btn btn-img"
            type="button" onClick={handleClick}
            style={{ backgroundImage: `url(${IMGSRC.COPYCLIPBOARD})` }}>
          </button>
        </div>
      </div>
      <Popup open={popupOpen} text={"copied to clipboard"} />
    </div>
  )
}

export default ShareLink