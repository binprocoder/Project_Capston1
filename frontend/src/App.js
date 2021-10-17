import react from 'react';
import "./index.js";
function App() {
  return (
    <div>
      <header>

          <div id="menu-bar" class="fas fa-bars"></div>

          <a href="#" class="logo"><span>T</span>ravel</a>

          <nav class="navbar">
              <a href="#home">TRANG CHỦ</a>
              <a href="#packages">COMBO TOUR</a>
              <a href="#gallery">ĐỊA ĐIỂM NỔI BẬT</a>
              <a href="#contact">LIÊN HỆ</a>
          </nav>

          <div class="icons">
              <i class="fas fa-search" id="search-btn"></i>
              <i class="fas fa-user" id="login-btn"></i>
          </div>

          <form action="" class="search-bar-container">
              <input type="search" id="search-bar" placeholder="search here..."></input>
              <label for="search-bar" class="fas fa-search"></label>
          </form>

      </header>

      <div class="login-form-container">

          <i class="fas fa-times" id="form-close"></i>

          <form action="">
              <h3>login</h3>
              <input type="email" class="box" placeholder="enter your email"/>
              <input type="password" class="box" placeholder="enter your password"/>
              <input type="submit" value="login now" class="btn"/>
              <input type="checkbox" id="remember"/>
              <label for="remember">remember me</label>
              <p>forget password? <a href="#">click here</a></p>
              <p>don't have and account? <a href="#">register now</a></p>
          </form>

      </div>


      <section class="home" id="home">

          <div class="content">
              <h3>adventure is worthwhile</h3>
              <p>dicover new places with us, adventure awaits</p>
              <a href="#" class="btn">discover more</a>
          </div>

          <div class="controls">
              <span class="vid-btn active" data-src="images/vid-1.mp4"></span>
              <span class="vid-btn" data-src="images/vid-2.mp4"></span>
              <span class="vid-btn" data-src="images/vid-3.mp4"></span>
              <span class="vid-btn" data-src="images/vid-4.mp4"></span>
              <span class="vid-btn" data-src="images/vid-5.mp4"></span>
          </div>

          <div class="video-container">
              <video src="images/vid-1.mp4" id="video-slider" loop autoPlay muted></video>
          </div>

      </section>



      <section class="book" id="book">

          <h1 class="heading">
              <span>b</span>
              <span>o</span>
              <span>o</span>
              <span>k</span>
              <span class="space"></span>
              <span>n</span>
              <span>o</span>
              <span>w</span>
          </h1>

          <div class="row">

              <div class="image">
                  <img src="./images/book-img.svg" alt=""/>
              </div>

              <form action="">
                  <div class="inputBox">
                      <h3>Điểm đến</h3>
                      <input type="text" placeholder="Hãy chọn nơi đến"></input>
                  </div>
                  <div class="inputBox">
                      <h3>Số lượng người</h3>
                      <input type="number" placeholder="0"></input>
                  </div>
                  <div class="inputBox">
                      <h3>Ngày khởi hành</h3>
                      <input type="date"></input>
                  </div>
                  <div class="inputBox">
                      <h3>Ngày kết thúc</h3>
                      <input type="date"></input>
                  </div>
                  <input type="submit" class="btn" value="book now"></input>
              </form>

          </div>

      </section>



      <section class="packages" id="packages">

          <h1 class="heading">
              <span>p</span>
              <span>a</span>
              <span>c</span>
              <span>k</span>
              <span>a</span>
              <span>g</span>
              <span>e</span>
              <span>s</span>
          </h1>

          <div class="box-container">

              <div class="box">
                  <img src="./images/combo_phuquoc1.jpg" alt=""/>
                  <div class="content">
                      <h3> <i class="fas fa-map-marker-alt"></i> mumbai </h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                      </div>
                      <div class="price"> $90.00 <span>$120.00</span> </div>
                      <a href="#" class="btn">book now</a>
                  </div>
              </div>

              <div class="box">
                  <img src="./images/p-2.jpg" alt=""/>
                  <div class="content">
                      <h3> <i class="fas fa-map-marker-alt"></i> hawaii </h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                      </div>
                      <div class="price"> $90.00 <span>$120.00</span> </div>
                      <a href="#" class="btn">book now</a>
                  </div>
              </div>

              <div class="box">
                  <img src="./images/p-3.jpg" alt=""/>
                  <div class="content">
                      <h3> <i class="fas fa-map-marker-alt"></i> sydney </h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                      </div>
                      <div class="price"> $90.00 <span>$120.00</span> </div>
                      <a href="#" class="btn">book now</a>
                  </div>
              </div>

              <div class="box">
                  <img src="./images/p-4.jpg" alt=""/>
                  <div class="content">
                      <h3> <i class="fas fa-map-marker-alt"></i> paris </h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                      </div>
                      <div class="price"> $90.00 <span>$120.00</span> </div>
                      <a href="#" class="btn">book now</a>
                  </div>
              </div>

              <div class="box">
                  <img src="images/p-5.jpg" alt=""/>
                  <div class="content">
                      <h3> <i class="fas fa-map-marker-alt"></i> tokyo </h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                      </div>
                      <div class="price"> $90.00 <span>$120.00</span> </div>
                      <a href="#" class="btn">book now</a>
                  </div>
              </div>

              <div class="box">
                  <img src="images/p-6.jpg" alt=""/>
                  <div class="content">
                      <h3> <i class="fas fa-map-marker-alt"></i> eypt </h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                      </div>
                      <div class="price"> $90.00 <span>$120.00</span> </div>
                      <a href="#" class="btn">book now</a>
                  </div>
              </div>

          </div>

      </section>



      <section class="services" id="services">

          <h1 class="heading">
              <span>s</span>
              <span>e</span>
              <span>r</span>
              <span>v</span>
              <span>i</span>
              <span>c</span>
              <span>e</span>
              <span>s</span>
          </h1>

          <div class="box-container">

              <div class="box">
                  <i class="fas fa-hotel"></i>
                  <h3>affordable hotels</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
              </div>
              <div class="box">
                  <i class="fas fa-utensils"></i>
                  <h3>food and drinks</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
              </div>
              <div class="box">
                  <i class="fas fa-bullhorn"></i>
                  <h3>safty guide</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
              </div>
              <div class="box">
                  <i class="fas fa-globe-asia"></i>
                  <h3>around the world</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
              </div>
              <div class="box">
                  <i class="fas fa-plane"></i>
                  <h3>fastest travel</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
              </div>
              <div class="box">
                  <i class="fas fa-hiking"></i>
                  <h3>adventures</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
              </div>
              

          </div>

      </section>



      <section class="gallery" id="gallery">

          <h1 class="heading">
              <span>g</span>
              <span>a</span>
              <span>l</span>
              <span>l</span>
              <span>e</span>
              <span>r</span>
              <span>y</span>
          </h1>

          <div class="box-container">

              <div class="box">
                  <img src="images/g-1.jpg" alt=""/>
                  <div class="content">
                      <h3>amazing places</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                      <a href="#" class="btn">see more</a>
                  </div>
              </div>
              <div class="box">
                  <img src="images/g-2.jpg" alt=""/>
                  <div class="content">
                      <h3>amazing places</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                      <a href="#" class="btn">see more</a>
                  </div>
              </div>
              <div class="box">
                  <img src="images/g-3.jpg" alt=""/>
                  <div class="content">
                      <h3>amazing places</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                      <a href="#" class="btn">see more</a>
                  </div>
              </div>
              <div class="box">
                  <img src="images/g-4.jpg" alt=""/>
                  <div class="content">
                      <h3>amazing places</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                      <a href="#" class="btn">see more</a>
                  </div>
              </div>
              <div class="box">
                  <img src="images/g-5.jpg" alt=""/>
                  <div class="content">
                      <h3>amazing places</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                      <a href="#" class="btn">see more</a>
                  </div>
              </div>
              <div class="box">
                  <img src="images/g-6.jpg" alt=""/>
                  <div class="content">
                      <h3>amazing places</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                      <a href="#" class="btn">see more</a>
                  </div>
              </div>
              <div class="box">
                  <img src="images/g-7.jpg" alt=""/>
                  <div class="content">
                      <h3>amazing places</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                      <a href="#" class="btn">see more</a>
                  </div>
              </div>
              <div class="box">
                  <img src="images/g-8.jpg" alt=""/>
                  <div class="content">
                      <h3>amazing places</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                      <a href="#" class="btn">see more</a>
                  </div>
              </div>
              <div class="box">
                  <img src="images/g-9.jpg" alt=""/>
                  <div class="content">
                      <h3>amazing places</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                      <a href="#" class="btn">see more</a>
                  </div>
              </div>

          </div>

      </section>



      <section class="review" id="review">

          <h1 class="heading">
              <span>r</span>
              <span>e</span>
              <span>v</span>
              <span>i</span>
              <span>e</span>
              <span>w</span>
          </h1>

          <div class="swiper-container review-slider">

              <div class="swiper-wrapper">

                  <div class="swiper-slide">
                      <div class="box">
                          <img src="images/pic1.png" alt=""/>
                          <h3>john deo</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                          <div class="stars">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="far fa-star"></i>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="box">
                          <img src="images/pic2.png" alt=""/>
                          <h3>john deo</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                          <div class="stars">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="far fa-star"></i>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="box">
                          <img src="images/pic3.png" alt=""/>
                          <h3>john deo</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                          <div class="stars">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="far fa-star"></i>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="box">
                          <img src="images/pic4.png" alt=""/>
                          <h3>john deo</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                          <div class="stars">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="far fa-star"></i>
                          </div>
                      </div>
                  </div>

              </div>

          </div>

      </section>



      <section class="contact" id="contact">
          
          <h1 class="heading">
              <span>c</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
          </h1>

          <div class="row">

              <div class="image">
                  <img src="images/contact-img.svg" alt=""/>
              </div>

              <form action="">
                  <div class="inputBox">
                      <input type="text" placeholder="name"></input>
                      <input type="email" placeholder="email"></input>
                  </div>
                  <div class="inputBox">
                      <input type="number" placeholder="number"></input>
                      <input type="text" placeholder="subject"></input>
                  </div>
                  <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
                  <input type="submit" class="btn" value="send message"></input>
              </form>

          </div>
          
      </section>


      <section class="brand-container">

          <div class="swiper-container brand-slider">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="images/1.jpg" alt=""/></div>
                  <div class="swiper-slide"><img src="images/2.jpg" alt=""/></div>
                  <div class="swiper-slide"><img src="images/3.jpg" alt=""/></div>
                  <div class="swiper-slide"><img src="images/4.jpg" alt=""/></div>
                  <div class="swiper-slide"><img src="images/5.jpg" alt=""/></div>
                  <div class="swiper-slide"><img src="images/6.jpg" alt=""/></div>
              </div>
          </div>

      </section>


      <section class="footer">

          <div class="box-container">

              <div class="box">
                  <h3>about us</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est accusantium voluptas enim nemo facilis sit debitis.</p>
              </div>
              <div class="box">
                  <h3>branch locations</h3>
                  <a href="#">india</a>
                  <a href="#">USA</a>
                  <a href="#">japan</a>
                  <a href="#">france</a>
              </div>
              <div class="box">
                  <h3>quick links</h3>
                  <a href="#">home</a>
                  <a href="#">book</a>
                  <a href="#">packages</a>
                  <a href="#">services</a>
                  <a href="#">gallery</a>
                  <a href="#">review</a>
                  <a href="#">contact</a>
              </div>
              <div class="box">
                  <h3>follow us</h3>
                  <a href="#">facebook</a>
                  <a href="#">instagram</a>
                  <a href="#">twitter</a>
                  <a href="#">linkedin</a>
              </div>

          </div>

          <h1 class="credit"> created by <span> mr. web designer </span> | all rights reserved! </h1>

      </section>


      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

      <script src="script.js"></script>
  </div>
  );
}

export default App;
