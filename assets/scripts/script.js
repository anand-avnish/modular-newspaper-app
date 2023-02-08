let currentPage = 1;
let activePage = 1;
let newsIndex=0;
const newsPaper = document.querySelector(".newspaper");

const newsCollection = {
    header:{
        city:"Chennai",
        state:"TamilNadu",
        day:"Wednesday",
        month:"February",
        date:"8",
        year:"2023",
    },
    news:[
        {
            heading:"Pak ruler, who made war, peace and news, is dead",
            subHeading:"Architect of Kargil conflict to dictator who extended peace overtures that came undone because of his intransigence, Pervez Musharraf leaves mixed legacy",
            imgSrc:"./assets/images/article1.jpg",
            imgCaption:"Pervez Musharraf with then Prime Minister Atal Bihari Vajpayee in Agra in 2001.",
            authorName:"Rezaul H Laskar",
            authorEmail:"letters@hindustantimes.com",
            location:"Chennai",
            news:"Former Pakistani military strongman Pervez Musharraf, who probably came closest to resolving the Kashmir issue with India but was also the main driver behind cross-border intrusions that triggered the Kargil conflict, died following a prolonged illness on Sunday. He was 79."
        },
        {
            heading:"Pak ruler, who made war, peace and news, is dead",
            subHeading:"Architect of Kargil conflict to dictator who extended peace overtures that came undone because of his intransigence, Pervez Musharraf leaves mixed legacy",
            imgSrc:"./assets/images/article1.jpg",
            imgCaption:"Pervez Musharraf with then Prime Minister Atal Bihari Vajpayee in Agra in 2001.",
            authorName:"Rezaul H Laskar",
            authorEmail:"letters@hindustantimes.com",
            location:"Chennai",
            news:"Former Pakistani military strongman Pervez Musharraf, who probably came closest to resolving the Kashmir issue with India but was also the main driver behind cross-border intrusions that triggered the Kargil conflict, died following a prolonged illness on Sunday. He was 79."
        },
        {
            heading:"Pak ruler, who made war, peace and news, is dead",
            subHeading:"Architect of Kargil conflict to dictator who extended peace overtures that came undone because of his intransigence, Pervez Musharraf leaves mixed legacy",
            imgSrc:"./assets/images/article1.jpg",
            imgCaption:"Pervez Musharraf with then Prime Minister Atal Bihari Vajpayee in Agra in 2001.",
            authorName:"Rezaul H Laskar",
            authorEmail:"letters@hindustantimes.com",
            location:"Chennai",
            news:"Former Pakistani military strongman Pervez Musharraf, who probably came closest to resolving the Kashmir issue with India but was also the main driver behind cross-border intrusions that triggered the Kargil conflict, died following a prolonged illness on Sunday. He was 79."
        },
        {
            heading:"Pak ruler, who made war, peace and news, is dead",
            subHeading:"Architect of Kargil conflict to dictator who extended peace overtures that came undone because of his intransigence, Pervez Musharraf leaves mixed legacy",
            imgSrc:"./assets/images/article1.jpg",
            imgCaption:"Pervez Musharraf with then Prime Minister Atal Bihari Vajpayee in Agra in 2001.",
            authorName:"Rezaul H Laskar",
            authorEmail:"letters@hindustantimes.com",
            location:"Chennai",
            news:"Former Pakistani military strongman Pervez Musharraf, who probably came closest to resolving the Kashmir issue with India but was also the main driver behind cross-border intrusions that triggered the Kargil conflict, died following a prolonged illness on Sunday. He was 79."
        },
        {
            heading:"Pak ruler, who made war, peace and news, is dead",
            subHeading:"Architect of Kargil conflict to dictator who extended peace overtures that came undone because of his intransigence, Pervez Musharraf leaves mixed legacy",
            imgSrc:"./assets/images/article1.jpg",
            imgCaption:"Pervez Musharraf with then Prime Minister Atal Bihari Vajpayee in Agra in 2001.",
            authorName:"Rezaul H Laskar",
            authorEmail:"letters@hindustantimes.com",
            location:"Chennai",
            news:"Former Pakistani military strongman Pervez Musharraf, who probably came closest to resolving the Kashmir issue with India but was also the main driver behind cross-border intrusions that triggered the Kargil conflict, died following a prolonged illness on Sunday. He was 79."
        },
        {
            heading:"Pak ruler, who made war, peace and news, is dead",
            subHeading:"Architect of Kargil conflict to dictator who extended peace overtures that came undone because of his intransigence, Pervez Musharraf leaves mixed legacy",
            imgSrc:"./assets/images/article1.jpg",
            imgCaption:"Pervez Musharraf with then Prime Minister Atal Bihari Vajpayee in Agra in 2001.",
            authorName:"Rezaul H Laskar",
            authorEmail:"letters@hindustantimes.com",
            location:"Chennai",
            news:"Former Pakistani military strongman Pervez Musharraf, who probably came closest to resolving the Kashmir issue with India but was also the main driver behind cross-border intrusions that triggered the Kargil conflict, died following a prolonged illness on Sunday. He was 79."
        },
        {
            heading:"Pak ruler, who made war, peace and news, is dead",
            subHeading:"Architect of Kargil conflict to dictator who extended peace overtures that came undone because of his intransigence, Pervez Musharraf leaves mixed legacy",
            imgSrc:"./assets/images/article1.jpg",
            imgCaption:"Pervez Musharraf with then Prime Minister Atal Bihari Vajpayee in Agra in 2001.",
            authorName:"Rezaul H Laskar",
            authorEmail:"letters@hindustantimes.com",
            location:"Chennai",
            news:"Former Pakistani military strongman Pervez Musharraf, who probably came closest to resolving the Kashmir issue with India but was also the main driver behind cross-border intrusions that triggered the Kargil conflict, died following a prolonged illness on Sunday. He was 79."
        }
    ]
};

const createNewspaper = (paperDetails)=>{
    createPage(paperDetails)
}

const createPage = (paperDetails)=>{
    let page ="";
    currentPage===1?
    page = `<div class="page${currentPage}">`:
    page = `<div class="page${currentPage} hidden">`;
    page += currentPage===1?
    addFirstHeader(paperDetails.header):
    addHeader(paperDetails.header);
    page += currentPage===1?
    addFirstFooter():
    addFooter();
    page += "</div>";
    console.log(page);
    newsPaper.innerHTML+=page;
    let main = document.querySelector(`.page${currentPage} .main-content`);
    addNews(paperDetails.news,main);
}

const addFirstHeader = (details)=>{
    return `<header class="main-header">
        <div class="main-header-info">
            <div class="location">
                ${details.city}, ${details.state}
            </div>
            <div class="date">
                ${details.day}, &nbsp;<b>${details.month} ${details.date}</b>, ${details.year}
            </div>
        </div>
        <div class="main-header-title-box">
            <div class="main-header-title-content">
                <div class="main-header-title">
                    MORNING TIMES
                </div>
                <div class="main-header-phase">
                    New Day, New Times
                </div>
            </div>
        </div>
        <hr class="header-bottom-line">
        <hr class="header-bottom-line">
        <hr class="header-bottom-line">
    </header>
    <main class="main-content">`
}

const addHeader = (details) => {
    return `
    <header class="main-header">
        <div class="main-header-info">
            <div class="location">
                ${details.city}, ${details.state}
            </div>
            <div class="page">
                Page ${currentPage}
            </div>
            <div class="date">
                ${details.day}, &nbsp;<b>${details.month} ${details.date}</b>, ${details.year}
            </div>
        </div>
    </header>
    <main class="main-content">
    `
}

const addFirstFooter = ()=>{
    return `
    </main>
    <footer class="footer-first">
        <a href="#" class="next-link">Next Page</a>
    </footer>
    `
}

const addFooter = ()=>{
    return `
    </main>
    <footer class="footer">
        <a href="#" class="previous-link">Previous Page</a>
        <a href="#" class="next-link">Next Page</a>
    </footer>
    `
}

const addNews = (details, main)=>{
    while(main.offsetHeight<800&&newsIndex<details.length){
        let currentNews = details[newsIndex];
        addArticleToPage(
            currentNews.heading,
            currentNews.subHeading,
            currentNews.imgSrc,
            currentNews.imgCaption,
            currentNews.authorName,
            currentNews.authorEmail,
            currentNews.location,
            currentNews.news,
            main
        );
        newsIndex++;
    }
    if(newsIndex<details.length){
        main.removeChild(main.lastElementChild);
        newsIndex--;
        currentPage++;
        createPage(newsCollection);
    }
}

const addArticleToPage = (
    heading,
    subHeading,
    imgSrc,
    imgCaption,
    authorName,
    authorEmail,
    location,
    news,
    main
)=>{
    let article=`<div class="article">
        <div class="news-header1">${heading}</div>
        ${subHeading!==""?
        `<div class="sub-header">
            ${subHeading}
        </div>` : ``}
        ${imgSrc!==""?`<figure>
            <img class="article1-img" src=${imgSrc} alt="${imgCaption}">
            <figcaption>${imgCaption}</figcaption>
        </figure>`:""}
        <div class="news-content-1">
            <div class="news-content-col-1">
                <div class="news-author">
                    <hr class="header-bottom-line">
                    <p class="author-name">${authorName}</p>
                    <hr class="header-bottom-line">
                    <p class="author-email">${authorEmail}</p>
                </div>
                <div class="news-text-1">
                    <p class="first-para"><b>${location} :</b> ${news}</p>
                </div>
            </div>
        </div>
    </div>
    `
    main.innerHTML+=article;
}


createNewspaper(newsCollection);

let nextPage = document.querySelector(".next-link")
let previousPage = document.querySelector(".previous-link")

nextPage.addEventListener("click", () =>{
    document.querySelector(`.page${activePage}`).classList.add("hidden");
    activePage++;
    document.querySelector(`.page${activePage}`).classList.remove("hidden");
})

previousPage.addEventListener("click", () =>{
    document.querySelector(`.page${activePage}`).classList.add("hidden");
    activePage--;
    document.querySelector(`.page${activePage}`).classList.remove("hidden");
})