import React ,{useState} from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



const Review = ()=>{

    const [index , setIndex]= useState(0);
    const {id, image , name,job , text }=people[index];
    const checkNumber =(number)=>{
        if(number>people.length-1){
            return 0;
        }
        if (number<0) {
            return people.length-1;
            
        }
        return number;
    }
    const prevBtn=()=>{
        const newIndex = index-1;
        return setIndex(checkNumber(newIndex));
    }
    const nextBtn=()=>{
        const newIndex = index+1;
        return setIndex(checkNumber(newIndex));
    }
    const randomPerson=()=>{
        console.log(Math.floor(Math.random()*people.length));
        let randomNumber= Math.floor(Math.random()*people.length);
        if (randomNumber === index){
           randomNumber = index+1;
           
        }
        return setIndex(checkNumber(randomNumber)); 
    }
    return(
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className="person-img" />
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p  className='info'>{text}</p>
            <div className='button-container'>
            <button className='prev-btn' onClick={prevBtn}> <FaChevronLeft/></button>
                <button className='next-btn' onClick={nextBtn}><FaChevronRight/></button>
                
                
            </div>
            <button className='random-btn' onClick={randomPerson}> surprise me</button>

        </article>
    )
    
    

    

}
export default Review;
