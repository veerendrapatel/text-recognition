import React from 'react';
import M from 'materialize-css';

// Just a simple component to hold results
const Holder = ({ text, altText }) => {

  if (text !== null)
    return (
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <p> {text} </p>
          </div>
          <div className="card-action">
            <div className='row' style={{ marginBottom: '0px' }}>
              <i className="material-icons grey-text col s12 center" onClick={(evt) => {
                const select = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(evt.target.parentNode.parentNode.parentNode.children[0]);
                select.removeAllRanges(); select.addRange(range);
                document.execCommand("copy"); document.getSelection().removeAllRanges();
                M.toast({ html: 'Text Copied Successfully!' })
              }}>content_copy</i>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <p className='flow-text grey-text darken-4 center'
      style={{
        "width": "80%",
        "position": "relative",
        "left": "10%",
        "right": "10%"
      }}>
      <br /><br />
      {altText}
    </p>);

}

export default Holder;
