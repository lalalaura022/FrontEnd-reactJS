import React from 'react'
import BestProduct from './BestProduct'
import BackgroundPicture from "./BackgroundPicture";


function BestProducts() {
  


    return (
      <div className='container' style={{display: "flex-box", testAlignVertical: "center",textAlign: "center"}}>
        <BestProduct name ='produs1' ingredient1='Aloe Vera' ingredient2='Vitamin E'ingredient3='Green Tea'ingredient4='Hyaluronic Acid'ingredient5='Glycerin'cantitate1= '20'cantitate2 ='10' cantitate3='5'cantitate4='3'cantitate5='6' />
        <BestProduct name ='produs2' ingredient1='Jojoba Oil'ingredient2='Shea Butter'ingredient3='Coconut Oil'ingredient4='Lavender Essential Oil'ingredient5='Almond Oil'cantitate1= '6'cantitate2 ='12' cantitate3='54'cantitate4='12'cantitate5='65' />
        <BestProduct name ='produs3' ingredient1='Peptides'ingredient2='Niacinamide'ingredient3='Ceramides'ingredient4='Rosehip Oil'ingredient5='Retinol'cantitate1= '23'cantitate2 ='12' cantitate3='7'cantitate4='7'cantitate5='12'/>
        <BestProduct name ='produs4' ingredient1='Calendula'ingredient2='Chamomile'ingredient3='Witch Hazel'ingredient4='Calmazulene'ingredient5='Lemon Balm'cantitate1= '6'cantitate2 ='76' cantitate3='35'cantitate4='5'cantitate5='23'/>
        <BestProduct name ='produs5' ingredient1='Collagen'ingredient2='Elastin'ingredient3='Peptides'ingredient4='Glycolic Acid'ingredient5='Salicylic Acid'cantitate1= '45'cantitate2 ='23' cantitate3='54'cantitate4='2'cantitate5='54'/>

      </div>
    )
  }

export default BestProducts