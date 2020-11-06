
    let suspects =
        [
        {  
         firstName: "Jacob", 
         lastName: "Green",
         occupation: "Entrepreneur",
         age: "45" ,
         description: "He has a lot of connections" ,
         image: `<img src="https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg" alt="" id="foto" >`,
         color: "green"
         },
        
        
        
        { 
         firstName: "Doctor", 
         lastName: " Orchid",
         occupation: "Scientist",
         age: "22" ,
         description: "He  PhD in plant toxicology. Adopted daughter of Mr. Boddy a lot of connections" ,
         image: `<img src="http://www.radiotimes.com/uploads/images/Original/111967.jpg" alt="" id="foto" >`,
         color: "white"
        },
        
    

        
        { 
        firstName: "Doctor", 
        lastName: "Plum",
        occupation: "Designer",
        age: "26" ,
        description: "Billionaire video game designer" ,
        image: `<img src="https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg" alt="" id="foto" >`,
        color: "purple"
        },
        

        
        { 
             firstName: "Kasandra", 
             lastName: "Scarlet",
             occupation: "Actress",
              age: "31" ,
              description: "She is an A-list movie star with a dark past" ,
              image: `<img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg " alt="" id="foto" >`,
               color: "red"
         },
        


        
         { 
             firstName: "Eleanor", 
             lastName: "Peacock",
              occupation: "Socialité",
              age: "36" ,
              description: "She is from a wealthy family and uses her status and money to earn popularity" ,
              image:`<img src="https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg" alt="" id="foto" >`,
               color: "blue"
         },
        

        
         {
             firstName: "Jack", 
            lastName: "Mustard",
             occupation: "Retired Football player",
              age: "62" ,
              description: "He is a former football player who tries to get by on his former glory" ,
              image: `<img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg" alt="" id="foto" >`,
               color: "yellow"
         }
        ]
    
    
        


       
       const  weapons = 
            [
            {
            name: "rope ",
            weight: "10",
            },
            
        
            
            {
            name: "knife",
            weight: "8" ,
            },
            


            
            {
            name: "candlestick", 
            weight: "2" 
            },
            


            
            {
             name: "dumbbell", 
            weight: "30" ,
            },
            


            
            {
            name: "poison",
            weight: "2",
            },
            


            
            {
            name: "axe",
            weight: "15",
            },
            

            
            {
            name: "bat",
            weight: "13",
            },
            
    

          
            
            
            {
            name: "trophy",
            weight: "25",
            },
            

            
            {
            name: "pistol",
            weight: "20"
            }
            ]
        
            
     

var rooms = [
    {name: "Dining room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living room"},
    {name: "Observatory"},
    {space: "Theater"},
    {name: "Guest house"},
    {name: "Patio"}
       ]
           

   
    function randomiser(){
        let color = document.getElementById("color")
        let x = suspects[Math.floor(Math.random()*suspects.length)]
        let y = weapons[Math.floor(Math.random()*weapons.length)]
        let z = rooms[Math.floor(Math.random()*rooms.length)]
      
        document.getElementById("result2").innerHTML = x.image

        document.getElementById("result").innerHTML =
        
        x.firstName + " " + x.lastName + " killed Mr. Boddy by using the " + y.name +" in the " +z.name
        color.style.background = x.color
    }
    



