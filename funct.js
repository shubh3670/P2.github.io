var counter = parseInt(localStorage.getItem('counter')) || 0;
var flag = false; 
var flag1=false;
var img='t';
var flag2=false;
function saveToLocalStorage() {
    // Save the counter and flag values to localStorage
    localStorage.setItem('counter', counter);
}
function ifunct(){
    if(counter%2==0){
        document.getElementById('body').style.backgroundColor= 'black';
        document.getElementById('Sub11').style.color='white';
        document.getElementById('Sub12').style.color='white';
        document.getElementById('Sub13').style.color='white';
        document.getElementById('TWO2').style.color='white';
        document.getElementById('b1').style.backgroundColor= 'white';
        document.getElementById('b1').style.color= 'black';

    
    
        
        
    
    }
    else{
        document.getElementById('body').style.backgroundColor= 'white';
        document.getElementById('b1').style.backgroundColor= 'black';
        document.getElementById('b1').style.color= 'white';
        document.getElementById('Sub11').style.color='black';
        document.getElementById('Sub12').style.color='black';
        document.getElementById('Sub13').style.color='black';
        document.getElementById('TWO2').style.color='black';
    
    
    
    }

}

function cofunct(){
    if(counter%2==0){
        document.getElementById('body').style.backgroundColor= 'black';
        document.getElementById('b1').style.backgroundColor= 'white';
        document.getElementById('b1').style.color= 'black';
    }
    else{
        document.getElementById('body').style.backgroundColor= 'white';
        document.getElementById('b1').style.backgroundColor= 'black';
        document.getElementById('b1').style.color= 'white';
    }
}
function exfunct(){
    if(counter%2==0){
        document.getElementById('body').style.backgroundColor= 'black';
        document.getElementById('b1').style.backgroundColor= 'white';
        document.getElementById('b1').style.color= 'black';
        document.getElementById('im1').src='Tatvic Black Symbol.png';
        document.getElementById('l111').style.color='black';
        document.getElementById('l112').style.color='black';
        document.getElementById('l113').style.color='black';
        document.getElementById('h31').style.color='black';
        document.getElementById('h21').style.color='black';


    }
    else{
        document.getElementById('body').style.backgroundColor= 'white';
        document.getElementById('b1').style.backgroundColor= 'black';
        document.getElementById('b1').style.color= 'white';
        document.getElementById('im1').src='Tatvic-white.png';
        document.getElementById('l111').style.color='white';
        document.getElementById('l112').style.color='white';
        document.getElementById('l113').style.color='white';
        document.getElementById('h31').style.color='white';
        document.getElementById('h21').style.color='white';


    }
}
function brfunction(){
    if(counter%2==0){
        document.getElementById('body').style.backgroundColor= 'black';
        document.getElementById('b1').style.backgroundColor= 'white';
        document.getElementById('b1').style.color= 'black';
        document.getElementById('r1').style.backgroundColor='white';
        document.getElementById('r1').style.color='black';
    }
    else{
        document.getElementById('body').style.backgroundColor= 'white';
        document.getElementById('b1').style.backgroundColor= 'black';
        document.getElementById('b1').style.color= 'white';
    }
}



            function Mode(){
                counter+=1;
                saveToLocalStorage()
                if (counter%2==0){
                document.getElementById('body').style.backgroundColor= 'black';
                document.getElementById('b1').style.backgroundColor= 'white';
                document.getElementById('b1').style.color= 'black';
                document.getElementById('Sub11').style.color='white';
                document.getElementById('Sub12').style.color='white';
                document.getElementById('Sub13').style.color='white';
                document.getElementById('TWO2').style.color='white';
                document.getElementById('T311').style.color='white';
                document.getElementById('T312').style.color='white';
                document.getElementById('T313').style.color='white';
                document.getElementById('L1').style.color='black';
                document.getElementById('L2').style.color='black';
                document.getElementById('L3').style.color='black';



                if(flag=='True'){
                    document.getElementById('THREE').style.backgroundColor='#446879';
                    document.getElementById('T1').style.color= 'white';

                


                }
                else{
                    document.getElementById('THREE').style.backgroundColor= 'black';

                }

                }
                else{
                    document.getElementById('body').style.backgroundColor= 'white';
                    document.getElementById('b1').style.backgroundColor= 'black';
                    document.getElementById('b1').style.color= 'white';
                    document.getElementById('Sub11').style.color='black'
                    document.getElementById('Sub12').style.color='black'
                    document.getElementById('Sub13').style.color='black'
                    document.getElementById('TWO2').style.color='black'
                    document.getElementById('T311').style.color='black';
                    document.getElementById('T312').style.color='black';
                    document.getElementById('T313').style.color='black';
                    document.getElementById('L1').style.color='#FFFDD0';
                    document.getElementById('L2').style.color='#FFFDD0';
                    document.getElementById('L3').style.color='#FFFDD0';



                    
                    if(flag=='True'){
                        document.getElementById('THREE').style.backgroundColor='#c8dfea '
                        document.getElementById('T1').style.color= 'black';

    
    
                    }
                    else{
                        document.getElementById('THREE').style.backgroundColor= 'white';
    
                    }



                }
                
            }
            function Information(){
                flag='True'
                if(counter%2==0){
                document.getElementById('THREE').style.backgroundColor='#c8dfea '
                document.getElementById('T311').style.color='black';
                document.getElementById('T312').style.color='black';
                document.getElementById('T313').style.color='black';
                document.getElementById('T1').style.color='black';
                document.getElementById('L1').style.color='#FFFDD0';
                document.getElementById('L2').style.color='#FFFDD0';
                document.getElementById('L3').style.color='#FFFDD0';





                }
                else{
                    document.getElementById('THREE').style.backgroundColor='#446879'
                    document.getElementById('T311').style.color='white';
                    document.getElementById('T312').style.color='white';
                    document.getElementById('T313').style.color='white';
                    document.getElementById('T1').style.color='white';
                    document.getElementById('L1').style.color='black';
                    document.getElementById('L2').style.color='black';
                    document.getElementById('L3').style.color='black';






                }
                    document.getElementById('T1').textContent='MY SKILLS/INTERESTS'
                    document.getElementById('T31').style.borderStyle='groove';
                    document.getElementById('T31').style.borderRadius='8px';
                    document.getElementById('T31').style.borderColor='#C8B89E';
                    document.getElementById('T32').style.borderStyle='groove';
                    document.getElementById('T32').style.borderRadius='8px';
                    document.getElementById('T32').style.borderColor='#C8B89E';
                    document.getElementById('T33').style.borderStyle='groove';
                    document.getElementById('T33').style.borderRadius='8px';
                    document.getElementById('T33').style.borderColor='#C8B89E';


    
                    document.getElementById('T311').textContent='WEB DEVELOPMENT';
                    document.getElementById('L1').style.listStyleType='disc';
                    document.getElementById('121').textContent='JAVASCRIPT';
                    document.getElementById('122').textContent='HTML';
                    document.getElementById('123').textContent='CSS';
                    document.getElementById('124').textContent='REACT';


                    document.getElementById('T312').textContent='ARTIFICIAL INTELLIGENCE';
                    document.getElementById('L2').style.listStyleType='disc';
                    document.getElementById('221').textContent='PYTHON PROGRAMMING';
                    document.getElementById('222').textContent='R PROGRAMMING';
                    document.getElementById('223').textContent='MACHINE LEARNING';
                    document.getElementById('224').textContent='MATHEMATICS BEHIND ML';
                    document.getElementById('225').textContent='STATISTICS BEHIND ML';



                    document.getElementById('T313').textContent='OTHER SKILLS';
                    document.getElementById('L3').style.listStyleType='disc';
                    document.getElementById('321').textContent='R PROGRAMMING';
                    document.getElementById('322').textContent='C LANGUAGE';
                    document.getElementById('323').textContent='TABLEAU';
                    document.getElementById('324').textContent='MYSQL';
                    document.getElementById('325').textContent='EXCEL';

                saveToLocalStorage()

                    
                }
                function Mode1(){
                    counter+=1
                    saveToLocalStorage()

                    if(counter%2==0){
                        document.getElementById('body').style.backgroundColor= 'black';
                        document.getElementById('b1').style.backgroundColor= 'white';
                        document.getElementById('b1').style.color= 'black';
                        document.getElementById('im1').src='Tatvic Black Symbol.png'
                        if(flag2==false){
                        document.getElementById('l111').style.color='black';
                        document.getElementById('l112').style.color='black';
                        document.getElementById('l113').style.color='black';
                        document.getElementById('h31').style.color='black';
                        document.getElementById('h21').style.color='black';
                        }
                        else{
                        document.getElementById('l111').style.color='white';
                        document.getElementById('l112').style.color='white';
                        document.getElementById('l113').style.color='white';
                        document.getElementById('h31').style.color='white';
                        document.getElementById('h21').style.color='white';

                        }


                    }
                    else{
                        document.getElementById('body').style.backgroundColor= 'white';
                        document.getElementById('b1').style.backgroundColor= 'black';
                        document.getElementById('b1').style.color= 'white';
                        document.getElementById('im1').src='Tatvic-white.png'
                        if(flag2==false){
                        document.getElementById('l111').style.color='white';
                        document.getElementById('l112').style.color='white';
                        document.getElementById('l113').style.color='white';
                        document.getElementById('h31').style.color='white';
                        document.getElementById('h21').style.color='white';
                        }
                        else{
                            document.getElementById('l111').style.color='black';
                            document.getElementById('l112').style.color='black';
                            document.getElementById('l113').style.color='black';
                            document.getElementById('h31').style.color='black';
                            document.getElementById('h21').style.color='black';

                        }


                    }
                }
            function imfunction(){
                flag2=true
                if(counter%2==0){
                    document.getElementById('l111').style.color='white';
                    document.getElementById('l112').style.color='white';
                    document.getElementById('l113').style.color='white';
                    document.getElementById('h31').style.color='white';
                    document.getElementById('h21').style.color='white';


                }
                else{
                    document.getElementById('l111').style.color='black';
                    document.getElementById('l112').style.color='black';
                    document.getElementById('l113').style.color='black';
                    document.getElementById('h31').style.color='black';
                    document.getElementById('h21').style.color='black';

                }

            }
            function Mode2(){
                counter+=1
                saveToLocalStorage()
                if(counter%2==0){
                    document.getElementById('body').style.backgroundColor= 'black';
                    document.getElementById('b1').style.backgroundColor= 'white';
                    document.getElementById('b1').style.color= 'black';
                    document.getElementById('r1').style.backgroundColor='white';
                    document.getElementById('r1').style.color='black';

                    }
                else{
                    document.getElementById('body').style.backgroundColor= 'white';
                        document.getElementById('b1').style.backgroundColor= 'black';
                        document.getElementById('b1').style.color= 'white';
                        document.getElementById('r1').style.backgroundColor='yellow';
                        document.getElementById('r1').color='white';    


                }
            
            }
            function sendEmail() {
                // Replace 'your.email@example.com' with your actual email address
                var emailAddress = 'shubhpate6001@gmail.com';
                var subject = 'Contact You From The Portfolio Website'; // You can change the subject if you want
            
                // Create the mailto link
                var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);
            
                // Open the default email client
                window.location.href = mailtoLink;
              }
        
            
        