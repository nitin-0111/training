// const st=" Days Of JavaScript from 30 Days Of JavaScript";

// console.log(st.slice(' '));
// console.log(st.includes('Script'))


// console.log(st.split(' '))
// s=st.replace('JavaScript','Python')

// console.log(s)
// console.log(Math.random()*101)
// console.log



// let sentence = "Love is the best thing in this world.\ Some found their love and some are still looking for their love."

// let s1='You cannot end a sentence with because because because is a conjunction'
// // console.log(sentence.split("love").length);


// // console.log(Math.random()*51+50)
// // const js='javascript';

// console.log(s1.match('because'));


const st='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let sum=0;
st.split(' ').forEach((item)=>{

    if(!isNaN(Number(item))){
        console.log(item)
        sum+=Number(item);
    }
});
console.log(sum)


