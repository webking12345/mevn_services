<template>
  <div>
    <!--Map Section Start-->
    <section class="p-0">
      <div class="container-fluid">
        <div class="bottom-section">
          <div class="row">
            <div class="col-md-6 p-0">
              <div class="address-bar">
                <div>
                  <ul class="footer-style">
                    <li>
                      <div class="footer-icon">
                        <img :src='"../assets/images/locate.png"' alt="locate">
                      </div>
                      <div class="footer-address">
                        <a href="#">Vladivostok, Primorsky Krai</a>
                      </div>
                    </li>
                    <li>
                      <div class="footer-icon">
                        <img :src='"../assets/images/telephone.png"' alt="telephone">
                      </div>
                      <div class="footer-address">
                        <a href="#">122-456-7890  /  124-789-5690</a>
                      </div>
                    </li>
                    <li>
                      <div class="footer-icon">
                        <img :src='"../assets/images/fotter-email.png"' alt="fotter-email">
                      </div>
                      <div class="footer-address">
                        <a href="#">support@compnay.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <iframe :src='"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516882.5594505533!2d128.76798378018802!3d43.62691305571609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x186704d4dd967e35!2sVladivostok%2C%20Primorsky%20Krai!5e0!3m2!1sen!2sru!4v1571493464514!5m2!1sen!2sru"'  class="md-height"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Map Section Ends-->
  </div>
</template>
<script>
export default {
  name: 'Map'
}
</script>
