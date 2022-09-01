/* eslint-disable @next/next/no-img-element */
import React from "react";

function Card() {
  return (
    <div>
      <div className=" p-6 rounded-md shadow-md bg-sky-900 text-sky-50 mb-3">
        <div className="mt-6 mb-2">
         
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="text-sky-100">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
    </div>
  );
}

export default Card;