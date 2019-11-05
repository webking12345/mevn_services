<template>
  <div>
    <!-- testimonial Section start-->
    <section id="testimonial" class="testimonial">
      <div class="testimonial-decor">
        <div class="testi-circle1"><img :src='"../assets/images/Testimonial2.png"' alt=""></div>
        <div class="testi-circle2"><img :src='"../assets/images/Testimonial1.png"' alt=""></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
              <carousel :className='"testimonial-carousel "'
                        :loop=true
                        :margin=30
                        :items=1
                        :center=true
                        :nav=true
                        :dots=false
                        :dotsEach=false
                        :autoplay=false
                        :responsive="{0:{items:1,dots:true,nav:false},768:{items:1,dots:true,nav:false},992:{nav:true}}"
              >
               <div class="testimonial-item">
                <div class="testimonial-block">
                  <div class="testimonial-avtar">
                    <img :src='"../assets/images/avtar/22.jpg"' alt="">
                  </div>
                  <div class="testimonial-text">
                    <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. </p>
                    <h3>mark jecno</h3>
                    <!-- <h6>designer</h6> -->
                  </div>
                </div>
              </div>
               <div class="testimonial-item">
                <div class="testimonial-block">
                  <div class="testimonial-avtar">
                    <img :src='"../assets/images/avtar/22.jpg"' alt="">
                  </div>
                  <div class="testimonial-text">
                    <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. </p>
                    <h3>Adegoke Yusuff</h3>
                    <!-- <h6>Content Writer</h6> -->
                  </div>
                </div>
              </div>
                <div class="testimonial-item">
                <div class="testimonial-block">
                  <div class="testimonial-avtar">
                    <img :src='"../assets/images/avtar/22.jpg"' alt="">
                  </div>
                  <div class="testimonial-text">
                    <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. </p>
                    <h3>John Shipmen</h3>
                    <!-- <h6>Lead Developer</h6> -->
                  </div>
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
    <!-- testimonial Section End -->
  </div>
</template>
<script>

export default {
  name:'Testimonial'
}
</script>
