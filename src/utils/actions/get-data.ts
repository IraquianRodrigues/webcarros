
export async function getDataHome(){
    try {
       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/672a6b9b6bf9b88ef228cacf?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`) 

       if(!res.ok){
        throw new Error("Failed to fetch data")
       }

       return res.json();
  
    } catch (err) {
        throw new Error("Failed to fetch data")
    }
}