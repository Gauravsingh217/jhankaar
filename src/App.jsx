
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React, { Suspense, lazy } from 'react';
// import Hero from './Components/Hero';
// import Description from './Components/Description';
// import Footer from './Components/Footer';
// import End from './Components/End';
// import PhoneAuth from './Signup/PhoneAuth';
// import Register from './Signup/Register';

// const Fests = lazy(() => import('./Components/Fests'));

// function App() {
//   return (
//     <Router>
//       <div className='overflow-x-hidden'>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <Description />
//                 <Suspense
//                   fallback={
//                     <div className="w-full min-h-[300px] flex items-center justify-center bg-gray-900">
//                       <div className="w-3/4 h-48 bg-gray-700 animate-pulse rounded-lg"></div>
//                     </div>
//                   }
//                 >
//                   <Fests />
//                 </Suspense>
//                 <Footer />
//                 <End />
//               </>
//             }
//           />


//           <Route path="/register" element={<Register />} />

          
//           <Route path="/auth" element={<PhoneAuth />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Hero from './Components/Hero';
import Description from './Components/Description';
import Footer from './Components/Footer';
import End from './Components/End';
import CelebrationForm from './Signup/CelebrationForm';

const Fests = lazy(() => import('./Components/Fests'));

function App() {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Description />
                <Suspense
                  fallback={
                    <div className="w-full min-h-[300px] flex items-center justify-center bg-gray-900">
                      <div className="w-3/4 h-48 bg-gray-700 animate-pulse rounded-lg"></div>
                    </div>
                  }
                >
                  <Fests />
                </Suspense>
                <Footer />
                <End />
              </>
            }
          />
          {/* Removed PhoneAuth route */}
          <Route path="/celebration" element={<CelebrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
