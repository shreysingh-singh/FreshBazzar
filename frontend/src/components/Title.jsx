import React from 'react'

function Title({text1, text2}) {
  return (
    <div className="p-">
      <h2 className="text-2xl sm:text-3xl font-medium text-[#263A29] tracking-wide">
        {text1}
      </h2>
      <p className="text-gray-600 text-sm font-light mt-3 mb-3">{text2}</p>
    </div>
  );
}

export default Title
