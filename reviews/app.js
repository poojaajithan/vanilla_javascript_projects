const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'person-1.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'person-3.jpg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'person-2.jpg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      }
    ];

    let currCount=0;

    const img = document.getElementById('person-img');
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");

    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const surpriseButton = document.querySelector(".random-btn");

    window.addEventListener('DOMContentLoaded', function(){
      const item = reviews[currCount];
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
      img.src = item.img;
    });

    prevButton.addEventListener("click", function(){
        currCount++;
        if (currCount>reviews.length-1)
            currCount=0;
        getReview(currCount);
    });

    nextButton.addEventListener("click", function(){
        currCount--;
        if (currCount<0)
            currCount=reviews.length-1;
        getReview(currCount);
    });

    surpriseButton.addEventListener("click", function(){
        const num = getRandomNumber();
        getReview(num);
    });

    function getRandomNumber(){
      return Math.floor(Math.random()*reviews.length);
    }
function getReview(currCount) {
    const item = reviews[currCount];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    img.src = item.img;
}
