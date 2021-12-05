import Head from 'next/head';
function desserts() {
  return (
    
     <section className="py-6">
    <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <h2 className="mb-4 mt-2 font-bold text-3xl">DESSERTS & FROMAGES </h2>
       
       
        <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
            <div>
                <div>
                    <div className="flex mt-2">
                        <h5 className=" font-semibold text-gray-900">PART DE FROMAGE</h5>
                        <span className=" ml-2 font-bold text-pink-500">3.00 €</span>
                    </div>
                    <p className="text-sm italic "><span className="text-pink-500">Au Choix : </span>Reblochon, Tomme, ou Comté</p>
                   
                </div>

                <div>
                    <div className="flex mt-2">
                        <h5 className=" font-semibold text-gray-900">PLANCHE DE FROMAGES</h5>
                        <span className=" ml-2 font-bold text-pink-500">8.50 €</span>
                    </div>
                    <p className="text-sm italic">3 Fromages & Salade Verte</p>
                </div>
                
                <div>
                    <div className="flex mt-2">
                        <h5 className=" font-semibold text-gray-900">FROMAGE BLANC BATTU </h5>
                        <span className=" ml-2 font-bold text-pink-500">16.00 €</span>
                    </div>
                    <p className="text-sm italic">Nature, A la crème, Myrtilles </p>
                  
                </div>
                
       
                
                <div>
                    <div className="flex mt-2">
                    <h5 className=" font-semibold text-gray-900">TARTE TATIN </h5>
                        <span className=" ml-2 font-bold text-pink-500">7.10 €</span>
                    </div>
                   
                </div>

                <div>
                    <div className="flex mt-2">
                        <h5 className=" font-semibold text-gray-900">CREME BRULEE MAISON</h5>
                        <span className=" ml-2 font-bold text-pink-500">6.30 €</span>
                    </div>
                </div>
                <div>
                    <div className="flex mt-2">
                        <h5 className=" font-semibold text-gray-900">MOELLEUX AU CHOCOLAT MAISON</h5>
                        <span className=" ml-2 font-bold text-pink-500">6.30 €</span>
                    </div>
                </div>
                <div>
                    <div className="flex mt-2">
                        <h5 className=" font-semibold text-gray-900">TARTELETTES MYRTILLES MAISON</h5>
                        <span className=" ml-2 font-bold text-pink-500">6.30 €</span>
                    </div>
                </div>
                <div>
                    <div className="flex mt-2">
                        <h5 className=" font-semibold text-gray-900">CAFE MONTAGNARD</h5>
                        <span className=" ml-2 font-bold text-pink-500">6.30 €</span>
                    </div>
                    <p className="text-sm italic">1 Café, 1 Mini Moelleux au Chocolat & 1 Digestif </p>
                </div>
            </div>


            <div>
                 
                
                <div>
                    PHOTO
                </div>
                
               
               
        </div>
   </div>
    </div>
</section>
    
  );
}

export default desserts;
