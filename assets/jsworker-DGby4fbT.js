(function(){"use strict";const s=e=>e<=2?1:s(e-1)+s(e-2);onmessage=async e=>{let t=performance.now();const a=await s(e.data),n=performance.now()-t;postMessage([a,n])}})();
