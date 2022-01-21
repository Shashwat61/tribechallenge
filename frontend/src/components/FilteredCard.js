import React from 'react';

function FilteredCard({events}) {
   return (
    <div className="col-span-1 ">

      <div className="mt-2">
      {
              <div className='px-2 my-2 border rounded-md' >

              <div className="">
              <p className="py-2 font-semibold">{events?.title}</p>
                  <span className="text-sm">
                      {events?.date}
                  </span>
              </div>
              </div>
      }
    </div>
  </div>
  );
}

export default FilteredCard;
