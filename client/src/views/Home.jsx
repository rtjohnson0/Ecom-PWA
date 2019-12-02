import React from 'react'


const Home = (props) => {

    return (

        <>



            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">


                <div id="demo" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>


                    <main>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="images/image2.jpg" alt="Playstation 4" width="1100" height="500" />
                                <div class="carousel-caption">
                                    <h3>Playstation 4 NEW & Refurbished</h3>
                                    <h4>As Low As $199!</h4>


                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="images/image1.jpg" alt="Xbox 1" width="1100" height="500" />
                                <div class="carousel-caption">
                                    <h3>Xbox 1 NEW & Refurbished</h3>
                                    <h4>As Low As $179</h4>
                                </div>


                            </div>
                            <div class="carousel-item">
                                <img src="images/image5.jpg" alt="Nintendo Switch" width="1100" height="500" />
                                <div class="carousel-caption">
                                    <h3>Nintendo Switch NEW & Refurbished</h3>
                                    <h4>As Low As $229</h4>
                                </div>
                            </div>
                        </div>


                   
                    </main>
                    <div class="col-md-12 p-lg-5 mx-auto my-5">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <h1 class="display-4 font-weight-bold">Welcome to EBGames(US)</h1>
                            <div class="black">

                                <p class="lead font-weight-normal col-md-12">With over 6,100 stores located throughout the United States and 17 countries, we are the retail destination for gamers around the world. Our GameStop, EB Games and Electronics Boutique retail locations set us apart in the industry.
                                    Everything that we offer our customers-from our expansive selection of new products, to our knowledgeable associates and our value-added pre-owned products-is geared to deliver customer satisfaction. </p>
                            </div>
                           
                        </div>
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>

                </div>
            </div>
            <div class="Color">
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
                    <div class="col-md-5 p-lg-5 mx-auto my-5">

                        <div class="white">
                            <h1 class="display-4 font-weight-normal text-white">Upcoming Games</h1>
                        </div>
                 

                        <hr />


                        <div class="white">
                            <p class="lead font-weight-normal text-white ">Feel free to come in or call to put your name on the list for the first release! Call 740-555-5555 to get your game today!.</p>
                        </div>
                       
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block "></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block "></div>
                </div>

            </div>
            <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden ">
                <div class="my-3 p-3 ">
                    <h2 class="display-5 ">Your Game Space Cluttered?</h2>
                    <p class="lead ">Then follow these steps below on how we can help you out! You'll even get money for it!</p>
                </div>


            </div>


        </>





    )

}

export default Home
