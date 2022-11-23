import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast'
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { SneakerProvider } from './SneakerContext'
import { UserProvider } from './UserContext'
import { CartProvider } from './CartContext'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 

<BrowserRouter>
    <CartProvider>
            <SneakerProvider>
                <UserProvider>
                <Toaster />
                
                    <App />
               </UserProvider> 
        </SneakerProvider>
    </CartProvider>
</BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
