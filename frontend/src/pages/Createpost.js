import "./CreatePost.scss";

export default function CreatPost() {
    
    function randomImg () {
        const imgurlarray = [];
        imgurlarray[0] = "https://storage.googleapis.com/formative2/formative%202%20images/image-1.jpg";
        imgurlarray[1] = "https://storage.googleapis.com/formative2/formative%202%20images/image-2.jpg";
        imgurlarray[2] = "https://storage.googleapis.com/formative2/formative%202%20images/image-3.jpg";
        imgurlarray[3] = "https://storage.googleapis.com/formative2/formative%202%20images/image-4.jpg";
        imgurlarray[4] = "https://storage.googleapis.com/formative2/formative%202%20images/image-5.jpg";
        imgurlarray[5] = "https://storage.googleapis.com/formative2/formative%202%20images/image-6.jpg";
        imgurlarray[6] = "https://storage.googleapis.com/formative2/formative%202%20images/image-7.jpg";
        imgurlarray[7] = "https://storage.googleapis.com/formative2/formative%202%20images/image-8.jpg";
        imgurlarray[8] = "https://storage.googleapis.com/formative2/formative%202%20images/image-9.jpg";
        imgurlarray[9] = "https://storage.googleapis.com/formative2/formative%202%20images/image-10.jpg";
        imgurlarray[10] = "https://storage.googleapis.com/formative2/formative%202%20images/image-11.jpg";
        imgurlarray[11] = "https://storage.googleapis.com/formative2/formative%202%20images/image-12.jpg";
        imgurlarray[12] = "https://storage.googleapis.com/formative2/formative%202%20images/image-13.jpg";
    
        let Img = imgurlarray[Math.floor(Math.random() * imgurlarray.length)];
    
    
    
    
    
    return Img ;
    
    
}

return;

}

