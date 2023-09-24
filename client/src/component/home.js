import React from "react";
import one from './assests/one.png';
import two from './assests/two.png';
import three from './assests/three.png';
import '../App.css'

export function Home(){
    return(
        <>
    
            
            <div id="carouselExampleIndicators" class="carousel slide col-lg-12 siz">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={one} class="d-block w-100 carouseEffect" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={two} class="d-block w-100 carouseEffect" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={three} class="d-block w-100 carouseEffect" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="card-group">
  <div class="card">
    <img src="https://images.apollo247.in/pub/media/catalog/product/A/P/APO0077_1-JULY23_1.jpg" class="card-img-top" alt="..." style={{width:'13rem',height:'10rem'}}/>
    <div class="card-body">
      <h5 class="card-title">Apollo Life Omega-3 Fish Oil 1000 mg, 30 Capsules</h5>
      <p class="card-text">Apollo Life Omega-3 Fish Oil 1000 mg, 30 Capsules Features:
Softgel capsules
Free from heavy metals
Promotes heart, brain and joint health
Lasts for a month
Easy to carry packaging</p>
<button className="btn bg-primary">View Product</button>
    </div>
   
  </div>
  <div class="card">
    <img src="https://images.apollo247.in/pub/media/catalog/product/A/P/APV0019_1-JULY23_1.jpg" class="card-img-top" alt="..." style={{width:'13rem',height:'10rem'}}/>
    <div class="card-body">
      <h5 class="card-title">Apollo Pharmacy Vitamin D3 60000 IU, 4 Capsules</h5>
      <p class="card-text">Apollo Pharmacy Vitamin D3 Capsules Features:

Vitamin D3 Softgel Capsules
60000 IU of Vitamin D3 per dose
Easy-to-Swallow
Premium Quality 
Clinically tested</p>
      <button className="btn bg-primary">View Product</button>
    </div>
    
  </div>
  <div class="card">
    <img src="https://images.apollo247.in/pub/media/catalog/product/A/P/APM0026_1-JULY23_1.jpg" class="card-img-top" alt="..."  style={{width:'13rem',height:'10rem'}}/>
    <div class="card-body">
      <h5 class="card-title">Apollo Life Multivitamin for Women, 30 Tablets</h5>
      <p class="card-text">Apollo Life Multivitamin for Women, 30 Tablets Features:

Essential Vitamins and Minerals.
Antioxidant Support
Bone Health Support
Energy and Vitality
Hormonal Balance</p>
      <button className="btn bg-primary">View Product</button>
    </div>
    
  </div>
</div><div class="card-group">
  <div class="card">
    <img src=" https://images.apollo247.in/pub/media/catalog/product/A/P/APP0098_1-JULY23_1.jpg" class="card-img-top" alt="..."  style={{width:'13rem',height:'10rem'}}/>
    <div class="card-body">
      <h5 class="card-title">Apollo Pharmacy Pain Relief Oil, 60 ml</h5>
      <p class="card-text">Apollo Pharmacy Pain Relief Oil Features

Enriched with Mahanarayan tail
Contains peppermint satva and Gandhapura tail
Provides relief from a variety of pains and sprains
Instantly relieves pain and inflammation
Comes in a compact 60 ml bottle </p>
<button className="btn bg-primary">View Product</button>
    </div>
    
  </div>
  <div class="card">
    <img src="https://images.apollo247.in/pub/media/catalog/product/S/W/SWI0189_1-AUG23_1.jpg" class="card-img-top" alt="..."  style={{width:'13rem',height:'10rem'}}/>
    <div class="card-body">
      <h5 class="card-title">Swisse Ultiboost 1500 mg High Strength Wild Fish Oil, 200 Capsules</h5>
      <p class="card-text">Key Ingredients
Natural Source of Omega-3: Omega 3 fatty acids help in lowering the cholesterol thereby leading to a healthy heart and improves metabolism. The EPA and DHA in these fish oil capsules also help maintain normal blood pressure and triglyceride levels in healthy individuals. Fish oil supplement: The fatty acids in Omega 3 have natural anti-inflammatory properties. Fish oil capsule supplements may assist with the symptomatic relief of mild arthritis.</p>
<button className="btn bg-primary">View Product</button>
    </div>
  
  </div>
  <div class="card">
    <img src="https://images.apollo247.in/pub/media/catalog/product/a/p/apt0020-04.jpg" class="card-img-top" alt="..." style={{width:'13rem',height:'10rem'}}/>
    <div class="card-body">
      <h5 class="card-title">Apollo Pharmacy Digital Thermometer, 1 Count</h5>
      <p class="card-text"> Doctor's Choice Digital Thermometer Features:

100% mercury-free
Easy-to-read LCD screen
Auto-switch off mode
Completion alarm
Fever alert
Last read memory
Temperature measurements in both °F and °C
Suitable for all ages</p>
<button className="btn bg-primary">View Product</button>
    </div>
   
  </div>
</div>
 
<div class="card-group">
  <div class="card">
    <img src=" https://images.apollo247.in/pub/media/catalog/product/D/E/DET0004_1-JULY23_1.jpg "class="card-img-top" alt="..."  style={{width:'13rem',height:'10rem'}}/>
    <div class="card-body">
      <h5 class="card-title">Dettol Antiseptic Liquid, 550 ml</h5>
      <p class="card-text"> Key Benefits
Acts as a powerful antiseptic liquid that removes germs effectively
Gives 100% protection from infections and illness when used for maintaining personal hygiene
Powerful disinfectant properties make it suitable for cleaning floors, windows, doors, doorknobs, tables, chairs, etc.
Dermatologically tested and beneficial in healing wounds and cuts
Prevents bacteria, fungus, and virus growth in indoor environment</p>
<button className="btn bg-primary">View Product</button>

    </div>
    
  </div>
  <div class="card">
    <img src="https://images.apollo247.in/pub/media/catalog/product/W/O/WOO0001_1-AUG23_1.jpg" class="card-img-top" alt="..."  style={{width:'13rem',height:'10rem'}}/>
    <div class="card-body">
      <h5 class="card-title">Woodwards Gripe Water, 200 ml</h5>
      <p class="card-text">Key Benefits
Useful during the teething period
Free from alcohol and sugar
Contains oil of Dill herb and Sarjikakshra
For babies between the age group of 3 - 18 months
Before 3 months (if the baby is on other food apart from mother's milk)</p>
<button className="btn bg-primary">View Product</button>
    </div>
  
  </div>
  <div class="card">
    <img src="https://images.apollo247.in/pub/media/catalog/product/g/r/grid2.jpg" class="card-img-top" alt="..."  style={{width:'13rem',height:'10rem'}}/>
    <div class="card-body">
      <h5 class="card-title">Vicks Cough Drops, 26 Count</h5>
      <p class="card-text"> Key Benefits
Vicks Cough Drops work as a cough suppressant and/or oral anesthetic
Stops the cough and relieves minor throat irritations
Ayurvedic medicine
Flavour: Gingerl</p>
<button className="btn bg-primary">View Product</button>
    </div>
   
  </div>
  
</div>

     
</>
    );
}
