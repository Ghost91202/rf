import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import "../text.css"
const ChangingText = () => {
  useEffect(() => {
    const changebox = $(".changebox");
    const firstClone = changebox.children(":first").clone();

    changebox.append(firstClone);

    const fsstr = changebox.parent().css("font-size");
    const fs = parseInt(fsstr.slice(0, fsstr.indexOf("p")));

    changebox.css("height", changebox.parent().css("font-size"));
    ChangeSize(0);

    const intervalId = setInterval(Next, 2000);

    return () => {
      clearInterval(intervalId);
    };

    function Next() {
      if (typeof Next.i === 'undefined') {
        Next.i = 0;
      }
      Next.i++;
      if (Next.i === changebox.children("span").length) {
        Next.i = 1;
        changebox.scrollTop(0);
      }
      changebox.animate({ scrollTop: fs * Next.i + Next.i * 5 + 3 }, 500);
      setTimeout(() => {
        ChangeSize(Next.i);
      }, 500);
    }

    function ChangeSize(i) {
      const word = changebox.children("span").eq(i);
      const wordsize = word.css("width");
      changebox.css("width", wordsize);
    }
  }, []); // Run this effect only once when the component mounts

    return (
      <div className='textanim'>
    <p>
      We are
      <div className="changebox  ">
        <span>best</span>
      
        <span>successful</span>
      
        <span>happy</span>
      
        <span>excited</span>
      
      </div>
      with you!
            </p>

      </div>

  );
};

export default ChangingText;
