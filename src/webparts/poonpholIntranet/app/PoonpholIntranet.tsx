import React, { Suspense, useEffect } from 'react';

import { HashRouter } from 'react-router-dom';
import Routes from './Route';


function IntranetWeb(props: any) {
  useEffect(() => {
    document.title = "Intranet Portal";

    const titleTag = document.querySelector("title");
    if (titleTag) {
      titleTag.textContent = "Intranet Portal";
    }
  }, []);

  
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Suspense fallback={null}> */}
        <Routes context={props.context} />  {/* 👈 ส่งต่อ */}
      </Suspense>
    </HashRouter>
  )
}

export default IntranetWeb