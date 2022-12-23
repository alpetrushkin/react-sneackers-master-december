function App() {
   return (
      <div className="wrapper clear">
         <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
               <img className="m-15" width={40} height={40} src="/img/logo.png" alt="Logo"/>
               <div>
                  <h3 className="text-uppercase">React sneakers</h3>
                  <p className="opacity-5">Магазин лучших кроссовок</p>
               </div>
            </div>
            <ul className="d-flex">
               <li className="mr-30">
                  <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="Logo"/>
                  <span>1205 руб.</span>
               </li>
               <li>
                  <img width={18} height={18} src="/img/user.svg" alt="Logo"/>
               </li>
            </ul>
         </header>
         <div className="content p-40">
            <h1 className="mb-40">Все кроссовки</h1>

            <div className="d-flex flex-wrap">
               <div className="card">
                  <img width ={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>ЦЕНА :</span>
                        <b>12 999 р.</b>
                     </div>
                     <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                     </button>
                  </div>
               </div>

               <div className="card">
                  <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Nike Air Max 270</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>ЦЕНА :</span>
                        <b>12 999 р.</b>
                     </div>
                     <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                     </button>
                  </div>
               </div>

               <div className="card">
                  <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>ЦЕНА :</span>
                        <b>8 499 р.</b>
                     </div>
                     <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                     </button>
                  </div>
               </div>

               <div className="card">
                  <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
                  <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>ЦЕНА :</span>
                        <b>8 999 руб. р.</b>
                     </div>
                     <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                     </button>
                  </div>
               </div>

               <div className="card">
                  <img width={133} height={112} src="/img/sneakers/5.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Under Armour Curry 8</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>ЦЕНА :</span>
                        <b>15 199 р.</b>
                     </div>
                     <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                     </button>
                  </div>
               </div>

               <div className="card">
                  <img width={133} height={112} src="/img/sneakers/6.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Nike Kyrie 7</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>ЦЕНА :</span>
                        <b>11 299 р.</b>
                     </div>
                     <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                     </button>
                  </div>
               </div>

               <div className="card">
                  <img width={133} height={112} src="/img/sneakers/7.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>ЦЕНА :</span>
                        <b>10 799 р.</b>
                     </div>
                     <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
