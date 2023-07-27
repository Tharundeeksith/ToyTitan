import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
        <footer class="site-footer">
      <div class="containerfooter">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">The first toy store was founded in 1760 by William Hamley in London, under the name of "Noah's Ark", later renamed to Hamleys. Set over seven floors, a Hamleys branch at 200 Regent Street in the West End of London opened in 1881. The famous toy store in New York City, FAO Schwarz, was founded under the name Schwarz Toy Bazaar. It was founded in 1862 by the German immigrant, Frederick August Otto Schwarz. The former largest toy retailer in the United States, Toys "R" Us, started business in 1948 by Charles Lazarus, a veteran of World War II. In 2015, FAO Schwarz closed, and did not reopen until after Toys "R" Us went bankrupt in 2018.There can be a large gender bias for the marketing of certain products. This includes using color to market products to a certain gender, or only showing one gender to market to that specific demographic. On the U.S. Disney Store website, the toys for boys are predominantly red, black, brown, or grey, while the toys for girls are mostly pink or purple. However, the toys meant for both boys and girls were mostly of the same color palette as the toys for boys.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 id='categories'>Most Loved Categories</h6>
            <ul class="footer-links">
              <li><a href="">Toys And Games</a></li>
              <li><a href="">School And Travel</a></li>
              <li><a href="">Sports</a></li>
              <li><a href="">Books</a></li>
              <li><a href="">Fashion</a></li>
              <li><a href="">Rideons And Cycles</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 id='support'>Our Support</h6>
            <ul class="footer-links">
              <li><a href="">My Account</a></li>
              <li><a href="">Customer Care</a></li>
              <li><a href="">Track Order</a></li>
              <li><a href="">Cancel/Return Order</a></li>
              <li><a href="">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="containerfooter">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
          
      {/* <h3>Toy Titans</h3>
      <p>123 Toy Street</p>
      <p>Cityville, ABC 12345</p>
      <p>Email: info@toystore.com</p>
      <p>Phone: (123) 456-7890</p> */}
      
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#">Digital ToyStore ITD</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-iconsfooter">
              <h5 style={{marginLeft:'125px',}}>Follow Us For More</h5>
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
      
      
</footer>
    </div>
  )
}
