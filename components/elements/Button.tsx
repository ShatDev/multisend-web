import React from 'react';

const Button = ({ children, active, onClick }: any) => (
  <button
    type="button"
    className={
      active
        ? 'px-4 py-2 btn_bg_primary btn_border_primary text-black'
        : 'btn_border_primary hover_btn border-2 px-4 py-2 text-white'
    }
    onClick={onClick}
  >
    {children ?? 'Test'}
  </button>
);

export default Button;
