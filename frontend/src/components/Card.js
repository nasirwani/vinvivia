import './Card.css'
const Card = () => {
    return (

        <div className='card-container'>

            <div class="card1">
                <div class="card-image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt='' />
                    <button type='click'>PUBLISHD</button>
                </div>
                <div class="card-content">
                    <p>Music and mountain</p>
                    <h4>Bayer and Sons</h4>

                    <div className='card-date'>
                        <div className='start'>
                            <div>Start</div>
                            <div>Mon, 19 Sep 2022 16:57</div>
                        </div>

                        <div className='end'>
                            <div>End</div>
                            <div>Fri, 30 Sep 2022 16:57</div>
                        </div>
                    </div>

                    <div className='info'>
                        <div className='details'>
                            <div className='name'>Created by</div>
                            <div className='email'>admin@vinivia.com</div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card2">
                <div class="card-image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt='' />
                    <button type='click'>PUBLISHD</button>
                </div>
                <div class="card-content">
                    <p>Hollywood</p>
                    <h4>Health & Wellness</h4>

                    <div className='card-date'>
                        <div className='start'>
                            <div>Start</div>
                            <div>Mon, 19 Sep 2022 16:57</div>
                        </div>
                        <div className='end'>
                            <div>End</div>
                            <div>Fri, 30 Sep 2022 16:57</div>
                        </div>
                    </div>
                </div>

                <div className='info'>
                    <div className='details'>
                        <div className='name'>Created by</div>
                        <div className='email'>admin@vinivia.com</div>
                    </div>
                </div>
            </div>

            <div class="card3">
                <div class="card-image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt='' />
                    <button type='click'>PUBLISHD</button>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"></i></a>
                </div>
                <div class="card-content">
                    <p>Music and mountain</p>
                    <h4>Orchestra</h4>

                    <div className='card-date'>
                        <div className='start'>
                            <div>Start</div>
                            <div>Mon, 19 Sep 2022 16:57</div>
                        </div>

                        <div className='end'>
                            <div>End</div>
                            <div>Fri, 30 Sep 2022 16:57</div>
                        </div>
                    </div>
                </div>
                <div className='info'>
                    <div className='details'>
                        <div className='name'>Created by</div>
                        <div className='email'>admin@vinivia.com</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Card;
