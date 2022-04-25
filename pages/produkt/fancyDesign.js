import React from 'react';
import Script from 'next/script';
import jquery from 'jquery';

const fancyDesiger = () => {
  return (
    <>      
      <Script src="/js/jquery.min.js" type="text/javascript" />
      <Script src="/js/jquery-ui.min.js" type="text/javascript" />
      <Script src="/js/fabric.min.js" type="text/javascript" />
      <Script src="/js/FancyProductDesigner.js" type="text/javascript" />
      <Script src="/js/custom.js" type="text/javascript" />
      <div id="main-container">
      <h3 id="clothing">Designer</h3>
      <FancyLayout />
      <br />
      <div className="fpd-clearfix" style={{marginTop: "30px"}}>
        <div className="api-buttons fpd-container fpd-left">
          <a href="#" id="print-button" className="fpd-btn">
            Print
          </a>
          <a href="#" id="image-button" className="fpd-btn">
            Create Image
          </a>
          <a href="#" id="checkout-button" className="fpd-btn">
            Checkout
          </a>
          <a href="#" id="recreation-button" className="fpd-btn">
            Recreate product
          </a>
        </div>
        <div className="fpd-right">
          <span className="price badge badge-inverse">
            <span id="thsirt-price"></span> $
          </span>
        </div>
      </div>
      <p className="fpd-container">
        Only working on a webserver:
        <br />
        <span className="fpd-btn" id="save-image-php">
          Save image with php
        </span>
        <span className="fpd-btn" id="send-image-mail-php">
          Send image to mail
        </span>
      </p>
    </div>
    </>
  );
};

export default fancyDesiger;

class FancyLayout extends React.Component {
  componentDidMount() {
    window.jQuery = jquery;
    window.$ = jquery;
    this.$element = jquery(this.element);
  }

  render() {
    return (
      <>
        <div
          id="clothing-designer"
          className="fpd-container fpd-shadow-2 fpd-topbar fpd-tabs fpd-tabs-side fpd-top-actions-centered fpd-bottom-actions-centered fpd-views-inside-left"
          ref={(el) => (this.element = el)}
        ></div>
      </>
    );
  }
}
