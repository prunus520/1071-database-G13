import React from "react";

export const modalM = (
  id,
  title,
  body,
  footer,
  modalStyle = "modal-dialog-centered modal-lg"
) => (
  <div
    className="modal fade"
    id={id}
    tabIndex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div className={"modal-dialog " + modalStyle} role="document">
      <div className="modal-content">
        <div className="modal-header">
          {title}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {body}
        {footer}
      </div>
    </div>
  </div>
);
